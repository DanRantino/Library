import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import BooksTable from '~/components/books/BooksTable';
import { booksQueryOpts, getBooksFn } from '~/server/books.query';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { useState } from 'react';
import { Book } from '@prisma/client';

export const Route = createFileRoute('/_authed/books')({
  component: RouteComponent,
  loader: async () => {
    const { books } = await getBooksFn();
    return { books };
  },
});

function RouteComponent() {
  const [bookCode, setBookCode] = useState<string | null>(null);
  const [type, setType] = useState<'Details' | 'Delete'>('Details');
  const [book, setBook] = useState<Book | null>(null);
  const { data } = useSuspenseQuery(booksQueryOpts());

  return (
    <div className="w-11/12 h-11/12 px-4 overflow-auto flex flex-col gap-4 align-center">
      <BooksTable
        data={data.books}
        openModal={(type: 'Details' | 'Delete', bookId: string, book: Book) => {
          setBookCode(bookId);
          setType(type);
          setBook(book);
        }}
      />
      <Dialog open={!!bookCode} onOpenChange={() => setBookCode(null)}>
        <DialogTrigger className="hidden" />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{book?.title}</DialogTitle>
            <DialogDescription>
              {type === 'Details' ? (
                <p>Details for book: {book?.title}</p>
              ) : (
                <p>Are you sure you want to delete this book?</p>
              )}
            </DialogDescription>
          </DialogHeader>
          {/* Here you can add more details about the book */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
