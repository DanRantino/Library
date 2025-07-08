import { Book, Loan, Student, Teacher } from '@prisma/client';

export interface BookLoans extends Book {
  loans: LoanStudent[];
}

export interface LoanStudent extends Loan {
  student: Partial<Student>;
  teacher: Partial<Teacher>;
}
