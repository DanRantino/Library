import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import AddBooks from '~/components/AddBooks';
import BooksTable from '~/components/BooksTable';
import { booksQueryOpts, getBooksFn } from '~/server/books.query';

export const Route = createFileRoute('/_authed/books')({
  component: RouteComponent,
  loader: async () => {
    const { books } = await getBooksFn();
    return { books };
  },
});

function RouteComponent() {
  const { data } = useSuspenseQuery(booksQueryOpts());
  const { bookId } = Route.useSearch() as {
    bookId: string | undefined;
  };

  return (
    <div className="size-full pt-16 flex flex-col gap-4 items-center">
      <AddBooks bookId={bookId} />
      <br />
      <BooksTable data={data.books} />
    </div>
  );
}
