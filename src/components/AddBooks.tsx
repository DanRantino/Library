import React, { FormEvent, useEffect } from "react";
import { useAppForm } from "~/components/ui/form/form";
import { z } from "zod";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    getBookByIdFn,
    useAddBook,
    useGetBookById,
} from "~/server/books.query";
import { useQuery } from "@tanstack/react-query";

const FormSchema = z.object({
    title: z.string().nonempty("Name is required"),
    onLoan: z.boolean(),
    code: z.string().nonempty("Code is required"),
    userId: z.string().optional(),
});

const AddBooks = ({ bookId }: { bookId: string | undefined }) => {
    const { mutateAsync } = useAddBook();
    const id = bookId || "";
    const { data, refetch, isFetching, isLoading } = useQuery({
        queryKey: ["books", bookId],
        queryFn: () => getBookByIdFn({ data: id }),
        enabled: !!bookId,
    });

    useEffect(() => {
        refetch();
    }, [bookId, refetch]);

    const form = useAppForm({
        defaultValues: {
            title: data?.title || "",
            onLoan: data?.onLoan || false,
            code: data?.code || "",
        },
        validators: {
            onChange: FormSchema,
            onSubmit: FormSchema,
        },
        onSubmit: async (formData) => {
            try {
                await mutateAsync({
                    data: {
                        id: id,
                        code: formData.value.code,
                        title: formData.value.title,
                        onLoan: formData.value.onLoan,
                    },
                });
                // Após sucesso, resetar o formulário manualmente
                formData.formApi.reset();
            } catch (error) {
                console.error("Erro ao adicionar livro:", error);
            }
        },
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        await form.handleSubmit();
    };

    return (
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle>Add a book</CardTitle>
                {/* <CardDescription> Create your account </CardDescription> */}
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <form.AppForm>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex gap-4 h-26">
                            <form.AppField name={"code"}>
                                {(field) => (
                                    <field.TextField
                                        type={"text"}
                                        label={"Book code"}
                                    />
                                )}
                            </form.AppField>
                            <form.AppField name={"title"}>
                                {(field) => (
                                    <field.TextField
                                        type={"text"}
                                        label={"Book name"}
                                    />
                                )}
                            </form.AppField>
                        </div>
                        <form.AppField name={"onLoan"}>
                            {(field) => (
                                <field.CheckboxField label={"On loan"} />
                            )}
                        </form.AppField>
                    </CardContent>
                    <CardAction className="flex items-center justify-end w-full p-6">
                        <form.SubscribeButton label={"Save"} />
                    </CardAction>
                </form.AppForm>
            </form>
        </Card>
    );
};

export default AddBooks;
