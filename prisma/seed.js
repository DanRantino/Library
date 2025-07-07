import { PrismaClient } from '@prisma/client';
import { addDays } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  // Cria usuários
  const userStudent = await prisma.user.create({
    data: {
      id: 'user-student-id',
      name: 'Alice Estudante',
      email: 'alice@student.com',
      emailVerified: true,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'USER',
      accounts: {
        create: {
          id: 'account-1',
          accountId: 'alice-oauth',
          providerId: 'google',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
    },
  });

  const student = await prisma.student.create({
    data: {
      name: 'Alice Estudante',
      class: '1A',
      enrollment: 'STU12345',
      userId: userStudent.id,
    },
  });

  const userTeacher = await prisma.user.create({
    data: {
      id: 'user-teacher-id',
      name: 'Carlos Professor',
      email: 'carlos@teacher.com',
      emailVerified: true,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'USER',
    },
  });

  const teacher = await prisma.teacher.create({
    data: {
      name: 'Carlos Professor',
      userId: userTeacher.id,
    },
  });

  // Livros
  const book1 = await prisma.book.create({
    data: {
      title: 'O Senhor dos Anéis',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasia',
      code: 'BOOK001',
      quantity: 5,
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: '1984',
      author: 'George Orwell',
      genre: 'Distopia',
      code: 'BOOK002',
      quantity: 3,
    },
  });

  // Empréstimos
  await prisma.loan.create({
    data: {
      studentId: student.id,
      bookId: book1.id,
      dueDate: addDays(new Date(), 7),
      status: 'EM_ANDAMENTO',
    },
  });

  await prisma.loan.create({
    data: {
      teacherId: teacher.id,
      bookId: book2.id,
      dueDate: addDays(new Date(), 10),
      status: 'EM_ANDAMENTO',
    },
  });
}

main()
  .then(() => {
    console.log('Seed criado com sucesso!');
  })
  .catch(e => {
    console.error('Erro ao fazer seed:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
