import { Book } from '@prisma/client';
import { DataTable } from '~/components/ui/data-table/data-table';
import { columns } from './columns';
import { BookOpen, Plus } from 'lucide-react';
import { Button } from '../ui/button';

interface BooksTableProps {
  data: Book[];
  onAddNew?: () => void;
  onImport?: () => void;
  openModal: (type: 'Details' | 'Delete', bookId: string, book: Book) => void;
}

export function BooksTable({
  data,
  onAddNew,
  onImport,
  openModal,
}: BooksTableProps) {
  const renderTopActions = () => (
    <>
      {onImport && (
        <Button variant="outline" onClick={onImport}>
          <BookOpen className="mr-2 h-4 w-4" />
          Import Books
        </Button>
      )}
      {onAddNew && (
        <Button onClick={onAddNew}>
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      )}
    </>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Books</h2>
          <p className="text-muted-foreground">
            Manage your library&apos;s book collection
          </p>
        </div>
      </div>

      <DataTable
        columns={columns(openModal)}
        data={data}
        searchPlaceholder="Search books by title, author, or genre..."
        renderTopActions={renderTopActions}
      />
    </div>
  );
}

export default BooksTable;
