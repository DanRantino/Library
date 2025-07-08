import { Book } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Eye, Trash2Icon } from 'lucide-react';

type OpenModalFn = (
  type: 'Details' | 'Delete',
  bookId: string,
  book: Book
) => void;

export const columns = (openModal: OpenModalFn): ColumnDef<Book>[] => [
  {
    accessorKey: 'code',
    header: 'ID',
    enableColumnFilter: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    enableColumnFilter: false,
  },
  {
    accessorKey: 'author',
    header: 'Author',
    enableColumnFilter: false,
  },
  {
    accessorKey: 'genre',
    header: 'Genre',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    enableColumnFilter: false,
  },
  {
    accessorKey: 'Action',
    header: 'Action',
    enableColumnFilter: false,
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          size={'icon'}
          onClick={() => openModal('Details', row.original.id, row.original)}
        >
          <Tooltip>
            <TooltipTrigger className="cursor-pointer">
              <Eye className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>View Details</TooltipContent>
          </Tooltip>
        </Button>
        <Button
          size={'icon'}
          onClick={() => openModal('Delete', row.original.id, row.original)}
        >
          <Tooltip>
            <TooltipTrigger className="cursor-pointer">
              <Trash2Icon className="h-4 w-4 text-red-500" />
            </TooltipTrigger>
            <TooltipContent>Delete Book</TooltipContent>
          </Tooltip>
        </Button>
      </div>
    ),
  },
];
