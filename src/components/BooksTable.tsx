import { Books } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./ui/data-table/data-table";
import { Checkbox } from "./ui/checkbox";
import { DataTableColumnHeader } from "./ui/data-table/header";
import React from "react";
import { Button } from "./ui/button";
import { Delete, Edit2, Trash2 } from "lucide-react";
import { deleteBookFn, useDeleteBook } from "~/server/books.query";
import { redirect, useNavigate } from "@tanstack/react-router";

type Props = {
    data: Books[];
};

const columns: ColumnDef<Books>[] = [
    {
        accessorKey: "onLoan",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="On Loan" />
        ),
        cell: ({ getValue }) => {
            const initalValue = getValue() as boolean;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [checked, setChecked] = React.useState(initalValue);

            return (
                <Checkbox
                    onClick={() => setChecked(!checked)}
                    checked={checked}
                />
            );
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
    },
    {
        accessorKey: "Action",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Action" />
        ),
        cell: ({ row }) => {
            const bookId = row.original.id;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { mutate } = useDeleteBook();
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const navigate = useNavigate();
            return (
                <div className="flex gap-2 justify-center items-center">
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={() =>
                            navigate({ to: `/books?bookId=${bookId}` })
                        }
                    >
                        <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={() =>
                            mutate({
                                data: bookId,
                            })
                        }
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
        enableSorting: false,
    },
];

const BooksTable = (props: Props) => {
    return <DataTable data={props.data} columns={columns} />;
};

export default BooksTable;
