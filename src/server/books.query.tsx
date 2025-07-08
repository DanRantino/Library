import { createServerFn } from '@tanstack/react-start';
import { prisma } from '~/utils/prisma';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { queryKeys } from '~/server/keys';
import { client } from '~/routes/__root';
import { z } from 'zod';

export const getBooksFn = createServerFn({}).handler(async () => {
  const books = await prisma.book.findMany({
    include: {
      loans: {
        select: {
          id: true,
          dueDate: true,
          returnDate: true,
          status: true,
          student: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

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
  method: 'POST',
})
  .validator((book: unknown) => {
    return Book.parse(book);
  })
  .handler(async ({ data }) => {
    if (data.id) {
      return prisma.book.update({
        where: {
          id: data.id,
        },
        data: {
          code: data.code,
          title: data.title,
          //   onLoan: data.onLoan,
        },
      });
    }
    const newBook = await prisma.book.create({
      data: {
        code: data.code,
        title: data.title,

        // onLoan: data.onLoan,
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
  method: 'POST',
})
  .validator((id: unknown) => {
    return z.string().parse(id);
  })
  .handler(async ({ data }) => {
    const deletedBook = await prisma.book.delete({
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
  method: 'POST',
})
  .validator((book: unknown) => {
    return Book.parse(book);
  })
  .handler(async ({ data }) => {
    const updatedBook = await prisma.book.update({
      where: {
        id: data.id,
      },
      data: {
        code: data.code,
        title: data.title,
        // onLoan: data.onLoan,
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
  method: 'GET',
})
  .validator((id: unknown) => {
    return z.string().parse(id);
  })
  .handler(async ({ data }) => {
    if (data === '') {
      return null;
    }
    const book = await prisma.book.findUnique({
      where: {
        id: data,
      },
    });
    return book;
  });
export const useGetBookById = (id: string | undefined) => {
  return useQuery({
    queryKey: queryKeys.books.byId(id || ''),
    queryFn: getBookByIdFn,
    enabled: !!id,
  });
};
