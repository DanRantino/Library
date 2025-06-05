import { createServerFn } from "@tanstack/react-start";
import { prisma } from "~/utils/prisma";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { queryKeys } from "~/server/keys";
import { client } from "~/routes/__root";
import { z } from "zod";

export const getBooksFn = createServerFn({
    method: "GET",
}).handler(async () => {
    const books = await prisma.books.findMany();

    return {
        books,
    };
});
export const booksQueryOpts = () => ({
    queryKey: queryKeys.books.all,
    queryFn: getBooksFn,
});
export const useBooks = () => {
    return useSuspenseQuery(booksQueryOpts());
};

const Book = z.object({
    id: z.string().optional(),
    code: z.string(),
    title: z.string(),
    onLoan: z.boolean(),
});

export const addBookFn = createServerFn({
    method: "POST",
})
    .validator((book: unknown) => {
        return Book.parse(book);
    })
    .handler(async ({ data }) => {
        if (data.id) {
            return prisma.books.update({
                where: {
                    id: data.id,
                },
                data: {
                    code: data.code,
                    title: data.title,
                    onLoan: data.onLoan,
                },
            });
        }
        const newBook = await prisma.books.create({
            data: {
                code: data.code,
                title: data.title,
                onLoan: data.onLoan,
            },
        });
        return newBook;
    });

export const useAddBook = () => {
    return useMutation({
        mutationFn: addBookFn,
        onSuccess: () => {
            client.invalidateQueries({ queryKey: queryKeys.books.all });
        },
    });
};

export const deleteBookFn = createServerFn({
    method: "POST",
})
    .validator((id: unknown) => {
        return z.string().parse(id);
    })
    .handler(async ({ data }) => {
        const deletedBook = await prisma.books.delete({
            where: {
                id: data,
            },
        });
        client.invalidateQueries({ queryKey: queryKeys.books.all });
        return deletedBook;
    });

export const useDeleteBook = () => {
    return useMutation({
        mutationFn: deleteBookFn,
        onSuccess: () => {
            client.invalidateQueries({ queryKey: queryKeys.books.all });
        },
    });
};

export const updateBookFn = createServerFn({
    method: "POST",
})
    .validator((book: unknown) => {
        return Book.parse(book);
    })
    .handler(async ({ data }) => {
        const updatedBook = await prisma.books.update({
            where: {
                id: data.id,
            },
            data: {
                code: data.code,
                title: data.title,
                onLoan: data.onLoan,
            },
        });
        return updatedBook;
    });

export const useUpdateBook = () => {
    return useMutation({
        mutationFn: updateBookFn,
        onSuccess: () => {
            client.invalidateQueries({ queryKey: queryKeys.books.all });
        },
    });
};

export const getBookByIdFn = createServerFn({
    method: "GET",
})
    .validator((id: unknown) => {
        return z.string().parse(id);
    })
    .handler(async ({ data }) => {
        if (data === "") {
            return null;
        }
        const book = await prisma.books.findUnique({
            where: {
                id: data,
            },
        });
        return book;
    });
export const useGetBookById = (id: string | undefined) => {
    return useQuery({
        queryKey: queryKeys.books.byId(id || ""),
        queryFn: getBookByIdFn,
        enabled: !!id,
    });
};
