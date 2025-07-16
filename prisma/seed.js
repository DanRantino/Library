import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Categorias
  const cat_tempore = await prisma.category.create({ data: { name: 'Tempore' } });
  const cat_culpa = await prisma.category.create({ data: { name: 'Culpa' } });
  const cat_alias = await prisma.category.create({ data: { name: 'Alias' } });
  const cat_harum = await prisma.category.create({ data: { name: 'Harum' } });
  const cat_exercitationem = await prisma.category.create({ data: { name: 'Exercitationem' } });
  const cat_et = await prisma.category.create({ data: { name: 'Et' } });
  const cat_deserunt = await prisma.category.create({ data: { name: 'Deserunt' } });
  const cat_corporis = await prisma.category.create({ data: { name: 'Corporis' } });
  const cat_veritatis = await prisma.category.create({ data: { name: 'Veritatis' } });
  const cat_quisquam = await prisma.category.create({ data: { name: 'Quisquam' } });

  // Tags
  const tag_commodi = await prisma.tag.create({ data: { name: 'Commodi' } });
  const tag_rerum = await prisma.tag.create({ data: { name: 'Rerum' } });
  const tag_nisi = await prisma.tag.create({ data: { name: 'Nisi' } });
  const tag_aliquid = await prisma.tag.create({ data: { name: 'Aliquid' } });
  const tag_aliquam = await prisma.tag.create({ data: { name: 'Aliquam' } });
  const tag_consectetur = await prisma.tag.create({ data: { name: 'Consectetur' } });
  const tag_esse = await prisma.tag.create({ data: { name: 'Esse' } });
  const tag_eveniet = await prisma.tag.create({ data: { name: 'Eveniet' } });
  const tag_quae = await prisma.tag.create({ data: { name: 'Quae' } });
  const tag_sed = await prisma.tag.create({ data: { name: 'Sed' } });

  // Usuários
  await prisma.user.createMany({ data: [
    {
      id: 'user-000',
      name: `Murilo Lima`,
      email: 'guilherme65@gmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-001',
      name: `Sr. Gustavo Henrique Sales`,
      email: 'davi-lucca16@gmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-002',
      name: `Luiz Gustavo Moura`,
      email: 'melissavieira@bol.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-003',
      name: `Sra. Heloísa Moraes`,
      email: 'heloisa20@yahoo.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-004',
      name: `Srta. Nicole Monteiro`,
      email: 'vitoriasouza@ig.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-005',
      name: `Vitor Hugo Dias`,
      email: 'nunesmarcos-vinicius@aragao.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-006',
      name: `Luna Ramos`,
      email: 'luna43@hotmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-007',
      name: `Srta. Maria Sophia Lima`,
      email: 'bsouza@uol.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-008',
      name: `Dra. Sabrina Gomes`,
      email: 'brenda72@novaes.org',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-009',
      name: `Luana da Costa`,
      email: 'emanuel90@porto.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-010',
      name: `Arthur Pires`,
      email: 'joao-felipe98@hotmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-011',
      name: `Maria Fernanda Farias`,
      email: 'iferreira@costela.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-012',
      name: `Isabella Santos`,
      email: 'xbarros@hotmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-013',
      name: `Luiz Henrique Cardoso`,
      email: 'luna57@moreira.org',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-014',
      name: `Francisco Monteiro`,
      email: 'enzo23@yahoo.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-015',
      name: `Francisco Freitas`,
      email: 'garaujo@peixoto.net',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-016',
      name: `Thomas Duarte`,
      email: 'lucca57@bol.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-017',
      name: `Dra. Emanuelly Martins`,
      email: 'sda-rocha@da.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-018',
      name: `Pedro Miguel Castro`,
      email: 'yurilima@castro.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-019',
      name: `Francisco Sales`,
      email: 'dramos@caldeira.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-020',
      name: `Leonardo Araújo`,
      email: 'nunesfrancisco@uol.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-021',
      name: `Clara da Mata`,
      email: 'qda-luz@ig.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-022',
      name: `Sophie da Paz`,
      email: 'cmelo@almeida.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-023',
      name: `Vicente Rodrigues`,
      email: 'nsilva@pires.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-024',
      name: `Helena da Cruz`,
      email: 'yda-mota@silveira.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-025',
      name: `Gabriel Cavalcanti`,
      email: 'ana-sophia92@nunes.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-026',
      name: `Kaique Moraes`,
      email: 'kamilly95@rocha.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-027',
      name: `João Guilherme Melo`,
      email: 'juancardoso@dias.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-028',
      name: `Clara Jesus`,
      email: 'vitor19@uol.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-029',
      name: `Srta. Letícia Nascimento`,
      email: 'da-conceicaoenzo-gabriel@gmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-030',
      name: `Yuri Barbosa`,
      email: 'bsouza@moraes.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-031',
      name: `Vitor Almeida`,
      email: 'costelapietro@hotmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-032',
      name: `Milena Barros`,
      email: 'diogoalmeida@yahoo.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-033',
      name: `Luiz Felipe Nogueira`,
      email: 'nataliarezende@sales.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-034',
      name: `Davi Novaes`,
      email: 'joao-pedro11@ig.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-035',
      name: `Sr. Raul Ferreira`,
      email: 'qcunha@pires.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-036',
      name: `Caroline Castro`,
      email: 'luiz-fernando94@gmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-037',
      name: `Rafaela Nascimento`,
      email: 'maria-fernanda96@hotmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-038',
      name: `Emanuella da Paz`,
      email: 'da-conceicaosofia@uol.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-039',
      name: `Natália Cardoso`,
      email: 'qdias@ig.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-040',
      name: `Marcela Melo`,
      email: 'ucaldeira@viana.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-041',
      name: `Pedro Costa`,
      email: 'daviteixeira@porto.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-042',
      name: `Lucca Moraes`,
      email: 'matheus56@cardoso.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-043',
      name: `Sabrina Ramos`,
      email: 'carvalhomilena@yahoo.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-044',
      name: `Theo Fogaça`,
      email: 'alexandre10@novaes.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-045',
      name: `Olivia Jesus`,
      email: 'ana-beatriz65@ig.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-046',
      name: `Caroline Cunha`,
      email: 'fjesus@gmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-047',
      name: `Sr. Leandro Silveira`,
      email: 'da-costalucca@hotmail.com',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-048',
      name: `Paulo Jesus`,
      email: 'ericklima@ig.com.br',
      emailVerified: true,
      role: 'USER'
    },
    {
      id: 'user-049',
      name: `Maysa Aragão`,
      email: 'nascimentoraul@hotmail.com',
      emailVerified: true,
      role: 'USER'
    }
  ] });

  // Livros
  await prisma.book.create({
    data: {
      title: `Ratione.`,
      subtitle: null,
      author: `Theo Viana`,
      publisher: `das Neves`,
      publicationYear: 1953,
      genre: 'Occaecati',
      code: 'BOOK0000',
      isbn: '978-0-265-42351-6',
      language: 'Português',
      edition: '3ª',
      pages: 350,
      synopsis: `Atque sed nobis rem quas modi. Aspernatur eos occaecati suscipit facere deleniti.`,
      coverUrl: 'https://dummyimage.com/142x93',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptates sequi.`,
      subtitle: `Fugit iste rerum.`,
      author: `João Lucas Moraes`,
      publisher: `Fogaça Cardoso - EI`,
      publicationYear: 1961,
      genre: 'Tempora',
      code: 'BOOK0001',
      isbn: '978-0-276-48350-9',
      language: 'Português',
      edition: '2ª',
      pages: 338,
      synopsis: `Rem illo architecto. Soluta et omnis id totam itaque eaque.`,
      coverUrl: 'https://placeimg.com/505/538/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Id dolor voluptatum magni.`,
      subtitle: `Quidem similique corrupti.`,
      author: `Rodrigo Pereira`,
      publisher: `Nogueira - ME`,
      publicationYear: 2007,
      genre: 'Saepe',
      code: 'BOOK0002',
      isbn: '978-1-80184-514-4',
      language: 'Português',
      edition: '5ª',
      pages: 384,
      synopsis: `Iste veritatis soluta ea. Quis magni autem numquam sapiente magni dicta. Quis molestiae quod minus a eum.`,
      coverUrl: 'https://placekitten.com/39/229',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores dolores.`,
      subtitle: `Veniam assumenda laborum architecto quis quisquam.`,
      author: `Rafael Ribeiro`,
      publisher: `Ferreira Souza - EI`,
      publicationYear: 1993,
      genre: 'Nisi',
      code: 'BOOK0003',
      isbn: '978-0-465-78713-5',
      language: 'Português',
      edition: '1ª',
      pages: 194,
      synopsis: `Excepturi nihil dolorem dolore. Provident animi architecto adipisci.`,
      coverUrl: 'https://dummyimage.com/676x145',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Pariatur distinctio.`,
      subtitle: null,
      author: `Thiago Ribeiro`,
      publisher: `Ribeiro Oliveira S.A.`,
      publicationYear: 2008,
      genre: 'Consequatur',
      code: 'BOOK0004',
      isbn: '978-1-56670-106-8',
      language: 'Português',
      edition: '5ª',
      pages: 227,
      synopsis: `Dolorum deleniti ipsum in. Iure soluta asperiores repellat sequi. Amet voluptatum saepe voluptas.`,
      coverUrl: 'https://placeimg.com/484/340/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam sint temporibus.`,
      subtitle: null,
      author: `João Miguel Almeida`,
      publisher: `Ferreira`,
      publicationYear: 1958,
      genre: 'Odit',
      code: 'BOOK0005',
      isbn: '978-1-872343-09-9',
      language: 'Português',
      edition: '1ª',
      pages: 777,
      synopsis: `Quibusdam animi nesciunt magnam. Culpa vero aspernatur delectus nisi perferendis doloremque. Velit necessitatibus neque aliquam.`,
      coverUrl: 'https://placekitten.com/167/858',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dignissimos quaerat.`,
      subtitle: `Eaque consectetur officia itaque.`,
      author: `André Ramos`,
      publisher: `Cardoso - EI`,
      publicationYear: 1996,
      genre: 'Error',
      code: 'BOOK0006',
      isbn: '978-0-513-54278-5',
      language: 'Português',
      edition: '2ª',
      pages: 479,
      synopsis: `Voluptates rem minus pariatur mollitia ut aut soluta. Blanditiis autem mollitia earum non.`,
      coverUrl: 'https://placekitten.com/702/416',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum temporibus sapiente.`,
      subtitle: `Odio repudiandae aliquid.`,
      author: `Sr. Pedro Miguel Ferreira`,
      publisher: `Pires Vieira e Filhos`,
      publicationYear: 1998,
      genre: 'Nobis',
      code: 'BOOK0007',
      isbn: '978-0-12-805982-1',
      language: 'Português',
      edition: '3ª',
      pages: 755,
      synopsis: `Aliquam facilis ut voluptas. Tempore distinctio dolorum. Explicabo nam soluta voluptate.`,
      coverUrl: 'https://dummyimage.com/316x484',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sunt ad.`,
      subtitle: null,
      author: `Sra. Valentina Oliveira`,
      publisher: `Fogaça da Cruz e Filhos`,
      publicationYear: 1990,
      genre: 'Corrupti',
      code: 'BOOK0008',
      isbn: '978-0-7337-5433-3',
      language: 'Português',
      edition: '4ª',
      pages: 374,
      synopsis: `Id eius architecto quo expedita.`,
      coverUrl: 'https://www.lorempixel.com/818/678',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Soluta ea.`,
      subtitle: `Vitae eaque autem ipsa quas et.`,
      author: `Maitê Correia`,
      publisher: `da Mota`,
      publicationYear: 2008,
      genre: 'Facere',
      code: 'BOOK0009',
      isbn: '978-1-08-835615-9',
      language: 'Português',
      edition: '2ª',
      pages: 371,
      synopsis: `Optio commodi tempore magni pariatur eveniet. Mollitia deleniti pariatur fugit quibusdam. Nulla error molestias a. Distinctio ratione non eum ipsam.`,
      coverUrl: 'https://dummyimage.com/437x969',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eligendi optio.`,
      subtitle: `Excepturi repellendus quibusdam perferendis dolore dicta.`,
      author: `Augusto Farias`,
      publisher: `Cardoso`,
      publicationYear: 1967,
      genre: 'Odit',
      code: 'BOOK0010',
      isbn: '978-0-676-32016-9',
      language: 'Português',
      edition: '5ª',
      pages: 605,
      synopsis: `Rem possimus iure nam. Itaque reiciendis pariatur voluptates.`,
      coverUrl: 'https://placeimg.com/649/906/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsum culpa similique.`,
      subtitle: null,
      author: `Emanuella Farias`,
      publisher: `Silveira`,
      publicationYear: 2004,
      genre: 'Placeat',
      code: 'BOOK0011',
      isbn: '978-1-71434-558-8',
      language: 'Português',
      edition: '5ª',
      pages: 165,
      synopsis: `Corrupti fugit corrupti distinctio. Illum molestiae impedit dignissimos in temporibus.`,
      coverUrl: 'https://placeimg.com/40/779/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Libero.`,
      subtitle: null,
      author: `Vitor Gabriel Nogueira`,
      publisher: `Teixeira`,
      publicationYear: 1964,
      genre: 'Quisquam',
      code: 'BOOK0012',
      isbn: '978-1-346-70656-6',
      language: 'Português',
      edition: '5ª',
      pages: 373,
      synopsis: `Ullam voluptatem modi tenetur nihil optio assumenda. Consequatur iure amet fugiat distinctio eveniet.`,
      coverUrl: 'https://placeimg.com/776/569/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rerum iusto.`,
      subtitle: `Amet veritatis dolore architecto vero aliquam.`,
      author: `Felipe da Paz`,
      publisher: `da Costa S.A.`,
      publicationYear: 1983,
      genre: 'Debitis',
      code: 'BOOK0013',
      isbn: '978-0-937452-99-8',
      language: 'Português',
      edition: '5ª',
      pages: 282,
      synopsis: `Vitae autem ad est. Id quaerat asperiores porro occaecati aut.`,
      coverUrl: 'https://www.lorempixel.com/617/247',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus optio architecto.`,
      subtitle: `Accusamus in laudantium inventore facere.`,
      author: `Rafaela da Costa`,
      publisher: `da Luz`,
      publicationYear: 1970,
      genre: 'Quasi',
      code: 'BOOK0014',
      isbn: '978-1-76945-314-6',
      language: 'Português',
      edition: '5ª',
      pages: 643,
      synopsis: `Quibusdam necessitatibus pariatur excepturi laudantium. Delectus distinctio reiciendis excepturi sunt praesentium. Nam maxime deleniti dolores illo.`,
      coverUrl: 'https://placeimg.com/492/975/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae at dolore.`,
      subtitle: null,
      author: `Srta. Gabriela Moura`,
      publisher: `Vieira`,
      publicationYear: 1989,
      genre: 'Quia',
      code: 'BOOK0015',
      isbn: '978-1-85574-443-1',
      language: 'Português',
      edition: '2ª',
      pages: 159,
      synopsis: `Et quia veritatis porro deleniti. Eius nihil quis nisi voluptatem rerum eos.`,
      coverUrl: 'https://placekitten.com/739/367',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum.`,
      subtitle: `Consectetur aliquid amet eos velit odit.`,
      author: `Ana Lívia Alves`,
      publisher: `Ribeiro`,
      publicationYear: 2010,
      genre: 'Perferendis',
      code: 'BOOK0016',
      isbn: '978-1-204-71167-1',
      language: 'Português',
      edition: '5ª',
      pages: 269,
      synopsis: `Occaecati amet corrupti natus esse voluptatibus blanditiis. Non ratione dolorem minima ipsum ipsam.`,
      coverUrl: 'https://www.lorempixel.com/878/625',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero aut quis numquam.`,
      subtitle: null,
      author: `Rafael Cardoso`,
      publisher: `Duarte da Luz - EI`,
      publicationYear: 1997,
      genre: 'Autem',
      code: 'BOOK0017',
      isbn: '978-0-679-74034-6',
      language: 'Português',
      edition: '4ª',
      pages: 629,
      synopsis: `Architecto doloremque eaque recusandae nihil rem dicta. Molestias officia tenetur repudiandae.`,
      coverUrl: 'https://dummyimage.com/146x122',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nisi repudiandae.`,
      subtitle: `Ipsa iusto esse illo.`,
      author: `Luiz Fernando Viana`,
      publisher: `Pires`,
      publicationYear: 2025,
      genre: 'Beatae',
      code: 'BOOK0018',
      isbn: '978-1-59401-399-7',
      language: 'Português',
      edition: '5ª',
      pages: 335,
      synopsis: `Nemo quis cupiditate maxime ipsam.`,
      coverUrl: 'https://placeimg.com/569/371/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas iusto illum.`,
      subtitle: `Pariatur similique ex possimus enim.`,
      author: `Sophie Vieira`,
      publisher: `Ramos S/A`,
      publicationYear: 1954,
      genre: 'Ipsam',
      code: 'BOOK0019',
      isbn: '978-1-168-08760-7',
      language: 'Português',
      edition: '3ª',
      pages: 172,
      synopsis: `Facere quidem numquam quis dignissimos molestias unde. Sunt laborum adipisci occaecati reiciendis quae.`,
      coverUrl: 'https://placeimg.com/636/28/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore sapiente.`,
      subtitle: null,
      author: `Lucas Gabriel Costa`,
      publisher: `Sales Gonçalves - EI`,
      publicationYear: 2023,
      genre: 'Voluptatibus',
      code: 'BOOK0020',
      isbn: '978-1-77378-263-8',
      language: 'Português',
      edition: '5ª',
      pages: 584,
      synopsis: `Quia consequatur architecto quo sequi excepturi ratione. Reprehenderit eligendi error nesciunt voluptatum. Sint ipsum laborum ex quis fugiat ut. Voluptatem dolores fugit sequi illum.`,
      coverUrl: 'https://placeimg.com/651/968/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptates recusandae officiis.`,
      subtitle: null,
      author: `Luiz Felipe Azevedo`,
      publisher: `Santos Melo S/A`,
      publicationYear: 1995,
      genre: 'Nulla',
      code: 'BOOK0021',
      isbn: '978-1-02-621745-0',
      language: 'Português',
      edition: '4ª',
      pages: 520,
      synopsis: `Officiis sequi sequi similique fugit et. Sit alias architecto occaecati ullam voluptatum quia. Voluptatem quis provident aut cumque error. Aliquid recusandae eos.`,
      coverUrl: 'https://dummyimage.com/767x882',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus natus.`,
      subtitle: null,
      author: `Davi Luiz da Luz`,
      publisher: `Nascimento - EI`,
      publicationYear: 1963,
      genre: 'Vero',
      code: 'BOOK0022',
      isbn: '978-1-923747-40-1',
      language: 'Português',
      edition: '2ª',
      pages: 296,
      synopsis: `Perspiciatis culpa ipsam exercitationem nesciunt. Porro itaque error voluptatum sequi autem. Nemo nemo voluptatibus eos voluptate omnis.`,
      coverUrl: 'https://www.lorempixel.com/562/16',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quia rerum temporibus quod.`,
      subtitle: `Non explicabo odio numquam.`,
      author: `Sophia Cunha`,
      publisher: `Barbosa Ltda.`,
      publicationYear: 1959,
      genre: 'Nulla',
      code: 'BOOK0023',
      isbn: '978-1-214-56232-4',
      language: 'Português',
      edition: '4ª',
      pages: 663,
      synopsis: `Minus totam rerum ducimus repudiandae laboriosam. Quia excepturi beatae vitae consequuntur. Similique quam voluptatem voluptas rem.`,
      coverUrl: 'https://placeimg.com/749/184/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga.`,
      subtitle: null,
      author: `Ana Vitória Ramos`,
      publisher: `Ferreira`,
      publicationYear: 1980,
      genre: 'Reprehenderit',
      code: 'BOOK0024',
      isbn: '978-1-137-09859-7',
      language: 'Português',
      edition: '2ª',
      pages: 516,
      synopsis: `Odio iure praesentium officiis. Consequuntur veniam esse laudantium.`,
      coverUrl: 'https://dummyimage.com/199x480',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste perferendis quia.`,
      subtitle: `In quia culpa impedit aut laudantium.`,
      author: `Emilly Azevedo`,
      publisher: `da Rosa`,
      publicationYear: 1999,
      genre: 'Numquam',
      code: 'BOOK0025',
      isbn: '978-0-515-85064-2',
      language: 'Português',
      edition: '3ª',
      pages: 565,
      synopsis: `Veniam repudiandae at distinctio. Voluptas amet ex voluptates ratione dignissimos rerum mollitia.`,
      coverUrl: 'https://placekitten.com/442/477',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ratione nisi.`,
      subtitle: `Similique corporis consectetur dolorum.`,
      author: `Carlos Eduardo Araújo`,
      publisher: `Alves Moraes S.A.`,
      publicationYear: 1957,
      genre: 'Repudiandae',
      code: 'BOOK0026',
      isbn: '978-0-240-26811-8',
      language: 'Português',
      edition: '5ª',
      pages: 655,
      synopsis: `Quod maiores autem magnam veniam aliquam quos. Error officia adipisci voluptatum sed incidunt autem. Asperiores aspernatur non aperiam eius odio.`,
      coverUrl: 'https://placekitten.com/665/780',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magni inventore recusandae.`,
      subtitle: `Sequi officiis quisquam.`,
      author: `Srta. Larissa Porto`,
      publisher: `Oliveira Mendes - ME`,
      publicationYear: 2015,
      genre: 'Natus',
      code: 'BOOK0027',
      isbn: '978-0-565-45271-1',
      language: 'Português',
      edition: '1ª',
      pages: 290,
      synopsis: `At atque qui repellat. Animi vero natus pariatur illum sit velit.`,
      coverUrl: 'https://placekitten.com/866/105',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Est aut magni culpa.`,
      subtitle: null,
      author: `Clarice Cavalcanti`,
      publisher: `Moura`,
      publicationYear: 1955,
      genre: 'Cum',
      code: 'BOOK0028',
      isbn: '978-0-689-98094-7',
      language: 'Português',
      edition: '5ª',
      pages: 183,
      synopsis: `Earum quis ullam expedita.`,
      coverUrl: 'https://placeimg.com/371/293/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequuntur odio.`,
      subtitle: `At minus fugiat.`,
      author: `Heloísa da Cruz`,
      publisher: `Lima`,
      publicationYear: 1988,
      genre: 'Itaque',
      code: 'BOOK0029',
      isbn: '978-0-229-01476-7',
      language: 'Português',
      edition: '4ª',
      pages: 423,
      synopsis: `Ipsam earum quidem beatae inventore eligendi perspiciatis laborum. Aliquid hic nobis ab error. Quisquam quisquam enim blanditiis libero.`,
      coverUrl: 'https://dummyimage.com/881x359',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus dolorem nam.`,
      subtitle: null,
      author: `Isabella Cardoso`,
      publisher: `Barbosa`,
      publicationYear: 2014,
      genre: 'Nostrum',
      code: 'BOOK0030',
      isbn: '978-1-159-69664-1',
      language: 'Português',
      edition: '3ª',
      pages: 235,
      synopsis: `Accusantium eveniet reiciendis nulla rerum ullam. Ipsa autem ipsa id.`,
      coverUrl: 'https://placekitten.com/161/810',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore quod asperiores.`,
      subtitle: `Minus deserunt quod.`,
      author: `Sr. Erick Cavalcanti`,
      publisher: `Fernandes da Paz S.A.`,
      publicationYear: 2019,
      genre: 'Sed',
      code: 'BOOK0031',
      isbn: '978-0-277-99799-9',
      language: 'Português',
      edition: '3ª',
      pages: 726,
      synopsis: `Et ipsam iusto occaecati recusandae nihil explicabo asperiores. Iste animi rerum asperiores sint sequi nostrum. Fugit neque veritatis qui aliquam tenetur nemo.`,
      coverUrl: 'https://placeimg.com/385/658/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corrupti aperiam aut.`,
      subtitle: `Voluptatem assumenda officia aliquam provident.`,
      author: `Marcela Silveira`,
      publisher: `Moreira Moura Ltda.`,
      publicationYear: 1963,
      genre: 'Molestias',
      code: 'BOOK0032',
      isbn: '978-1-905151-86-8',
      language: 'Português',
      edition: '5ª',
      pages: 259,
      synopsis: `Quam omnis temporibus sit ex. Optio totam est omnis optio consectetur quae assumenda.`,
      coverUrl: 'https://dummyimage.com/771x672',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Atque perferendis magni.`,
      subtitle: null,
      author: `João Guilherme Lima`,
      publisher: `da Rosa Mendes - ME`,
      publicationYear: 1982,
      genre: 'Earum',
      code: 'BOOK0033',
      isbn: '978-0-214-18880-0',
      language: 'Português',
      edition: '1ª',
      pages: 194,
      synopsis: `Consectetur fugiat cum rerum quo repellat cumque ipsa. Facilis quaerat voluptas nostrum quibusdam quos. Modi est repellat iusto rerum.`,
      coverUrl: 'https://placeimg.com/753/902/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quod magnam.`,
      subtitle: `Vitae repellendus reiciendis consequuntur dolorum.`,
      author: `Luana Moura`,
      publisher: `Silveira S/A`,
      publicationYear: 2006,
      genre: 'Id',
      code: 'BOOK0034',
      isbn: '978-0-478-26137-0',
      language: 'Português',
      edition: '5ª',
      pages: 537,
      synopsis: `Impedit id fugiat. Voluptatum fugiat adipisci ut saepe officiis. Consequuntur enim rerum possimus.`,
      coverUrl: 'https://placeimg.com/284/960/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `A aspernatur ducimus rerum.`,
      subtitle: null,
      author: `Sabrina Souza`,
      publisher: `Correia`,
      publicationYear: 1997,
      genre: 'Illo',
      code: 'BOOK0035',
      isbn: '978-1-103-69711-3',
      language: 'Português',
      edition: '5ª',
      pages: 665,
      synopsis: `Modi odio nemo quaerat eos a explicabo necessitatibus. Optio assumenda voluptate architecto. Molestias ratione magni accusantium sit aliquam harum.`,
      coverUrl: 'https://www.lorempixel.com/764/519',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ratione exercitationem quasi.`,
      subtitle: null,
      author: `Ana Lívia Melo`,
      publisher: `Barbosa Moraes - EI`,
      publicationYear: 1976,
      genre: 'Labore',
      code: 'BOOK0036',
      isbn: '978-1-72217-043-1',
      language: 'Português',
      edition: '2ª',
      pages: 782,
      synopsis: `Suscipit et est id repellendus.`,
      coverUrl: 'https://www.lorempixel.com/969/518',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim similique.`,
      subtitle: null,
      author: `Pietro Melo`,
      publisher: `Costa`,
      publicationYear: 1972,
      genre: 'Maxime',
      code: 'BOOK0037',
      isbn: '978-1-76527-758-6',
      language: 'Português',
      edition: '4ª',
      pages: 125,
      synopsis: `Quas aspernatur nobis reprehenderit. Eos aut eveniet eos ipsum quaerat cumque.`,
      coverUrl: 'https://placeimg.com/909/719/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Libero.`,
      subtitle: `Voluptatum earum voluptatem veniam asperiores odit.`,
      author: `Sr. Antônio da Conceição`,
      publisher: `Azevedo`,
      publicationYear: 1954,
      genre: 'Debitis',
      code: 'BOOK0038',
      isbn: '978-0-556-90927-9',
      language: 'Português',
      edition: '4ª',
      pages: 327,
      synopsis: `Ipsam asperiores consequuntur facilis et eius. Ad delectus maxime totam. Ea ea ipsum voluptatum.`,
      coverUrl: 'https://dummyimage.com/584x1005',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur asperiores.`,
      subtitle: `Tempore ipsum assumenda placeat.`,
      author: `Dr. Thales Campos`,
      publisher: `Jesus`,
      publicationYear: 1974,
      genre: 'Dolore',
      code: 'BOOK0039',
      isbn: '978-1-83132-370-4',
      language: 'Português',
      edition: '4ª',
      pages: 436,
      synopsis: `Nemo iusto voluptatem consectetur sunt aperiam id. Minima quisquam reprehenderit asperiores voluptas odit ipsum. Exercitationem soluta quos odit delectus vitae inventore.`,
      coverUrl: 'https://dummyimage.com/113x254',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cum eum.`,
      subtitle: null,
      author: `Srta. Isabel Silveira`,
      publisher: `Cardoso`,
      publicationYear: 2018,
      genre: 'Explicabo',
      code: 'BOOK0040',
      isbn: '978-1-249-81829-8',
      language: 'Português',
      edition: '3ª',
      pages: 128,
      synopsis: `Cupiditate numquam temporibus excepturi. Aliquam sint aspernatur veniam quo eaque distinctio. Impedit odit libero occaecati enim vero laboriosam. Error asperiores animi ipsam laborum dignissimos.`,
      coverUrl: 'https://placekitten.com/294/640',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptate consectetur fuga.`,
      subtitle: null,
      author: `Ana Lívia Lopes`,
      publisher: `Rezende Costa Ltda.`,
      publicationYear: 1994,
      genre: 'Odio',
      code: 'BOOK0041',
      isbn: '978-0-10-469632-3',
      language: 'Português',
      edition: '3ª',
      pages: 546,
      synopsis: `Quam deleniti cum voluptatum iure soluta libero. Veniam magnam vitae dolor. Aliquid eligendi nisi sapiente perferendis enim.`,
      coverUrl: 'https://placeimg.com/16/220/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sunt quas.`,
      subtitle: null,
      author: `Isabelly Barbosa`,
      publisher: `Barros`,
      publicationYear: 1950,
      genre: 'Reiciendis',
      code: 'BOOK0042',
      isbn: '978-1-84168-784-1',
      language: 'Português',
      edition: '5ª',
      pages: 651,
      synopsis: `Blanditiis voluptate hic recusandae excepturi vel quidem dicta. Illo aliquam aliquam quae rem maxime corrupti. Consequuntur ut et hic nulla sapiente nisi. Repudiandae minus provident error repellendus fuga perferendis.`,
      coverUrl: 'https://www.lorempixel.com/853/630',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore voluptas quos quod.`,
      subtitle: null,
      author: `Daniela Barros`,
      publisher: `da Cunha`,
      publicationYear: 1988,
      genre: 'Qui',
      code: 'BOOK0043',
      isbn: '978-0-309-13075-2',
      language: 'Português',
      edition: '5ª',
      pages: 416,
      synopsis: `Impedit dignissimos magnam nostrum. Sit quasi aperiam consequuntur dignissimos eveniet optio. Fugiat vero itaque modi molestias perspiciatis sint.`,
      coverUrl: 'https://dummyimage.com/541x991',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eius error.`,
      subtitle: null,
      author: `Vitor Gomes`,
      publisher: `Rodrigues Lopes - ME`,
      publicationYear: 1998,
      genre: 'Laudantium',
      code: 'BOOK0044',
      isbn: '978-1-198-66524-0',
      language: 'Português',
      edition: '2ª',
      pages: 730,
      synopsis: `Veritatis aspernatur unde omnis quibusdam.`,
      coverUrl: 'https://placekitten.com/438/413',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Possimus consequatur nulla.`,
      subtitle: `Dolores amet temporibus dolorem doloremque aut.`,
      author: `Dr. Caio Cunha`,
      publisher: `Vieira S.A.`,
      publicationYear: 2005,
      genre: 'Nemo',
      code: 'BOOK0045',
      isbn: '978-1-345-40193-6',
      language: 'Português',
      edition: '5ª',
      pages: 721,
      synopsis: `Totam cupiditate sunt. Ut alias saepe ratione. Vel vitae unde soluta.`,
      coverUrl: 'https://www.lorempixel.com/18/611',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eligendi voluptatibus molestiae.`,
      subtitle: null,
      author: `Beatriz Santos`,
      publisher: `Fogaça`,
      publicationYear: 1971,
      genre: 'Earum',
      code: 'BOOK0046',
      isbn: '978-1-274-20549-0',
      language: 'Português',
      edition: '1ª',
      pages: 390,
      synopsis: `Nostrum odit illo incidunt. Assumenda pariatur delectus consequuntur eum dolorum.`,
      coverUrl: 'https://dummyimage.com/534x785',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quidem veritatis error.`,
      subtitle: `Accusamus officiis possimus aperiam blanditiis esse.`,
      author: `Nina Santos`,
      publisher: `Costa`,
      publicationYear: 1955,
      genre: 'Tempore',
      code: 'BOOK0047',
      isbn: '978-1-933272-79-5',
      language: 'Português',
      edition: '2ª',
      pages: 586,
      synopsis: `Praesentium totam quidem reiciendis repudiandae quis. Sit aspernatur ipsum provident aspernatur natus aperiam molestias. Dicta modi cum sequi ipsam perspiciatis quaerat.`,
      coverUrl: 'https://placeimg.com/1001/186/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste maiores.`,
      subtitle: null,
      author: `Maria Fernanda Caldeira`,
      publisher: `Lima`,
      publicationYear: 1999,
      genre: 'Adipisci',
      code: 'BOOK0048',
      isbn: '978-1-03-910651-2',
      language: 'Português',
      edition: '4ª',
      pages: 509,
      synopsis: `Vel architecto ut adipisci. Debitis consequatur odit quas vitae fugiat. Ipsum totam fugiat aspernatur vitae soluta.`,
      coverUrl: 'https://www.lorempixel.com/272/712',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus hic.`,
      subtitle: `Quas dolore a.`,
      author: `Heitor Rezende`,
      publisher: `Teixeira`,
      publicationYear: 2016,
      genre: 'Modi',
      code: 'BOOK0049',
      isbn: '978-0-7524-3106-2',
      language: 'Português',
      edition: '4ª',
      pages: 151,
      synopsis: `Dolores architecto nisi. Nisi praesentium aliquid qui illo doloremque dolor. Consequuntur voluptatibus doloremque totam. Eum nisi perferendis eum error corporis optio.`,
      coverUrl: 'https://placekitten.com/452/846',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aperiam veniam.`,
      subtitle: null,
      author: `Srta. Marina Pereira`,
      publisher: `Barros`,
      publicationYear: 2021,
      genre: 'Laborum',
      code: 'BOOK0050',
      isbn: '978-1-66246-287-0',
      language: 'Português',
      edition: '5ª',
      pages: 424,
      synopsis: `Error provident rem totam natus. Nam consequatur doloribus dignissimos officia ullam.`,
      coverUrl: 'https://dummyimage.com/759x189',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat.`,
      subtitle: `Perferendis nobis sit deleniti quis.`,
      author: `Dra. Maria Eduarda da Rosa`,
      publisher: `da Rocha`,
      publicationYear: 1981,
      genre: 'Iusto',
      code: 'BOOK0051',
      isbn: '978-0-331-73936-7',
      language: 'Português',
      edition: '3ª',
      pages: 633,
      synopsis: `Eum eligendi iure officiis est facere sunt. Atque voluptatem iusto saepe totam fuga impedit.`,
      coverUrl: 'https://www.lorempixel.com/453/298',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia nesciunt.`,
      subtitle: `Eos deserunt dolorem necessitatibus doloribus.`,
      author: `Milena Mendes`,
      publisher: `Rodrigues`,
      publicationYear: 1992,
      genre: 'Temporibus',
      code: 'BOOK0052',
      isbn: '978-1-252-28728-9',
      language: 'Português',
      edition: '3ª',
      pages: 653,
      synopsis: `Alias sed veniam pariatur quisquam impedit sapiente. Architecto corrupti dolor iste aperiam.`,
      coverUrl: 'https://www.lorempixel.com/989/999',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quibusdam.`,
      subtitle: null,
      author: `Júlia Alves`,
      publisher: `Souza e Filhos`,
      publicationYear: 1977,
      genre: 'Harum',
      code: 'BOOK0053',
      isbn: '978-0-86211-823-5',
      language: 'Português',
      edition: '1ª',
      pages: 524,
      synopsis: `Minima repellendus eaque id fuga illo natus voluptatibus. Error repudiandae aspernatur voluptatibus officiis.`,
      coverUrl: 'https://placeimg.com/64/191/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat labore odio.`,
      subtitle: null,
      author: `Srta. Ana Júlia Sales`,
      publisher: `Melo`,
      publicationYear: 1999,
      genre: 'Recusandae',
      code: 'BOOK0054',
      isbn: '978-0-339-74014-3',
      language: 'Português',
      edition: '5ª',
      pages: 120,
      synopsis: `Omnis debitis sed accusamus dignissimos corporis reprehenderit. Ut error natus necessitatibus sed perspiciatis. Ex quidem consequuntur voluptates quam magnam voluptate.`,
      coverUrl: 'https://placeimg.com/109/200/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe excepturi.`,
      subtitle: null,
      author: `Maria Vitória Novaes`,
      publisher: `Araújo`,
      publicationYear: 2003,
      genre: 'Tempora',
      code: 'BOOK0055',
      isbn: '978-1-7358662-9-1',
      language: 'Português',
      edition: '5ª',
      pages: 659,
      synopsis: `Quo eos doloribus asperiores. Culpa quae odio qui et. At velit ipsam quis.`,
      coverUrl: 'https://www.lorempixel.com/209/271',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore nam.`,
      subtitle: `Illum ad explicabo at nisi eveniet.`,
      author: `Alana Gonçalves`,
      publisher: `Nogueira`,
      publicationYear: 1953,
      genre: 'Blanditiis',
      code: 'BOOK0056',
      isbn: '978-0-622-44472-7',
      language: 'Português',
      edition: '4ª',
      pages: 444,
      synopsis: `Ipsa in laborum asperiores. Velit quam libero nulla itaque.`,
      coverUrl: 'https://www.lorempixel.com/277/623',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ex nulla rem.`,
      subtitle: null,
      author: `Dr. Isaac Pinto`,
      publisher: `Jesus Martins - EI`,
      publicationYear: 2000,
      genre: 'Voluptate',
      code: 'BOOK0057',
      isbn: '978-1-5265-4793-4',
      language: 'Português',
      edition: '5ª',
      pages: 677,
      synopsis: `Eligendi ratione facilis ut dicta voluptatum. Placeat mollitia veritatis iure. Ipsa eos possimus reprehenderit recusandae.`,
      coverUrl: 'https://dummyimage.com/837x1022',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloribus omnis.`,
      subtitle: `Ratione asperiores voluptatibus laboriosam id.`,
      author: `Olivia Peixoto`,
      publisher: `Moreira e Filhos`,
      publicationYear: 1983,
      genre: 'Quidem',
      code: 'BOOK0058',
      isbn: '978-0-352-90965-7',
      language: 'Português',
      edition: '4ª',
      pages: 435,
      synopsis: `Ab ea magni maxime. Porro dolore fugiat iure perspiciatis porro corrupti voluptatum. Autem impedit vitae blanditiis velit consequuntur est.`,
      coverUrl: 'https://placeimg.com/932/423/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore ipsa possimus.`,
      subtitle: `Architecto aliquid quae ad exercitationem.`,
      author: `Renan da Cunha`,
      publisher: `Silveira da Luz - EI`,
      publicationYear: 1960,
      genre: 'Dolore',
      code: 'BOOK0059',
      isbn: '978-1-7362266-0-5',
      language: 'Português',
      edition: '4ª',
      pages: 119,
      synopsis: `Ipsum inventore a dolor eius. Neque reiciendis modi facilis. Itaque ea similique minus odit. Harum hic beatae explicabo itaque cupiditate perferendis reiciendis.`,
      coverUrl: 'https://placekitten.com/173/274',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores blanditiis.`,
      subtitle: null,
      author: `Sr. Luiz Gustavo Nogueira`,
      publisher: `Cunha`,
      publicationYear: 1955,
      genre: 'Repellat',
      code: 'BOOK0060',
      isbn: '978-1-278-28274-9',
      language: 'Português',
      edition: '1ª',
      pages: 353,
      synopsis: `Et iste amet facere. Laborum deserunt fugit.`,
      coverUrl: 'https://placeimg.com/1013/837/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quae ipsam cumque.`,
      subtitle: `Adipisci quis eos eius modi cumque.`,
      author: `Maria Fernanda Sales`,
      publisher: `Correia Ltda.`,
      publicationYear: 1964,
      genre: 'Quisquam',
      code: 'BOOK0061',
      isbn: '978-0-7836-1340-6',
      language: 'Português',
      edition: '5ª',
      pages: 323,
      synopsis: `Expedita repellendus ipsa voluptatibus quod. Distinctio qui porro similique nostrum. Cumque consequuntur dignissimos dignissimos animi expedita.`,
      coverUrl: 'https://placekitten.com/575/344',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim eaque.`,
      subtitle: null,
      author: `Nicole Castro`,
      publisher: `Oliveira Caldeira Ltda.`,
      publicationYear: 1963,
      genre: 'Ullam',
      code: 'BOOK0062',
      isbn: '978-0-325-36729-3',
      language: 'Português',
      edition: '5ª',
      pages: 126,
      synopsis: `Occaecati fugiat asperiores recusandae quisquam. Maiores eius vel fuga veniam eveniet. Sit sed at. Odio possimus sed recusandae id voluptas repudiandae.`,
      coverUrl: 'https://placekitten.com/1013/549',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi neque.`,
      subtitle: null,
      author: `Luiza Mendes`,
      publisher: `Barbosa S/A`,
      publicationYear: 1981,
      genre: 'Sunt',
      code: 'BOOK0063',
      isbn: '978-0-12-770632-0',
      language: 'Português',
      edition: '1ª',
      pages: 408,
      synopsis: `Soluta soluta at facere. Fuga temporibus cumque id.`,
      coverUrl: 'https://placeimg.com/625/479/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Provident a.`,
      subtitle: null,
      author: `Ana Julia Costela`,
      publisher: `Silveira Pires S/A`,
      publicationYear: 1997,
      genre: 'Accusamus',
      code: 'BOOK0064',
      isbn: '978-0-627-13611-5',
      language: 'Português',
      edition: '1ª',
      pages: 618,
      synopsis: `Facilis error fugit repellendus soluta odit. Architecto natus nostrum cum.`,
      coverUrl: 'https://dummyimage.com/719x436',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nulla ipsam dolor.`,
      subtitle: null,
      author: `Daniel Costa`,
      publisher: `Monteiro`,
      publicationYear: 2008,
      genre: 'Nobis',
      code: 'BOOK0065',
      isbn: '978-0-341-38999-6',
      language: 'Português',
      edition: '2ª',
      pages: 545,
      synopsis: `Sed omnis error. Non deleniti hic officia quos recusandae dolores.`,
      coverUrl: 'https://dummyimage.com/790x230',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit architecto suscipit.`,
      subtitle: null,
      author: `João Guilherme Lopes`,
      publisher: `Nogueira Peixoto Ltda.`,
      publicationYear: 2025,
      genre: 'Quisquam',
      code: 'BOOK0066',
      isbn: '978-1-109-10430-1',
      language: 'Português',
      edition: '3ª',
      pages: 430,
      synopsis: `Magni occaecati magnam impedit praesentium assumenda. Modi corrupti assumenda aspernatur ullam voluptate culpa.`,
      coverUrl: 'https://www.lorempixel.com/669/800',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Praesentium quas.`,
      subtitle: null,
      author: `Benício Farias`,
      publisher: `Pinto S/A`,
      publicationYear: 1998,
      genre: 'Odit',
      code: 'BOOK0067',
      isbn: '978-1-210-20275-0',
      language: 'Português',
      edition: '3ª',
      pages: 129,
      synopsis: `Quos quam cumque consectetur quos eaque suscipit. Ex inventore minima. Quae nemo aspernatur iste facere.`,
      coverUrl: 'https://placekitten.com/1023/341',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ducimus aut.`,
      subtitle: null,
      author: `Nicole Correia`,
      publisher: `Silva Almeida S/A`,
      publicationYear: 1993,
      genre: 'Accusantium',
      code: 'BOOK0068',
      isbn: '978-0-7562-2086-0',
      language: 'Português',
      edition: '3ª',
      pages: 710,
      synopsis: `Dolorum totam eum repudiandae nemo blanditiis. Debitis rem voluptatem.`,
      coverUrl: 'https://placeimg.com/821/141/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quo est.`,
      subtitle: `Mollitia ab dicta.`,
      author: `Valentina Jesus`,
      publisher: `Rezende Moura - EI`,
      publicationYear: 2002,
      genre: 'Possimus',
      code: 'BOOK0069',
      isbn: '978-0-206-03850-2',
      language: 'Português',
      edition: '4ª',
      pages: 668,
      synopsis: `Quis fugiat qui. Aut minus dolores laudantium animi. Quae at ullam tempore.`,
      coverUrl: 'https://placeimg.com/845/762/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque magnam.`,
      subtitle: `Asperiores necessitatibus ipsa vitae dolores.`,
      author: `Ian Novaes`,
      publisher: `Lopes`,
      publicationYear: 2001,
      genre: 'Odio',
      code: 'BOOK0070',
      isbn: '978-0-13-291212-9',
      language: 'Português',
      edition: '2ª',
      pages: 413,
      synopsis: `Et blanditiis facere quo iste iure sequi. Culpa placeat repudiandae possimus. Dolor sequi corporis.`,
      coverUrl: 'https://placeimg.com/508/728/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid error reprehenderit.`,
      subtitle: `Adipisci illo iste quibusdam.`,
      author: `Caio Rezende`,
      publisher: `Cunha S/A`,
      publicationYear: 2008,
      genre: 'Accusantium',
      code: 'BOOK0071',
      isbn: '978-0-236-51994-1',
      language: 'Português',
      edition: '3ª',
      pages: 413,
      synopsis: `Voluptatum deserunt officia. At sed repellat commodi.`,
      coverUrl: 'https://dummyimage.com/944x103',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore quam libero.`,
      subtitle: null,
      author: `Nina Pereira`,
      publisher: `Moraes da Rosa S.A.`,
      publicationYear: 1973,
      genre: 'Harum',
      code: 'BOOK0072',
      isbn: '978-1-209-99347-8',
      language: 'Português',
      edition: '2ª',
      pages: 321,
      synopsis: `Laboriosam assumenda fugit in odit reiciendis dolorum. Recusandae voluptatibus quos facere molestias laborum totam. Eum earum ad nisi adipisci repellat eligendi.`,
      coverUrl: 'https://dummyimage.com/966x732',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aut omnis.`,
      subtitle: `Modi recusandae qui quisquam.`,
      author: `Murilo Nogueira`,
      publisher: `da Luz`,
      publicationYear: 1996,
      genre: 'Dolorum',
      code: 'BOOK0073',
      isbn: '978-1-59059-929-7',
      language: 'Português',
      edition: '2ª',
      pages: 409,
      synopsis: `Molestiae cupiditate alias animi nobis accusantium labore. Ullam dicta consectetur quaerat ullam sapiente.`,
      coverUrl: 'https://www.lorempixel.com/662/121',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nesciunt totam.`,
      subtitle: null,
      author: `Luiz Miguel Moreira`,
      publisher: `Moura e Filhos`,
      publicationYear: 1966,
      genre: 'Ut',
      code: 'BOOK0074',
      isbn: '978-0-545-22675-2',
      language: 'Português',
      edition: '4ª',
      pages: 205,
      synopsis: `Possimus ut ratione dolore nihil cupiditate esse. Consectetur quas veniam veniam hic.`,
      coverUrl: 'https://placekitten.com/66/372',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore natus vel consequuntur.`,
      subtitle: null,
      author: `Srta. Eduarda Monteiro`,
      publisher: `da Cunha`,
      publicationYear: 1982,
      genre: 'Tempora',
      code: 'BOOK0075',
      isbn: '978-1-70433-154-6',
      language: 'Português',
      edition: '4ª',
      pages: 216,
      synopsis: `Aliquid ipsa in. Sunt laudantium fugiat molestias.`,
      coverUrl: 'https://dummyimage.com/207x981',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste reiciendis.`,
      subtitle: null,
      author: `Gustavo Aragão`,
      publisher: `Ferreira`,
      publicationYear: 1988,
      genre: 'Corporis',
      code: 'BOOK0076',
      isbn: '978-1-262-18159-1',
      language: 'Português',
      edition: '1ª',
      pages: 354,
      synopsis: `Provident inventore officiis non ipsa amet ex. Illum mollitia unde molestiae optio. Dolores amet nemo saepe corrupti. A assumenda reprehenderit numquam laboriosam atque.`,
      coverUrl: 'https://placekitten.com/423/349',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore blanditiis.`,
      subtitle: `Iusto tempora eaque odit harum.`,
      author: `Dr. João Lucas da Mata`,
      publisher: `Barbosa`,
      publicationYear: 2025,
      genre: 'Fuga',
      code: 'BOOK0077',
      isbn: '978-1-4349-0211-5',
      language: 'Português',
      edition: '4ª',
      pages: 412,
      synopsis: `Impedit quidem dolorem aperiam harum minima vitae. Nemo doloremque error hic sequi alias necessitatibus. Reiciendis perspiciatis nulla blanditiis quidem cupiditate voluptates.`,
      coverUrl: 'https://dummyimage.com/433x394',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nisi.`,
      subtitle: `Voluptates ipsa voluptatum.`,
      author: `Bianca Ferreira`,
      publisher: `Campos`,
      publicationYear: 1960,
      genre: 'Commodi',
      code: 'BOOK0078',
      isbn: '978-1-85487-099-5',
      language: 'Português',
      edition: '2ª',
      pages: 345,
      synopsis: `Beatae corrupti necessitatibus nesciunt vitae aut. Natus aut enim modi. Soluta eaque omnis nemo labore cupiditate.`,
      coverUrl: 'https://placeimg.com/825/294/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam.`,
      subtitle: `Porro aliquid labore eaque fuga.`,
      author: `Dr. Henrique Freitas`,
      publisher: `Castro`,
      publicationYear: 2010,
      genre: 'Eum',
      code: 'BOOK0079',
      isbn: '978-1-75469-137-9',
      language: 'Português',
      edition: '3ª',
      pages: 133,
      synopsis: `Qui quis sint reprehenderit maiores culpa. Quae illo quos minima necessitatibus.`,
      coverUrl: 'https://dummyimage.com/355x394',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum itaque.`,
      subtitle: null,
      author: `Sr. Guilherme Moura`,
      publisher: `Santos`,
      publicationYear: 2025,
      genre: 'Nam',
      code: 'BOOK0080',
      isbn: '978-0-357-97279-3',
      language: 'Português',
      edition: '2ª',
      pages: 535,
      synopsis: `Exercitationem saepe ea rerum at ad. Cum nemo vitae. Officia perspiciatis eaque illum accusantium.`,
      coverUrl: 'https://dummyimage.com/18x970',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis ab.`,
      subtitle: `Non velit quae quae.`,
      author: `Kevin Nascimento`,
      publisher: `Ramos`,
      publicationYear: 1989,
      genre: 'Explicabo',
      code: 'BOOK0081',
      isbn: '978-1-4896-9108-8',
      language: 'Português',
      edition: '5ª',
      pages: 682,
      synopsis: `Officia non error autem aperiam voluptates odit. Ea quae tempora error corrupti. Tempore rem rem nobis optio.`,
      coverUrl: 'https://placeimg.com/286/52/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea in.`,
      subtitle: null,
      author: `Sarah Azevedo`,
      publisher: `Mendes das Neves e Filhos`,
      publicationYear: 2013,
      genre: 'Quibusdam',
      code: 'BOOK0082',
      isbn: '978-1-84282-417-7',
      language: 'Português',
      edition: '4ª',
      pages: 182,
      synopsis: `Quam nam totam veniam tempore. Dolore dolore sit in.`,
      coverUrl: 'https://placekitten.com/678/761',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos sed iusto sint.`,
      subtitle: `Neque nulla iusto deserunt blanditiis perspiciatis.`,
      author: `Fernanda Oliveira`,
      publisher: `da Costa S.A.`,
      publicationYear: 2023,
      genre: 'Eligendi',
      code: 'BOOK0083',
      isbn: '978-1-972521-75-5',
      language: 'Português',
      edition: '5ª',
      pages: 121,
      synopsis: `Et animi iste distinctio. Nemo culpa quos quod. Nostrum odio illo vitae. A modi quas veniam tempora quidem.`,
      coverUrl: 'https://www.lorempixel.com/390/36',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quasi dolorem soluta est.`,
      subtitle: null,
      author: `João Pedro Santos`,
      publisher: `da Cunha`,
      publicationYear: 1973,
      genre: 'At',
      code: 'BOOK0084',
      isbn: '978-1-4789-8562-4',
      language: 'Português',
      edition: '5ª',
      pages: 546,
      synopsis: `Facere deleniti veniam ullam illo dolorem quas. Distinctio accusantium magnam commodi. Fugiat odit quo.`,
      coverUrl: 'https://www.lorempixel.com/99/98',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Architecto.`,
      subtitle: `Impedit fugit molestias.`,
      author: `Pietra da Costa`,
      publisher: `Alves Jesus - ME`,
      publicationYear: 1963,
      genre: 'Ut',
      code: 'BOOK0085',
      isbn: '978-1-992618-91-6',
      language: 'Português',
      edition: '2ª',
      pages: 437,
      synopsis: `Quos libero non quod. Voluptate facere illum cum molestias tenetur porro.`,
      coverUrl: 'https://dummyimage.com/984x677',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusantium.`,
      subtitle: `Tenetur saepe pariatur.`,
      author: `Bryan Silva`,
      publisher: `Castro Ltda.`,
      publicationYear: 1991,
      genre: 'Temporibus',
      code: 'BOOK0086',
      isbn: '978-1-4470-1204-7',
      language: 'Português',
      edition: '1ª',
      pages: 513,
      synopsis: `Incidunt blanditiis sed tempora ab consequuntur. Eveniet tempora veritatis eaque. Fuga exercitationem beatae id.`,
      coverUrl: 'https://placeimg.com/934/556/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reiciendis officiis reiciendis.`,
      subtitle: `Consequatur quas voluptatem.`,
      author: `Calebe Peixoto`,
      publisher: `Pires`,
      publicationYear: 1996,
      genre: 'Ducimus',
      code: 'BOOK0087',
      isbn: '978-1-902771-67-0',
      language: 'Português',
      edition: '5ª',
      pages: 610,
      synopsis: `Ea et provident perspiciatis.`,
      coverUrl: 'https://www.lorempixel.com/458/692',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio dolorum exercitationem.`,
      subtitle: null,
      author: `Melissa Nogueira`,
      publisher: `Barros Alves e Filhos`,
      publicationYear: 2006,
      genre: 'Dolore',
      code: 'BOOK0088',
      isbn: '978-1-217-53540-0',
      language: 'Português',
      edition: '4ª',
      pages: 224,
      synopsis: `Mollitia fugiat repellendus aspernatur ipsam. Ipsum sequi ipsum blanditiis libero officiis aut. Alias molestias repudiandae recusandae vitae odit.`,
      coverUrl: 'https://placekitten.com/423/934',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repudiandae repellendus sapiente.`,
      subtitle: null,
      author: `Dr. Theo Moreira`,
      publisher: `Correia`,
      publicationYear: 1961,
      genre: 'Consequatur',
      code: 'BOOK0089',
      isbn: '978-0-554-88510-0',
      language: 'Português',
      edition: '2ª',
      pages: 216,
      synopsis: `Consequuntur quaerat quam autem nostrum deleniti ut. Dolor repudiandae deleniti excepturi quidem aliquid.`,
      coverUrl: 'https://placeimg.com/252/922/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero consequatur libero minus.`,
      subtitle: null,
      author: `Marcos Vinicius Pinto`,
      publisher: `Silva`,
      publicationYear: 2003,
      genre: 'Dolorum',
      code: 'BOOK0090',
      isbn: '978-0-16-995866-4',
      language: 'Português',
      edition: '4ª',
      pages: 583,
      synopsis: `Earum vitae voluptas iste consequatur. Nobis suscipit maiores sapiente molestias et. Odio dicta numquam enim exercitationem perferendis voluptatem. Magnam possimus eum blanditiis.`,
      coverUrl: 'https://placeimg.com/721/983/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim sed repellat.`,
      subtitle: null,
      author: `Ana Lívia Araújo`,
      publisher: `da Conceição`,
      publicationYear: 1967,
      genre: 'Asperiores',
      code: 'BOOK0091',
      isbn: '978-0-424-42043-1',
      language: 'Português',
      edition: '1ª',
      pages: 382,
      synopsis: `Facere iste nulla. Sint quia natus dolores quos reiciendis enim. Unde harum vero.`,
      coverUrl: 'https://www.lorempixel.com/640/110',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dicta sit.`,
      subtitle: null,
      author: `Clarice Moura`,
      publisher: `da Mota Gonçalves - ME`,
      publicationYear: 2025,
      genre: 'Dolorum',
      code: 'BOOK0092',
      isbn: '978-0-281-60648-1',
      language: 'Português',
      edition: '5ª',
      pages: 775,
      synopsis: `Cum sapiente ab iure. Aliquam ut nisi quo.`,
      coverUrl: 'https://placekitten.com/616/1004',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quos et.`,
      subtitle: null,
      author: `Diego Silveira`,
      publisher: `Santos S.A.`,
      publicationYear: 2019,
      genre: 'Nesciunt',
      code: 'BOOK0093',
      isbn: '978-0-533-55543-7',
      language: 'Português',
      edition: '4ª',
      pages: 566,
      synopsis: `Labore natus quibusdam officiis beatae exercitationem dolores. Ullam doloribus aliquam suscipit fugit recusandae beatae ducimus. Ad maxime quo maiores magni. Aliquam tempore deserunt maiores veniam cumque vero.`,
      coverUrl: 'https://dummyimage.com/15x134',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quo sint incidunt aut.`,
      subtitle: `Repudiandae soluta qui ipsa repellendus asperiores.`,
      author: `Brenda Araújo`,
      publisher: `Melo`,
      publicationYear: 2010,
      genre: 'Amet',
      code: 'BOOK0094',
      isbn: '978-0-02-481934-5',
      language: 'Português',
      edition: '4ª',
      pages: 495,
      synopsis: `Iste illo et harum blanditiis ab. Aperiam quia aliquid sed facere magnam enim placeat. Assumenda quisquam ipsa hic optio labore modi consequatur.`,
      coverUrl: 'https://dummyimage.com/800x604',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis totam.`,
      subtitle: null,
      author: `Dra. Isadora Alves`,
      publisher: `Costa Barbosa S/A`,
      publicationYear: 2006,
      genre: 'Rem',
      code: 'BOOK0095',
      isbn: '978-0-435-36822-7',
      language: 'Português',
      edition: '1ª',
      pages: 638,
      synopsis: `Nulla dolorum beatae perferendis necessitatibus. Sed ut voluptatibus.`,
      coverUrl: 'https://placekitten.com/944/149',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum deserunt.`,
      subtitle: `Laborum ex consectetur omnis aut nulla.`,
      author: `Ian Rodrigues`,
      publisher: `Melo`,
      publicationYear: 1983,
      genre: 'Sint',
      code: 'BOOK0096',
      isbn: '978-0-9955620-5-9',
      language: 'Português',
      edition: '3ª',
      pages: 738,
      synopsis: `Quae odit eius facere perspiciatis. Soluta iure facere esse mollitia cupiditate.`,
      coverUrl: 'https://dummyimage.com/167x574',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deserunt quasi occaecati.`,
      subtitle: null,
      author: `Srta. Alexia Santos`,
      publisher: `Nunes - EI`,
      publicationYear: 2012,
      genre: 'Error',
      code: 'BOOK0097',
      isbn: '978-1-887256-39-1',
      language: 'Português',
      edition: '5ª',
      pages: 136,
      synopsis: `Iure magni id magnam. Sed rem nostrum cumque maiores.`,
      coverUrl: 'https://dummyimage.com/913x326',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veniam optio voluptas.`,
      subtitle: `Vel aliquam quis doloremque eaque doloremque.`,
      author: `Cecília Silveira`,
      publisher: `Nogueira`,
      publicationYear: 1962,
      genre: 'Optio',
      code: 'BOOK0098',
      isbn: '978-0-05-184498-3',
      language: 'Português',
      edition: '1ª',
      pages: 554,
      synopsis: `Fugiat fugiat nesciunt tempore. Maxime fugiat tenetur maiores. Repellendus exercitationem recusandae suscipit ab sunt.`,
      coverUrl: 'https://dummyimage.com/900x339',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores eligendi.`,
      subtitle: `Deleniti facere quaerat.`,
      author: `Rafael Dias`,
      publisher: `Melo`,
      publicationYear: 2005,
      genre: 'Cum',
      code: 'BOOK0099',
      isbn: '978-1-7392603-0-9',
      language: 'Português',
      edition: '2ª',
      pages: 350,
      synopsis: `Nihil consequatur maiores tempora corporis cumque ullam. Vero nobis natus accusantium quaerat optio eligendi.`,
      coverUrl: 'https://placeimg.com/175/443/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus sint cupiditate rerum.`,
      subtitle: `Consequuntur nesciunt quisquam numquam magni cumque.`,
      author: `Heloísa Ramos`,
      publisher: `Dias - ME`,
      publicationYear: 1998,
      genre: 'Molestiae',
      code: 'BOOK0100',
      isbn: '978-0-03-886291-7',
      language: 'Português',
      edition: '5ª',
      pages: 799,
      synopsis: `Temporibus nobis soluta minus quibusdam at optio. Molestiae a vel perspiciatis inventore in soluta possimus.`,
      coverUrl: 'https://placeimg.com/878/469/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita rem tenetur.`,
      subtitle: null,
      author: `Dra. Ana Luiza Pereira`,
      publisher: `Fernandes Rocha S.A.`,
      publicationYear: 2008,
      genre: 'Blanditiis',
      code: 'BOOK0101',
      isbn: '978-1-4300-9818-8',
      language: 'Português',
      edition: '3ª',
      pages: 782,
      synopsis: `Omnis porro et facere culpa officiis.`,
      coverUrl: 'https://placeimg.com/519/535/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Facilis eius perspiciatis.`,
      subtitle: `Impedit quos laboriosam fuga.`,
      author: `Luana Fernandes`,
      publisher: `Monteiro`,
      publicationYear: 1994,
      genre: 'Voluptatibus',
      code: 'BOOK0102',
      isbn: '978-0-13-721386-3',
      language: 'Português',
      edition: '5ª',
      pages: 406,
      synopsis: `Nostrum placeat amet harum odio rem reprehenderit. Unde ipsa aperiam dolore aspernatur alias fugit. Nostrum maxime quae nisi veniam reprehenderit.`,
      coverUrl: 'https://www.lorempixel.com/1012/899',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sed ut.`,
      subtitle: null,
      author: `Esther da Mota`,
      publisher: `Silva - EI`,
      publicationYear: 1963,
      genre: 'Voluptatem',
      code: 'BOOK0103',
      isbn: '978-0-05-302146-7',
      language: 'Português',
      edition: '2ª',
      pages: 490,
      synopsis: `Illo dicta accusamus provident ullam mollitia. Totam expedita vitae eius non deserunt ut. A cupiditate magni nam magnam excepturi blanditiis.`,
      coverUrl: 'https://placeimg.com/527/512/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Natus quo quidem.`,
      subtitle: `Placeat tempore similique laboriosam ducimus.`,
      author: `Maysa das Neves`,
      publisher: `Lopes Oliveira Ltda.`,
      publicationYear: 2022,
      genre: 'Quas',
      code: 'BOOK0104',
      isbn: '978-1-341-65182-3',
      language: 'Português',
      edition: '1ª',
      pages: 720,
      synopsis: `Explicabo tempora eaque veniam placeat tenetur. Qui doloremque doloribus eaque dolorem rerum saepe. Culpa autem ullam perferendis optio nostrum.`,
      coverUrl: 'https://placekitten.com/86/987',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Et tempore sunt nemo.`,
      subtitle: null,
      author: `Luigi da Mata`,
      publisher: `Novaes`,
      publicationYear: 1967,
      genre: 'Est',
      code: 'BOOK0105',
      isbn: '978-0-86780-856-8',
      language: 'Português',
      edition: '1ª',
      pages: 742,
      synopsis: `Voluptate praesentium itaque porro accusamus distinctio neque. Facere similique deleniti ea earum vero.`,
      coverUrl: 'https://dummyimage.com/702x749',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Incidunt in quibusdam.`,
      subtitle: null,
      author: `Dr. Guilherme Porto`,
      publisher: `Costela Dias S/A`,
      publicationYear: 1991,
      genre: 'Fugit',
      code: 'BOOK0106',
      isbn: '978-1-63227-026-9',
      language: 'Português',
      edition: '4ª',
      pages: 279,
      synopsis: `Voluptatum sed maxime quam. Error natus necessitatibus id porro animi repellendus. Saepe atque quia ea facere nam repellat.`,
      coverUrl: 'https://placeimg.com/704/40/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita perspiciatis.`,
      subtitle: null,
      author: `Catarina Teixeira`,
      publisher: `Gomes Moraes Ltda.`,
      publicationYear: 1971,
      genre: 'Veniam',
      code: 'BOOK0107',
      isbn: '978-1-169-47225-9',
      language: 'Português',
      edition: '3ª',
      pages: 593,
      synopsis: `Nostrum illo tenetur aspernatur exercitationem et officiis quae. Officia earum ipsam sint facilis nesciunt vitae impedit. Sequi commodi doloremque dolorum.`,
      coverUrl: 'https://dummyimage.com/163x431',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aut aperiam soluta.`,
      subtitle: null,
      author: `Ana Beatriz Araújo`,
      publisher: `Souza`,
      publicationYear: 1978,
      genre: 'Blanditiis',
      code: 'BOOK0108',
      isbn: '978-1-921643-34-7',
      language: 'Português',
      edition: '4ª',
      pages: 670,
      synopsis: `Consectetur minima cupiditate alias explicabo totam sint iusto. Vel molestias consequatur veniam molestiae nihil itaque. Ipsa odit modi tenetur laboriosam dolorem at.`,
      coverUrl: 'https://placeimg.com/630/749/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Culpa ab.`,
      subtitle: null,
      author: `Sophie Cunha`,
      publisher: `Gomes`,
      publicationYear: 2008,
      genre: 'Optio',
      code: 'BOOK0109',
      isbn: '978-1-74064-930-8',
      language: 'Português',
      edition: '3ª',
      pages: 788,
      synopsis: `Deleniti sunt ipsa dolorum quaerat officia. Dolore aspernatur numquam maxime reiciendis nostrum. Eligendi quia repellat impedit sequi.`,
      coverUrl: 'https://placekitten.com/373/279',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odio nulla.`,
      subtitle: null,
      author: `Samuel Rodrigues`,
      publisher: `Martins Aragão S.A.`,
      publicationYear: 2021,
      genre: 'Architecto',
      code: 'BOOK0110',
      isbn: '978-0-14-427031-6',
      language: 'Português',
      edition: '3ª',
      pages: 724,
      synopsis: `Laudantium exercitationem est. Voluptatum iure recusandae ex sapiente veritatis animi.`,
      coverUrl: 'https://placeimg.com/803/146/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deleniti sapiente.`,
      subtitle: `Repudiandae commodi quisquam dolorum quo.`,
      author: `Elisa Azevedo`,
      publisher: `Ramos Castro - EI`,
      publicationYear: 1954,
      genre: 'Vel',
      code: 'BOOK0111',
      isbn: '978-1-64520-881-5',
      language: 'Português',
      edition: '3ª',
      pages: 604,
      synopsis: `Odit dicta suscipit sint dolor beatae odio. Accusamus recusandae nesciunt id doloribus voluptas.`,
      coverUrl: 'https://placekitten.com/973/317',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum libero.`,
      subtitle: `Excepturi voluptas quis animi explicabo culpa.`,
      author: `Vitória Cavalcanti`,
      publisher: `Rodrigues Dias Ltda.`,
      publicationYear: 2019,
      genre: 'Quos',
      code: 'BOOK0112',
      isbn: '978-1-306-52407-0',
      language: 'Português',
      edition: '4ª',
      pages: 701,
      synopsis: `Eos possimus deleniti delectus expedita quasi eius. Totam mollitia architecto culpa eos ea facilis a. Fugiat delectus accusantium sequi quod dolores quam.`,
      coverUrl: 'https://placeimg.com/793/388/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Culpa eligendi illum.`,
      subtitle: null,
      author: `Sr. Caio Silveira`,
      publisher: `Barbosa S.A.`,
      publicationYear: 1977,
      genre: 'Dolorum',
      code: 'BOOK0113',
      isbn: '978-0-17-310967-0',
      language: 'Português',
      edition: '4ª',
      pages: 555,
      synopsis: `Praesentium ducimus facilis non architecto ut dignissimos laudantium. Iusto odit facere quia. Reprehenderit recusandae animi nulla minus quasi.`,
      coverUrl: 'https://dummyimage.com/622x159',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Atque quam minus.`,
      subtitle: `Deserunt omnis necessitatibus veniam.`,
      author: `Sofia Peixoto`,
      publisher: `Moraes e Filhos`,
      publicationYear: 1965,
      genre: 'Officia',
      code: 'BOOK0114',
      isbn: '978-0-2286-8528-9',
      language: 'Português',
      edition: '4ª',
      pages: 193,
      synopsis: `Ut temporibus mollitia voluptatum sapiente impedit. Repudiandae eum dolores molestias fugiat mollitia. Facere iste vero a alias. Nisi maxime voluptatibus error error.`,
      coverUrl: 'https://placekitten.com/454/439',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas.`,
      subtitle: null,
      author: `Marcos Vinicius Silva`,
      publisher: `Castro Azevedo - ME`,
      publicationYear: 1976,
      genre: 'Magnam',
      code: 'BOOK0115',
      isbn: '978-0-459-33441-3',
      language: 'Português',
      edition: '1ª',
      pages: 667,
      synopsis: `Necessitatibus dolor aspernatur eveniet laboriosam laborum. Reprehenderit atque odit alias repellat fugit quod. Expedita repellendus impedit sint sit dolorem.`,
      coverUrl: 'https://www.lorempixel.com/23/783',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minima eum.`,
      subtitle: `Corrupti magnam dolore amet quasi hic.`,
      author: `Sophia Santos`,
      publisher: `das Neves - ME`,
      publicationYear: 1968,
      genre: 'Illum',
      code: 'BOOK0116',
      isbn: '978-0-251-79086-8',
      language: 'Português',
      edition: '2ª',
      pages: 653,
      synopsis: `Id ipsa praesentium quis. Nam laborum officiis deserunt nulla quasi doloribus.`,
      coverUrl: 'https://placeimg.com/146/545/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Placeat nemo beatae.`,
      subtitle: `Incidunt expedita eum nisi ad.`,
      author: `Davi Luiz Monteiro`,
      publisher: `da Conceição`,
      publicationYear: 1980,
      genre: 'Nulla',
      code: 'BOOK0117',
      isbn: '978-0-352-11039-8',
      language: 'Português',
      edition: '5ª',
      pages: 431,
      synopsis: `Accusamus possimus beatae ipsum ad. Qui distinctio molestias quibusdam molestias.`,
      coverUrl: 'https://placeimg.com/289/37/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus minima ducimus animi.`,
      subtitle: null,
      author: `Samuel Fogaça`,
      publisher: `Rezende e Filhos`,
      publicationYear: 2017,
      genre: 'Accusamus',
      code: 'BOOK0118',
      isbn: '978-1-4510-4636-6',
      language: 'Português',
      edition: '1ª',
      pages: 165,
      synopsis: `Temporibus laborum nisi at. Magnam itaque unde accusantium dolorum. Esse laudantium quia accusantium placeat explicabo esse.`,
      coverUrl: 'https://placekitten.com/564/126',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempora repellendus adipisci.`,
      subtitle: null,
      author: `Emilly das Neves`,
      publisher: `Mendes Novaes e Filhos`,
      publicationYear: 1955,
      genre: 'Deserunt',
      code: 'BOOK0119',
      isbn: '978-1-893639-26-3',
      language: 'Português',
      edition: '5ª',
      pages: 408,
      synopsis: `Eveniet molestiae dignissimos consequuntur molestiae reiciendis similique est. Tenetur inventore tenetur quo omnis natus culpa.`,
      coverUrl: 'https://dummyimage.com/138x242',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe corporis adipisci.`,
      subtitle: null,
      author: `Dr. Juan Jesus`,
      publisher: `Freitas`,
      publicationYear: 2012,
      genre: 'Distinctio',
      code: 'BOOK0120',
      isbn: '978-0-220-99499-0',
      language: 'Português',
      edition: '4ª',
      pages: 175,
      synopsis: `Nisi doloremque ad aspernatur quod. Magnam non quae fugiat. Laudantium consequuntur deserunt adipisci quisquam accusamus. Veniam dolore perferendis dicta dignissimos.`,
      coverUrl: 'https://placeimg.com/362/899/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sint suscipit incidunt.`,
      subtitle: `Non repudiandae quam.`,
      author: `Mariana Teixeira`,
      publisher: `Silveira S/A`,
      publicationYear: 2024,
      genre: 'Odio',
      code: 'BOOK0121',
      isbn: '978-0-388-60868-5',
      language: 'Português',
      edition: '5ª',
      pages: 432,
      synopsis: `Deleniti ipsa sunt. Itaque in nostrum amet maxime. Iure officia at magnam. Quod vel possimus consequatur.`,
      coverUrl: 'https://placeimg.com/846/662/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum.`,
      subtitle: null,
      author: `Maria Sophia da Paz`,
      publisher: `Carvalho`,
      publicationYear: 2020,
      genre: 'Explicabo',
      code: 'BOOK0122',
      isbn: '978-0-11-175186-2',
      language: 'Português',
      edition: '2ª',
      pages: 540,
      synopsis: `Veniam fugiat fugit quisquam totam natus optio corrupti. Debitis quae in est. Enim debitis tempore vero a quisquam accusamus.`,
      coverUrl: 'https://www.lorempixel.com/1019/1021',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sunt dolores nihil labore.`,
      subtitle: `Ipsam nobis ab sunt eius.`,
      author: `Maria Eduarda da Rocha`,
      publisher: `da Mata S.A.`,
      publicationYear: 1962,
      genre: 'Aspernatur',
      code: 'BOOK0123',
      isbn: '978-0-209-94510-4',
      language: 'Português',
      edition: '3ª',
      pages: 537,
      synopsis: `Voluptatibus cum eligendi optio praesentium nemo. Debitis iste neque ut at error fuga.`,
      coverUrl: 'https://placeimg.com/776/138/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aperiam iusto commodi.`,
      subtitle: null,
      author: `Isaac Souza`,
      publisher: `Souza`,
      publicationYear: 1961,
      genre: 'Eos',
      code: 'BOOK0124',
      isbn: '978-0-19-817946-7',
      language: 'Português',
      edition: '4ª',
      pages: 198,
      synopsis: `Ea nemo numquam unde nostrum libero. Libero repellat sunt doloremque enim deserunt blanditiis iure. Qui dignissimos nostrum impedit. Ex nam odit.`,
      coverUrl: 'https://placekitten.com/23/412',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ratione est.`,
      subtitle: null,
      author: `Maria Clara Martins`,
      publisher: `Correia e Filhos`,
      publicationYear: 2021,
      genre: 'Iusto',
      code: 'BOOK0125',
      isbn: '978-1-990235-57-3',
      language: 'Português',
      edition: '3ª',
      pages: 786,
      synopsis: `Officia laboriosam occaecati. Tempore iure repellendus unde animi maxime natus. Nam accusantium neque ex totam recusandae.`,
      coverUrl: 'https://placekitten.com/135/305',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore.`,
      subtitle: `Occaecati sapiente necessitatibus harum nisi.`,
      author: `Thales Lopes`,
      publisher: `Fogaça - ME`,
      publicationYear: 2023,
      genre: 'Commodi',
      code: 'BOOK0126',
      isbn: '978-0-574-38421-8',
      language: 'Português',
      edition: '5ª',
      pages: 317,
      synopsis: `Quod totam ipsam. Reiciendis temporibus culpa. Unde quasi minima quod corporis sit.`,
      coverUrl: 'https://www.lorempixel.com/271/420',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Harum sint blanditiis.`,
      subtitle: `Ut porro nisi assumenda.`,
      author: `Amanda Cavalcanti`,
      publisher: `Aragão`,
      publicationYear: 1985,
      genre: 'Repellat',
      code: 'BOOK0127',
      isbn: '978-0-533-44857-9',
      language: 'Português',
      edition: '5ª',
      pages: 331,
      synopsis: `Corrupti earum accusamus numquam maiores. Molestiae molestias earum velit rem.`,
      coverUrl: 'https://www.lorempixel.com/501/350',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nostrum excepturi.`,
      subtitle: `Amet adipisci temporibus amet fugit.`,
      author: `Kevin Novaes`,
      publisher: `Porto Moraes Ltda.`,
      publicationYear: 1989,
      genre: 'Iusto',
      code: 'BOOK0128',
      isbn: '978-0-7921-7174-4',
      language: 'Português',
      edition: '3ª',
      pages: 459,
      synopsis: `Doloremque dolore similique nulla totam hic praesentium. Ratione sunt iste adipisci labore expedita. Sapiente eligendi expedita nemo magni illo quae.`,
      coverUrl: 'https://www.lorempixel.com/219/667',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus id.`,
      subtitle: null,
      author: `Eduarda Farias`,
      publisher: `Rocha Nogueira S/A`,
      publicationYear: 1953,
      genre: 'Laboriosam',
      code: 'BOOK0129',
      isbn: '978-1-69583-219-0',
      language: 'Português',
      edition: '1ª',
      pages: 643,
      synopsis: `Nihil iure nam reprehenderit. Est illo nisi placeat. Quo fugiat laudantium optio at repellendus suscipit temporibus.`,
      coverUrl: 'https://dummyimage.com/0x300',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus harum neque.`,
      subtitle: `Dignissimos soluta error recusandae.`,
      author: `Fernanda Pinto`,
      publisher: `Carvalho`,
      publicationYear: 1991,
      genre: 'Reprehenderit',
      code: 'BOOK0130',
      isbn: '978-1-240-58008-8',
      language: 'Português',
      edition: '5ª',
      pages: 710,
      synopsis: `Similique sint doloremque praesentium. Numquam quae illo ipsa distinctio cupiditate. Deleniti fugit unde saepe.`,
      coverUrl: 'https://dummyimage.com/315x590',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusamus officiis.`,
      subtitle: `Quam laborum ipsa.`,
      author: `Bruno Cunha`,
      publisher: `Ramos`,
      publicationYear: 1960,
      genre: 'Voluptatem',
      code: 'BOOK0131',
      isbn: '978-0-7868-7653-2',
      language: 'Português',
      edition: '3ª',
      pages: 553,
      synopsis: `Non neque sed dolores magnam illum. Nemo alias alias laboriosam fuga neque vitae.`,
      coverUrl: 'https://placekitten.com/163/290',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maxime minima nostrum.`,
      subtitle: null,
      author: `Lucas Cardoso`,
      publisher: `Barros`,
      publicationYear: 1964,
      genre: 'Laboriosam',
      code: 'BOOK0132',
      isbn: '978-1-78795-654-4',
      language: 'Português',
      edition: '3ª',
      pages: 540,
      synopsis: `Alias ullam quibusdam quas. Ea occaecati neque nemo omnis eos qui.`,
      coverUrl: 'https://placeimg.com/55/587/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consectetur asperiores.`,
      subtitle: `Dolorum nulla eius ducimus.`,
      author: `Srta. Maria da Luz`,
      publisher: `Porto Moura S.A.`,
      publicationYear: 1957,
      genre: 'Facilis',
      code: 'BOOK0133',
      isbn: '978-1-280-51292-6',
      language: 'Português',
      edition: '1ª',
      pages: 309,
      synopsis: `Quo dolores ipsam odit distinctio quasi. Amet eaque reprehenderit amet iure labore. Quia quibusdam minus fugit provident labore corporis.`,
      coverUrl: 'https://placekitten.com/890/24',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugit et minus.`,
      subtitle: `Atque minus explicabo.`,
      author: `Mariana Fogaça`,
      publisher: `Fogaça`,
      publicationYear: 2013,
      genre: 'Fugiat',
      code: 'BOOK0134',
      isbn: '978-1-967393-85-5',
      language: 'Português',
      edition: '4ª',
      pages: 279,
      synopsis: `Molestias perferendis rerum accusamus atque aut. Expedita quam dolorum alias nulla animi nisi.`,
      coverUrl: 'https://www.lorempixel.com/444/249',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sequi consectetur.`,
      subtitle: `Rem delectus beatae delectus eos optio.`,
      author: `Pedro Miguel Ramos`,
      publisher: `Pereira`,
      publicationYear: 1955,
      genre: 'Voluptate',
      code: 'BOOK0135',
      isbn: '978-1-214-06650-1',
      language: 'Português',
      edition: '4ª',
      pages: 119,
      synopsis: `Debitis architecto voluptatem dicta hic. Autem molestiae inventore nostrum autem ipsam ea.`,
      coverUrl: 'https://www.lorempixel.com/71/149',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quas quod accusantium.`,
      subtitle: `Corrupti odit ut optio eaque praesentium.`,
      author: `Maria Julia Almeida`,
      publisher: `Rocha`,
      publicationYear: 2001,
      genre: 'Nostrum',
      code: 'BOOK0136',
      isbn: '978-0-8306-7198-4',
      language: 'Português',
      edition: '1ª',
      pages: 432,
      synopsis: `Placeat id odio vero at modi. Aspernatur itaque quisquam officia debitis aliquam. Optio error harum autem porro laborum.`,
      coverUrl: 'https://dummyimage.com/896x388',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Earum.`,
      subtitle: `Quaerat nihil laudantium.`,
      author: `Marcelo Lima`,
      publisher: `Teixeira`,
      publicationYear: 2001,
      genre: 'Odio',
      code: 'BOOK0137',
      isbn: '978-0-505-06138-6',
      language: 'Português',
      edition: '5ª',
      pages: 180,
      synopsis: `Corrupti neque unde alias consequuntur officiis iusto. Aliquid praesentium consectetur cupiditate amet esse recusandae itaque. Saepe aperiam repellendus beatae.`,
      coverUrl: 'https://dummyimage.com/451x129',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi saepe qui.`,
      subtitle: null,
      author: `Giovanna Costa`,
      publisher: `Martins da Rosa S/A`,
      publicationYear: 1964,
      genre: 'Rerum',
      code: 'BOOK0138',
      isbn: '978-1-114-26258-4',
      language: 'Português',
      edition: '5ª',
      pages: 622,
      synopsis: `Doloribus neque consequatur ratione odio fugiat. Accusamus laborum ab debitis.`,
      coverUrl: 'https://placeimg.com/182/581/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Possimus dignissimos odit.`,
      subtitle: `Ipsum dolores cupiditate porro nisi quaerat.`,
      author: `Ana Laura Jesus`,
      publisher: `Peixoto`,
      publicationYear: 1975,
      genre: 'Ab',
      code: 'BOOK0139',
      isbn: '978-0-18-195883-3',
      language: 'Português',
      edition: '2ª',
      pages: 716,
      synopsis: `Omnis eius deserunt recusandae placeat voluptas labore debitis. Amet facilis distinctio. Ex rem quis aliquam qui.`,
      coverUrl: 'https://www.lorempixel.com/360/323',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores architecto doloremque.`,
      subtitle: null,
      author: `Maria Sophia Martins`,
      publisher: `da Paz`,
      publicationYear: 2022,
      genre: 'Veritatis',
      code: 'BOOK0140',
      isbn: '978-0-15-313636-8',
      language: 'Português',
      edition: '5ª',
      pages: 430,
      synopsis: `Iusto laborum tempora corporis. Iste harum consequatur quam odio voluptate dicta consectetur.`,
      coverUrl: 'https://dummyimage.com/122x574',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sequi itaque.`,
      subtitle: `Quis dolore eos culpa.`,
      author: `Mariana da Cunha`,
      publisher: `Carvalho Oliveira - EI`,
      publicationYear: 1988,
      genre: 'Porro',
      code: 'BOOK0141',
      isbn: '978-1-74063-356-7',
      language: 'Português',
      edition: '3ª',
      pages: 705,
      synopsis: `Tempora nihil corrupti nemo a. Aliquam iusto quisquam. Incidunt hic repellat. Iste dolores nam accusamus.`,
      coverUrl: 'https://dummyimage.com/832x446',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos officia at.`,
      subtitle: `Pariatur cum itaque necessitatibus nesciunt voluptate.`,
      author: `Stella Cunha`,
      publisher: `da Mata`,
      publicationYear: 1997,
      genre: 'Maxime',
      code: 'BOOK0142',
      isbn: '978-0-16-580464-4',
      language: 'Português',
      edition: '3ª',
      pages: 178,
      synopsis: `Nemo dignissimos placeat nulla excepturi ut maiores. Suscipit beatae facilis nulla facilis cupiditate. Provident natus quo consequuntur ex molestiae officiis. Sit praesentium quidem quis eum tempore magnam in.`,
      coverUrl: 'https://placekitten.com/111/129',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste magnam repudiandae.`,
      subtitle: `Quae perspiciatis minus eos numquam reiciendis.`,
      author: `Srta. Caroline Ramos`,
      publisher: `Cardoso - ME`,
      publicationYear: 2010,
      genre: 'Dolorum',
      code: 'BOOK0143',
      isbn: '978-0-12-412723-4',
      language: 'Português',
      edition: '5ª',
      pages: 254,
      synopsis: `Ad impedit placeat ut labore in qui accusantium. Aperiam sit doloremque veniam officia. Neque omnis ratione laborum pariatur minus.`,
      coverUrl: 'https://placekitten.com/911/937',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur ratione cupiditate.`,
      subtitle: `Dolorem fuga enim sapiente.`,
      author: `João Gabriel Gomes`,
      publisher: `da Cunha`,
      publicationYear: 2006,
      genre: 'Sit',
      code: 'BOOK0144',
      isbn: '978-1-222-23105-2',
      language: 'Português',
      edition: '4ª',
      pages: 636,
      synopsis: `Ipsam fuga dignissimos provident. Voluptatem corporis ipsum voluptate modi commodi. Illo libero corporis.`,
      coverUrl: 'https://dummyimage.com/938x655',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam.`,
      subtitle: `Ex provident labore enim velit voluptatem.`,
      author: `Natália da Conceição`,
      publisher: `Mendes`,
      publicationYear: 1993,
      genre: 'Voluptas',
      code: 'BOOK0145',
      isbn: '978-1-02-814069-5',
      language: 'Português',
      edition: '5ª',
      pages: 153,
      synopsis: `Facere eveniet non deserunt minima quos quisquam. Ad modi ipsum perferendis assumenda.`,
      coverUrl: 'https://placeimg.com/807/398/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis maiores animi.`,
      subtitle: null,
      author: `Isabelly Novaes`,
      publisher: `Pereira Moura - ME`,
      publicationYear: 1986,
      genre: 'Minima',
      code: 'BOOK0146',
      isbn: '978-1-55478-137-9',
      language: 'Português',
      edition: '3ª',
      pages: 772,
      synopsis: `Enim rem voluptas incidunt tempore consequuntur. Nisi corporis esse voluptates minima excepturi ut nihil. At illum totam impedit nam quae.`,
      coverUrl: 'https://dummyimage.com/280x408',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim laudantium reprehenderit.`,
      subtitle: null,
      author: `Nathan Jesus`,
      publisher: `Rezende`,
      publicationYear: 1994,
      genre: 'Et',
      code: 'BOOK0147',
      isbn: '978-0-244-71462-8',
      language: 'Português',
      edition: '3ª',
      pages: 771,
      synopsis: `Adipisci quisquam laudantium voluptas nisi. Neque natus sit occaecati labore possimus. Fuga quasi accusantium ea.`,
      coverUrl: 'https://placekitten.com/119/299',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Soluta consequatur cum.`,
      subtitle: null,
      author: `João Guilherme Peixoto`,
      publisher: `Barros`,
      publicationYear: 1992,
      genre: 'Illum',
      code: 'BOOK0148',
      isbn: '978-0-8321-9285-2',
      language: 'Português',
      edition: '2ª',
      pages: 786,
      synopsis: `Earum praesentium facere modi expedita. Accusamus maxime fuga laborum. Ullam cum dolor magnam rerum recusandae.`,
      coverUrl: 'https://placeimg.com/233/854/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis consectetur.`,
      subtitle: `Laboriosam est facere.`,
      author: `Maria Vitória Silveira`,
      publisher: `da Luz`,
      publicationYear: 1977,
      genre: 'Voluptatum',
      code: 'BOOK0149',
      isbn: '978-0-13-223423-8',
      language: 'Português',
      edition: '3ª',
      pages: 597,
      synopsis: `Incidunt quis beatae accusantium. Quidem aliquam autem recusandae maiores animi blanditiis.`,
      coverUrl: 'https://www.lorempixel.com/518/88',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Pariatur quidem.`,
      subtitle: `Ullam dignissimos temporibus.`,
      author: `Raul Monteiro`,
      publisher: `Carvalho S.A.`,
      publicationYear: 1962,
      genre: 'Hic',
      code: 'BOOK0150',
      isbn: '978-1-289-38911-6',
      language: 'Português',
      edition: '5ª',
      pages: 652,
      synopsis: `Minus quaerat vitae. Temporibus modi voluptate atque. Ullam sed labore praesentium delectus. Debitis explicabo fugit distinctio.`,
      coverUrl: 'https://www.lorempixel.com/466/834',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi beatae consequatur.`,
      subtitle: `Provident nam aliquam eveniet blanditiis.`,
      author: `Lorenzo Lima`,
      publisher: `das Neves`,
      publicationYear: 1971,
      genre: 'Quod',
      code: 'BOOK0151',
      isbn: '978-1-63175-207-0',
      language: 'Português',
      edition: '4ª',
      pages: 144,
      synopsis: `Ipsa omnis assumenda corporis id nihil. Qui tempora cumque facilis.`,
      coverUrl: 'https://dummyimage.com/407x693',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sapiente illo doloremque incidunt.`,
      subtitle: null,
      author: `Emilly Fogaça`,
      publisher: `Moraes`,
      publicationYear: 1989,
      genre: 'Pariatur',
      code: 'BOOK0152',
      isbn: '978-1-84271-147-7',
      language: 'Português',
      edition: '4ª',
      pages: 298,
      synopsis: `Occaecati consequatur aut amet architecto. Voluptas fugit perspiciatis. Esse numquam quis optio.`,
      coverUrl: 'https://dummyimage.com/1008x954',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio laudantium.`,
      subtitle: `Molestiae repellat molestiae accusantium.`,
      author: `Leandro Costa`,
      publisher: `Porto`,
      publicationYear: 1970,
      genre: 'Ipsam',
      code: 'BOOK0153',
      isbn: '978-1-70028-427-3',
      language: 'Português',
      edition: '2ª',
      pages: 719,
      synopsis: `Est harum quisquam necessitatibus. Optio placeat nemo labore sequi magni hic. Nihil fugiat perspiciatis quisquam eligendi aperiam nihil.`,
      coverUrl: 'https://placekitten.com/262/750',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ad tempora exercitationem atque.`,
      subtitle: null,
      author: `Dr. Juan Monteiro`,
      publisher: `Farias S.A.`,
      publicationYear: 2016,
      genre: 'Ex',
      code: 'BOOK0154',
      isbn: '978-0-14-152085-8',
      language: 'Português',
      edition: '1ª',
      pages: 391,
      synopsis: `Omnis in maiores in accusantium iusto ad.`,
      coverUrl: 'https://placeimg.com/648/773/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nemo repellat aut.`,
      subtitle: null,
      author: `Cecília Mendes`,
      publisher: `Santos`,
      publicationYear: 1961,
      genre: 'Vel',
      code: 'BOOK0155',
      isbn: '978-0-945637-18-9',
      language: 'Português',
      edition: '2ª',
      pages: 561,
      synopsis: `Eaque error nemo rem numquam. Quaerat neque nihil earum.`,
      coverUrl: 'https://dummyimage.com/973x874',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae officiis error.`,
      subtitle: null,
      author: `Leandro Viana`,
      publisher: `da Paz`,
      publicationYear: 1980,
      genre: 'Nesciunt',
      code: 'BOOK0156',
      isbn: '978-1-987820-82-9',
      language: 'Português',
      edition: '4ª',
      pages: 183,
      synopsis: `Distinctio vitae quia iusto vel minus nostrum. Vel quas animi dicta iure dolores. Sapiente illum similique tenetur odio.`,
      coverUrl: 'https://placekitten.com/844/546',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ducimus nobis.`,
      subtitle: null,
      author: `Eduarda Correia`,
      publisher: `da Mota Araújo S.A.`,
      publicationYear: 1967,
      genre: 'Ipsa',
      code: 'BOOK0157',
      isbn: '978-1-86603-242-8',
      language: 'Português',
      edition: '1ª',
      pages: 393,
      synopsis: `Ratione eius mollitia officia aliquam.`,
      coverUrl: 'https://www.lorempixel.com/995/40',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Et error.`,
      subtitle: null,
      author: `Juan Moreira`,
      publisher: `Novaes e Filhos`,
      publicationYear: 1952,
      genre: 'Deserunt',
      code: 'BOOK0158',
      isbn: '978-0-9818984-7-6',
      language: 'Português',
      edition: '3ª',
      pages: 320,
      synopsis: `Nobis quo et rerum qui. Vel dolor autem distinctio earum.`,
      coverUrl: 'https://www.lorempixel.com/836/520',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Modi praesentium beatae.`,
      subtitle: `Incidunt placeat vitae sunt vel facilis.`,
      author: `Sra. Gabriela Aragão`,
      publisher: `Barros e Filhos`,
      publicationYear: 1980,
      genre: 'Velit',
      code: 'BOOK0159',
      isbn: '978-1-86451-837-5',
      language: 'Português',
      edition: '4ª',
      pages: 754,
      synopsis: `Tenetur hic voluptate. Error vel quidem error similique. Totam occaecati sunt quisquam.`,
      coverUrl: 'https://placekitten.com/832/69',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reprehenderit velit.`,
      subtitle: `Qui unde ex in ullam aut.`,
      author: `Samuel Ferreira`,
      publisher: `Moraes - ME`,
      publicationYear: 2015,
      genre: 'Sed',
      code: 'BOOK0160',
      isbn: '978-1-00-272063-9',
      language: 'Português',
      edition: '5ª',
      pages: 347,
      synopsis: `Et aspernatur culpa maiores voluptas. Sed placeat recusandae eum. Sit consequatur cupiditate nihil eveniet eligendi assumenda. Delectus soluta velit sunt dolore veniam.`,
      coverUrl: 'https://placeimg.com/468/182/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea sequi.`,
      subtitle: `Id inventore ea.`,
      author: `João Lucas da Cunha`,
      publisher: `Alves e Filhos`,
      publicationYear: 1960,
      genre: 'Qui',
      code: 'BOOK0161',
      isbn: '978-1-71333-447-7',
      language: 'Português',
      edition: '5ª',
      pages: 469,
      synopsis: `Inventore dignissimos dolor reprehenderit. In illum corporis enim ea. Iste dolorum nesciunt officia assumenda iusto sit voluptate.`,
      coverUrl: 'https://placeimg.com/814/434/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quasi ducimus atque.`,
      subtitle: null,
      author: `Benjamin Melo`,
      publisher: `Ribeiro Moraes - EI`,
      publicationYear: 1982,
      genre: 'Velit',
      code: 'BOOK0162',
      isbn: '978-0-489-64652-4',
      language: 'Português',
      edition: '1ª',
      pages: 465,
      synopsis: `Neque ea magnam. Soluta consequatur et minus consequuntur blanditiis. Voluptatem libero voluptate.`,
      coverUrl: 'https://placeimg.com/575/738/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus ea.`,
      subtitle: `Maxime ipsa cumque qui.`,
      author: `Sophie da Costa`,
      publisher: `Barros`,
      publicationYear: 1993,
      genre: 'Eaque',
      code: 'BOOK0163',
      isbn: '978-0-320-74276-7',
      language: 'Português',
      edition: '2ª',
      pages: 575,
      synopsis: `Aliquam explicabo quae laborum laudantium sapiente sint. Expedita dignissimos eligendi rerum.`,
      coverUrl: 'https://www.lorempixel.com/558/434',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam debitis ullam.`,
      subtitle: `Quisquam perspiciatis suscipit ad.`,
      author: `Nina Costa`,
      publisher: `Moura`,
      publicationYear: 1975,
      genre: 'Rerum',
      code: 'BOOK0164',
      isbn: '978-1-201-77749-6',
      language: 'Português',
      edition: '1ª',
      pages: 304,
      synopsis: `Voluptas omnis veritatis eveniet quasi quasi.`,
      coverUrl: 'https://www.lorempixel.com/264/432',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eum animi.`,
      subtitle: `Molestias nobis at.`,
      author: `Davi Duarte`,
      publisher: `Carvalho`,
      publicationYear: 1974,
      genre: 'Adipisci',
      code: 'BOOK0165',
      isbn: '978-0-664-21476-0',
      language: 'Português',
      edition: '3ª',
      pages: 465,
      synopsis: `Consectetur pariatur rerum maiores laudantium suscipit labore natus. At in fuga delectus occaecati at.`,
      coverUrl: 'https://dummyimage.com/699x949',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut minima.`,
      subtitle: null,
      author: `Marcela Cardoso`,
      publisher: `Rezende`,
      publicationYear: 1999,
      genre: 'Nostrum',
      code: 'BOOK0166',
      isbn: '978-1-4224-3864-0',
      language: 'Português',
      edition: '3ª',
      pages: 291,
      synopsis: `Mollitia totam maiores. Incidunt atque optio necessitatibus ducimus ducimus aspernatur. Accusamus qui iure ratione sapiente aliquid impedit.`,
      coverUrl: 'https://placeimg.com/609/642/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Numquam eaque vitae.`,
      subtitle: `Distinctio aspernatur voluptatem ea.`,
      author: `Ana Lívia Pinto`,
      publisher: `Almeida - ME`,
      publicationYear: 1973,
      genre: 'Cum',
      code: 'BOOK0167',
      isbn: '978-0-7769-7499-6',
      language: 'Português',
      edition: '5ª',
      pages: 400,
      synopsis: `Rem assumenda consequatur deleniti repellendus possimus. Similique distinctio officiis officiis ipsa. Similique molestiae assumenda quo corporis in blanditiis temporibus.`,
      coverUrl: 'https://placeimg.com/911/993/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odio.`,
      subtitle: `Doloribus eos repudiandae hic ex aut.`,
      author: `Sra. Kamilly Sales`,
      publisher: `Azevedo`,
      publicationYear: 2004,
      genre: 'Placeat',
      code: 'BOOK0168',
      isbn: '978-1-899730-80-3',
      language: 'Português',
      edition: '2ª',
      pages: 554,
      synopsis: `Et aperiam tempora impedit labore libero vel. Ipsum ipsa cum quas iusto ipsa. Dolor tenetur excepturi nobis sapiente omnis consectetur.`,
      coverUrl: 'https://placeimg.com/600/799/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae reiciendis sapiente.`,
      subtitle: `Dignissimos porro assumenda laboriosam cupiditate culpa.`,
      author: `Ana Luiza Peixoto`,
      publisher: `Jesus`,
      publicationYear: 2001,
      genre: 'Ex',
      code: 'BOOK0169',
      isbn: '978-0-05-452280-2',
      language: 'Português',
      edition: '3ª',
      pages: 625,
      synopsis: `Inventore nulla blanditiis dolore ducimus excepturi. Quo quo nam tempore sequi soluta.`,
      coverUrl: 'https://placeimg.com/213/103/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vitae quidem voluptate.`,
      subtitle: `Non similique aut natus magni cumque.`,
      author: `Emanuel Moreira`,
      publisher: `Gonçalves Pires - EI`,
      publicationYear: 1996,
      genre: 'Praesentium',
      code: 'BOOK0170',
      isbn: '978-0-552-13760-7',
      language: 'Português',
      edition: '3ª',
      pages: 492,
      synopsis: `Exercitationem magnam assumenda fuga quidem facere pariatur. Quidem minus ratione consequuntur.`,
      coverUrl: 'https://placeimg.com/878/846/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veritatis maiores placeat.`,
      subtitle: null,
      author: `Leonardo da Conceição`,
      publisher: `Silveira S/A`,
      publicationYear: 1997,
      genre: 'Blanditiis',
      code: 'BOOK0171',
      isbn: '978-1-62606-029-6',
      language: 'Português',
      edition: '4ª',
      pages: 178,
      synopsis: `Voluptatem reiciendis soluta voluptate in suscipit praesentium sit. Tenetur ab eius minus ullam praesentium.`,
      coverUrl: 'https://placeimg.com/913/420/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit quos illo.`,
      subtitle: null,
      author: `Heitor Cardoso`,
      publisher: `Teixeira Ltda.`,
      publicationYear: 1981,
      genre: 'Molestias',
      code: 'BOOK0172',
      isbn: '978-1-318-84852-2',
      language: 'Português',
      edition: '1ª',
      pages: 126,
      synopsis: `Tempora molestiae ea.`,
      coverUrl: 'https://www.lorempixel.com/622/865',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sapiente ea.`,
      subtitle: null,
      author: `Isabella Costa`,
      publisher: `Costa - ME`,
      publicationYear: 1977,
      genre: 'In',
      code: 'BOOK0173',
      isbn: '978-1-5399-8935-6',
      language: 'Português',
      edition: '5ª',
      pages: 392,
      synopsis: `Pariatur repellendus nemo consequuntur fugiat. Autem maiores deserunt quod iste.`,
      coverUrl: 'https://placeimg.com/300/871/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At incidunt.`,
      subtitle: `Labore ipsum fuga.`,
      author: `Juliana Silveira`,
      publisher: `Ferreira`,
      publicationYear: 2006,
      genre: 'Reprehenderit',
      code: 'BOOK0174',
      isbn: '978-1-77622-827-0',
      language: 'Português',
      edition: '1ª',
      pages: 798,
      synopsis: `Voluptas maiores minus possimus. Labore quia velit fuga veritatis nobis illum. Fuga enim minima blanditiis.`,
      coverUrl: 'https://placekitten.com/624/766',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum ratione.`,
      subtitle: null,
      author: `Yuri Peixoto`,
      publisher: `Lima Ltda.`,
      publicationYear: 1972,
      genre: 'Esse',
      code: 'BOOK0175',
      isbn: '978-1-01-851067-5',
      language: 'Português',
      edition: '3ª',
      pages: 620,
      synopsis: `Natus tempore quos labore quam. Consequatur consequuntur odio quis pariatur corrupti quas at. Optio illum doloremque hic molestiae vero suscipit quasi.`,
      coverUrl: 'https://www.lorempixel.com/181/339',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati quo est.`,
      subtitle: null,
      author: `Ana Vitória Cardoso`,
      publisher: `Viana Barros - EI`,
      publicationYear: 1953,
      genre: 'Quasi',
      code: 'BOOK0176',
      isbn: '978-1-80182-043-1',
      language: 'Português',
      edition: '3ª',
      pages: 667,
      synopsis: `Ipsam rem non illo aliquid similique ad ipsa. Ad minus fugit at voluptatem molestiae.`,
      coverUrl: 'https://dummyimage.com/584x294',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam culpa.`,
      subtitle: null,
      author: `Nicole da Cunha`,
      publisher: `Martins S.A.`,
      publicationYear: 1958,
      genre: 'Alias',
      code: 'BOOK0177',
      isbn: '978-1-61526-546-6',
      language: 'Português',
      edition: '3ª',
      pages: 507,
      synopsis: `Dicta quibusdam nesciunt. Magni magnam veniam earum et mollitia aperiam.`,
      coverUrl: 'https://dummyimage.com/59x834',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat.`,
      subtitle: null,
      author: `Maria Sophia Castro`,
      publisher: `Costela Jesus - EI`,
      publicationYear: 2007,
      genre: 'Nemo',
      code: 'BOOK0178',
      isbn: '978-0-8325-8238-7',
      language: 'Português',
      edition: '4ª',
      pages: 796,
      synopsis: `Iste a iure repudiandae enim voluptas a. Earum dolorum perspiciatis voluptatum sapiente distinctio sapiente. Aliquid qui natus error hic.`,
      coverUrl: 'https://placekitten.com/251/286',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio magnam reiciendis.`,
      subtitle: `Odio voluptatem provident earum optio.`,
      author: `Dr. Emanuel Ramos`,
      publisher: `Aragão`,
      publicationYear: 1957,
      genre: 'Voluptate',
      code: 'BOOK0179',
      isbn: '978-0-9700268-7-3',
      language: 'Português',
      edition: '1ª',
      pages: 630,
      synopsis: `Aspernatur soluta officiis molestiae tempora repellendus ipsum. Explicabo repellat repudiandae facere. Saepe repellat voluptates commodi.`,
      coverUrl: 'https://placeimg.com/758/395/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Est.`,
      subtitle: null,
      author: `Srta. Sophie Freitas`,
      publisher: `da Mota`,
      publicationYear: 2016,
      genre: 'Consectetur',
      code: 'BOOK0180',
      isbn: '978-0-375-04793-0',
      language: 'Português',
      edition: '3ª',
      pages: 180,
      synopsis: `Voluptates odit beatae eius magnam.`,
      coverUrl: 'https://dummyimage.com/349x396',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nihil quia.`,
      subtitle: null,
      author: `Francisco Dias`,
      publisher: `da Mota`,
      publicationYear: 1961,
      genre: 'Veritatis',
      code: 'BOOK0181',
      isbn: '978-1-870605-66-3',
      language: 'Português',
      edition: '5ª',
      pages: 756,
      synopsis: `Perspiciatis iure facere quis. Aliquid ullam minus et hic.`,
      coverUrl: 'https://www.lorempixel.com/685/167',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem incidunt.`,
      subtitle: null,
      author: `Felipe da Paz`,
      publisher: `Melo Lima S/A`,
      publicationYear: 1953,
      genre: 'Sunt',
      code: 'BOOK0182',
      isbn: '978-0-7609-5431-7',
      language: 'Português',
      edition: '1ª',
      pages: 146,
      synopsis: `Vero rerum reprehenderit maxime dolores. Quod nulla quisquam numquam. Commodi voluptate totam fugiat suscipit possimus quos aperiam.`,
      coverUrl: 'https://placekitten.com/905/112',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Numquam aperiam perspiciatis nam.`,
      subtitle: null,
      author: `João Miguel Nunes`,
      publisher: `Oliveira S.A.`,
      publicationYear: 1988,
      genre: 'Sapiente',
      code: 'BOOK0183',
      isbn: '978-1-67699-150-2',
      language: 'Português',
      edition: '4ª',
      pages: 350,
      synopsis: `Eveniet deserunt aut nisi architecto ratione deserunt. Commodi magni explicabo laboriosam nulla delectus consequuntur. Aperiam est ipsa.`,
      coverUrl: 'https://dummyimage.com/732x637',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iusto nobis.`,
      subtitle: `Fuga ab nesciunt perspiciatis.`,
      author: `Erick Santos`,
      publisher: `Pereira Ltda.`,
      publicationYear: 2009,
      genre: 'Eius',
      code: 'BOOK0184',
      isbn: '978-0-15-377959-6',
      language: 'Português',
      edition: '2ª',
      pages: 448,
      synopsis: `Nulla in cum iste ratione aliquam. Ullam odit possimus iure distinctio. Quasi veritatis ex qui dignissimos delectus voluptatibus.`,
      coverUrl: 'https://www.lorempixel.com/743/20',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci beatae enim.`,
      subtitle: `Occaecati totam facere voluptate.`,
      author: `Eduardo Gomes`,
      publisher: `das Neves Ferreira e Filhos`,
      publicationYear: 1997,
      genre: 'Doloribus',
      code: 'BOOK0185',
      isbn: '978-0-230-24102-2',
      language: 'Português',
      edition: '5ª',
      pages: 675,
      synopsis: `Excepturi distinctio itaque fuga. Optio velit voluptate voluptatum sunt soluta. Blanditiis sunt consectetur deleniti.`,
      coverUrl: 'https://placekitten.com/774/766',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore odio ullam quis.`,
      subtitle: `Deleniti modi ratione eveniet amet recusandae.`,
      author: `Luiz Gustavo Rodrigues`,
      publisher: `Cardoso Ribeiro e Filhos`,
      publicationYear: 1968,
      genre: 'Sint',
      code: 'BOOK0186',
      isbn: '978-0-86857-872-9',
      language: 'Português',
      edition: '1ª',
      pages: 151,
      synopsis: `Minima laboriosam veritatis labore neque odit. Officiis dignissimos tempora iste doloremque dolor incidunt fugiat. Vel fugiat mollitia consequatur.`,
      coverUrl: 'https://placeimg.com/172/604/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita nesciunt iure.`,
      subtitle: null,
      author: `Heloísa Pereira`,
      publisher: `Rezende`,
      publicationYear: 2023,
      genre: 'Non',
      code: 'BOOK0187',
      isbn: '978-1-75460-273-3',
      language: 'Português',
      edition: '3ª',
      pages: 294,
      synopsis: `Facere assumenda sapiente maiores. Ratione unde atque architecto.`,
      coverUrl: 'https://placekitten.com/78/410',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perferendis dolorum.`,
      subtitle: `Deleniti nobis consequuntur sequi.`,
      author: `Dra. Maria Cecília Ferreira`,
      publisher: `Jesus Ltda.`,
      publicationYear: 2000,
      genre: 'Laborum',
      code: 'BOOK0188',
      isbn: '978-1-907826-33-7',
      language: 'Português',
      edition: '5ª',
      pages: 568,
      synopsis: `Doloremque nesciunt mollitia iusto repellendus exercitationem assumenda. Inventore velit in ipsa sequi.`,
      coverUrl: 'https://dummyimage.com/61x767',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Soluta esse qui.`,
      subtitle: `Repellat rerum excepturi in placeat illo.`,
      author: `Dra. Fernanda Martins`,
      publisher: `Azevedo S.A.`,
      publicationYear: 2010,
      genre: 'Dolor',
      code: 'BOOK0189',
      isbn: '978-1-63618-637-5',
      language: 'Português',
      edition: '3ª',
      pages: 649,
      synopsis: `Necessitatibus iste tempora at aut mollitia. Repudiandae nobis ad.`,
      coverUrl: 'https://placeimg.com/407/142/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dignissimos enim.`,
      subtitle: null,
      author: `Ana Clara Ramos`,
      publisher: `Moura - EI`,
      publicationYear: 2001,
      genre: 'Accusamus',
      code: 'BOOK0190',
      isbn: '978-1-66212-867-7',
      language: 'Português',
      edition: '3ª',
      pages: 146,
      synopsis: `Veritatis sint consectetur dignissimos inventore quae. Culpa nemo est dicta quaerat itaque dicta.`,
      coverUrl: 'https://www.lorempixel.com/292/912',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Non doloribus eveniet.`,
      subtitle: `Sunt itaque nemo qui enim sunt.`,
      author: `Isabel Jesus`,
      publisher: `da Luz`,
      publicationYear: 2014,
      genre: 'Nesciunt',
      code: 'BOOK0191',
      isbn: '978-0-9676291-6-2',
      language: 'Português',
      edition: '4ª',
      pages: 663,
      synopsis: `Suscipit culpa sunt modi pariatur.`,
      coverUrl: 'https://placeimg.com/136/444/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus mollitia voluptatum.`,
      subtitle: `Quidem magnam quod.`,
      author: `Lavínia da Cunha`,
      publisher: `da Rocha`,
      publicationYear: 1993,
      genre: 'Quae',
      code: 'BOOK0192',
      isbn: '978-1-01-765636-7',
      language: 'Português',
      edition: '5ª',
      pages: 474,
      synopsis: `Dolorum quae consequatur.`,
      coverUrl: 'https://placeimg.com/950/992/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Assumenda omnis.`,
      subtitle: `Consequuntur reprehenderit sapiente cupiditate accusantium.`,
      author: `Davi Gonçalves`,
      publisher: `Teixeira e Filhos`,
      publicationYear: 1967,
      genre: 'Mollitia',
      code: 'BOOK0193',
      isbn: '978-0-04-275230-3',
      language: 'Português',
      edition: '3ª',
      pages: 585,
      synopsis: `Ipsam aliquid odio minima optio. Hic est amet a. Quisquam ut fugiat dolores at in.`,
      coverUrl: 'https://dummyimage.com/29x690',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore sunt.`,
      subtitle: null,
      author: `Bárbara da Cunha`,
      publisher: `Peixoto - EI`,
      publicationYear: 1990,
      genre: 'Corrupti',
      code: 'BOOK0194',
      isbn: '978-1-83938-661-9',
      language: 'Português',
      edition: '2ª',
      pages: 502,
      synopsis: `Autem eum accusamus omnis accusamus. Itaque architecto repellendus officiis fuga.`,
      coverUrl: 'https://placeimg.com/137/447/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam libero.`,
      subtitle: null,
      author: `Theo Teixeira`,
      publisher: `Fernandes Castro - EI`,
      publicationYear: 1988,
      genre: 'Itaque',
      code: 'BOOK0195',
      isbn: '978-0-525-71509-2',
      language: 'Português',
      edition: '4ª',
      pages: 117,
      synopsis: `Fugit odit doloremque nesciunt voluptates doloremque nulla. Est qui quidem nulla. Consequuntur libero dicta fugiat. Dolores quas voluptates.`,
      coverUrl: 'https://dummyimage.com/908x673',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Et ratione.`,
      subtitle: `Maxime voluptate officia.`,
      author: `Vitor Gabriel Araújo`,
      publisher: `Melo Mendes S.A.`,
      publicationYear: 2024,
      genre: 'Enim',
      code: 'BOOK0196',
      isbn: '978-0-396-85270-4',
      language: 'Português',
      edition: '5ª',
      pages: 333,
      synopsis: `Architecto deserunt odio consequuntur dignissimos at nihil. Dolores aspernatur quam est quam.`,
      coverUrl: 'https://dummyimage.com/501x868',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum eligendi ipsum odio.`,
      subtitle: null,
      author: `Yuri Rocha`,
      publisher: `Moreira - ME`,
      publicationYear: 1981,
      genre: 'Minus',
      code: 'BOOK0197',
      isbn: '978-1-76896-270-0',
      language: 'Português',
      edition: '1ª',
      pages: 686,
      synopsis: `Sequi quis ullam nisi corrupti quas. Fugit esse eligendi natus laboriosam. Consequatur iusto culpa deleniti accusamus magnam.`,
      coverUrl: 'https://placeimg.com/766/1006/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit voluptas fuga.`,
      subtitle: `Est voluptates architecto suscipit voluptatibus commodi.`,
      author: `Bruna da Mota`,
      publisher: `Fernandes`,
      publicationYear: 1976,
      genre: 'Laudantium',
      code: 'BOOK0198',
      isbn: '978-1-06-633705-7',
      language: 'Português',
      edition: '4ª',
      pages: 613,
      synopsis: `Possimus officia ea. Velit corporis dolorum neque optio cum blanditiis. Officia totam id nesciunt. Maxime deleniti in rerum.`,
      coverUrl: 'https://placeimg.com/517/618/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Est illum soluta quas.`,
      subtitle: null,
      author: `Calebe Monteiro`,
      publisher: `Fogaça da Rocha e Filhos`,
      publicationYear: 2011,
      genre: 'Nam',
      code: 'BOOK0199',
      isbn: '978-0-270-11686-1',
      language: 'Português',
      edition: '5ª',
      pages: 485,
      synopsis: `Cupiditate fugiat provident dicta delectus veniam. Necessitatibus distinctio dicta quibusdam repellat deleniti voluptatem.`,
      coverUrl: 'https://www.lorempixel.com/837/902',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aspernatur assumenda.`,
      subtitle: null,
      author: `Guilherme Campos`,
      publisher: `Araújo`,
      publicationYear: 1983,
      genre: 'Reprehenderit',
      code: 'BOOK0200',
      isbn: '978-1-71004-090-6',
      language: 'Português',
      edition: '5ª',
      pages: 595,
      synopsis: `Minima ab nobis voluptates quis. Labore excepturi inventore fuga tempora voluptatum repellendus.`,
      coverUrl: 'https://placeimg.com/739/816/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Animi explicabo ex aut.`,
      subtitle: null,
      author: `Pietra Nunes`,
      publisher: `Araújo Costa - EI`,
      publicationYear: 1976,
      genre: 'Hic',
      code: 'BOOK0201',
      isbn: '978-1-79786-305-4',
      language: 'Português',
      edition: '4ª',
      pages: 424,
      synopsis: `Sit voluptas quasi perspiciatis doloremque laborum.`,
      coverUrl: 'https://placeimg.com/166/713/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptates sequi temporibus.`,
      subtitle: `Eos deserunt corporis maxime nemo.`,
      author: `Dra. Alícia Costela`,
      publisher: `Carvalho`,
      publicationYear: 2000,
      genre: 'Incidunt',
      code: 'BOOK0202',
      isbn: '978-0-7178-3332-0',
      language: 'Português',
      edition: '3ª',
      pages: 249,
      synopsis: `Ipsa quaerat cum ut. Quisquam dolore ducimus labore tempore commodi.`,
      coverUrl: 'https://www.lorempixel.com/278/1007',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sit ut quisquam.`,
      subtitle: null,
      author: `Ana Clara Mendes`,
      publisher: `Nascimento`,
      publicationYear: 2011,
      genre: 'Ullam',
      code: 'BOOK0203',
      isbn: '978-0-341-41115-4',
      language: 'Português',
      edition: '2ª',
      pages: 306,
      synopsis: `Quia blanditiis facilis sequi veritatis. Qui est nihil deleniti harum incidunt quo. Maxime nobis dolore hic. Sequi et repellendus error dolor perspiciatis corporis.`,
      coverUrl: 'https://www.lorempixel.com/580/298',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eum magnam porro earum.`,
      subtitle: null,
      author: `Dra. Luana da Rosa`,
      publisher: `Gonçalves`,
      publicationYear: 2025,
      genre: 'Voluptatibus',
      code: 'BOOK0204',
      isbn: '978-0-523-30276-8',
      language: 'Português',
      edition: '2ª',
      pages: 348,
      synopsis: `Voluptatibus molestias excepturi perspiciatis. Quidem hic minus eligendi possimus deserunt.`,
      coverUrl: 'https://dummyimage.com/806x199',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quibusdam neque rem.`,
      subtitle: `Itaque cum consequuntur possimus.`,
      author: `Danilo da Rocha`,
      publisher: `da Paz Alves Ltda.`,
      publicationYear: 2010,
      genre: 'Repellat',
      code: 'BOOK0205',
      isbn: '978-0-662-01572-7',
      language: 'Português',
      edition: '1ª',
      pages: 797,
      synopsis: `Voluptatem officiis nihil voluptas.`,
      coverUrl: 'https://www.lorempixel.com/827/501',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores laborum.`,
      subtitle: null,
      author: `Dra. Camila Nascimento`,
      publisher: `Rezende e Filhos`,
      publicationYear: 2010,
      genre: 'Modi',
      code: 'BOOK0206',
      isbn: '978-1-5011-1178-5',
      language: 'Português',
      edition: '4ª',
      pages: 766,
      synopsis: `Nesciunt voluptates laboriosam. Recusandae debitis laborum officia.`,
      coverUrl: 'https://dummyimage.com/888x611',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eveniet quae.`,
      subtitle: null,
      author: `Carolina Nunes`,
      publisher: `Novaes - EI`,
      publicationYear: 1954,
      genre: 'Quidem',
      code: 'BOOK0207',
      isbn: '978-0-89813-129-1',
      language: 'Português',
      edition: '2ª',
      pages: 527,
      synopsis: `Mollitia reiciendis commodi. Nemo officiis assumenda ducimus.`,
      coverUrl: 'https://www.lorempixel.com/71/173',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error vitae cupiditate.`,
      subtitle: null,
      author: `Agatha Farias`,
      publisher: `Barbosa`,
      publicationYear: 1951,
      genre: 'Quas',
      code: 'BOOK0208',
      isbn: '978-1-297-58598-2',
      language: 'Português',
      edition: '3ª',
      pages: 681,
      synopsis: `Porro optio aliquid alias consequuntur. Vero nobis dolor facere consectetur. In mollitia ea officiis cum itaque velit perspiciatis.`,
      coverUrl: 'https://www.lorempixel.com/293/417',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quasi voluptatum possimus deserunt.`,
      subtitle: null,
      author: `Sr. Kaique da Costa`,
      publisher: `Pinto`,
      publicationYear: 1967,
      genre: 'Modi',
      code: 'BOOK0209',
      isbn: '978-0-14-181861-0',
      language: 'Português',
      edition: '5ª',
      pages: 579,
      synopsis: `Facilis ex earum sit. Earum atque voluptatem dolore veritatis. Cupiditate quas esse reprehenderit.`,
      coverUrl: 'https://placekitten.com/1002/195',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sint mollitia non.`,
      subtitle: null,
      author: `Davi Luiz Lopes`,
      publisher: `da Mata`,
      publicationYear: 1973,
      genre: 'Laborum',
      code: 'BOOK0210',
      isbn: '978-1-924082-22-8',
      language: 'Português',
      edition: '1ª',
      pages: 445,
      synopsis: `Quasi amet quas voluptate provident dolorum non. Delectus voluptates reiciendis magnam eius incidunt velit. Esse similique veniam illo est.`,
      coverUrl: 'https://www.lorempixel.com/184/162',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit cumque.`,
      subtitle: `Assumenda enim ut.`,
      author: `Kevin Silva`,
      publisher: `Rocha Sales - EI`,
      publicationYear: 1962,
      genre: 'Vitae',
      code: 'BOOK0211',
      isbn: '978-1-09-306853-5',
      language: 'Português',
      edition: '2ª',
      pages: 243,
      synopsis: `Aliquam ipsum cumque ut quis temporibus cupiditate facilis. Maiores veritatis in fugiat. Voluptas excepturi perspiciatis rerum sed similique.`,
      coverUrl: 'https://placeimg.com/594/612/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eaque a.`,
      subtitle: `Necessitatibus dolor esse ut officia repudiandae alias.`,
      author: `Mariane Rodrigues`,
      publisher: `Moraes S/A`,
      publicationYear: 1984,
      genre: 'Sint',
      code: 'BOOK0212',
      isbn: '978-1-4510-5265-7',
      language: 'Português',
      edition: '3ª',
      pages: 409,
      synopsis: `Inventore deserunt minus tempore.`,
      coverUrl: 'https://placeimg.com/841/253/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolor.`,
      subtitle: null,
      author: `Eloah das Neves`,
      publisher: `Novaes`,
      publicationYear: 2009,
      genre: 'Minima',
      code: 'BOOK0213',
      isbn: '978-1-62841-772-2',
      language: 'Português',
      edition: '3ª',
      pages: 263,
      synopsis: `Quia ab sunt quae beatae eligendi. Hic quia tempore cum.`,
      coverUrl: 'https://placekitten.com/407/981',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `In mollitia.`,
      subtitle: `Eveniet quisquam sunt.`,
      author: `Rebeca Nogueira`,
      publisher: `Correia Cavalcanti S/A`,
      publicationYear: 1967,
      genre: 'Debitis',
      code: 'BOOK0214',
      isbn: '978-1-80305-690-6',
      language: 'Português',
      edition: '4ª',
      pages: 256,
      synopsis: `Enim laborum quis dolorum corrupti maiores dolorum. Sint voluptatibus dolorum reprehenderit. Labore quos aut quas nostrum.`,
      coverUrl: 'https://dummyimage.com/386x304',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur alias.`,
      subtitle: null,
      author: `Danilo Pereira`,
      publisher: `da Paz S/A`,
      publicationYear: 1960,
      genre: 'Asperiores',
      code: 'BOOK0215',
      isbn: '978-1-84335-670-7',
      language: 'Português',
      edition: '5ª',
      pages: 557,
      synopsis: `Officia esse earum eligendi expedita in. Tempora delectus a optio eum eligendi. Tenetur aut delectus veniam facilis.`,
      coverUrl: 'https://www.lorempixel.com/623/228',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero.`,
      subtitle: null,
      author: `Stella Costela`,
      publisher: `Moreira`,
      publicationYear: 1975,
      genre: 'Magni',
      code: 'BOOK0216',
      isbn: '978-0-439-61129-9',
      language: 'Português',
      edition: '5ª',
      pages: 649,
      synopsis: `Nesciunt totam omnis. Deserunt ipsum atque velit nulla.`,
      coverUrl: 'https://dummyimage.com/617x971',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam aliquam deleniti.`,
      subtitle: null,
      author: `Raquel Fernandes`,
      publisher: `Moreira`,
      publicationYear: 2012,
      genre: 'Occaecati',
      code: 'BOOK0217',
      isbn: '978-1-176-88029-0',
      language: 'Português',
      edition: '1ª',
      pages: 622,
      synopsis: `Enim veritatis aperiam voluptas. Qui id placeat sit voluptas.`,
      coverUrl: 'https://placeimg.com/338/896/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quod id earum.`,
      subtitle: `A nemo nihil ab.`,
      author: `Laís Santos`,
      publisher: `Jesus`,
      publicationYear: 2022,
      genre: 'Est',
      code: 'BOOK0218',
      isbn: '978-1-81230-834-8',
      language: 'Português',
      edition: '1ª',
      pages: 672,
      synopsis: `Velit eius consequatur sit.`,
      coverUrl: 'https://dummyimage.com/105x509',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis officiis odio.`,
      subtitle: null,
      author: `Dr. Bruno Vieira`,
      publisher: `Cunha`,
      publicationYear: 1955,
      genre: 'Nemo',
      code: 'BOOK0219',
      isbn: '978-1-00-534240-1',
      language: 'Português',
      edition: '4ª',
      pages: 452,
      synopsis: `Autem quia fugit officiis sit odio mollitia repellendus. Eveniet dignissimos occaecati similique hic. Doloremque quas fuga temporibus atque delectus delectus.`,
      coverUrl: 'https://placeimg.com/360/386/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officia accusantium.`,
      subtitle: `Suscipit repellendus porro deleniti.`,
      author: `Breno Pereira`,
      publisher: `Ramos Nunes S/A`,
      publicationYear: 1967,
      genre: 'Qui',
      code: 'BOOK0220',
      isbn: '978-0-916601-00-3',
      language: 'Português',
      edition: '4ª',
      pages: 483,
      synopsis: `Quo eaque vel nobis recusandae. Vero autem quasi.`,
      coverUrl: 'https://dummyimage.com/693x174',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam natus.`,
      subtitle: `Repellendus esse laboriosam doloribus molestiae.`,
      author: `Pedro Lucas Viana`,
      publisher: `Aragão S/A`,
      publicationYear: 1994,
      genre: 'Corporis',
      code: 'BOOK0221',
      isbn: '978-0-86203-036-0',
      language: 'Português',
      edition: '1ª',
      pages: 282,
      synopsis: `Explicabo enim ullam placeat. Laudantium voluptatibus dolore vero. Facere nulla blanditiis unde ullam.`,
      coverUrl: 'https://dummyimage.com/88x309',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus nobis perspiciatis.`,
      subtitle: null,
      author: `Raul Jesus`,
      publisher: `Monteiro`,
      publicationYear: 2009,
      genre: 'Corporis',
      code: 'BOOK0222',
      isbn: '978-1-5410-2252-2',
      language: 'Português',
      edition: '5ª',
      pages: 534,
      synopsis: `Quam quos laboriosam architecto neque vero eius. Eum consectetur quisquam explicabo. Incidunt possimus impedit recusandae ex reiciendis omnis.`,
      coverUrl: 'https://placeimg.com/503/784/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Libero modi minus.`,
      subtitle: `Harum neque in neque.`,
      author: `Dra. Clarice Carvalho`,
      publisher: `Moreira Almeida S.A.`,
      publicationYear: 1964,
      genre: 'Ad',
      code: 'BOOK0223',
      isbn: '978-1-210-55247-3',
      language: 'Português',
      edition: '1ª',
      pages: 776,
      synopsis: `Voluptas totam doloribus repudiandae animi consequuntur vitae. Fugiat ad vitae fuga.`,
      coverUrl: 'https://placeimg.com/217/151/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sit adipisci facilis aspernatur.`,
      subtitle: `Accusamus rerum impedit.`,
      author: `Lucas Cunha`,
      publisher: `Ribeiro`,
      publicationYear: 1954,
      genre: 'Neque',
      code: 'BOOK0224',
      isbn: '978-1-04-120092-5',
      language: 'Português',
      edition: '4ª',
      pages: 712,
      synopsis: `Ab rerum perspiciatis soluta. Quae ducimus nemo esse dolorem ut earum. Maxime voluptate commodi distinctio.`,
      coverUrl: 'https://placeimg.com/114/448/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reprehenderit voluptate.`,
      subtitle: null,
      author: `Ana Julia Rezende`,
      publisher: `Lopes`,
      publicationYear: 1957,
      genre: 'Ullam',
      code: 'BOOK0225',
      isbn: '978-1-205-63411-5',
      language: 'Português',
      edition: '2ª',
      pages: 615,
      synopsis: `Nobis sed adipisci eligendi molestiae aperiam. Ab tenetur deleniti dicta ut dolores assumenda necessitatibus.`,
      coverUrl: 'https://www.lorempixel.com/91/990',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsam.`,
      subtitle: `Velit ab explicabo.`,
      author: `João Vitor Santos`,
      publisher: `Lopes Novaes e Filhos`,
      publicationYear: 1968,
      genre: 'Magnam',
      code: 'BOOK0226',
      isbn: '978-0-568-18209-7',
      language: 'Português',
      edition: '5ª',
      pages: 326,
      synopsis: `Nesciunt sequi enim corrupti iure suscipit at. Sunt rem omnis quisquam cum. Maiores quas officiis ut exercitationem quos excepturi.`,
      coverUrl: 'https://www.lorempixel.com/737/882',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores voluptatum non.`,
      subtitle: null,
      author: `Miguel Sales`,
      publisher: `Alves S.A.`,
      publicationYear: 1956,
      genre: 'Ipsa',
      code: 'BOOK0227',
      isbn: '978-1-175-24214-3',
      language: 'Português',
      edition: '3ª',
      pages: 758,
      synopsis: `Explicabo architecto quae itaque voluptates voluptatem. Officiis consequuntur commodi necessitatibus aliquam similique. Illum nulla perspiciatis ipsam maiores numquam.`,
      coverUrl: 'https://www.lorempixel.com/642/765',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magni ea soluta.`,
      subtitle: `Nulla officia qui.`,
      author: `Samuel Alves`,
      publisher: `Cavalcanti Gonçalves - ME`,
      publicationYear: 2018,
      genre: 'Dolore',
      code: 'BOOK0228',
      isbn: '978-0-367-15778-4',
      language: 'Português',
      edition: '4ª',
      pages: 346,
      synopsis: `Assumenda quasi totam ullam. Dicta eveniet et voluptatum laborum praesentium. Beatae iste molestias veniam corporis distinctio necessitatibus.`,
      coverUrl: 'https://placekitten.com/778/127',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem distinctio distinctio.`,
      subtitle: `Veritatis placeat earum.`,
      author: `Camila Cardoso`,
      publisher: `Campos Freitas - ME`,
      publicationYear: 2003,
      genre: 'Beatae',
      code: 'BOOK0229',
      isbn: '978-1-68342-016-3',
      language: 'Português',
      edition: '5ª',
      pages: 642,
      synopsis: `Cum expedita in labore porro. Vitae ipsa totam necessitatibus. Natus tempora dicta.`,
      coverUrl: 'https://placekitten.com/296/663',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio.`,
      subtitle: null,
      author: `Bianca Sales`,
      publisher: `Correia`,
      publicationYear: 2007,
      genre: 'Veniam',
      code: 'BOOK0230',
      isbn: '978-1-80727-910-3',
      language: 'Português',
      edition: '3ª',
      pages: 194,
      synopsis: `In molestias cumque fugiat expedita. Voluptas nemo accusamus repellendus accusamus.`,
      coverUrl: 'https://placeimg.com/628/255/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit explicabo repudiandae.`,
      subtitle: null,
      author: `Manuela Melo`,
      publisher: `da Luz - ME`,
      publicationYear: 1974,
      genre: 'Nobis',
      code: 'BOOK0231',
      isbn: '978-0-89286-646-5',
      language: 'Português',
      edition: '5ª',
      pages: 787,
      synopsis: `Vel temporibus aut assumenda saepe at accusamus ut. Libero quibusdam unde aut.`,
      coverUrl: 'https://placekitten.com/909/66',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio quod mollitia.`,
      subtitle: `Deserunt iusto commodi.`,
      author: `Júlia Novaes`,
      publisher: `Moura S.A.`,
      publicationYear: 1951,
      genre: 'Quae',
      code: 'BOOK0232',
      isbn: '978-1-4463-0600-0',
      language: 'Português',
      edition: '2ª',
      pages: 294,
      synopsis: `Ratione sapiente maxime qui.`,
      coverUrl: 'https://dummyimage.com/650x686',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus doloribus voluptate.`,
      subtitle: `Nulla hic amet ut.`,
      author: `Ana Nogueira`,
      publisher: `Nunes Lopes - EI`,
      publicationYear: 1986,
      genre: 'Dolore',
      code: 'BOOK0233',
      isbn: '978-0-12-819648-9',
      language: 'Português',
      edition: '4ª',
      pages: 577,
      synopsis: `Dignissimos at ipsa occaecati nihil adipisci. Ullam aspernatur fugit quia consectetur iste occaecati.`,
      coverUrl: 'https://dummyimage.com/733x382',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error modi.`,
      subtitle: `Quas rem fugiat ea.`,
      author: `Guilherme Cardoso`,
      publisher: `Aragão Cavalcanti S/A`,
      publicationYear: 2010,
      genre: 'Officia',
      code: 'BOOK0234',
      isbn: '978-0-244-21175-2',
      language: 'Português',
      edition: '3ª',
      pages: 308,
      synopsis: `Aut recusandae impedit laborum numquam distinctio. Fugiat et tenetur repellat debitis ab.`,
      coverUrl: 'https://www.lorempixel.com/365/64',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus laborum nostrum.`,
      subtitle: `A maxime ducimus commodi non modi.`,
      author: `Maitê da Costa`,
      publisher: `Moreira Correia S.A.`,
      publicationYear: 2024,
      genre: 'Aliquam',
      code: 'BOOK0235',
      isbn: '978-0-312-44731-1',
      language: 'Português',
      edition: '5ª',
      pages: 527,
      synopsis: `Officiis iusto repellat ipsa veniam ullam dolorum. Porro suscipit eligendi hic nesciunt. Est recusandae veritatis laborum sunt incidunt quia repellendus.`,
      coverUrl: 'https://placeimg.com/220/784/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus fugiat.`,
      subtitle: null,
      author: `Ana Clara Porto`,
      publisher: `Azevedo Silva Ltda.`,
      publicationYear: 1981,
      genre: 'Repudiandae',
      code: 'BOOK0236',
      isbn: '978-1-9856-0125-3',
      language: 'Português',
      edition: '4ª',
      pages: 663,
      synopsis: `Facere asperiores omnis fuga. Commodi et ab eveniet iure recusandae. Natus harum nobis minima aut.`,
      coverUrl: 'https://placeimg.com/569/153/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Et eum deserunt.`,
      subtitle: `Libero voluptatibus in commodi cupiditate eveniet.`,
      author: `Eduarda Aragão`,
      publisher: `Aragão`,
      publicationYear: 2019,
      genre: 'Temporibus',
      code: 'BOOK0237',
      isbn: '978-1-4260-8805-6',
      language: 'Português',
      edition: '4ª',
      pages: 288,
      synopsis: `Iusto rerum impedit error.`,
      coverUrl: 'https://placeimg.com/649/708/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam est.`,
      subtitle: null,
      author: `Ana Beatriz Novaes`,
      publisher: `Ramos`,
      publicationYear: 1956,
      genre: 'Possimus',
      code: 'BOOK0238',
      isbn: '978-1-910300-21-3',
      language: 'Português',
      edition: '1ª',
      pages: 522,
      synopsis: `Dolorem at quam repellat repellendus modi. Vel sint ea. Beatae veniam asperiores.`,
      coverUrl: 'https://placekitten.com/674/777',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Unde nesciunt.`,
      subtitle: null,
      author: `Cauê Lopes`,
      publisher: `Oliveira Porto e Filhos`,
      publicationYear: 1997,
      genre: 'Cupiditate',
      code: 'BOOK0239',
      isbn: '978-1-74573-144-2',
      language: 'Português',
      edition: '1ª',
      pages: 732,
      synopsis: `Nam sit optio quasi dignissimos aspernatur. Animi accusamus dolor repellendus deleniti autem dignissimos.`,
      coverUrl: 'https://placeimg.com/641/638/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sed autem.`,
      subtitle: null,
      author: `Enzo Gabriel Moreira`,
      publisher: `Porto`,
      publicationYear: 1951,
      genre: 'Sit',
      code: 'BOOK0240',
      isbn: '978-1-314-62491-5',
      language: 'Português',
      edition: '1ª',
      pages: 642,
      synopsis: `Soluta quia dolores tempora deleniti adipisci optio. Explicabo blanditiis mollitia explicabo distinctio id inventore.`,
      coverUrl: 'https://placeimg.com/683/108/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga aliquid.`,
      subtitle: null,
      author: `Sabrina Pereira`,
      publisher: `Gonçalves da Mota - ME`,
      publicationYear: 2017,
      genre: 'Dolorum',
      code: 'BOOK0241',
      isbn: '978-1-86103-131-0',
      language: 'Português',
      edition: '2ª',
      pages: 346,
      synopsis: `Nemo dolores minus.`,
      coverUrl: 'https://placeimg.com/564/463/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Hic dolore reprehenderit.`,
      subtitle: null,
      author: `Sra. Luna da Rocha`,
      publisher: `da Rocha Monteiro e Filhos`,
      publicationYear: 2008,
      genre: 'Illo',
      code: 'BOOK0242',
      isbn: '978-0-12-897432-2',
      language: 'Português',
      edition: '5ª',
      pages: 349,
      synopsis: `Cumque ex iste vitae. Incidunt accusantium voluptate sunt cupiditate quis ab. Voluptas nesciunt laborum dolorum autem reprehenderit.`,
      coverUrl: 'https://dummyimage.com/595x467',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quod aut.`,
      subtitle: `Iste quasi voluptatibus ducimus laborum.`,
      author: `Dr. André Moraes`,
      publisher: `Melo`,
      publicationYear: 2020,
      genre: 'Quas',
      code: 'BOOK0243',
      isbn: '978-0-480-26325-6',
      language: 'Português',
      edition: '4ª',
      pages: 157,
      synopsis: `Doloribus qui voluptate. Dignissimos at ullam fugiat autem earum. Perspiciatis tempore ipsum vero minima eaque perspiciatis suscipit.`,
      coverUrl: 'https://placekitten.com/800/854',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deleniti neque.`,
      subtitle: null,
      author: `Sra. Mariana Costa`,
      publisher: `Ramos`,
      publicationYear: 1962,
      genre: 'Reiciendis',
      code: 'BOOK0244',
      isbn: '978-1-107-27284-2',
      language: 'Português',
      edition: '5ª',
      pages: 143,
      synopsis: `Optio esse enim reiciendis accusamus aliquam eligendi. Commodi laborum a explicabo rerum amet consequuntur soluta. Pariatur quisquam culpa assumenda earum voluptatum deserunt. Ullam enim adipisci ut dolorum perspiciatis harum id.`,
      coverUrl: 'https://placekitten.com/200/535',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Est natus perspiciatis eum.`,
      subtitle: null,
      author: `Beatriz da Paz`,
      publisher: `Cunha`,
      publicationYear: 1985,
      genre: 'Nesciunt',
      code: 'BOOK0245',
      isbn: '978-1-4149-7826-0',
      language: 'Português',
      edition: '5ª',
      pages: 677,
      synopsis: `Consequuntur ipsam et vel. Iusto incidunt in illum adipisci nam. At consequuntur tenetur ratione neque fuga.`,
      coverUrl: 'https://placeimg.com/600/109/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo ab.`,
      subtitle: null,
      author: `Laís Barros`,
      publisher: `Caldeira Ltda.`,
      publicationYear: 2000,
      genre: 'Totam',
      code: 'BOOK0246',
      isbn: '978-1-914975-01-1',
      language: 'Português',
      edition: '1ª',
      pages: 406,
      synopsis: `Qui amet dignissimos corporis qui libero dolore. Error est voluptatibus ab. Numquam dicta architecto corrupti sunt maxime doloribus. Labore rerum ipsam animi.`,
      coverUrl: 'https://placeimg.com/249/614/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem reprehenderit sapiente.`,
      subtitle: `Ea nostrum ipsa omnis commodi corporis.`,
      author: `Diego da Conceição`,
      publisher: `da Cunha Silva e Filhos`,
      publicationYear: 1967,
      genre: 'Voluptates',
      code: 'BOOK0247',
      isbn: '978-1-74419-754-6',
      language: 'Português',
      edition: '1ª',
      pages: 612,
      synopsis: `Possimus autem impedit incidunt adipisci itaque. Harum neque alias officiis omnis ipsam tenetur. Vitae iusto quam eius voluptatem facere.`,
      coverUrl: 'https://placeimg.com/431/714/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aperiam omnis explicabo.`,
      subtitle: `Excepturi quaerat ratione eius quis esse.`,
      author: `Ana Clara Rocha`,
      publisher: `Ribeiro`,
      publicationYear: 2000,
      genre: 'Sequi',
      code: 'BOOK0248',
      isbn: '978-1-259-95996-7',
      language: 'Português',
      edition: '3ª',
      pages: 130,
      synopsis: `Adipisci quasi doloremque. Libero perspiciatis eum doloremque.`,
      coverUrl: 'https://dummyimage.com/484x215',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quidem in aperiam.`,
      subtitle: `Dolorum alias quibusdam ipsam fugiat occaecati.`,
      author: `Davi Martins`,
      publisher: `Porto - ME`,
      publicationYear: 2024,
      genre: 'Deleniti',
      code: 'BOOK0249',
      isbn: '978-0-477-43326-6',
      language: 'Português',
      edition: '4ª',
      pages: 187,
      synopsis: `Assumenda ad vero atque alias. Tempora facere illum molestias. Exercitationem placeat vero quas.`,
      coverUrl: 'https://dummyimage.com/1016x389',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repudiandae magnam explicabo.`,
      subtitle: `Sequi reiciendis ipsa numquam soluta necessitatibus.`,
      author: `Yuri Silveira`,
      publisher: `Castro`,
      publicationYear: 1969,
      genre: 'Cumque',
      code: 'BOOK0250',
      isbn: '978-0-09-850344-7',
      language: 'Português',
      edition: '4ª',
      pages: 424,
      synopsis: `Architecto sit voluptas asperiores nemo sequi. Magnam id animi possimus beatae iusto totam ea. Adipisci in dicta.`,
      coverUrl: 'https://dummyimage.com/121x285',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repellendus eveniet quidem.`,
      subtitle: `Doloremque asperiores veniam.`,
      author: `Pietra Azevedo`,
      publisher: `Cardoso`,
      publicationYear: 1984,
      genre: 'Nesciunt',
      code: 'BOOK0251',
      isbn: '978-1-240-10783-4',
      language: 'Português',
      edition: '1ª',
      pages: 235,
      synopsis: `Labore quos soluta dolorem ut ad. Modi similique placeat qui mollitia. Harum fugiat commodi.`,
      coverUrl: 'https://www.lorempixel.com/874/282',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis nulla temporibus.`,
      subtitle: null,
      author: `Sr. Joaquim Pinto`,
      publisher: `Duarte S.A.`,
      publicationYear: 1963,
      genre: 'Consectetur',
      code: 'BOOK0252',
      isbn: '978-0-689-00301-1',
      language: 'Português',
      edition: '1ª',
      pages: 191,
      synopsis: `Ipsa eligendi et nobis. Voluptatum consectetur id omnis omnis.`,
      coverUrl: 'https://dummyimage.com/156x512',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Provident repellendus tempore.`,
      subtitle: `Ipsam esse facilis mollitia.`,
      author: `Elisa Souza`,
      publisher: `Lopes`,
      publicationYear: 1999,
      genre: 'Voluptatem',
      code: 'BOOK0253',
      isbn: '978-0-569-74132-3',
      language: 'Português',
      edition: '1ª',
      pages: 672,
      synopsis: `Esse mollitia commodi quam ratione. Voluptate praesentium officiis. Veritatis accusantium saepe earum nihil error vitae.`,
      coverUrl: 'https://placeimg.com/122/571/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusantium fugit ipsam.`,
      subtitle: `Dignissimos delectus inventore amet.`,
      author: `Arthur Viana`,
      publisher: `Araújo`,
      publicationYear: 1984,
      genre: 'Sequi',
      code: 'BOOK0254',
      isbn: '978-1-930596-60-3',
      language: 'Português',
      edition: '4ª',
      pages: 249,
      synopsis: `Harum quam perspiciatis similique vel iure nemo. Quisquam ea vero iusto voluptatibus dolores tenetur.`,
      coverUrl: 'https://www.lorempixel.com/574/561',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quo eos.`,
      subtitle: `Hic nulla facere omnis quos repellat.`,
      author: `Alana Costa`,
      publisher: `Martins`,
      publicationYear: 1959,
      genre: 'Fuga',
      code: 'BOOK0255',
      isbn: '978-1-70707-057-2',
      language: 'Português',
      edition: '3ª',
      pages: 357,
      synopsis: `Illum neque aspernatur tempore mollitia. Ipsam ducimus ratione ea. Consectetur occaecati corporis nulla amet beatae aliquam.`,
      coverUrl: 'https://www.lorempixel.com/901/649',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quaerat aperiam quaerat.`,
      subtitle: `Voluptate accusamus sapiente sed.`,
      author: `Raquel Barbosa`,
      publisher: `Monteiro Cavalcanti S/A`,
      publicationYear: 2000,
      genre: 'Quae',
      code: 'BOOK0256',
      isbn: '978-0-8133-5956-4',
      language: 'Português',
      edition: '3ª',
      pages: 735,
      synopsis: `Soluta corporis eveniet ratione ex illum. Iusto voluptate numquam cum aliquid ut.`,
      coverUrl: 'https://dummyimage.com/52x217',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magni quos magni.`,
      subtitle: `Quae velit fugiat nesciunt omnis corrupti.`,
      author: `Ana Júlia Cardoso`,
      publisher: `Santos Vieira e Filhos`,
      publicationYear: 1975,
      genre: 'Nihil',
      code: 'BOOK0257',
      isbn: '978-0-9788754-3-5',
      language: 'Português',
      edition: '4ª',
      pages: 421,
      synopsis: `Tenetur eveniet reiciendis voluptate doloremque. Quibusdam blanditiis dolores quasi sunt facere. Natus asperiores facere laborum dolorem ratione.`,
      coverUrl: 'https://dummyimage.com/470x256',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perferendis pariatur non.`,
      subtitle: `Exercitationem blanditiis illum magnam.`,
      author: `Murilo Sales`,
      publisher: `da Mata Ramos S/A`,
      publicationYear: 2000,
      genre: 'Doloremque',
      code: 'BOOK0258',
      isbn: '978-1-4871-2060-3',
      language: 'Português',
      edition: '3ª',
      pages: 216,
      synopsis: `Consequatur sint ullam temporibus. Consectetur possimus dolores eos excepturi repudiandae.`,
      coverUrl: 'https://www.lorempixel.com/689/220',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Qui explicabo.`,
      subtitle: null,
      author: `Júlia Porto`,
      publisher: `Gonçalves`,
      publicationYear: 2009,
      genre: 'Perferendis',
      code: 'BOOK0259',
      isbn: '978-0-9812099-5-1',
      language: 'Português',
      edition: '2ª',
      pages: 548,
      synopsis: `Eum debitis quam eius quo doloremque. Exercitationem natus tempore neque sapiente incidunt eum. Quidem veritatis aliquam velit sunt quasi.`,
      coverUrl: 'https://placekitten.com/881/569',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita cumque.`,
      subtitle: `Earum ipsa suscipit enim.`,
      author: `Otávio Cavalcanti`,
      publisher: `Freitas da Conceição S/A`,
      publicationYear: 1969,
      genre: 'Enim',
      code: 'BOOK0260',
      isbn: '978-0-908830-70-1',
      language: 'Português',
      edition: '4ª',
      pages: 486,
      synopsis: `Eligendi veniam incidunt ipsam commodi. Eos autem provident sapiente ipsam inventore ea. Voluptatibus quasi blanditiis explicabo.`,
      coverUrl: 'https://www.lorempixel.com/161/455',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Culpa excepturi iste.`,
      subtitle: null,
      author: `Dra. Nicole Cardoso`,
      publisher: `Azevedo`,
      publicationYear: 1996,
      genre: 'Non',
      code: 'BOOK0261',
      isbn: '978-1-380-03296-6',
      language: 'Português',
      edition: '5ª',
      pages: 708,
      synopsis: `Eaque corrupti repellendus quasi eligendi. Odio at maiores quam distinctio.`,
      coverUrl: 'https://placeimg.com/889/137/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nostrum quae aliquam.`,
      subtitle: null,
      author: `Sra. Mariana Nascimento`,
      publisher: `Monteiro Rocha - EI`,
      publicationYear: 2001,
      genre: 'Unde',
      code: 'BOOK0262',
      isbn: '978-1-347-76958-4',
      language: 'Português',
      edition: '3ª',
      pages: 540,
      synopsis: `Atque beatae sunt quidem enim. Eveniet optio blanditiis iure eum beatae possimus. Quo laborum rem laudantium.`,
      coverUrl: 'https://www.lorempixel.com/843/480',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eaque dolor.`,
      subtitle: null,
      author: `Ana Carolina Martins`,
      publisher: `Lopes`,
      publicationYear: 2021,
      genre: 'Neque',
      code: 'BOOK0263',
      isbn: '978-1-66404-735-8',
      language: 'Português',
      edition: '5ª',
      pages: 689,
      synopsis: `Ipsum dolore soluta modi quod.`,
      coverUrl: 'https://dummyimage.com/225x675',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestiae veniam accusantium fugit.`,
      subtitle: `Totam quisquam mollitia omnis maxime.`,
      author: `Sr. Davi Lucca Teixeira`,
      publisher: `Dias`,
      publicationYear: 1953,
      genre: 'Illum',
      code: 'BOOK0264',
      isbn: '978-1-56383-000-6',
      language: 'Português',
      edition: '4ª',
      pages: 207,
      synopsis: `Magnam recusandae aliquam eligendi. Dolorem quo dolorum. Quibusdam repellat fugiat id repellendus.`,
      coverUrl: 'https://www.lorempixel.com/552/173',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magnam provident.`,
      subtitle: `Accusantium quia molestiae ullam atque.`,
      author: `Vitória Novaes`,
      publisher: `Lima Martins - ME`,
      publicationYear: 1976,
      genre: 'Quam',
      code: 'BOOK0265',
      isbn: '978-1-4731-4976-2',
      language: 'Português',
      edition: '5ª',
      pages: 594,
      synopsis: `At vitae natus laboriosam tenetur modi. Fugit voluptatibus quas veritatis quis.`,
      coverUrl: 'https://dummyimage.com/221x926',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptate id doloremque.`,
      subtitle: `Labore autem est corporis occaecati.`,
      author: `Caio da Cunha`,
      publisher: `Rodrigues Farias S/A`,
      publicationYear: 1964,
      genre: 'Dicta',
      code: 'BOOK0266',
      isbn: '978-1-893074-64-4',
      language: 'Português',
      edition: '1ª',
      pages: 451,
      synopsis: `Alias porro nisi sit. Porro quidem recusandae molestias est. Eum quae maiores similique voluptatibus.`,
      coverUrl: 'https://placeimg.com/166/215/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat quidem.`,
      subtitle: `Maxime commodi deserunt sit.`,
      author: `Arthur Pereira`,
      publisher: `da Cunha`,
      publicationYear: 2004,
      genre: 'Sunt',
      code: 'BOOK0267',
      isbn: '978-0-86604-164-5',
      language: 'Português',
      edition: '4ª',
      pages: 337,
      synopsis: `Eum suscipit natus cumque enim placeat rem. Maxime dolorum iure vel unde quam.`,
      coverUrl: 'https://placeimg.com/277/336/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsum.`,
      subtitle: null,
      author: `Camila da Costa`,
      publisher: `Campos`,
      publicationYear: 1975,
      genre: 'Ab',
      code: 'BOOK0268',
      isbn: '978-0-318-75109-2',
      language: 'Português',
      edition: '4ª',
      pages: 706,
      synopsis: `Culpa expedita nam dolorem occaecati unde earum reprehenderit. Nesciunt esse numquam illo ducimus molestiae. Aspernatur corrupti quas eius ea.`,
      coverUrl: 'https://placeimg.com/209/259/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nemo sequi non.`,
      subtitle: null,
      author: `Dra. Natália Ribeiro`,
      publisher: `da Cunha Almeida S.A.`,
      publicationYear: 1958,
      genre: 'Esse',
      code: 'BOOK0269',
      isbn: '978-0-227-05102-3',
      language: 'Português',
      edition: '5ª',
      pages: 204,
      synopsis: `Incidunt iusto esse quis dolores hic. Provident explicabo saepe et aspernatur non. Veritatis veniam rerum quae saepe.`,
      coverUrl: 'https://placekitten.com/904/1003',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam ipsa.`,
      subtitle: `Debitis sint sequi quo exercitationem.`,
      author: `Clara da Mota`,
      publisher: `Moura`,
      publicationYear: 2012,
      genre: 'Dolorum',
      code: 'BOOK0270',
      isbn: '978-0-7583-0945-7',
      language: 'Português',
      edition: '5ª',
      pages: 754,
      synopsis: `Totam magnam accusamus earum officia odit. Aliquam possimus ducimus numquam voluptas reprehenderit.`,
      coverUrl: 'https://placeimg.com/964/930/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore soluta.`,
      subtitle: null,
      author: `Ana Lívia Azevedo`,
      publisher: `Araújo`,
      publicationYear: 1972,
      genre: 'Similique',
      code: 'BOOK0271',
      isbn: '978-0-216-10705-2',
      language: 'Português',
      edition: '3ª',
      pages: 729,
      synopsis: `Eius sequi omnis qui ex perferendis tempore. Temporibus nesciunt velit maiores.`,
      coverUrl: 'https://www.lorempixel.com/825/852',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deserunt quis.`,
      subtitle: `Quas assumenda ipsam.`,
      author: `Otávio da Paz`,
      publisher: `da Luz`,
      publicationYear: 1973,
      genre: 'Tempora',
      code: 'BOOK0272',
      isbn: '978-1-4851-5791-5',
      language: 'Português',
      edition: '3ª',
      pages: 244,
      synopsis: `At ullam delectus assumenda et occaecati accusantium. Ratione dolor fugiat aspernatur. Est perspiciatis velit sint quibusdam.`,
      coverUrl: 'https://www.lorempixel.com/271/635',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Provident debitis consequuntur.`,
      subtitle: `Impedit saepe earum dicta voluptatem.`,
      author: `Samuel Pires`,
      publisher: `Carvalho`,
      publicationYear: 2018,
      genre: 'Porro',
      code: 'BOOK0273',
      isbn: '978-1-58720-962-8',
      language: 'Português',
      edition: '2ª',
      pages: 668,
      synopsis: `Distinctio praesentium expedita repellat recusandae dignissimos praesentium. Mollitia quia eaque maiores distinctio dolor ea. Maxime occaecati labore iusto.`,
      coverUrl: 'https://placeimg.com/661/762/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus eum autem facere.`,
      subtitle: null,
      author: `Davi Lucca Peixoto`,
      publisher: `Melo`,
      publicationYear: 1956,
      genre: 'Labore',
      code: 'BOOK0274',
      isbn: '978-0-542-78207-7',
      language: 'Português',
      edition: '3ª',
      pages: 109,
      synopsis: `Nisi possimus quasi labore doloribus quam nobis. Perspiciatis error voluptas soluta quis tempore magni. Incidunt earum neque nihil cum cumque. Suscipit vitae velit dicta voluptas.`,
      coverUrl: 'https://placekitten.com/285/266',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consectetur.`,
      subtitle: null,
      author: `Vitor da Conceição`,
      publisher: `Ramos`,
      publicationYear: 2002,
      genre: 'Nam',
      code: 'BOOK0275',
      isbn: '978-1-02-324412-1',
      language: 'Português',
      edition: '4ª',
      pages: 525,
      synopsis: `Ipsa quam culpa nam quod. Labore exercitationem iusto.`,
      coverUrl: 'https://placeimg.com/807/435/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rerum provident quis.`,
      subtitle: `Harum et vel.`,
      author: `Stella Martins`,
      publisher: `Pereira`,
      publicationYear: 1978,
      genre: 'Saepe',
      code: 'BOOK0276',
      isbn: '978-0-579-03923-6',
      language: 'Português',
      edition: '5ª',
      pages: 395,
      synopsis: `Excepturi reprehenderit nostrum quibusdam totam officia. Libero aliquid error at. Omnis incidunt eligendi harum reprehenderit alias.`,
      coverUrl: 'https://dummyimage.com/863x367',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Placeat rerum iure.`,
      subtitle: `Expedita quasi omnis.`,
      author: `Yasmin Alves`,
      publisher: `Lopes Costela - EI`,
      publicationYear: 2019,
      genre: 'Quae',
      code: 'BOOK0277',
      isbn: '978-1-07-660464-4',
      language: 'Português',
      edition: '3ª',
      pages: 655,
      synopsis: `Rem tenetur magnam quos quae sapiente voluptas beatae. Voluptatem minus fugit perferendis.`,
      coverUrl: 'https://placekitten.com/307/14',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ducimus maiores nostrum sit.`,
      subtitle: `Aliquid eligendi commodi laudantium facilis.`,
      author: `Nina Moura`,
      publisher: `Pereira`,
      publicationYear: 1954,
      genre: 'Labore',
      code: 'BOOK0278',
      isbn: '978-0-8424-5607-4',
      language: 'Português',
      edition: '4ª',
      pages: 369,
      synopsis: `Odio nisi facere alias qui. Cupiditate modi commodi corporis laudantium. Exercitationem itaque nulla ullam temporibus.`,
      coverUrl: 'https://www.lorempixel.com/938/83',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga corporis voluptate.`,
      subtitle: `Fugit voluptatem aspernatur.`,
      author: `Sofia Jesus`,
      publisher: `Nunes`,
      publicationYear: 2025,
      genre: 'Adipisci',
      code: 'BOOK0279',
      isbn: '978-1-161-39449-8',
      language: 'Português',
      edition: '3ª',
      pages: 724,
      synopsis: `Sequi doloribus reiciendis fugiat labore quis ipsa. Eius perferendis non tenetur. Earum illum accusantium impedit consectetur.`,
      coverUrl: 'https://placekitten.com/546/947',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore accusantium.`,
      subtitle: null,
      author: `Sr. Bernardo Gomes`,
      publisher: `Peixoto`,
      publicationYear: 1957,
      genre: 'Tempora',
      code: 'BOOK0280',
      isbn: '978-1-78055-557-7',
      language: 'Português',
      edition: '5ª',
      pages: 459,
      synopsis: `Sequi libero minus cumque harum illo optio. Voluptas occaecati natus exercitationem dignissimos voluptates fuga.`,
      coverUrl: 'https://placeimg.com/597/645/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci numquam cumque.`,
      subtitle: null,
      author: `Dr. Kaique Aragão`,
      publisher: `Rodrigues`,
      publicationYear: 1987,
      genre: 'Ex',
      code: 'BOOK0281',
      isbn: '978-0-691-16331-4',
      language: 'Português',
      edition: '3ª',
      pages: 686,
      synopsis: `Debitis culpa quod quasi illo. Explicabo dolor tempore eius quo occaecati. Magnam minus dolore illo quidem enim.`,
      coverUrl: 'https://dummyimage.com/920x321',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim minus ex.`,
      subtitle: null,
      author: `Milena da Luz`,
      publisher: `Nogueira - EI`,
      publicationYear: 1966,
      genre: 'Ullam',
      code: 'BOOK0282',
      isbn: '978-1-63093-299-2',
      language: 'Português',
      edition: '2ª',
      pages: 355,
      synopsis: `Nobis quasi veniam eveniet. Cumque numquam placeat veritatis ad. Sunt omnis mollitia sint sed cum fuga soluta.`,
      coverUrl: 'https://dummyimage.com/358x967',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur aperiam adipisci.`,
      subtitle: null,
      author: `Letícia Ramos`,
      publisher: `Pires Duarte S.A.`,
      publicationYear: 1998,
      genre: 'Officiis',
      code: 'BOOK0283',
      isbn: '978-1-237-10068-8',
      language: 'Português',
      edition: '4ª',
      pages: 177,
      synopsis: `Architecto impedit ea quaerat commodi quod. Quaerat ipsa repudiandae animi repellat repudiandae quam. Facilis quaerat maiores.`,
      coverUrl: 'https://www.lorempixel.com/901/877',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corporis ea.`,
      subtitle: `Quidem beatae cumque impedit excepturi totam.`,
      author: `Cecília Ferreira`,
      publisher: `Melo e Filhos`,
      publicationYear: 1950,
      genre: 'Voluptate',
      code: 'BOOK0284',
      isbn: '978-1-7345475-7-3',
      language: 'Português',
      edition: '1ª',
      pages: 569,
      synopsis: `Eius alias consequuntur maxime ad sunt natus. Esse quaerat necessitatibus esse quae.`,
      coverUrl: 'https://dummyimage.com/603x316',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Non similique.`,
      subtitle: null,
      author: `Pedro Miguel Dias`,
      publisher: `da Rosa - EI`,
      publicationYear: 2013,
      genre: 'Incidunt',
      code: 'BOOK0285',
      isbn: '978-0-458-86792-9',
      language: 'Português',
      edition: '3ª',
      pages: 430,
      synopsis: `Nesciunt magnam minima fugiat. Officiis sit laboriosam laborum fugit pariatur aperiam. Est dolore eius quod ratione.`,
      coverUrl: 'https://placeimg.com/403/730/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus odit accusamus.`,
      subtitle: `Tempore qui facilis adipisci occaecati veritatis.`,
      author: `Ana Clara Fogaça`,
      publisher: `Caldeira - ME`,
      publicationYear: 2008,
      genre: 'Reiciendis',
      code: 'BOOK0286',
      isbn: '978-0-423-37209-0',
      language: 'Português',
      edition: '1ª',
      pages: 227,
      synopsis: `Eius quia quasi totam temporibus consequatur esse. Dolorem nesciunt neque iure modi.`,
      coverUrl: 'https://www.lorempixel.com/104/653',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam ipsam.`,
      subtitle: null,
      author: `Catarina Castro`,
      publisher: `Rodrigues Jesus - EI`,
      publicationYear: 1988,
      genre: 'Accusamus',
      code: 'BOOK0287',
      isbn: '978-0-7399-7046-1',
      language: 'Português',
      edition: '2ª',
      pages: 380,
      synopsis: `Laudantium debitis magni maiores veritatis. Eaque minus exercitationem perspiciatis magnam. Ipsam voluptate veniam laborum eum voluptate iusto cum. Quis perferendis atque similique.`,
      coverUrl: 'https://dummyimage.com/701x374',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quis distinctio.`,
      subtitle: `Esse quisquam iusto placeat unde distinctio.`,
      author: `Brenda Martins`,
      publisher: `da Mota Novaes S.A.`,
      publicationYear: 1989,
      genre: 'Dolore',
      code: 'BOOK0288',
      isbn: '978-1-879643-47-5',
      language: 'Português',
      edition: '2ª',
      pages: 539,
      synopsis: `Corporis ex explicabo quia ipsum incidunt. Quis ab velit animi illum officia.`,
      coverUrl: 'https://placekitten.com/286/935',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus.`,
      subtitle: `Dignissimos quaerat eos fuga.`,
      author: `Dr. João Miguel Martins`,
      publisher: `da Rosa Santos - ME`,
      publicationYear: 2025,
      genre: 'Harum',
      code: 'BOOK0289',
      isbn: '978-0-325-79706-9',
      language: 'Português',
      edition: '2ª',
      pages: 631,
      synopsis: `Eius non fugiat aut odit. Modi ipsa eligendi iusto sunt. Eveniet quod impedit corrupti.`,
      coverUrl: 'https://dummyimage.com/308x612',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At doloribus nemo.`,
      subtitle: null,
      author: `Emanuella Souza`,
      publisher: `Aragão`,
      publicationYear: 2011,
      genre: 'Deserunt',
      code: 'BOOK0290',
      isbn: '978-1-57325-737-4',
      language: 'Português',
      edition: '1ª',
      pages: 334,
      synopsis: `Dicta voluptas ea nobis ut consequuntur. Incidunt rem reiciendis rerum animi voluptatibus. Accusamus ipsa adipisci magnam reiciendis ratione.`,
      coverUrl: 'https://placekitten.com/1007/578',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quasi natus.`,
      subtitle: `Quos minus reiciendis sed assumenda ullam.`,
      author: `Milena da Mota`,
      publisher: `Pinto Ltda.`,
      publicationYear: 1988,
      genre: 'Omnis',
      code: 'BOOK0291',
      isbn: '978-0-512-95786-3',
      language: 'Português',
      edition: '2ª',
      pages: 491,
      synopsis: `Nemo ab repudiandae accusantium dolore incidunt.`,
      coverUrl: 'https://placekitten.com/530/456',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Itaque pariatur quo.`,
      subtitle: `Unde tempora quaerat nemo deleniti corporis.`,
      author: `Diego Castro`,
      publisher: `Teixeira - EI`,
      publicationYear: 1977,
      genre: 'Animi',
      code: 'BOOK0292',
      isbn: '978-1-155-33342-7',
      language: 'Português',
      edition: '2ª',
      pages: 521,
      synopsis: `Doloremque ullam quo ad soluta. Commodi veniam ad sint sequi dignissimos. Ipsum id dignissimos.`,
      coverUrl: 'https://www.lorempixel.com/779/255',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magni neque.`,
      subtitle: null,
      author: `Ana Vitória da Cruz`,
      publisher: `Costa Rodrigues e Filhos`,
      publicationYear: 2025,
      genre: 'Sed',
      code: 'BOOK0293',
      isbn: '978-1-63318-574-6',
      language: 'Português',
      edition: '4ª',
      pages: 459,
      synopsis: `Velit accusamus fugit in. Explicabo veniam saepe ipsa. Dolorem praesentium officiis repellat soluta.`,
      coverUrl: 'https://placekitten.com/32/562',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dicta.`,
      subtitle: null,
      author: `Davi Alves`,
      publisher: `Silveira da Costa S.A.`,
      publicationYear: 1986,
      genre: 'Voluptate',
      code: 'BOOK0294',
      isbn: '978-0-09-345962-6',
      language: 'Português',
      edition: '1ª',
      pages: 774,
      synopsis: `Cupiditate maxime corrupti repellat. Facilis unde ratione adipisci. Esse numquam tenetur eaque eum.`,
      coverUrl: 'https://www.lorempixel.com/52/679',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias sit totam.`,
      subtitle: `Molestiae quis quam.`,
      author: `Davi Lucca Castro`,
      publisher: `Monteiro S.A.`,
      publicationYear: 1956,
      genre: 'Consectetur',
      code: 'BOOK0295',
      isbn: '978-0-17-768729-7',
      language: 'Português',
      edition: '2ª',
      pages: 606,
      synopsis: `Labore tempore ducimus eum molestiae.`,
      coverUrl: 'https://placeimg.com/197/978/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deserunt dolor consectetur.`,
      subtitle: null,
      author: `Enzo Gabriel Cardoso`,
      publisher: `Nunes Ltda.`,
      publicationYear: 1951,
      genre: 'Sint',
      code: 'BOOK0296',
      isbn: '978-0-342-45798-4',
      language: 'Português',
      edition: '3ª',
      pages: 424,
      synopsis: `Voluptates eaque tempore eveniet fugiat corporis qui. Quibusdam reiciendis odio. Voluptatem accusamus odio saepe dolores.`,
      coverUrl: 'https://www.lorempixel.com/812/660',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam similique deleniti.`,
      subtitle: null,
      author: `Juliana Porto`,
      publisher: `Ramos Ferreira - EI`,
      publicationYear: 1959,
      genre: 'Nulla',
      code: 'BOOK0297',
      isbn: '978-1-85524-578-5',
      language: 'Português',
      edition: '1ª',
      pages: 701,
      synopsis: `Pariatur exercitationem maxime aperiam. Incidunt ad molestiae atque voluptate rerum. Mollitia eos sit esse.`,
      coverUrl: 'https://dummyimage.com/893x169',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reprehenderit suscipit magni.`,
      subtitle: null,
      author: `Rodrigo das Neves`,
      publisher: `da Paz e Filhos`,
      publicationYear: 2000,
      genre: 'Libero',
      code: 'BOOK0298',
      isbn: '978-0-85838-252-7',
      language: 'Português',
      edition: '5ª',
      pages: 393,
      synopsis: `Odio similique dolorem ut. Molestiae veritatis incidunt dicta.`,
      coverUrl: 'https://placekitten.com/100/820',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempore voluptas tempora.`,
      subtitle: null,
      author: `Giovanna Cunha`,
      publisher: `Almeida`,
      publicationYear: 1969,
      genre: 'Autem',
      code: 'BOOK0299',
      isbn: '978-1-399-10622-1',
      language: 'Português',
      edition: '3ª',
      pages: 185,
      synopsis: `Quisquam rem veritatis doloribus. Officia hic deserunt rerum. Dolorem veniam consequuntur illo.`,
      coverUrl: 'https://placeimg.com/310/421/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perferendis quis.`,
      subtitle: null,
      author: `Pedro Miguel Costa`,
      publisher: `Souza`,
      publicationYear: 2000,
      genre: 'Corporis',
      code: 'BOOK0300',
      isbn: '978-0-7418-9721-3',
      language: 'Português',
      edition: '5ª',
      pages: 749,
      synopsis: `Veniam aliquam saepe ducimus occaecati. Nesciunt soluta porro recusandae quis dolore. At quasi vero sint.`,
      coverUrl: 'https://placeimg.com/494/1012/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Animi autem quo.`,
      subtitle: `Temporibus odit eveniet pariatur.`,
      author: `João Gabriel Cardoso`,
      publisher: `Castro e Filhos`,
      publicationYear: 2005,
      genre: 'Placeat',
      code: 'BOOK0301',
      isbn: '978-1-396-41789-4',
      language: 'Português',
      edition: '1ª',
      pages: 564,
      synopsis: `Non sit pariatur aliquam autem saepe. Nemo blanditiis quisquam facere. In hic quia expedita ratione sequi nemo minima.`,
      coverUrl: 'https://www.lorempixel.com/816/884',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus ad.`,
      subtitle: null,
      author: `Sr. Gustavo Oliveira`,
      publisher: `Ramos Ltda.`,
      publicationYear: 1951,
      genre: 'Magnam',
      code: 'BOOK0302',
      isbn: '978-1-347-05742-1',
      language: 'Português',
      edition: '2ª',
      pages: 608,
      synopsis: `Quo molestias eum illo expedita repellendus sapiente. Ex nulla qui saepe.`,
      coverUrl: 'https://placekitten.com/466/648',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam at.`,
      subtitle: null,
      author: `Gabrielly Sales`,
      publisher: `Nascimento da Paz Ltda.`,
      publicationYear: 1965,
      genre: 'Voluptatum',
      code: 'BOOK0303',
      isbn: '978-1-57522-501-2',
      language: 'Português',
      edition: '1ª',
      pages: 443,
      synopsis: `Est magni odit eos nam debitis nulla asperiores. At nisi soluta illo.`,
      coverUrl: 'https://placekitten.com/539/298',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Explicabo consequatur harum.`,
      subtitle: `Nostrum voluptas eum dolore.`,
      author: `Felipe Vieira`,
      publisher: `Freitas Araújo - ME`,
      publicationYear: 2015,
      genre: 'Et',
      code: 'BOOK0304',
      isbn: '978-0-373-20430-4',
      language: 'Português',
      edition: '3ª',
      pages: 156,
      synopsis: `Saepe impedit mollitia necessitatibus impedit sed neque. Nemo temporibus harum ea reiciendis facilis reiciendis inventore. Tempore vel eum explicabo vero consequatur. Recusandae neque atque totam voluptates.`,
      coverUrl: 'https://www.lorempixel.com/974/642',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorem expedita praesentium voluptate.`,
      subtitle: null,
      author: `Lucas Gabriel Fogaça`,
      publisher: `Ramos - EI`,
      publicationYear: 2023,
      genre: 'Nulla',
      code: 'BOOK0305',
      isbn: '978-1-120-87805-2',
      language: 'Português',
      edition: '1ª',
      pages: 333,
      synopsis: `Aperiam explicabo veritatis eius. Veniam quas quae laudantium provident. Voluptates dolor iste modi.`,
      coverUrl: 'https://dummyimage.com/623x676',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reiciendis magni illum.`,
      subtitle: `Voluptatem nesciunt sint voluptas amet quidem.`,
      author: `Ana Vitória Cardoso`,
      publisher: `Souza - ME`,
      publicationYear: 1996,
      genre: 'Dolorem',
      code: 'BOOK0306',
      isbn: '978-0-922071-51-7',
      language: 'Português',
      edition: '4ª',
      pages: 253,
      synopsis: `Nemo veniam harum illum possimus consequuntur. Delectus est debitis inventore dolorum at.`,
      coverUrl: 'https://dummyimage.com/533x822',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita officia.`,
      subtitle: `Excepturi quibusdam minima.`,
      author: `Otávio Caldeira`,
      publisher: `Moura S/A`,
      publicationYear: 1990,
      genre: 'Dolores',
      code: 'BOOK0307',
      isbn: '978-0-05-640995-8',
      language: 'Português',
      edition: '3ª',
      pages: 179,
      synopsis: `Deleniti nulla delectus dolor. Atque placeat culpa fugiat debitis ipsam.`,
      coverUrl: 'https://placeimg.com/363/304/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Soluta.`,
      subtitle: null,
      author: `Luiz Otávio Costa`,
      publisher: `Gonçalves`,
      publicationYear: 1955,
      genre: 'Corrupti',
      code: 'BOOK0308',
      isbn: '978-0-9821739-2-3',
      language: 'Português',
      edition: '4ª',
      pages: 170,
      synopsis: `Vel ut molestias harum ipsum blanditiis. Aperiam doloribus consequuntur vero laudantium recusandae aliquam. Totam ullam repellat tenetur. Atque maxime optio eum minima nemo minus hic.`,
      coverUrl: 'https://placekitten.com/411/578',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsum dicta.`,
      subtitle: `Incidunt ipsa aspernatur ad aut natus non.`,
      author: `Luiz Felipe Gomes`,
      publisher: `Souza S/A`,
      publicationYear: 1997,
      genre: 'Eaque',
      code: 'BOOK0309',
      isbn: '978-1-998250-80-6',
      language: 'Português',
      edition: '2ª',
      pages: 398,
      synopsis: `Harum explicabo modi reprehenderit placeat.`,
      coverUrl: 'https://placekitten.com/888/365',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error.`,
      subtitle: null,
      author: `Lorenzo da Mata`,
      publisher: `Lopes Cardoso e Filhos`,
      publicationYear: 1975,
      genre: 'Enim',
      code: 'BOOK0310',
      isbn: '978-0-9900631-4-8',
      language: 'Português',
      edition: '5ª',
      pages: 351,
      synopsis: `Optio totam ex debitis harum.`,
      coverUrl: 'https://placeimg.com/467/761/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolor.`,
      subtitle: null,
      author: `Noah Farias`,
      publisher: `Pereira`,
      publicationYear: 1951,
      genre: 'Vero',
      code: 'BOOK0311',
      isbn: '978-0-460-66643-5',
      language: 'Português',
      edition: '3ª',
      pages: 101,
      synopsis: `Nobis occaecati hic possimus ipsum. Architecto beatae culpa ratione architecto. Eveniet velit ducimus perspiciatis ut id modi.`,
      coverUrl: 'https://www.lorempixel.com/583/535',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Hic suscipit.`,
      subtitle: null,
      author: `Bryan Sales`,
      publisher: `Costela Silveira S/A`,
      publicationYear: 1968,
      genre: 'Optio',
      code: 'BOOK0312',
      isbn: '978-0-13-062113-9',
      language: 'Português',
      edition: '3ª',
      pages: 195,
      synopsis: `Fuga qui ipsam quisquam optio magnam voluptate quisquam. Aliquam accusamus corrupti similique dolorum cupiditate. Dicta officia hic corrupti eos aperiam delectus.`,
      coverUrl: 'https://placeimg.com/398/687/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nulla.`,
      subtitle: null,
      author: `Felipe Souza`,
      publisher: `da Cruz`,
      publicationYear: 1960,
      genre: 'Dicta',
      code: 'BOOK0313',
      isbn: '978-0-11-688092-5',
      language: 'Português',
      edition: '5ª',
      pages: 197,
      synopsis: `Alias temporibus placeat ab a animi. Quisquam blanditiis dolore occaecati natus asperiores. Vel officia eligendi nulla ipsum quibusdam placeat.`,
      coverUrl: 'https://placeimg.com/512/706/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ullam corrupti modi.`,
      subtitle: null,
      author: `Sr. Danilo Gomes`,
      publisher: `Nogueira Fernandes S.A.`,
      publicationYear: 2005,
      genre: 'Maxime',
      code: 'BOOK0314',
      isbn: '978-1-4207-6836-7',
      language: 'Português',
      edition: '2ª',
      pages: 342,
      synopsis: `Explicabo velit in in quasi ipsam harum facilis. Pariatur consequatur minus doloribus quae necessitatibus.`,
      coverUrl: 'https://placeimg.com/744/948/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officia distinctio consequuntur.`,
      subtitle: `Molestiae iste temporibus.`,
      author: `Júlia Barros`,
      publisher: `da Rosa Mendes - EI`,
      publicationYear: 1959,
      genre: 'Dolore',
      code: 'BOOK0315',
      isbn: '978-1-270-36924-0',
      language: 'Português',
      edition: '2ª',
      pages: 239,
      synopsis: `Odit nemo reiciendis corrupti. Iusto sint consectetur ut et ut. Minus occaecati alias atque aperiam accusantium ullam sit.`,
      coverUrl: 'https://placekitten.com/678/184',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dicta corrupti distinctio.`,
      subtitle: `Facilis tenetur nesciunt.`,
      author: `Lorena Mendes`,
      publisher: `Gonçalves Jesus S/A`,
      publicationYear: 1990,
      genre: 'Ratione',
      code: 'BOOK0316',
      isbn: '978-0-261-89628-4',
      language: 'Português',
      edition: '4ª',
      pages: 223,
      synopsis: `Iusto voluptatem porro temporibus voluptate optio corporis ipsam. Consequatur fugit fugit. Quisquam nesciunt voluptates facere.`,
      coverUrl: 'https://placeimg.com/903/372/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Porro.`,
      subtitle: null,
      author: `Maria Fernanda Monteiro`,
      publisher: `Cardoso`,
      publicationYear: 1961,
      genre: 'Maxime',
      code: 'BOOK0317',
      isbn: '978-0-294-62135-8',
      language: 'Português',
      edition: '2ª',
      pages: 411,
      synopsis: `Explicabo voluptates libero numquam. In cumque sed deleniti eligendi maxime totam laudantium.`,
      coverUrl: 'https://dummyimage.com/341x106',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea voluptatum.`,
      subtitle: null,
      author: `Sr. Gabriel Ramos`,
      publisher: `Melo - EI`,
      publicationYear: 1995,
      genre: 'Aliquid',
      code: 'BOOK0318',
      isbn: '978-0-904637-66-3',
      language: 'Português',
      edition: '4ª',
      pages: 625,
      synopsis: `Possimus excepturi rem sequi quos.`,
      coverUrl: 'https://dummyimage.com/833x700',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quaerat mollitia laborum.`,
      subtitle: null,
      author: `Bruno Porto`,
      publisher: `Lopes - EI`,
      publicationYear: 2021,
      genre: 'Cum',
      code: 'BOOK0319',
      isbn: '978-0-13-125129-8',
      language: 'Português',
      edition: '5ª',
      pages: 355,
      synopsis: `Sint ab accusamus rem. Architecto nesciunt vitae voluptas occaecati ex pariatur nostrum.`,
      coverUrl: 'https://dummyimage.com/115x284',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Delectus quaerat.`,
      subtitle: `A recusandae doloremque.`,
      author: `Theo Cardoso`,
      publisher: `Martins`,
      publicationYear: 1978,
      genre: 'Sunt',
      code: 'BOOK0320',
      isbn: '978-1-379-27490-2',
      language: 'Português',
      edition: '2ª',
      pages: 302,
      synopsis: `Magni aspernatur voluptate ea. Nemo deleniti commodi quis deleniti sed quidem. Cum odio nihil nobis magni.`,
      coverUrl: 'https://placeimg.com/584/446/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repudiandae quasi.`,
      subtitle: null,
      author: `Agatha Fernandes`,
      publisher: `da Cruz`,
      publicationYear: 1975,
      genre: 'At',
      code: 'BOOK0321',
      isbn: '978-0-7509-6170-7',
      language: 'Português',
      edition: '4ª',
      pages: 231,
      synopsis: `Nihil totam facere perspiciatis perspiciatis aperiam. Quas eum facere repellat fuga.`,
      coverUrl: 'https://placekitten.com/614/1001',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum deleniti nesciunt.`,
      subtitle: null,
      author: `Ryan Moraes`,
      publisher: `Rezende`,
      publicationYear: 2005,
      genre: 'Officiis',
      code: 'BOOK0322',
      isbn: '978-1-77722-660-2',
      language: 'Português',
      edition: '4ª',
      pages: 608,
      synopsis: `Fugit sit corrupti facilis ipsa repellendus. Corrupti veniam dolor accusamus.`,
      coverUrl: 'https://placekitten.com/967/306',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deserunt libero culpa.`,
      subtitle: `Eius deleniti non libero ipsa sed.`,
      author: `Natália Caldeira`,
      publisher: `Cavalcanti`,
      publicationYear: 2007,
      genre: 'Atque',
      code: 'BOOK0323',
      isbn: '978-1-942387-36-7',
      language: 'Português',
      edition: '2ª',
      pages: 135,
      synopsis: `Vero occaecati excepturi. Placeat inventore commodi consectetur eligendi. Rem sint fuga voluptas aperiam ipsum.`,
      coverUrl: 'https://dummyimage.com/854x504',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Porro tenetur temporibus.`,
      subtitle: `Ratione nam neque ex deserunt consectetur.`,
      author: `Sr. Thales Duarte`,
      publisher: `Rodrigues Ribeiro S/A`,
      publicationYear: 1961,
      genre: 'Ipsam',
      code: 'BOOK0324',
      isbn: '978-1-295-18779-9',
      language: 'Português',
      edition: '3ª',
      pages: 492,
      synopsis: `Ipsum quod recusandae eius. Facilis quod labore dolore.`,
      coverUrl: 'https://placekitten.com/6/670',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam corporis earum eum.`,
      subtitle: null,
      author: `Sr. Pedro da Mota`,
      publisher: `Gonçalves e Filhos`,
      publicationYear: 1998,
      genre: 'Assumenda',
      code: 'BOOK0325',
      isbn: '978-1-366-04432-7',
      language: 'Português',
      edition: '3ª',
      pages: 591,
      synopsis: `Adipisci officia in. Iure tenetur corporis numquam nam nisi.`,
      coverUrl: 'https://placekitten.com/643/220',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eius provident iste.`,
      subtitle: `Nesciunt eum accusantium amet.`,
      author: `Dr. João Lucas da Conceição`,
      publisher: `Nascimento`,
      publicationYear: 1990,
      genre: 'Quo',
      code: 'BOOK0326',
      isbn: '978-1-56259-045-1',
      language: 'Português',
      edition: '5ª',
      pages: 324,
      synopsis: `Aliquam maiores quam quae libero unde consequuntur. Minima velit doloremque quidem. Excepturi impedit quibusdam laudantium molestias minima.`,
      coverUrl: 'https://www.lorempixel.com/810/317',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsum beatae.`,
      subtitle: `Dolorem animi placeat ad.`,
      author: `Pietra das Neves`,
      publisher: `Barbosa`,
      publicationYear: 1980,
      genre: 'Animi',
      code: 'BOOK0327',
      isbn: '978-0-2285-5660-2',
      language: 'Português',
      edition: '3ª',
      pages: 646,
      synopsis: `Laudantium pariatur possimus mollitia aliquam. Alias dolorem laudantium expedita aspernatur sunt magni repudiandae. Distinctio modi totam quia eligendi nam.`,
      coverUrl: 'https://dummyimage.com/795x327',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ducimus deserunt tempore hic.`,
      subtitle: `Iste ipsum voluptas perferendis.`,
      author: `Cecília da Mata`,
      publisher: `Barbosa - ME`,
      publicationYear: 2025,
      genre: 'Corrupti',
      code: 'BOOK0328',
      isbn: '978-0-943945-70-5',
      language: 'Português',
      edition: '3ª',
      pages: 467,
      synopsis: `Necessitatibus sunt dolorum maiores est. Repudiandae similique dignissimos veniam harum. Itaque hic quidem ullam laboriosam nisi. Aspernatur autem a adipisci amet.`,
      coverUrl: 'https://www.lorempixel.com/22/561',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsum quas.`,
      subtitle: null,
      author: `Caio Barros`,
      publisher: `da Rosa`,
      publicationYear: 2013,
      genre: 'Tenetur',
      code: 'BOOK0329',
      isbn: '978-1-5146-0401-4',
      language: 'Português',
      edition: '5ª',
      pages: 416,
      synopsis: `Ea ut suscipit reiciendis. Blanditiis odio veritatis recusandae sunt.`,
      coverUrl: 'https://www.lorempixel.com/975/357',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Assumenda doloremque.`,
      subtitle: null,
      author: `Olivia Fogaça`,
      publisher: `Aragão`,
      publicationYear: 1952,
      genre: 'Voluptates',
      code: 'BOOK0330',
      isbn: '978-0-231-66007-5',
      language: 'Português',
      edition: '5ª',
      pages: 589,
      synopsis: `Impedit voluptate nemo aliquid aperiam quo eligendi. Quaerat dicta eaque perferendis vitae. Doloremque ipsum a officiis sit.`,
      coverUrl: 'https://dummyimage.com/891x1000',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo.`,
      subtitle: null,
      author: `Sr. Noah Moura`,
      publisher: `Ribeiro`,
      publicationYear: 1991,
      genre: 'Quisquam',
      code: 'BOOK0331',
      isbn: '978-1-58825-562-4',
      language: 'Português',
      edition: '1ª',
      pages: 122,
      synopsis: `Fuga voluptatem quisquam corporis perferendis suscipit. Illum vero assumenda ducimus consequuntur unde officia. Quidem similique cum aliquam magni similique numquam. Exercitationem odio quia sed nemo voluptate recusandae repudiandae.`,
      coverUrl: 'https://placeimg.com/811/167/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus molestias.`,
      subtitle: null,
      author: `Ana Lívia Almeida`,
      publisher: `Vieira`,
      publicationYear: 2000,
      genre: 'Vel',
      code: 'BOOK0332',
      isbn: '978-0-571-55868-1',
      language: 'Português',
      edition: '5ª',
      pages: 203,
      synopsis: `Neque quibusdam porro voluptates dolorem. Culpa possimus quidem quaerat tempora voluptas reiciendis. Corporis asperiores veniam doloribus illo repudiandae molestiae.`,
      coverUrl: 'https://www.lorempixel.com/197/391',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquam.`,
      subtitle: null,
      author: `Cauã da Rocha`,
      publisher: `Cardoso Campos Ltda.`,
      publicationYear: 2012,
      genre: 'Odio',
      code: 'BOOK0333',
      isbn: '978-1-56094-565-9',
      language: 'Português',
      edition: '3ª',
      pages: 278,
      synopsis: `Incidunt nihil laboriosam nostrum aliquam. Voluptate libero expedita ducimus labore reiciendis quidem.`,
      coverUrl: 'https://placekitten.com/200/865',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum fugit vitae.`,
      subtitle: `Labore molestiae assumenda.`,
      author: `Dra. Marina Castro`,
      publisher: `Nascimento`,
      publicationYear: 1950,
      genre: 'Labore',
      code: 'BOOK0334',
      isbn: '978-1-05-487396-3',
      language: 'Português',
      edition: '5ª',
      pages: 500,
      synopsis: `Placeat nisi perferendis. Vel ipsam magnam.`,
      coverUrl: 'https://placeimg.com/948/562/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officiis aliquid nesciunt.`,
      subtitle: null,
      author: `Dra. Luiza da Luz`,
      publisher: `Gonçalves`,
      publicationYear: 1968,
      genre: 'Dolorem',
      code: 'BOOK0335',
      isbn: '978-1-956121-37-7',
      language: 'Português',
      edition: '3ª',
      pages: 179,
      synopsis: `Ab quod rem temporibus quo. Esse dolore sint. Sapiente dolorem ipsam praesentium tenetur aut consequuntur qui.`,
      coverUrl: 'https://placeimg.com/48/897/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae inventore provident.`,
      subtitle: `Odio autem labore eius nam.`,
      author: `Ana Clara Campos`,
      publisher: `Ferreira e Filhos`,
      publicationYear: 1976,
      genre: 'Magnam',
      code: 'BOOK0336',
      isbn: '978-1-83210-219-3',
      language: 'Português',
      edition: '2ª',
      pages: 169,
      synopsis: `Ipsum voluptatum fuga ea architecto. Neque blanditiis aliquam dicta.`,
      coverUrl: 'https://placeimg.com/615/272/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minima.`,
      subtitle: `Magni accusamus minima.`,
      author: `Nathan Souza`,
      publisher: `Jesus S.A.`,
      publicationYear: 2003,
      genre: 'Ipsum',
      code: 'BOOK0337',
      isbn: '978-1-337-77312-6',
      language: 'Português',
      edition: '2ª',
      pages: 523,
      synopsis: `Odio molestiae rem corporis consectetur magni similique. Labore voluptatibus asperiores cum. Quidem saepe facere dolorem ea animi inventore sit.`,
      coverUrl: 'https://dummyimage.com/808x56',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Hic non sint.`,
      subtitle: null,
      author: `Srta. Luana Silva`,
      publisher: `da Cruz`,
      publicationYear: 2023,
      genre: 'Excepturi',
      code: 'BOOK0338',
      isbn: '978-1-169-06181-1',
      language: 'Português',
      edition: '2ª',
      pages: 266,
      synopsis: `Fuga hic iure. Esse modi eveniet est veniam maiores.`,
      coverUrl: 'https://placeimg.com/790/281/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At laudantium exercitationem.`,
      subtitle: `Nulla aperiam occaecati vel soluta nisi.`,
      author: `Ian Martins`,
      publisher: `da Mota Monteiro Ltda.`,
      publicationYear: 1963,
      genre: 'Earum',
      code: 'BOOK0339',
      isbn: '978-1-4496-3924-2',
      language: 'Português',
      edition: '1ª',
      pages: 450,
      synopsis: `Quae mollitia dignissimos iure maxime blanditiis. Odit dignissimos ratione rerum delectus.`,
      coverUrl: 'https://dummyimage.com/1017x767',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum earum necessitatibus.`,
      subtitle: null,
      author: `Heloísa da Conceição`,
      publisher: `Cardoso`,
      publicationYear: 2005,
      genre: 'Explicabo',
      code: 'BOOK0340',
      isbn: '978-1-86013-477-7',
      language: 'Português',
      edition: '2ª',
      pages: 721,
      synopsis: `Reprehenderit maiores in eaque voluptatem occaecati laudantium autem. Harum blanditiis debitis facere reiciendis amet. Eius molestias eaque quos.`,
      coverUrl: 'https://www.lorempixel.com/866/419',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Animi beatae voluptate.`,
      subtitle: `Eligendi dolores dolore nobis.`,
      author: `Marcos Vinicius Moraes`,
      publisher: `da Costa Aragão - EI`,
      publicationYear: 1974,
      genre: 'Reprehenderit',
      code: 'BOOK0341',
      isbn: '978-0-263-89021-1',
      language: 'Português',
      edition: '4ª',
      pages: 667,
      synopsis: `Voluptatem earum laborum atque sapiente dolore itaque cumque. Ullam eius a perferendis. Neque nobis harum distinctio aut aspernatur.`,
      coverUrl: 'https://dummyimage.com/909x906',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sed quibusdam ad.`,
      subtitle: `Dignissimos perferendis ipsa soluta.`,
      author: `Dr. Anthony Sales`,
      publisher: `Pires`,
      publicationYear: 2023,
      genre: 'Sequi',
      code: 'BOOK0342',
      isbn: '978-1-219-62633-5',
      language: 'Português',
      edition: '5ª',
      pages: 602,
      synopsis: `Illo dolorum enim doloremque nobis iusto. Placeat natus officia. Iste reiciendis harum exercitationem.`,
      coverUrl: 'https://placeimg.com/780/41/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam tenetur at.`,
      subtitle: `Expedita eaque tenetur ea.`,
      author: `Davi Luiz das Neves`,
      publisher: `Azevedo Nascimento Ltda.`,
      publicationYear: 2011,
      genre: 'Architecto',
      code: 'BOOK0343',
      isbn: '978-0-219-80418-7',
      language: 'Português',
      edition: '2ª',
      pages: 199,
      synopsis: `Corrupti consequuntur ipsa sit delectus illum cumque. Doloremque at amet omnis.`,
      coverUrl: 'https://placeimg.com/360/590/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempora doloremque repellat.`,
      subtitle: null,
      author: `Otávio Cardoso`,
      publisher: `Castro Ltda.`,
      publicationYear: 1989,
      genre: 'Dolorum',
      code: 'BOOK0344',
      isbn: '978-1-85228-230-1',
      language: 'Português',
      edition: '4ª',
      pages: 582,
      synopsis: `Quisquam maiores accusantium magnam. Hic cumque iusto sed. Similique rerum nemo eius doloribus.`,
      coverUrl: 'https://dummyimage.com/358x225',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit quidem.`,
      subtitle: null,
      author: `João Miguel Cunha`,
      publisher: `Gomes - ME`,
      publicationYear: 1997,
      genre: 'Quia',
      code: 'BOOK0345',
      isbn: '978-1-886878-59-4',
      language: 'Português',
      edition: '2ª',
      pages: 556,
      synopsis: `Quibusdam minima illum magnam libero rem. Asperiores voluptatum sapiente blanditiis temporibus. Fugiat fuga et dicta accusamus ipsa.`,
      coverUrl: 'https://dummyimage.com/301x921',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Id consequuntur.`,
      subtitle: null,
      author: `Leonardo Fernandes`,
      publisher: `Nunes`,
      publicationYear: 1969,
      genre: 'Omnis',
      code: 'BOOK0346',
      isbn: '978-1-372-60321-1',
      language: 'Português',
      edition: '1ª',
      pages: 187,
      synopsis: `Amet iure harum officiis inventore nisi. Reprehenderit mollitia aliquam voluptatem sed architecto.`,
      coverUrl: 'https://placekitten.com/678/396',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cumque voluptatibus corporis.`,
      subtitle: null,
      author: `Dra. Emanuelly Caldeira`,
      publisher: `Silva S.A.`,
      publicationYear: 2010,
      genre: 'Suscipit',
      code: 'BOOK0347',
      isbn: '978-0-7659-7595-9',
      language: 'Português',
      edition: '5ª',
      pages: 341,
      synopsis: `Amet maxime commodi ipsa laborum quis. Pariatur molestias quibusdam.`,
      coverUrl: 'https://placeimg.com/137/314/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio ipsam quam.`,
      subtitle: `Corporis quis deserunt nulla.`,
      author: `João Vitor das Neves`,
      publisher: `Barbosa Ltda.`,
      publicationYear: 2007,
      genre: 'Accusantium',
      code: 'BOOK0348',
      isbn: '978-0-693-62689-3',
      language: 'Português',
      edition: '2ª',
      pages: 271,
      synopsis: `A architecto similique eaque laboriosam. Dolor totam cumque perferendis.`,
      coverUrl: 'https://placeimg.com/233/163/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nulla voluptatem sed.`,
      subtitle: `Neque molestias temporibus quia.`,
      author: `Natália Martins`,
      publisher: `Silveira Freitas - EI`,
      publicationYear: 2005,
      genre: 'Exercitationem',
      code: 'BOOK0349',
      isbn: '978-0-674-58476-1',
      language: 'Português',
      edition: '2ª',
      pages: 742,
      synopsis: `Error sint autem corporis dolore quos sunt dolorum.`,
      coverUrl: 'https://placekitten.com/313/201',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quia in ex.`,
      subtitle: null,
      author: `Felipe da Cruz`,
      publisher: `Campos`,
      publicationYear: 2020,
      genre: 'Ipsam',
      code: 'BOOK0350',
      isbn: '978-1-66267-055-8',
      language: 'Português',
      edition: '3ª',
      pages: 382,
      synopsis: `Doloremque soluta laudantium vero nihil. Inventore doloremque doloribus rem excepturi nisi.`,
      coverUrl: 'https://www.lorempixel.com/771/169',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aspernatur qui.`,
      subtitle: `Molestiae laudantium at.`,
      author: `Dra. Brenda Barros`,
      publisher: `Ribeiro S.A.`,
      publicationYear: 2022,
      genre: 'Aliquid',
      code: 'BOOK0351',
      isbn: '978-1-55910-245-2',
      language: 'Português',
      edition: '5ª',
      pages: 696,
      synopsis: `Voluptatum aspernatur aliquam. Reprehenderit deleniti cumque.`,
      coverUrl: 'https://www.lorempixel.com/800/1004',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nihil nulla.`,
      subtitle: null,
      author: `Ana Julia Gomes`,
      publisher: `Campos Rezende - EI`,
      publicationYear: 1994,
      genre: 'Facilis',
      code: 'BOOK0352',
      isbn: '978-0-7934-0652-4',
      language: 'Português',
      edition: '4ª',
      pages: 370,
      synopsis: `Facere magni eos provident id rem doloremque. Pariatur distinctio itaque praesentium alias. Nesciunt blanditiis autem ipsum.`,
      coverUrl: 'https://placekitten.com/305/150',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Porro neque quaerat.`,
      subtitle: `Illum ut pariatur perferendis quas.`,
      author: `Thales da Rocha`,
      publisher: `Azevedo`,
      publicationYear: 1968,
      genre: 'Maiores',
      code: 'BOOK0353',
      isbn: '978-1-351-00462-6',
      language: 'Português',
      edition: '5ª',
      pages: 723,
      synopsis: `Omnis id quae eum consequatur eveniet vitae. Omnis vero quibusdam sit delectus sit. Veritatis impedit laborum voluptates.`,
      coverUrl: 'https://dummyimage.com/303x86',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores libero.`,
      subtitle: null,
      author: `Eduardo da Mata`,
      publisher: `Azevedo`,
      publicationYear: 1984,
      genre: 'Accusamus',
      code: 'BOOK0354',
      isbn: '978-1-955017-83-1',
      language: 'Português',
      edition: '3ª',
      pages: 120,
      synopsis: `Ex omnis qui magnam. Hic minus nihil unde deserunt quo quasi.`,
      coverUrl: 'https://placekitten.com/80/931',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum itaque eligendi.`,
      subtitle: `Illum occaecati recusandae.`,
      author: `Kamilly Rezende`,
      publisher: `Lopes das Neves - ME`,
      publicationYear: 2006,
      genre: 'Fuga',
      code: 'BOOK0355',
      isbn: '978-0-394-64083-9',
      language: 'Português',
      edition: '3ª',
      pages: 375,
      synopsis: `Veritatis ipsum id inventore vero.`,
      coverUrl: 'https://www.lorempixel.com/560/853',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sit quasi quisquam.`,
      subtitle: null,
      author: `Vitor Barros`,
      publisher: `da Rosa`,
      publicationYear: 2016,
      genre: 'Quibusdam',
      code: 'BOOK0356',
      isbn: '978-0-368-52830-9',
      language: 'Português',
      edition: '3ª',
      pages: 157,
      synopsis: `Eveniet doloribus laboriosam aut. Cumque eos ducimus cum incidunt. Facere quisquam enim voluptatum.`,
      coverUrl: 'https://dummyimage.com/140x156',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sequi a.`,
      subtitle: `Architecto quo quis earum.`,
      author: `Carlos Eduardo Porto`,
      publisher: `Costa`,
      publicationYear: 2017,
      genre: 'Provident',
      code: 'BOOK0357',
      isbn: '978-0-7941-5152-2',
      language: 'Português',
      edition: '5ª',
      pages: 129,
      synopsis: `Molestias dolorum accusantium totam rem. Voluptatibus cum exercitationem minima. Deserunt voluptatibus quidem expedita excepturi harum quidem.`,
      coverUrl: 'https://dummyimage.com/212x824',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deleniti odit.`,
      subtitle: `Quibusdam architecto voluptatibus dolorem omnis totam.`,
      author: `Maria Eduarda Ramos`,
      publisher: `Martins`,
      publicationYear: 1956,
      genre: 'Temporibus',
      code: 'BOOK0358',
      isbn: '978-0-00-730950-4',
      language: 'Português',
      edition: '3ª',
      pages: 303,
      synopsis: `Impedit saepe voluptas similique assumenda sapiente. Maxime quisquam nihil labore mollitia mollitia quis blanditiis. Ratione odit doloribus.`,
      coverUrl: 'https://www.lorempixel.com/871/600',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Amet error.`,
      subtitle: `Possimus repellendus voluptatum.`,
      author: `Joaquim Oliveira`,
      publisher: `Souza Ltda.`,
      publicationYear: 2012,
      genre: 'Autem',
      code: 'BOOK0359',
      isbn: '978-1-4600-4521-3',
      language: 'Português',
      edition: '5ª',
      pages: 556,
      synopsis: `Nobis sed facere atque eaque ex suscipit. Nemo neque aspernatur aliquid.`,
      coverUrl: 'https://placekitten.com/637/163',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Omnis aut illo.`,
      subtitle: null,
      author: `Henrique Peixoto`,
      publisher: `Melo Ltda.`,
      publicationYear: 1983,
      genre: 'Asperiores',
      code: 'BOOK0360',
      isbn: '978-0-19-017075-2',
      language: 'Português',
      edition: '1ª',
      pages: 391,
      synopsis: `Autem culpa velit tempora dolorum ex delectus. Praesentium aut repellat iusto quas consectetur qui. Dolores illum placeat soluta nemo quas sapiente.`,
      coverUrl: 'https://www.lorempixel.com/1008/487',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio pariatur deserunt.`,
      subtitle: null,
      author: `Evelyn Monteiro`,
      publisher: `Nunes Oliveira - EI`,
      publicationYear: 1984,
      genre: 'Illo',
      code: 'BOOK0361',
      isbn: '978-0-916497-01-9',
      language: 'Português',
      edition: '4ª',
      pages: 625,
      synopsis: `Deleniti ducimus consectetur delectus odit blanditiis perferendis consequatur. Doloremque dolorum aliquid. Placeat consequatur dolor vero.`,
      coverUrl: 'https://www.lorempixel.com/5/430',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque.`,
      subtitle: null,
      author: `Joaquim da Rocha`,
      publisher: `da Conceição`,
      publicationYear: 1951,
      genre: 'Dignissimos',
      code: 'BOOK0362',
      isbn: '978-1-56684-732-2',
      language: 'Português',
      edition: '2ª',
      pages: 358,
      synopsis: `Explicabo sit similique optio laudantium veniam. Aliquid a iure aperiam suscipit animi.`,
      coverUrl: 'https://dummyimage.com/939x592',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae enim eligendi.`,
      subtitle: `Incidunt accusamus quos minus.`,
      author: `Laís Monteiro`,
      publisher: `das Neves`,
      publicationYear: 2009,
      genre: 'Odio',
      code: 'BOOK0363',
      isbn: '978-1-76427-372-5',
      language: 'Português',
      edition: '3ª',
      pages: 793,
      synopsis: `Officia fugit voluptates mollitia odit.`,
      coverUrl: 'https://placekitten.com/296/224',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minima porro earum.`,
      subtitle: null,
      author: `Manuela Lima`,
      publisher: `Aragão`,
      publicationYear: 1997,
      genre: 'At',
      code: 'BOOK0364',
      isbn: '978-0-443-89982-9',
      language: 'Português',
      edition: '5ª',
      pages: 762,
      synopsis: `Voluptate a vero eveniet porro mollitia necessitatibus. Laboriosam deleniti quasi. Dolorum rem nesciunt occaecati pariatur vero. Natus atque iusto deserunt doloribus aliquid excepturi.`,
      coverUrl: 'https://placekitten.com/965/493',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorem vero accusamus.`,
      subtitle: null,
      author: `Calebe Cunha`,
      publisher: `Oliveira Barbosa S.A.`,
      publicationYear: 1991,
      genre: 'Omnis',
      code: 'BOOK0365',
      isbn: '978-0-18-723335-4',
      language: 'Português',
      edition: '3ª',
      pages: 367,
      synopsis: `Ducimus ullam illum. Officia suscipit tempora atque unde.`,
      coverUrl: 'https://placekitten.com/243/191',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Modi occaecati quis aliquid.`,
      subtitle: null,
      author: `Sra. Maria Cecília da Cunha`,
      publisher: `Rodrigues S.A.`,
      publicationYear: 1967,
      genre: 'Neque',
      code: 'BOOK0366',
      isbn: '978-0-18-939406-0',
      language: 'Português',
      edition: '1ª',
      pages: 771,
      synopsis: `Quidem nam cum qui voluptatem nemo. Deserunt reprehenderit doloremque aliquid debitis. Deserunt eos aperiam ipsum nulla.`,
      coverUrl: 'https://dummyimage.com/64x241',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati sunt error.`,
      subtitle: null,
      author: `Larissa da Costa`,
      publisher: `da Cruz - ME`,
      publicationYear: 2023,
      genre: 'Minus',
      code: 'BOOK0367',
      isbn: '978-0-508-26112-7',
      language: 'Português',
      edition: '2ª',
      pages: 451,
      synopsis: `Corrupti autem dolorem repellat. Quae quae sunt minus tempore.`,
      coverUrl: 'https://dummyimage.com/675x927',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus necessitatibus veritatis incidunt.`,
      subtitle: `Saepe ipsum et non unde reiciendis.`,
      author: `Eduardo Nunes`,
      publisher: `Nascimento`,
      publicationYear: 1962,
      genre: 'Quidem',
      code: 'BOOK0368',
      isbn: '978-0-912038-18-6',
      language: 'Português',
      edition: '4ª',
      pages: 231,
      synopsis: `Tenetur neque qui consequatur maxime molestiae. Reiciendis dolores amet similique molestiae. Dolores mollitia excepturi modi.`,
      coverUrl: 'https://placekitten.com/531/534',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur debitis incidunt.`,
      subtitle: `Consequuntur ratione praesentium at.`,
      author: `Pedro Henrique Pires`,
      publisher: `Pereira e Filhos`,
      publicationYear: 1989,
      genre: 'Tempora',
      code: 'BOOK0369',
      isbn: '978-1-72450-000-7',
      language: 'Português',
      edition: '4ª',
      pages: 439,
      synopsis: `Assumenda cumque quia.`,
      coverUrl: 'https://dummyimage.com/166x169',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veritatis atque quos.`,
      subtitle: `Officia animi occaecati voluptas ad corrupti.`,
      author: `Dr. João Miguel Correia`,
      publisher: `Gonçalves`,
      publicationYear: 2024,
      genre: 'Facilis',
      code: 'BOOK0370',
      isbn: '978-0-8299-8747-8',
      language: 'Português',
      edition: '5ª',
      pages: 735,
      synopsis: `Corrupti repudiandae enim numquam. Et iusto magni. Ad nobis a ea doloribus exercitationem exercitationem.`,
      coverUrl: 'https://dummyimage.com/740x563',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat commodi impedit.`,
      subtitle: null,
      author: `Luiz Gustavo Dias`,
      publisher: `Moura`,
      publicationYear: 2002,
      genre: 'Ut',
      code: 'BOOK0371',
      isbn: '978-1-4296-0807-7',
      language: 'Português',
      edition: '1ª',
      pages: 254,
      synopsis: `Dignissimos illum sequi nam nulla ratione.`,
      coverUrl: 'https://dummyimage.com/34x378',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aperiam reiciendis.`,
      subtitle: `Sint ducimus minus.`,
      author: `Marcela Almeida`,
      publisher: `Ferreira`,
      publicationYear: 1973,
      genre: 'Temporibus',
      code: 'BOOK0372',
      isbn: '978-1-7383638-1-0',
      language: 'Português',
      edition: '1ª',
      pages: 599,
      synopsis: `Doloribus perferendis consequuntur id perspiciatis. Maxime officia pariatur esse. Culpa doloribus in quaerat fuga.`,
      coverUrl: 'https://www.lorempixel.com/882/438',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero dolorum.`,
      subtitle: `Sit reprehenderit eos voluptatem harum.`,
      author: `Dr. Vitor Gabriel Gonçalves`,
      publisher: `da Mata - ME`,
      publicationYear: 1971,
      genre: 'Eum',
      code: 'BOOK0373',
      isbn: '978-1-82430-176-4',
      language: 'Português',
      edition: '5ª',
      pages: 262,
      synopsis: `Recusandae sint maiores vero minus totam. Quo quasi fuga.`,
      coverUrl: 'https://placekitten.com/365/564',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iure rerum.`,
      subtitle: `Perferendis excepturi enim.`,
      author: `Ana Carolina Gonçalves`,
      publisher: `da Rocha da Rosa S.A.`,
      publicationYear: 2011,
      genre: 'Libero',
      code: 'BOOK0374',
      isbn: '978-1-951632-11-3',
      language: 'Português',
      edition: '4ª',
      pages: 104,
      synopsis: `Iste iure soluta commodi aliquid voluptate dolores at. Laudantium consequatur officia voluptatum aliquam.`,
      coverUrl: 'https://www.lorempixel.com/832/71',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ullam nostrum.`,
      subtitle: null,
      author: `Luna Martins`,
      publisher: `Castro`,
      publicationYear: 2017,
      genre: 'Officiis',
      code: 'BOOK0375',
      isbn: '978-0-02-300915-0',
      language: 'Português',
      edition: '2ª',
      pages: 118,
      synopsis: `Mollitia saepe minima accusamus. Ex odio libero quas reprehenderit nisi. Totam sunt perspiciatis hic non exercitationem.`,
      coverUrl: 'https://placekitten.com/118/156',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Architecto commodi minima quo.`,
      subtitle: `Autem eos doloremque minus.`,
      author: `Sr. Nicolas Cunha`,
      publisher: `da Mota`,
      publicationYear: 2014,
      genre: 'Dolores',
      code: 'BOOK0376',
      isbn: '978-0-9982137-4-3',
      language: 'Português',
      edition: '5ª',
      pages: 413,
      synopsis: `In at ut possimus similique eos. Modi velit aliquam facilis accusantium recusandae dolores. Inventore vitae quia maxime atque quia.`,
      coverUrl: 'https://www.lorempixel.com/873/36',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Soluta animi.`,
      subtitle: null,
      author: `João Guilherme Nogueira`,
      publisher: `Carvalho`,
      publicationYear: 2017,
      genre: 'Alias',
      code: 'BOOK0377',
      isbn: '978-0-7153-1234-6',
      language: 'Português',
      edition: '3ª',
      pages: 544,
      synopsis: `Amet inventore mollitia ipsa autem occaecati. Incidunt natus temporibus numquam voluptates rerum enim. Blanditiis esse mollitia.`,
      coverUrl: 'https://placekitten.com/916/397',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores sint.`,
      subtitle: null,
      author: `Sarah Souza`,
      publisher: `Oliveira Barbosa S.A.`,
      publicationYear: 2001,
      genre: 'Eveniet',
      code: 'BOOK0378',
      isbn: '978-0-01-570908-2',
      language: 'Português',
      edition: '1ª',
      pages: 333,
      synopsis: `Neque aperiam enim nemo vel quaerat iste. Nesciunt cumque quidem provident numquam. In numquam repellat sit omnis rerum odit quis.`,
      coverUrl: 'https://placekitten.com/934/183',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Modi facilis.`,
      subtitle: `Odio necessitatibus corporis natus eos.`,
      author: `Gabriela da Mota`,
      publisher: `da Mota Cavalcanti S.A.`,
      publicationYear: 1954,
      genre: 'Et',
      code: 'BOOK0379',
      isbn: '978-0-669-80690-8',
      language: 'Português',
      edition: '4ª',
      pages: 755,
      synopsis: `Culpa odit itaque in tempora odit cupiditate. Est velit quam maxime dolore. Tenetur officiis tempore maxime omnis natus accusantium reprehenderit.`,
      coverUrl: 'https://placekitten.com/583/6',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit blanditiis consequuntur.`,
      subtitle: null,
      author: `Dra. Mariana Pinto`,
      publisher: `Araújo`,
      publicationYear: 1952,
      genre: 'Quo',
      code: 'BOOK0380',
      isbn: '978-1-958264-18-8',
      language: 'Português',
      edition: '1ª',
      pages: 218,
      synopsis: `Fugiat illum asperiores repudiandae accusamus laboriosam incidunt. Quisquam rem et excepturi. Dolorum deleniti eaque molestiae.`,
      coverUrl: 'https://placekitten.com/492/636',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempore sequi rerum cum.`,
      subtitle: `A pariatur maiores nobis.`,
      author: `Ana Clara Caldeira`,
      publisher: `Nogueira - EI`,
      publicationYear: 1951,
      genre: 'Eligendi',
      code: 'BOOK0381',
      isbn: '978-0-395-00168-4',
      language: 'Português',
      edition: '3ª',
      pages: 530,
      synopsis: `Officia aspernatur occaecati asperiores qui amet illum debitis. Maxime sit veniam odit occaecati amet fuga odit.`,
      coverUrl: 'https://placeimg.com/553/34/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsam eligendi cum.`,
      subtitle: null,
      author: `Sra. Beatriz Nunes`,
      publisher: `Costela`,
      publicationYear: 1965,
      genre: 'Saepe',
      code: 'BOOK0382',
      isbn: '978-1-08-177602-2',
      language: 'Português',
      edition: '3ª',
      pages: 216,
      synopsis: `Architecto quod ad vel perferendis ea voluptas dicta. Doloremque vel veritatis et quaerat cupiditate exercitationem. Autem molestias aspernatur ab sed tempore.`,
      coverUrl: 'https://www.lorempixel.com/336/208',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cum fugit dolor in.`,
      subtitle: `Voluptatem et iusto molestias voluptate fugiat.`,
      author: `Enrico Porto`,
      publisher: `Viana Ltda.`,
      publicationYear: 2002,
      genre: 'Inventore',
      code: 'BOOK0383',
      isbn: '978-0-295-02648-0',
      language: 'Português',
      edition: '3ª',
      pages: 264,
      synopsis: `Inventore eligendi amet iste.`,
      coverUrl: 'https://placeimg.com/512/208/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Modi unde temporibus.`,
      subtitle: `Pariatur cumque delectus accusamus cum at.`,
      author: `Maria Sophia Teixeira`,
      publisher: `Cavalcanti da Mota Ltda.`,
      publicationYear: 1961,
      genre: 'Quas',
      code: 'BOOK0384',
      isbn: '978-0-9857973-6-2',
      language: 'Português',
      edition: '1ª',
      pages: 687,
      synopsis: `Doloribus beatae maiores molestiae voluptatum illum excepturi. Quibusdam vero ad quos nihil quaerat inventore.`,
      coverUrl: 'https://placeimg.com/243/928/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo vel.`,
      subtitle: null,
      author: `João Silveira`,
      publisher: `Alves Moreira S/A`,
      publicationYear: 2008,
      genre: 'Minus',
      code: 'BOOK0385',
      isbn: '978-0-223-55216-6',
      language: 'Português',
      edition: '3ª',
      pages: 370,
      synopsis: `Quod molestiae ipsum. Placeat illo corrupti asperiores. Asperiores necessitatibus eveniet id.`,
      coverUrl: 'https://placekitten.com/935/80',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore non.`,
      subtitle: null,
      author: `Yuri Viana`,
      publisher: `da Cruz S.A.`,
      publicationYear: 1996,
      genre: 'Amet',
      code: 'BOOK0386',
      isbn: '978-0-938694-84-7',
      language: 'Português',
      edition: '3ª',
      pages: 536,
      synopsis: `Sunt excepturi quasi maiores occaecati. Eligendi iste molestias itaque.`,
      coverUrl: 'https://www.lorempixel.com/73/903',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Unde doloremque molestias.`,
      subtitle: null,
      author: `Joana Rocha`,
      publisher: `Viana da Mata S/A`,
      publicationYear: 1971,
      genre: 'Sint',
      code: 'BOOK0387',
      isbn: '978-1-61917-798-7',
      language: 'Português',
      edition: '3ª',
      pages: 466,
      synopsis: `Molestiae sequi nemo ipsa libero sapiente. Eum nemo laudantium quibusdam. Et minima id delectus numquam dolores amet.`,
      coverUrl: 'https://placekitten.com/551/61',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugit nulla placeat.`,
      subtitle: `Alias perferendis cumque tempore debitis quia.`,
      author: `Dr. Fernando da Mata`,
      publisher: `Ramos`,
      publicationYear: 2008,
      genre: 'Rerum',
      code: 'BOOK0388',
      isbn: '978-0-259-42328-7',
      language: 'Português',
      edition: '3ª',
      pages: 494,
      synopsis: `Ratione rerum dolore velit molestias. Vel excepturi cum aspernatur perspiciatis eveniet modi. Quam ut debitis velit harum voluptas.`,
      coverUrl: 'https://dummyimage.com/351x826',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Exercitationem non.`,
      subtitle: null,
      author: `Isadora Cavalcanti`,
      publisher: `Santos Cavalcanti - EI`,
      publicationYear: 1970,
      genre: 'Voluptatum',
      code: 'BOOK0389',
      isbn: '978-1-5078-4685-8',
      language: 'Português',
      edition: '1ª',
      pages: 526,
      synopsis: `Eum laborum perspiciatis repudiandae dolore deserunt occaecati blanditiis.`,
      coverUrl: 'https://placeimg.com/152/231/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum aliquid maxime provident.`,
      subtitle: `Doloremque recusandae assumenda facilis hic at.`,
      author: `Lorenzo Cavalcanti`,
      publisher: `Martins`,
      publicationYear: 1995,
      genre: 'Eligendi',
      code: 'BOOK0390',
      isbn: '978-0-259-36781-9',
      language: 'Português',
      edition: '5ª',
      pages: 129,
      synopsis: `Ipsum et accusamus nulla veritatis corrupti. Eligendi quo assumenda quod.`,
      coverUrl: 'https://placeimg.com/363/935/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus voluptatum possimus minima.`,
      subtitle: `Animi quasi consectetur labore earum consectetur.`,
      author: `Marcela Monteiro`,
      publisher: `da Cruz`,
      publicationYear: 1990,
      genre: 'Deserunt',
      code: 'BOOK0391',
      isbn: '978-1-60598-678-4',
      language: 'Português',
      edition: '1ª',
      pages: 794,
      synopsis: `Error cumque laudantium excepturi excepturi. Molestiae excepturi nihil vitae recusandae. Ratione sapiente enim magnam esse nostrum.`,
      coverUrl: 'https://placeimg.com/243/169/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ad ut ab.`,
      subtitle: null,
      author: `Augusto da Costa`,
      publisher: `Moura`,
      publicationYear: 1981,
      genre: 'Tempore',
      code: 'BOOK0392',
      isbn: '978-0-13-215513-7',
      language: 'Português',
      edition: '4ª',
      pages: 454,
      synopsis: `Excepturi alias dignissimos odio nam delectus.`,
      coverUrl: 'https://placekitten.com/205/581',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sed minima.`,
      subtitle: null,
      author: `Joana Rodrigues`,
      publisher: `Sales das Neves - ME`,
      publicationYear: 2010,
      genre: 'Occaecati',
      code: 'BOOK0393',
      isbn: '978-1-62025-825-5',
      language: 'Português',
      edition: '4ª',
      pages: 269,
      synopsis: `Veniam architecto dolor repellendus provident. Qui deleniti aperiam dicta.`,
      coverUrl: 'https://placekitten.com/293/14',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At fugiat ab at.`,
      subtitle: null,
      author: `Kaique Ferreira`,
      publisher: `da Cruz`,
      publicationYear: 2020,
      genre: 'Enim',
      code: 'BOOK0394',
      isbn: '978-1-08-276817-0',
      language: 'Português',
      edition: '4ª',
      pages: 512,
      synopsis: `Tempore laboriosam eum quia. Natus eaque consequatur culpa necessitatibus adipisci.`,
      coverUrl: 'https://placeimg.com/291/184/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempore mollitia quas.`,
      subtitle: `Amet sit quaerat vero officia.`,
      author: `Bernardo Ramos`,
      publisher: `da Paz Pires e Filhos`,
      publicationYear: 2013,
      genre: 'Esse',
      code: 'BOOK0395',
      isbn: '978-0-522-29993-9',
      language: 'Português',
      edition: '4ª',
      pages: 423,
      synopsis: `Veritatis quasi reiciendis omnis. Asperiores esse mollitia corporis tempore eveniet facilis vitae. Sequi molestiae eum velit eaque commodi quam.`,
      coverUrl: 'https://dummyimage.com/948x1009',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repellat enim.`,
      subtitle: null,
      author: `Murilo Melo`,
      publisher: `Fernandes`,
      publicationYear: 1950,
      genre: 'Repellat',
      code: 'BOOK0396',
      isbn: '978-0-279-97029-7',
      language: 'Português',
      edition: '1ª',
      pages: 718,
      synopsis: `Architecto animi doloribus tempore iusto minima. Quaerat distinctio provident repellendus consequuntur veritatis veniam.`,
      coverUrl: 'https://dummyimage.com/497x267',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veniam.`,
      subtitle: null,
      author: `Daniel Moreira`,
      publisher: `Barros`,
      publicationYear: 1996,
      genre: 'Quo',
      code: 'BOOK0397',
      isbn: '978-0-00-487978-9',
      language: 'Português',
      edition: '1ª',
      pages: 328,
      synopsis: `Sint ipsa placeat possimus quam soluta pariatur. Delectus odit hic aperiam saepe quibusdam. Dicta eius error.`,
      coverUrl: 'https://placekitten.com/794/167',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Itaque expedita.`,
      subtitle: `Veritatis sit necessitatibus unde.`,
      author: `Anthony da Costa`,
      publisher: `Monteiro Araújo S/A`,
      publicationYear: 1978,
      genre: 'Incidunt',
      code: 'BOOK0398',
      isbn: '978-1-4830-9309-3',
      language: 'Português',
      edition: '1ª',
      pages: 449,
      synopsis: `Assumenda placeat libero non beatae id odio. Blanditiis culpa sint unde. Illum quibusdam consequuntur beatae quo perferendis blanditiis.`,
      coverUrl: 'https://www.lorempixel.com/783/824',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam aliquam.`,
      subtitle: null,
      author: `Rebeca Azevedo`,
      publisher: `Cunha`,
      publicationYear: 2013,
      genre: 'Laboriosam',
      code: 'BOOK0399',
      isbn: '978-0-393-04936-7',
      language: 'Português',
      edition: '2ª',
      pages: 519,
      synopsis: `Dignissimos accusamus debitis officiis pariatur error. Aut quisquam eligendi aut eligendi ratione placeat. Minima ullam similique nemo eveniet consequatur nisi fugiat.`,
      coverUrl: 'https://placekitten.com/35/396',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam saepe architecto.`,
      subtitle: null,
      author: `Dra. Milena Almeida`,
      publisher: `Monteiro Costela e Filhos`,
      publicationYear: 2000,
      genre: 'Reprehenderit',
      code: 'BOOK0400',
      isbn: '978-0-13-712436-7',
      language: 'Português',
      edition: '2ª',
      pages: 568,
      synopsis: `Eveniet facilis esse unde distinctio ad velit. Ad voluptatibus ut in. Nostrum laboriosam nam eius cumque nulla.`,
      coverUrl: 'https://placeimg.com/907/174/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Similique ad dolorem.`,
      subtitle: `Similique minus veniam.`,
      author: `Joaquim Lopes`,
      publisher: `da Cruz`,
      publicationYear: 2007,
      genre: 'Vitae',
      code: 'BOOK0401',
      isbn: '978-0-403-01095-0',
      language: 'Português',
      edition: '4ª',
      pages: 774,
      synopsis: `Natus quisquam iste incidunt ratione numquam fuga. Perspiciatis voluptatum fuga incidunt cupiditate doloribus laboriosam autem. Iure a aliquid animi blanditiis.`,
      coverUrl: 'https://dummyimage.com/251x79',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque.`,
      subtitle: null,
      author: `Daniela Castro`,
      publisher: `Nunes`,
      publicationYear: 2020,
      genre: 'Harum',
      code: 'BOOK0402',
      isbn: '978-1-268-08081-2',
      language: 'Português',
      edition: '4ª',
      pages: 699,
      synopsis: `Autem nihil sit autem exercitationem aperiam assumenda. Aliquam iste doloribus iure dolorem aspernatur aliquid. Facere minus eius error reiciendis.`,
      coverUrl: 'https://dummyimage.com/358x233',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ad.`,
      subtitle: `Ipsa expedita similique perspiciatis ipsum provident.`,
      author: `Eloah Sales`,
      publisher: `da Rocha S/A`,
      publicationYear: 1991,
      genre: 'Ratione',
      code: 'BOOK0403',
      isbn: '978-1-339-62746-5',
      language: 'Português',
      edition: '5ª',
      pages: 493,
      synopsis: `Reprehenderit aspernatur nesciunt minima rerum praesentium. Accusantium animi eaque impedit aut vitae occaecati. Quidem recusandae amet.`,
      coverUrl: 'https://www.lorempixel.com/994/957',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias quibusdam.`,
      subtitle: `Nesciunt molestiae velit architecto.`,
      author: `Dra. Sophia Fogaça`,
      publisher: `Lopes S.A.`,
      publicationYear: 1967,
      genre: 'Vel',
      code: 'BOOK0404',
      isbn: '978-1-204-99809-6',
      language: 'Português',
      edition: '2ª',
      pages: 522,
      synopsis: `Reprehenderit ut hic non voluptatibus odit officia dicta. Ipsa blanditiis impedit nobis quibusdam aut tenetur veritatis.`,
      coverUrl: 'https://placeimg.com/304/442/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veritatis laborum.`,
      subtitle: `Eaque doloremque cupiditate eum delectus qui.`,
      author: `Natália Gonçalves`,
      publisher: `Porto S/A`,
      publicationYear: 1987,
      genre: 'Atque',
      code: 'BOOK0405',
      isbn: '978-0-620-37087-5',
      language: 'Português',
      edition: '3ª',
      pages: 788,
      synopsis: `Autem illum sapiente optio. Occaecati optio ea. Velit reiciendis doloremque placeat quibusdam nemo nisi.`,
      coverUrl: 'https://www.lorempixel.com/918/300',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptate vitae.`,
      subtitle: null,
      author: `Dra. Lívia Gonçalves`,
      publisher: `Cardoso - EI`,
      publicationYear: 2024,
      genre: 'Natus',
      code: 'BOOK0406',
      isbn: '978-1-82217-588-6',
      language: 'Português',
      edition: '5ª',
      pages: 783,
      synopsis: `Voluptatem voluptas fugiat ut molestiae aperiam ad. Aliquid labore labore atque sapiente sapiente fugit.`,
      coverUrl: 'https://placeimg.com/174/613/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam pariatur.`,
      subtitle: `Magni libero repellendus earum.`,
      author: `Noah Pereira`,
      publisher: `Rezende Novaes - EI`,
      publicationYear: 1957,
      genre: 'Velit',
      code: 'BOOK0407',
      isbn: '978-0-409-53141-1',
      language: 'Português',
      edition: '2ª',
      pages: 373,
      synopsis: `Beatae incidunt laudantium mollitia dolorum laborum. Nam ex fugiat autem ut neque similique. Delectus odit suscipit unde praesentium eligendi. Fugiat molestias quam vel inventore eaque maiores corrupti.`,
      coverUrl: 'https://dummyimage.com/909x23',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi harum cum.`,
      subtitle: `Neque doloribus occaecati eius molestias.`,
      author: `Luiz Fernando das Neves`,
      publisher: `Teixeira`,
      publicationYear: 2019,
      genre: 'Natus',
      code: 'BOOK0408',
      isbn: '978-0-624-67287-6',
      language: 'Português',
      edition: '1ª',
      pages: 467,
      synopsis: `Architecto ad rerum at asperiores voluptatum beatae. Facere quidem nobis repellendus voluptatum. Quaerat autem distinctio quaerat tempora. Delectus dolorum ullam eum maiores id.`,
      coverUrl: 'https://placekitten.com/44/339',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quibusdam libero.`,
      subtitle: `Commodi atque et adipisci.`,
      author: `Samuel Gonçalves`,
      publisher: `Araújo`,
      publicationYear: 1986,
      genre: 'Reiciendis',
      code: 'BOOK0409',
      isbn: '978-1-177-18249-2',
      language: 'Português',
      edition: '1ª',
      pages: 490,
      synopsis: `Quidem occaecati molestias vero quas sint iure. Corporis earum ipsam impedit sed autem dolorem. Numquam ullam occaecati veniam molestias nulla.`,
      coverUrl: 'https://placeimg.com/509/810/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut fugit.`,
      subtitle: null,
      author: `Ryan Carvalho`,
      publisher: `Mendes`,
      publicationYear: 1975,
      genre: 'Repudiandae',
      code: 'BOOK0410',
      isbn: '978-1-01-192920-7',
      language: 'Português',
      edition: '5ª',
      pages: 553,
      synopsis: `Doloribus ut suscipit aliquid beatae labore. Placeat aperiam rerum modi quo rem. In dolorum voluptate officia aut.`,
      coverUrl: 'https://placekitten.com/532/671',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Animi laborum aliquid nisi.`,
      subtitle: `Error consequatur minus neque debitis eos.`,
      author: `Isis Freitas`,
      publisher: `Pinto`,
      publicationYear: 1972,
      genre: 'Praesentium',
      code: 'BOOK0411',
      isbn: '978-0-564-20456-4',
      language: 'Português',
      edition: '1ª',
      pages: 291,
      synopsis: `Quidem excepturi tempora necessitatibus quos est eum. Deleniti magni non incidunt doloribus. Ducimus illo fugit consectetur odio quo.`,
      coverUrl: 'https://www.lorempixel.com/689/592',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Id ex.`,
      subtitle: `Expedita unde ab ut incidunt sequi.`,
      author: `Davi da Costa`,
      publisher: `da Mata`,
      publicationYear: 1983,
      genre: 'Odio',
      code: 'BOOK0412',
      isbn: '978-1-74625-916-7',
      language: 'Português',
      edition: '2ª',
      pages: 264,
      synopsis: `Aspernatur eligendi voluptatem at.`,
      coverUrl: 'https://www.lorempixel.com/514/795',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quidem.`,
      subtitle: `Autem nihil voluptatem.`,
      author: `Raquel Sales`,
      publisher: `da Paz Cardoso S.A.`,
      publicationYear: 1991,
      genre: 'Repellat',
      code: 'BOOK0413',
      isbn: '978-1-04-726426-6',
      language: 'Português',
      edition: '5ª',
      pages: 152,
      synopsis: `Quas ullam amet minus. Quasi sunt exercitationem inventore possimus.`,
      coverUrl: 'https://placeimg.com/790/98/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita reprehenderit cumque.`,
      subtitle: null,
      author: `Luiz Gustavo da Luz`,
      publisher: `Costela`,
      publicationYear: 1973,
      genre: 'Cupiditate',
      code: 'BOOK0414',
      isbn: '978-1-4540-0644-2',
      language: 'Português',
      edition: '5ª',
      pages: 169,
      synopsis: `Officiis excepturi corporis deserunt sunt. Consequuntur deserunt vel voluptates. Quo nostrum qui voluptate placeat.`,
      coverUrl: 'https://placeimg.com/173/923/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam doloribus eos.`,
      subtitle: `Laudantium adipisci sint nam.`,
      author: `Nina da Cunha`,
      publisher: `Ribeiro Ltda.`,
      publicationYear: 1977,
      genre: 'Accusantium',
      code: 'BOOK0415',
      isbn: '978-0-9630453-0-0',
      language: 'Português',
      edition: '3ª',
      pages: 439,
      synopsis: `Voluptatibus voluptatem eveniet molestias rerum eaque tempora ex. Sunt accusamus similique sint ratione. Maiores quaerat id labore.`,
      coverUrl: 'https://placeimg.com/586/137/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptates eius ducimus.`,
      subtitle: `Ea incidunt repudiandae distinctio modi.`,
      author: `Sr. Lucas da Rosa`,
      publisher: `Vieira`,
      publicationYear: 1994,
      genre: 'Corrupti',
      code: 'BOOK0416',
      isbn: '978-1-391-28788-1',
      language: 'Português',
      edition: '4ª',
      pages: 346,
      synopsis: `Quasi rem necessitatibus incidunt nesciunt maiores culpa. Aperiam voluptatibus et neque consequatur laboriosam earum ipsum.`,
      coverUrl: 'https://placeimg.com/281/519/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias at.`,
      subtitle: `Molestiae vitae quae cupiditate consequatur dignissimos.`,
      author: `Milena das Neves`,
      publisher: `da Cruz`,
      publicationYear: 2019,
      genre: 'Quasi',
      code: 'BOOK0417',
      isbn: '978-0-912187-06-8',
      language: 'Português',
      edition: '3ª',
      pages: 125,
      synopsis: `Distinctio cupiditate sint unde quae nam distinctio. Commodi repellendus accusamus dolorem.`,
      coverUrl: 'https://www.lorempixel.com/4/33',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Harum inventore beatae.`,
      subtitle: `Magni occaecati perferendis.`,
      author: `Yasmin Rocha`,
      publisher: `Costa`,
      publicationYear: 1974,
      genre: 'Accusamus',
      code: 'BOOK0418',
      isbn: '978-1-356-14038-1',
      language: 'Português',
      edition: '3ª',
      pages: 626,
      synopsis: `Officiis odit assumenda magni aliquid laboriosam. Quos quisquam mollitia consequuntur et illum.`,
      coverUrl: 'https://www.lorempixel.com/647/200',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eius.`,
      subtitle: `Itaque quibusdam totam.`,
      author: `João Lucas Freitas`,
      publisher: `Nascimento`,
      publicationYear: 1977,
      genre: 'Nulla',
      code: 'BOOK0419',
      isbn: '978-1-00-666641-4',
      language: 'Português',
      edition: '4ª',
      pages: 206,
      synopsis: `Temporibus hic fuga. Quae provident tempora velit.`,
      coverUrl: 'https://placeimg.com/577/3/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eum id repellendus.`,
      subtitle: null,
      author: `Emanuelly Ribeiro`,
      publisher: `Silveira - EI`,
      publicationYear: 1954,
      genre: 'Accusantium',
      code: 'BOOK0420',
      isbn: '978-0-668-34826-3',
      language: 'Português',
      edition: '1ª',
      pages: 175,
      synopsis: `Natus illo harum itaque accusamus doloremque inventore. Maxime odio blanditiis minus placeat odit quos. Facilis fuga nihil debitis.`,
      coverUrl: 'https://placeimg.com/928/158/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ad nisi consectetur.`,
      subtitle: `Consequatur sunt quisquam.`,
      author: `Dr. Pedro Lucas Silveira`,
      publisher: `Nascimento Alves Ltda.`,
      publicationYear: 2007,
      genre: 'Beatae',
      code: 'BOOK0421',
      isbn: '978-1-217-55851-5',
      language: 'Português',
      edition: '4ª',
      pages: 543,
      synopsis: `Itaque provident perferendis consequuntur error nobis quos. Molestiae reiciendis officia corporis. Non nihil velit ipsa.`,
      coverUrl: 'https://dummyimage.com/362x333',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit ex nesciunt ipsum.`,
      subtitle: null,
      author: `Sra. Rebeca Moreira`,
      publisher: `Costela`,
      publicationYear: 1958,
      genre: 'Corporis',
      code: 'BOOK0422',
      isbn: '978-1-57056-820-6',
      language: 'Português',
      edition: '5ª',
      pages: 146,
      synopsis: `Commodi sit libero a. Accusantium quasi aperiam id unde tempore illum. Itaque distinctio consequatur.`,
      coverUrl: 'https://dummyimage.com/962x363',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nostrum suscipit suscipit.`,
      subtitle: `A at maxime veniam.`,
      author: `Carolina da Cruz`,
      publisher: `Porto`,
      publicationYear: 2006,
      genre: 'Excepturi',
      code: 'BOOK0423',
      isbn: '978-0-616-85071-8',
      language: 'Português',
      edition: '4ª',
      pages: 504,
      synopsis: `Velit odit quidem animi blanditiis fuga. Nostrum sapiente suscipit.`,
      coverUrl: 'https://placekitten.com/223/176',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Incidunt quibusdam.`,
      subtitle: null,
      author: `Vinicius Moreira`,
      publisher: `Pires Barros - EI`,
      publicationYear: 2019,
      genre: 'Deleniti',
      code: 'BOOK0424',
      isbn: '978-0-07-169500-8',
      language: 'Português',
      edition: '3ª',
      pages: 749,
      synopsis: `Temporibus rerum officiis soluta nemo. Natus eveniet eos repellat consequuntur. Maxime impedit nam distinctio similique exercitationem nisi.`,
      coverUrl: 'https://www.lorempixel.com/571/967',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe at numquam.`,
      subtitle: `Unde voluptate dicta est modi distinctio.`,
      author: `Srta. Alícia Ferreira`,
      publisher: `Barbosa`,
      publicationYear: 2023,
      genre: 'Dolor',
      code: 'BOOK0425',
      isbn: '978-1-321-74357-9',
      language: 'Português',
      edition: '5ª',
      pages: 503,
      synopsis: `Quisquam reprehenderit excepturi ullam in aperiam similique. Ipsa quia ipsum nihil dolor quaerat dolorum.`,
      coverUrl: 'https://placekitten.com/613/399',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Et dolorem.`,
      subtitle: `Voluptas error totam molestiae ex amet repellendus.`,
      author: `Thales Barros`,
      publisher: `Moreira`,
      publicationYear: 2015,
      genre: 'Occaecati',
      code: 'BOOK0426',
      isbn: '978-1-156-23920-9',
      language: 'Português',
      edition: '2ª',
      pages: 264,
      synopsis: `Molestiae ex quisquam. Aliquam occaecati est adipisci. Aut doloremque veritatis voluptatum iure magni harum nobis. Consequuntur rem provident.`,
      coverUrl: 'https://www.lorempixel.com/911/796',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cumque ad.`,
      subtitle: `Fuga doloremque repellendus ut praesentium assumenda.`,
      author: `Alexandre Cardoso`,
      publisher: `da Mata Pires Ltda.`,
      publicationYear: 2022,
      genre: 'Recusandae',
      code: 'BOOK0427',
      isbn: '978-0-02-601515-8',
      language: 'Português',
      edition: '1ª',
      pages: 662,
      synopsis: `Temporibus expedita reiciendis placeat. Ea odio nulla adipisci eligendi veritatis laudantium quisquam.`,
      coverUrl: 'https://placeimg.com/391/264/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia ut provident nihil.`,
      subtitle: `Officia totam pariatur repudiandae aliquid.`,
      author: `Esther da Rosa`,
      publisher: `Alves`,
      publicationYear: 2024,
      genre: 'Enim',
      code: 'BOOK0428',
      isbn: '978-0-452-03608-6',
      language: 'Português',
      edition: '4ª',
      pages: 438,
      synopsis: `Aperiam molestiae occaecati tenetur veritatis. Sunt nulla cupiditate molestias exercitationem quibusdam. Placeat excepturi aliquid harum alias illum. Necessitatibus neque officia id incidunt totam repudiandae.`,
      coverUrl: 'https://placeimg.com/120/150/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore aliquid possimus.`,
      subtitle: null,
      author: `Lucca Santos`,
      publisher: `Costela`,
      publicationYear: 1974,
      genre: 'Esse',
      code: 'BOOK0429',
      isbn: '978-1-4953-0067-7',
      language: 'Português',
      edition: '3ª',
      pages: 597,
      synopsis: `Quis sed ex ab cum expedita. Asperiores distinctio fugit. Consectetur hic enim itaque ducimus.`,
      coverUrl: 'https://dummyimage.com/125x382',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ratione est.`,
      subtitle: null,
      author: `Bernardo Alves`,
      publisher: `Barbosa e Filhos`,
      publicationYear: 2004,
      genre: 'Nihil',
      code: 'BOOK0430',
      isbn: '978-1-308-86843-1',
      language: 'Português',
      edition: '2ª',
      pages: 104,
      synopsis: `Suscipit blanditiis fugit ipsam.`,
      coverUrl: 'https://placekitten.com/278/13',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero unde itaque.`,
      subtitle: `Nam voluptatem iste similique similique assumenda.`,
      author: `Sarah Pereira`,
      publisher: `da Cunha`,
      publicationYear: 1992,
      genre: 'Nam',
      code: 'BOOK0431',
      isbn: '978-0-362-02755-6',
      language: 'Português',
      edition: '4ª',
      pages: 573,
      synopsis: `Aspernatur iure iure ad. Commodi tenetur beatae reiciendis sapiente dolorem quibusdam ab. Inventore vero aut recusandae quas.`,
      coverUrl: 'https://placekitten.com/350/138',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quos minima tenetur.`,
      subtitle: null,
      author: `Srta. Nina Moreira`,
      publisher: `Pinto S/A`,
      publicationYear: 1967,
      genre: 'Culpa',
      code: 'BOOK0432',
      isbn: '978-0-85588-195-5',
      language: 'Português',
      edition: '5ª',
      pages: 301,
      synopsis: `Porro iusto provident atque nam aliquid amet. Totam laboriosam quisquam praesentium similique architecto. Non culpa tenetur laboriosam cupiditate magni.`,
      coverUrl: 'https://www.lorempixel.com/679/636',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum consequuntur.`,
      subtitle: null,
      author: `Sra. Bruna Almeida`,
      publisher: `da Luz - EI`,
      publicationYear: 2024,
      genre: 'Error',
      code: 'BOOK0433',
      isbn: '978-0-322-04144-8',
      language: 'Português',
      edition: '5ª',
      pages: 514,
      synopsis: `Omnis quasi unde similique quibusdam. In veritatis facere nobis. Praesentium perferendis quasi quasi consectetur.`,
      coverUrl: 'https://placekitten.com/425/103',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolor consectetur.`,
      subtitle: null,
      author: `Sra. Luna Moraes`,
      publisher: `Cavalcanti Farias Ltda.`,
      publicationYear: 1969,
      genre: 'Earum',
      code: 'BOOK0434',
      isbn: '978-0-8165-0646-0',
      language: 'Português',
      edition: '3ª',
      pages: 501,
      synopsis: `Placeat repudiandae exercitationem. Doloremque repudiandae itaque explicabo temporibus atque modi consequatur.`,
      coverUrl: 'https://dummyimage.com/145x46',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At placeat repellat voluptatem.`,
      subtitle: `Iusto fugiat non.`,
      author: `Nathan Souza`,
      publisher: `Costa Araújo Ltda.`,
      publicationYear: 1951,
      genre: 'Expedita',
      code: 'BOOK0435',
      isbn: '978-0-9662291-3-4',
      language: 'Português',
      edition: '2ª',
      pages: 728,
      synopsis: `Laborum magnam facilis nam fuga sapiente. Itaque quidem tempora fugit praesentium ut.`,
      coverUrl: 'https://placekitten.com/172/806',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aperiam neque quod.`,
      subtitle: null,
      author: `Heitor Azevedo`,
      publisher: `Pinto`,
      publicationYear: 2022,
      genre: 'Mollitia',
      code: 'BOOK0436',
      isbn: '978-1-933965-04-8',
      language: 'Português',
      edition: '2ª',
      pages: 595,
      synopsis: `Cumque deleniti sed harum inventore rerum. Eos corporis dolor illum. Ullam qui velit mollitia. Eaque corrupti perspiciatis sed odio veritatis.`,
      coverUrl: 'https://placeimg.com/1009/200/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit quam.`,
      subtitle: `Omnis necessitatibus fugit.`,
      author: `Eduardo Mendes`,
      publisher: `Cunha Gomes - ME`,
      publicationYear: 1979,
      genre: 'Ea',
      code: 'BOOK0437',
      isbn: '978-0-583-33430-3',
      language: 'Português',
      edition: '1ª',
      pages: 784,
      synopsis: `Aspernatur rerum sed minus. Adipisci voluptatem eaque sint quod hic.`,
      coverUrl: 'https://placekitten.com/550/1022',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo quae quam.`,
      subtitle: null,
      author: `Thiago Melo`,
      publisher: `Moreira Duarte - ME`,
      publicationYear: 1991,
      genre: 'Maxime',
      code: 'BOOK0438',
      isbn: '978-1-66986-163-8',
      language: 'Português',
      edition: '1ª',
      pages: 633,
      synopsis: `Aspernatur exercitationem fuga modi. Nemo unde vel.`,
      coverUrl: 'https://placekitten.com/627/179',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quis nisi.`,
      subtitle: `Ratione fuga fugit error ipsum.`,
      author: `Erick Alves`,
      publisher: `Freitas`,
      publicationYear: 1959,
      genre: 'Deleniti',
      code: 'BOOK0439',
      isbn: '978-1-914261-40-4',
      language: 'Português',
      edition: '5ª',
      pages: 357,
      synopsis: `Nesciunt dolorum tempore velit repellendus error et. Distinctio repellat iste impedit omnis.`,
      coverUrl: 'https://www.lorempixel.com/937/462',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquam.`,
      subtitle: `Officia quasi libero minus explicabo cumque.`,
      author: `Bruno Moura`,
      publisher: `Carvalho`,
      publicationYear: 2011,
      genre: 'Quos',
      code: 'BOOK0440',
      isbn: '978-1-235-42687-2',
      language: 'Português',
      edition: '5ª',
      pages: 106,
      synopsis: `Sapiente officiis perspiciatis aliquid libero. Sit ut perspiciatis porro.`,
      coverUrl: 'https://dummyimage.com/841x699',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus iure.`,
      subtitle: `Neque id eum.`,
      author: `Diogo Rezende`,
      publisher: `Correia Ltda.`,
      publicationYear: 1985,
      genre: 'Assumenda',
      code: 'BOOK0441',
      isbn: '978-1-278-10558-1',
      language: 'Português',
      edition: '2ª',
      pages: 253,
      synopsis: `Ad corrupti sequi.`,
      coverUrl: 'https://www.lorempixel.com/364/262',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Delectus iure.`,
      subtitle: null,
      author: `Cauã Pereira`,
      publisher: `Jesus S.A.`,
      publicationYear: 1964,
      genre: 'Rem',
      code: 'BOOK0442',
      isbn: '978-0-681-72031-2',
      language: 'Português',
      edition: '4ª',
      pages: 791,
      synopsis: `Numquam expedita culpa quod debitis quam. Officia nemo occaecati laborum doloribus consectetur fuga nostrum.`,
      coverUrl: 'https://dummyimage.com/436x480',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corrupti possimus.`,
      subtitle: `Dolorem nulla tempora nobis cupiditate.`,
      author: `João Guilherme Ribeiro`,
      publisher: `Moraes das Neves S.A.`,
      publicationYear: 2023,
      genre: 'Eum',
      code: 'BOOK0443',
      isbn: '978-1-185-07610-3',
      language: 'Português',
      edition: '5ª',
      pages: 264,
      synopsis: `Aliquid deleniti non ratione blanditiis magni culpa. Fugit atque laudantium culpa aut. Dolore vitae perspiciatis odio delectus at similique.`,
      coverUrl: 'https://placekitten.com/890/536',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam eveniet quidem.`,
      subtitle: `Corporis voluptatem vitae.`,
      author: `Srta. Bianca da Cruz`,
      publisher: `Cavalcanti - EI`,
      publicationYear: 1973,
      genre: 'Illum',
      code: 'BOOK0444',
      isbn: '978-0-589-22256-7',
      language: 'Português',
      edition: '5ª',
      pages: 515,
      synopsis: `Delectus suscipit voluptatibus excepturi fuga aliquid. Doloribus tempore ratione laboriosam reiciendis architecto.`,
      coverUrl: 'https://placekitten.com/234/113',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Placeat laudantium autem.`,
      subtitle: `Ab pariatur dolorem nam.`,
      author: `Vitor Costa`,
      publisher: `da Costa`,
      publicationYear: 2010,
      genre: 'Accusantium',
      code: 'BOOK0445',
      isbn: '978-0-626-08463-9',
      language: 'Português',
      edition: '4ª',
      pages: 274,
      synopsis: `Omnis harum et eius labore facere dolorum. Reiciendis vel optio fuga. Voluptate eaque aspernatur quisquam perferendis ex.`,
      coverUrl: 'https://www.lorempixel.com/556/34',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam nihil distinctio.`,
      subtitle: `Iste libero rem animi rem.`,
      author: `Anthony Fernandes`,
      publisher: `Pinto da Cruz e Filhos`,
      publicationYear: 1993,
      genre: 'Accusantium',
      code: 'BOOK0446',
      isbn: '978-1-121-24139-8',
      language: 'Português',
      edition: '4ª',
      pages: 710,
      synopsis: `Temporibus nulla iure necessitatibus iste alias. Labore asperiores incidunt tempora doloremque reiciendis voluptates.`,
      coverUrl: 'https://placeimg.com/379/270/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perferendis adipisci vero.`,
      subtitle: `Vitae modi labore molestias explicabo sapiente.`,
      author: `Pedro Lucas Lima`,
      publisher: `Correia Carvalho e Filhos`,
      publicationYear: 1975,
      genre: 'Modi',
      code: 'BOOK0447',
      isbn: '978-1-308-95231-4',
      language: 'Português',
      edition: '5ª',
      pages: 616,
      synopsis: `Culpa nesciunt explicabo. Quo laborum fugiat.`,
      coverUrl: 'https://placekitten.com/579/934',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ab amet consequuntur.`,
      subtitle: `Iure esse molestias quis libero error.`,
      author: `Maria Sophia Porto`,
      publisher: `Carvalho`,
      publicationYear: 1954,
      genre: 'Nihil',
      code: 'BOOK0448',
      isbn: '978-1-56045-006-1',
      language: 'Português',
      edition: '5ª',
      pages: 615,
      synopsis: `Et dolore dicta nihil harum earum. Nulla vitae ipsam beatae odio officiis.`,
      coverUrl: 'https://dummyimage.com/281x778',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dignissimos possimus nisi.`,
      subtitle: null,
      author: `Srta. Camila Moura`,
      publisher: `Correia`,
      publicationYear: 2005,
      genre: 'Dolorem',
      code: 'BOOK0449',
      isbn: '978-1-63643-159-8',
      language: 'Português',
      edition: '5ª',
      pages: 530,
      synopsis: `Nulla nam necessitatibus excepturi hic ullam impedit. Dolorum voluptas quidem soluta velit eos.`,
      coverUrl: 'https://placekitten.com/453/629',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae esse.`,
      subtitle: null,
      author: `João Vitor Farias`,
      publisher: `Ferreira Freitas - EI`,
      publicationYear: 1998,
      genre: 'Odio',
      code: 'BOOK0450',
      isbn: '978-0-946408-82-5',
      language: 'Português',
      edition: '3ª',
      pages: 703,
      synopsis: `Aliquid eveniet in non labore. Voluptates pariatur modi quo minima.`,
      coverUrl: 'https://dummyimage.com/552x204',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aut ab.`,
      subtitle: `Ipsum aperiam cupiditate similique quis laboriosam.`,
      author: `Luiz Henrique Monteiro`,
      publisher: `Gomes Oliveira Ltda.`,
      publicationYear: 1979,
      genre: 'Labore',
      code: 'BOOK0451',
      isbn: '978-0-203-00449-4',
      language: 'Português',
      edition: '1ª',
      pages: 390,
      synopsis: `Fugit aperiam quam dolore amet. Consequuntur qui explicabo. Quod dignissimos sint ex.`,
      coverUrl: 'https://placeimg.com/805/729/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ex excepturi.`,
      subtitle: null,
      author: `Lorena Almeida`,
      publisher: `Cardoso`,
      publicationYear: 1965,
      genre: 'Rem',
      code: 'BOOK0452',
      isbn: '978-0-458-43456-5',
      language: 'Português',
      edition: '5ª',
      pages: 107,
      synopsis: `Assumenda dolore molestiae fuga suscipit. Tempora deleniti illum ut qui. Similique deserunt itaque.`,
      coverUrl: 'https://placeimg.com/375/542/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Omnis accusantium.`,
      subtitle: `Optio quae impedit qui.`,
      author: `Yasmin Novaes`,
      publisher: `Azevedo - EI`,
      publicationYear: 2024,
      genre: 'Totam',
      code: 'BOOK0453',
      isbn: '978-0-946902-17-0',
      language: 'Português',
      edition: '3ª',
      pages: 367,
      synopsis: `Aperiam ea voluptatibus error sapiente. Culpa modi recusandae facilis. Cum repellendus non.`,
      coverUrl: 'https://placeimg.com/574/864/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Debitis quibusdam quas.`,
      subtitle: `Dicta consequatur voluptatibus numquam.`,
      author: `André Cunha`,
      publisher: `Cunha Ltda.`,
      publicationYear: 2021,
      genre: 'Natus',
      code: 'BOOK0454',
      isbn: '978-0-303-03346-2',
      language: 'Português',
      edition: '4ª',
      pages: 283,
      synopsis: `Architecto porro pariatur incidunt itaque ut. Ipsa incidunt quod. Nostrum quibusdam et tempore animi eius fuga animi.`,
      coverUrl: 'https://placekitten.com/354/472',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cupiditate adipisci earum.`,
      subtitle: null,
      author: `Augusto Costela`,
      publisher: `Ramos`,
      publicationYear: 1965,
      genre: 'Atque',
      code: 'BOOK0455',
      isbn: '978-0-7222-4050-2',
      language: 'Português',
      edition: '2ª',
      pages: 557,
      synopsis: `Totam ea sunt iure quod aut. Odit porro eum ea autem ratione nobis. Unde amet facere molestiae.`,
      coverUrl: 'https://placeimg.com/902/315/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corporis magni ut debitis.`,
      subtitle: `Nisi rem nesciunt porro harum.`,
      author: `Esther Fernandes`,
      publisher: `Farias Rodrigues S.A.`,
      publicationYear: 1950,
      genre: 'Sunt',
      code: 'BOOK0456',
      isbn: '978-1-912121-10-6',
      language: 'Português',
      edition: '1ª',
      pages: 248,
      synopsis: `Itaque maiores doloremque expedita porro impedit ullam. Amet totam voluptate asperiores sequi sint laborum possimus.`,
      coverUrl: 'https://placekitten.com/461/309',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nesciunt nulla.`,
      subtitle: `Possimus debitis et suscipit.`,
      author: `Luiz Felipe Cavalcanti`,
      publisher: `da Luz da Conceição - ME`,
      publicationYear: 1954,
      genre: 'Molestias',
      code: 'BOOK0457',
      isbn: '978-0-387-22054-3',
      language: 'Português',
      edition: '4ª',
      pages: 510,
      synopsis: `Beatae debitis perspiciatis placeat. Nihil officia sed deserunt deserunt.`,
      coverUrl: 'https://dummyimage.com/3x400',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos ipsam.`,
      subtitle: `Esse saepe libero.`,
      author: `Maria Luiza Melo`,
      publisher: `Fogaça - ME`,
      publicationYear: 1975,
      genre: 'Adipisci',
      code: 'BOOK0458',
      isbn: '978-0-596-85195-8',
      language: 'Português',
      edition: '5ª',
      pages: 392,
      synopsis: `Libero numquam temporibus id odio distinctio veniam. Qui impedit eaque iste libero eum cupiditate tenetur.`,
      coverUrl: 'https://placeimg.com/314/35/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit expedita.`,
      subtitle: null,
      author: `Danilo Cunha`,
      publisher: `Moura - EI`,
      publicationYear: 1996,
      genre: 'Dolore',
      code: 'BOOK0459',
      isbn: '978-1-115-63029-0',
      language: 'Português',
      edition: '2ª',
      pages: 770,
      synopsis: `Quidem praesentium illo ipsa iure quam. Officia cupiditate numquam eos. Aliquam fugiat excepturi ea.`,
      coverUrl: 'https://www.lorempixel.com/55/695',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dignissimos autem.`,
      subtitle: null,
      author: `Maria Alice Barbosa`,
      publisher: `Fogaça - EI`,
      publicationYear: 2001,
      genre: 'Quibusdam',
      code: 'BOOK0460',
      isbn: '978-0-11-221215-7',
      language: 'Português',
      edition: '5ª',
      pages: 305,
      synopsis: `Optio sunt quae modi sit molestiae modi. Error ab quis autem eveniet nam.`,
      coverUrl: 'https://placekitten.com/119/797',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quibusdam saepe.`,
      subtitle: `Aliquam harum necessitatibus.`,
      author: `Luna Pires`,
      publisher: `Farias`,
      publicationYear: 2021,
      genre: 'Ipsam',
      code: 'BOOK0461',
      isbn: '978-1-64641-962-3',
      language: 'Português',
      edition: '5ª',
      pages: 456,
      synopsis: `Omnis beatae consequuntur ut repellat. Asperiores delectus esse aperiam.`,
      coverUrl: 'https://placekitten.com/582/334',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolor voluptate eligendi.`,
      subtitle: `Vel totam necessitatibus similique sint at.`,
      author: `Lavínia da Costa`,
      publisher: `Freitas`,
      publicationYear: 2002,
      genre: 'Repellat',
      code: 'BOOK0462',
      isbn: '978-0-8318-0036-9',
      language: 'Português',
      edition: '5ª',
      pages: 209,
      synopsis: `Accusantium porro cumque a a vel. Molestiae deserunt id sit. Eum aliquid repellat.`,
      coverUrl: 'https://dummyimage.com/553x500',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quae vel mollitia.`,
      subtitle: null,
      author: `Kaique da Cunha`,
      publisher: `Caldeira - ME`,
      publicationYear: 1982,
      genre: 'Nam',
      code: 'BOOK0463',
      isbn: '978-0-7633-2838-2',
      language: 'Português',
      edition: '5ª',
      pages: 688,
      synopsis: `Perferendis sunt dignissimos repellendus illum quia. Excepturi beatae occaecati molestiae repellat repudiandae illo. Iste dolorum mollitia vitae autem voluptate. Culpa magni culpa tempore quaerat.`,
      coverUrl: 'https://dummyimage.com/312x203',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempore itaque nobis.`,
      subtitle: null,
      author: `Luiz Miguel Rocha`,
      publisher: `Aragão`,
      publicationYear: 2008,
      genre: 'Necessitatibus',
      code: 'BOOK0464',
      isbn: '978-1-61065-920-8',
      language: 'Português',
      edition: '4ª',
      pages: 700,
      synopsis: `Aut omnis eaque quo numquam iusto ipsam. Blanditiis ullam possimus explicabo nisi neque. Officia molestiae error optio debitis perferendis voluptatibus.`,
      coverUrl: 'https://placeimg.com/308/800/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Possimus reprehenderit modi.`,
      subtitle: null,
      author: `Paulo Moraes`,
      publisher: `Cunha Ltda.`,
      publicationYear: 1978,
      genre: 'Occaecati',
      code: 'BOOK0465',
      isbn: '978-1-989925-53-9',
      language: 'Português',
      edition: '2ª',
      pages: 423,
      synopsis: `Perferendis occaecati ab ipsam error. Neque non ipsam occaecati. Quisquam illum nihil voluptatum. Quisquam nemo id accusantium.`,
      coverUrl: 'https://placekitten.com/7/936',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ducimus explicabo nulla.`,
      subtitle: `Eligendi eius veritatis deserunt non magnam.`,
      author: `Carlos Eduardo Oliveira`,
      publisher: `Farias`,
      publicationYear: 1961,
      genre: 'Illo',
      code: 'BOOK0466',
      isbn: '978-1-369-88164-6',
      language: 'Português',
      edition: '4ª',
      pages: 789,
      synopsis: `Adipisci enim ab non optio maiores hic. Eveniet cupiditate saepe. Cum consequuntur itaque. Id mollitia temporibus accusantium molestias earum.`,
      coverUrl: 'https://www.lorempixel.com/517/734',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `A soluta.`,
      subtitle: `Nam soluta rem ex esse repellendus.`,
      author: `Eduarda Ribeiro`,
      publisher: `Cavalcanti`,
      publicationYear: 1977,
      genre: 'Quod',
      code: 'BOOK0467',
      isbn: '978-1-302-75000-8',
      language: 'Português',
      edition: '5ª',
      pages: 375,
      synopsis: `Perspiciatis quam quis. Aut suscipit quod explicabo dignissimos tenetur.`,
      coverUrl: 'https://placekitten.com/732/793',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam quisquam.`,
      subtitle: null,
      author: `Leonardo Viana`,
      publisher: `Pinto`,
      publicationYear: 1976,
      genre: 'Occaecati',
      code: 'BOOK0468',
      isbn: '978-1-01-872600-7',
      language: 'Português',
      edition: '2ª',
      pages: 307,
      synopsis: `Quibusdam incidunt suscipit commodi doloremque ullam esse voluptas. Nobis vel hic earum.`,
      coverUrl: 'https://placeimg.com/702/864/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cum velit fugiat.`,
      subtitle: null,
      author: `Carlos Eduardo Martins`,
      publisher: `Pinto`,
      publicationYear: 2013,
      genre: 'Perferendis',
      code: 'BOOK0469',
      isbn: '978-1-62221-905-6',
      language: 'Português',
      edition: '5ª',
      pages: 106,
      synopsis: `Ut officia eos recusandae ea. Laboriosam harum molestiae placeat eveniet.`,
      coverUrl: 'https://placekitten.com/456/895',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Atque reprehenderit.`,
      subtitle: `Modi est laudantium aspernatur.`,
      author: `Gustavo Henrique Melo`,
      publisher: `da Rosa`,
      publicationYear: 2023,
      genre: 'Corporis',
      code: 'BOOK0470',
      isbn: '978-0-03-622117-4',
      language: 'Português',
      edition: '3ª',
      pages: 602,
      synopsis: `Odio iure culpa quo. Odit quasi nulla nam quae eum eveniet.`,
      coverUrl: 'https://dummyimage.com/370x625',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequuntur similique aut.`,
      subtitle: `Voluptate eveniet fuga.`,
      author: `Levi Campos`,
      publisher: `Mendes S/A`,
      publicationYear: 2019,
      genre: 'Quia',
      code: 'BOOK0471',
      isbn: '978-1-4914-7744-1',
      language: 'Português',
      edition: '1ª',
      pages: 614,
      synopsis: `Quisquam odit explicabo consequuntur ipsa. Quasi sequi eos rerum sapiente blanditiis neque. Itaque ea sed nobis alias doloremque magni.`,
      coverUrl: 'https://dummyimage.com/62x455',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus in.`,
      subtitle: `Porro dolores officia.`,
      author: `Carolina Pereira`,
      publisher: `Silva - ME`,
      publicationYear: 1951,
      genre: 'Quae',
      code: 'BOOK0472',
      isbn: '978-0-527-87304-2',
      language: 'Português',
      edition: '1ª',
      pages: 790,
      synopsis: `Delectus placeat et commodi porro illum. Unde quas laboriosam rem maiores. Maiores sint explicabo placeat.`,
      coverUrl: 'https://placekitten.com/385/599',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Libero quasi ipsam.`,
      subtitle: `Ut nihil id ut voluptates.`,
      author: `Emanuel Novaes`,
      publisher: `Fernandes Nascimento e Filhos`,
      publicationYear: 1983,
      genre: 'Non',
      code: 'BOOK0473',
      isbn: '978-1-09-999001-4',
      language: 'Português',
      edition: '2ª',
      pages: 375,
      synopsis: `Nisi excepturi dolorem accusantium temporibus rerum placeat.`,
      coverUrl: 'https://www.lorempixel.com/697/335',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestiae illum.`,
      subtitle: `Enim enim officiis harum quasi maiores.`,
      author: `Fernanda Ramos`,
      publisher: `Pires`,
      publicationYear: 1997,
      genre: 'Dolores',
      code: 'BOOK0474',
      isbn: '978-1-59582-819-4',
      language: 'Português',
      edition: '3ª',
      pages: 510,
      synopsis: `Corporis ipsam nesciunt quasi.`,
      coverUrl: 'https://placekitten.com/151/281',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestiae odit tenetur.`,
      subtitle: null,
      author: `Ana Júlia Rezende`,
      publisher: `Melo - EI`,
      publicationYear: 2021,
      genre: 'Quia',
      code: 'BOOK0475',
      isbn: '978-1-5143-6728-5',
      language: 'Português',
      edition: '4ª',
      pages: 490,
      synopsis: `Autem delectus dolor adipisci minus exercitationem ipsa. Beatae aspernatur doloribus voluptates laudantium molestiae eius. Nemo suscipit ad recusandae omnis sint.`,
      coverUrl: 'https://placeimg.com/341/215/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque fuga corporis.`,
      subtitle: `Unde nesciunt dolore ratione at.`,
      author: `Gabrielly Santos`,
      publisher: `Rezende e Filhos`,
      publicationYear: 1967,
      genre: 'Accusantium',
      code: 'BOOK0476',
      isbn: '978-0-260-11939-1',
      language: 'Português',
      edition: '5ª',
      pages: 646,
      synopsis: `Dolorum similique commodi. Voluptates esse officia et commodi quam aliquam.`,
      coverUrl: 'https://www.lorempixel.com/120/671',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quaerat aliquam eveniet.`,
      subtitle: `Error quaerat dignissimos.`,
      author: `Joaquim Souza`,
      publisher: `da Rocha`,
      publicationYear: 1970,
      genre: 'Modi',
      code: 'BOOK0477',
      isbn: '978-0-7135-8969-6',
      language: 'Português',
      edition: '1ª',
      pages: 320,
      synopsis: `Explicabo reiciendis animi ab ex. Voluptate voluptate sapiente inventore facilis veritatis.`,
      coverUrl: 'https://www.lorempixel.com/922/504',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Similique reprehenderit dolores.`,
      subtitle: `Necessitatibus explicabo ratione blanditiis fugit doloribus.`,
      author: `Mariana Barbosa`,
      publisher: `Silva Duarte - ME`,
      publicationYear: 2021,
      genre: 'Placeat',
      code: 'BOOK0478',
      isbn: '978-1-02-896660-8',
      language: 'Português',
      edition: '3ª',
      pages: 452,
      synopsis: `Eos maxime fugiat ducimus architecto. Asperiores tempora numquam possimus vero eum. Ex sit odio error repudiandae.`,
      coverUrl: 'https://www.lorempixel.com/87/764',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eaque.`,
      subtitle: null,
      author: `Maria Eduarda Viana`,
      publisher: `Cunha - ME`,
      publicationYear: 1986,
      genre: 'Error',
      code: 'BOOK0479',
      isbn: '978-1-276-36281-8',
      language: 'Português',
      edition: '3ª',
      pages: 432,
      synopsis: `Perspiciatis iste minus neque nihil. Unde nemo nemo aliquid libero.`,
      coverUrl: 'https://dummyimage.com/532x7',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magni quis.`,
      subtitle: `Vel magni quisquam sit.`,
      author: `Sr. Thales Duarte`,
      publisher: `Teixeira`,
      publicationYear: 1968,
      genre: 'Odit',
      code: 'BOOK0480',
      isbn: '978-1-174-30688-4',
      language: 'Português',
      edition: '2ª',
      pages: 755,
      synopsis: `Quidem saepe reprehenderit quod. Dicta veniam nihil.`,
      coverUrl: 'https://dummyimage.com/133x1010',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iusto officiis facere.`,
      subtitle: `Dolore doloremque illo quis ipsum repudiandae.`,
      author: `Enzo Alves`,
      publisher: `Correia Ltda.`,
      publicationYear: 1979,
      genre: 'Earum',
      code: 'BOOK0481',
      isbn: '978-0-282-62542-9',
      language: 'Português',
      edition: '3ª',
      pages: 424,
      synopsis: `Architecto sed similique doloremque assumenda.`,
      coverUrl: 'https://placeimg.com/71/729/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur eaque eius.`,
      subtitle: null,
      author: `Benício Sales`,
      publisher: `Castro`,
      publicationYear: 2016,
      genre: 'Recusandae',
      code: 'BOOK0482',
      isbn: '978-0-453-81097-5',
      language: 'Português',
      edition: '4ª',
      pages: 523,
      synopsis: `Atque odio corporis quibusdam molestias. Adipisci quas nam corrupti harum ducimus ut. Dignissimos debitis aspernatur libero error corporis. Accusamus rerum possimus perferendis cupiditate.`,
      coverUrl: 'https://www.lorempixel.com/204/220',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Earum.`,
      subtitle: null,
      author: `João Miguel Souza`,
      publisher: `Castro`,
      publicationYear: 1960,
      genre: 'Voluptas',
      code: 'BOOK0483',
      isbn: '978-0-07-028672-6',
      language: 'Português',
      edition: '2ª',
      pages: 270,
      synopsis: `Quod adipisci excepturi recusandae. Tempora impedit consequatur necessitatibus deserunt vero.`,
      coverUrl: 'https://placekitten.com/63/20',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore est animi.`,
      subtitle: null,
      author: `Elisa Cunha`,
      publisher: `Alves`,
      publicationYear: 1953,
      genre: 'Alias',
      code: 'BOOK0484',
      isbn: '978-0-9713072-2-3',
      language: 'Português',
      edition: '4ª',
      pages: 636,
      synopsis: `Dignissimos repellat necessitatibus quia. Sunt omnis libero delectus ad reprehenderit et.`,
      coverUrl: 'https://www.lorempixel.com/572/834',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae cumque repellat.`,
      subtitle: `Labore ab ducimus.`,
      author: `Juan Barros`,
      publisher: `das Neves Jesus Ltda.`,
      publicationYear: 1981,
      genre: 'Delectus',
      code: 'BOOK0485',
      isbn: '978-1-216-02523-0',
      language: 'Português',
      edition: '3ª',
      pages: 553,
      synopsis: `Quidem consequuntur quasi vel quas. Earum quia ipsum sapiente sunt fugiat ad perferendis. Odit explicabo atque ullam iusto aspernatur. Nobis error nam voluptas perspiciatis earum exercitationem.`,
      coverUrl: 'https://www.lorempixel.com/735/718',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias autem nemo.`,
      subtitle: `Eum ut neque.`,
      author: `Davi Luiz Pinto`,
      publisher: `Gomes`,
      publicationYear: 1995,
      genre: 'Sequi',
      code: 'BOOK0486',
      isbn: '978-1-78686-237-2',
      language: 'Português',
      edition: '3ª',
      pages: 587,
      synopsis: `Tenetur magnam earum itaque. Maiores dolorem reprehenderit. Voluptate voluptate autem adipisci eos sed consectetur.`,
      coverUrl: 'https://www.lorempixel.com/895/615',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus.`,
      subtitle: `Qui quisquam ut quisquam velit dicta.`,
      author: `Sabrina Costela`,
      publisher: `Martins Dias Ltda.`,
      publicationYear: 2008,
      genre: 'Quis',
      code: 'BOOK0487',
      isbn: '978-1-4708-2139-5',
      language: 'Português',
      edition: '5ª',
      pages: 545,
      synopsis: `Et inventore corporis sequi cumque voluptatum. Quia laudantium vel corrupti accusamus. A dignissimos dolor aperiam accusantium maxime.`,
      coverUrl: 'https://placeimg.com/509/597/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores beatae a.`,
      subtitle: `Maxime quisquam necessitatibus at dolorum illo.`,
      author: `Anthony Carvalho`,
      publisher: `da Costa`,
      publicationYear: 2002,
      genre: 'Ex',
      code: 'BOOK0488',
      isbn: '978-1-379-89790-3',
      language: 'Português',
      edition: '3ª',
      pages: 259,
      synopsis: `Molestiae quasi error. Velit sint molestias laboriosam. Harum aliquam ad nisi sapiente.`,
      coverUrl: 'https://dummyimage.com/567x448',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis atque rerum.`,
      subtitle: `Assumenda atque sunt et optio.`,
      author: `Melissa Moura`,
      publisher: `Melo`,
      publicationYear: 1951,
      genre: 'Provident',
      code: 'BOOK0489',
      isbn: '978-1-203-40153-5',
      language: 'Português',
      edition: '4ª',
      pages: 588,
      synopsis: `Eius illum ipsum fugiat nemo. Dolorum neque provident sint inventore corporis amet animi. Eaque officia accusamus consequuntur.`,
      coverUrl: 'https://dummyimage.com/187x311',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores nisi.`,
      subtitle: null,
      author: `Alexandre da Costa`,
      publisher: `da Conceição`,
      publicationYear: 2020,
      genre: 'Aliquid',
      code: 'BOOK0490',
      isbn: '978-0-7452-7353-2',
      language: 'Português',
      edition: '3ª',
      pages: 293,
      synopsis: `Cum ut exercitationem iste ab. Cum atque quo veniam. Praesentium autem blanditiis in architecto debitis occaecati.`,
      coverUrl: 'https://www.lorempixel.com/670/708',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Pariatur tempora.`,
      subtitle: null,
      author: `Arthur Caldeira`,
      publisher: `da Luz`,
      publicationYear: 1978,
      genre: 'Est',
      code: 'BOOK0491',
      isbn: '978-1-66001-283-1',
      language: 'Português',
      edition: '3ª',
      pages: 181,
      synopsis: `Itaque adipisci quam quia. Dicta temporibus necessitatibus voluptatibus. Incidunt expedita commodi omnis eaque minus fugiat libero.`,
      coverUrl: 'https://placekitten.com/879/891',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veritatis quo.`,
      subtitle: `Est quas voluptas esse.`,
      author: `Danilo Pires`,
      publisher: `das Neves`,
      publicationYear: 1958,
      genre: 'Tempora',
      code: 'BOOK0492',
      isbn: '978-1-01-915305-5',
      language: 'Português',
      edition: '2ª',
      pages: 239,
      synopsis: `Voluptatem vitae est sapiente ea expedita vero assumenda. Modi cum et aut perspiciatis repudiandae. Hic voluptates magni sed.`,
      coverUrl: 'https://placeimg.com/793/719/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sequi eius.`,
      subtitle: `Vero numquam ipsam.`,
      author: `Maria Cecília Pires`,
      publisher: `Gonçalves`,
      publicationYear: 1952,
      genre: 'Pariatur',
      code: 'BOOK0493',
      isbn: '978-0-290-35006-1',
      language: 'Português',
      edition: '2ª',
      pages: 150,
      synopsis: `Esse natus voluptatibus voluptate commodi et earum. Esse esse in qui fugiat.`,
      coverUrl: 'https://dummyimage.com/312x226',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi odio.`,
      subtitle: `Non quibusdam cum ducimus.`,
      author: `Anthony Nunes`,
      publisher: `Gomes`,
      publicationYear: 2006,
      genre: 'Temporibus',
      code: 'BOOK0494',
      isbn: '978-0-19-738818-1',
      language: 'Português',
      edition: '1ª',
      pages: 338,
      synopsis: `Dolorum similique inventore esse excepturi nesciunt enim. Rem quam minus eius reiciendis modi voluptatibus.`,
      coverUrl: 'https://www.lorempixel.com/829/531',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sed repellendus voluptatibus.`,
      subtitle: `At repellendus fuga deserunt.`,
      author: `Sra. Ana Júlia da Mata`,
      publisher: `Araújo Costa e Filhos`,
      publicationYear: 2013,
      genre: 'Natus',
      code: 'BOOK0495',
      isbn: '978-1-9860-3721-1',
      language: 'Português',
      edition: '3ª',
      pages: 574,
      synopsis: `Amet animi cum voluptatum dicta nisi. Repudiandae numquam totam amet at eius vel. Error vel repellendus dolores quibusdam.`,
      coverUrl: 'https://placeimg.com/1016/202/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit quos autem.`,
      subtitle: null,
      author: `Sophia Nogueira`,
      publisher: `Moraes Barros e Filhos`,
      publicationYear: 1959,
      genre: 'Quae',
      code: 'BOOK0496',
      isbn: '978-0-947855-01-7',
      language: 'Português',
      edition: '5ª',
      pages: 581,
      synopsis: `Vero exercitationem excepturi cumque blanditiis. Ullam nam perspiciatis saepe minima a consequuntur.`,
      coverUrl: 'https://dummyimage.com/958x115',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae impedit incidunt.`,
      subtitle: null,
      author: `Olivia Silva`,
      publisher: `Ribeiro S.A.`,
      publicationYear: 1981,
      genre: 'Delectus',
      code: 'BOOK0497',
      isbn: '978-1-4771-8375-5',
      language: 'Português',
      edition: '4ª',
      pages: 553,
      synopsis: `Ipsum in sint. Delectus enim accusamus.`,
      coverUrl: 'https://placeimg.com/750/720/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci cumque ducimus.`,
      subtitle: null,
      author: `Diogo Cunha`,
      publisher: `Novaes da Mata S.A.`,
      publicationYear: 1976,
      genre: 'Cupiditate',
      code: 'BOOK0498',
      isbn: '978-0-696-85746-1',
      language: 'Português',
      edition: '4ª',
      pages: 498,
      synopsis: `Harum ipsam placeat. Ipsa porro doloribus sed. Possimus velit velit at amet blanditiis.`,
      coverUrl: 'https://dummyimage.com/832x610',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Asperiores laboriosam ab.`,
      subtitle: `Facilis voluptatem veritatis officiis.`,
      author: `Yuri da Cruz`,
      publisher: `da Rosa`,
      publicationYear: 1988,
      genre: 'Voluptates',
      code: 'BOOK0499',
      isbn: '978-0-924848-13-1',
      language: 'Português',
      edition: '2ª',
      pages: 469,
      synopsis: `Error autem incidunt.`,
      coverUrl: 'https://placekitten.com/152/31',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid aut.`,
      subtitle: `Fugiat quaerat quis.`,
      author: `Dra. Joana Gonçalves`,
      publisher: `Farias`,
      publicationYear: 1971,
      genre: 'Eveniet',
      code: 'BOOK0500',
      isbn: '978-0-481-10501-2',
      language: 'Português',
      edition: '3ª',
      pages: 698,
      synopsis: `In quisquam culpa magni repellat ratione sequi. Eum doloribus excepturi quia.`,
      coverUrl: 'https://www.lorempixel.com/227/280',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tenetur eveniet atque.`,
      subtitle: null,
      author: `Nicolas Moura`,
      publisher: `Santos`,
      publicationYear: 2010,
      genre: 'Consequuntur',
      code: 'BOOK0501',
      isbn: '978-1-4260-9723-2',
      language: 'Português',
      edition: '5ª',
      pages: 258,
      synopsis: `Corrupti ratione ipsa. Quo in iure consequuntur facere ipsam. Itaque aperiam magnam.`,
      coverUrl: 'https://placeimg.com/250/740/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quidem laboriosam.`,
      subtitle: `Laboriosam quam dolor laborum.`,
      author: `Enzo Souza`,
      publisher: `da Mata - ME`,
      publicationYear: 1993,
      genre: 'Impedit',
      code: 'BOOK0502',
      isbn: '978-1-85726-029-8',
      language: 'Português',
      edition: '1ª',
      pages: 161,
      synopsis: `Ea quibusdam placeat illo corporis iste. Maiores error aliquid impedit dolorum ab officiis.`,
      coverUrl: 'https://dummyimage.com/772x423',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veniam similique provident.`,
      subtitle: `Dignissimos molestias ullam labore porro.`,
      author: `Sr. Enrico Souza`,
      publisher: `Santos`,
      publicationYear: 1990,
      genre: 'Pariatur',
      code: 'BOOK0503',
      isbn: '978-1-04-886932-3',
      language: 'Português',
      edition: '5ª',
      pages: 760,
      synopsis: `Quod quod ea expedita ad minima. Quo labore neque quia vero eveniet sequi inventore.`,
      coverUrl: 'https://placekitten.com/527/18',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Placeat qui.`,
      subtitle: `Ipsum qui magnam sunt libero.`,
      author: `Dr. Fernando da Cruz`,
      publisher: `Cardoso`,
      publicationYear: 1955,
      genre: 'Repudiandae',
      code: 'BOOK0504',
      isbn: '978-0-8422-7362-6',
      language: 'Português',
      edition: '4ª',
      pages: 548,
      synopsis: `Debitis provident cupiditate officia laboriosam. Quis saepe rerum officiis. Incidunt blanditiis laudantium in animi eos nulla.`,
      coverUrl: 'https://placekitten.com/761/233',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe illo.`,
      subtitle: `Doloremque fugiat velit saepe veritatis ab.`,
      author: `Camila da Mata`,
      publisher: `da Mata e Filhos`,
      publicationYear: 1994,
      genre: 'Neque',
      code: 'BOOK0505',
      isbn: '978-0-426-47106-6',
      language: 'Português',
      edition: '3ª',
      pages: 579,
      synopsis: `Sit iste sunt. Ullam rem aspernatur. Ipsum quod suscipit placeat velit.`,
      coverUrl: 'https://dummyimage.com/596x406',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit itaque.`,
      subtitle: null,
      author: `Guilherme Nascimento`,
      publisher: `Correia Pires S.A.`,
      publicationYear: 2019,
      genre: 'Recusandae',
      code: 'BOOK0506',
      isbn: '978-1-63808-390-0',
      language: 'Português',
      edition: '3ª',
      pages: 564,
      synopsis: `Ea culpa expedita quas repellendus mollitia. Praesentium dolor non consectetur. Voluptatibus laudantium molestiae assumenda.`,
      coverUrl: 'https://dummyimage.com/241x793',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officiis error quo.`,
      subtitle: null,
      author: `Ana Carolina Costela`,
      publisher: `Peixoto`,
      publicationYear: 2018,
      genre: 'Odio',
      code: 'BOOK0507',
      isbn: '978-1-272-84539-1',
      language: 'Português',
      edition: '4ª',
      pages: 294,
      synopsis: `Numquam occaecati fugiat iste a. Ipsa repellendus in libero facilis impedit sit. Aliquid ab quaerat aut.`,
      coverUrl: 'https://dummyimage.com/351x95',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quo temporibus.`,
      subtitle: null,
      author: `Erick Azevedo`,
      publisher: `Ferreira`,
      publicationYear: 1964,
      genre: 'Quis',
      code: 'BOOK0508',
      isbn: '978-0-225-33320-6',
      language: 'Português',
      edition: '1ª',
      pages: 635,
      synopsis: `Facere aliquam repellat temporibus rem. Sequi animi nulla quas voluptatibus eligendi.`,
      coverUrl: 'https://placeimg.com/68/462/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magnam mollitia nam possimus.`,
      subtitle: `Numquam quidem doloribus soluta.`,
      author: `Felipe Novaes`,
      publisher: `Pereira Costela S/A`,
      publicationYear: 2012,
      genre: 'Quidem',
      code: 'BOOK0509',
      isbn: '978-1-9831-2441-9',
      language: 'Português',
      edition: '2ª',
      pages: 201,
      synopsis: `Animi quod quibusdam hic tenetur nostrum nostrum veritatis. Consequuntur vitae illo asperiores.`,
      coverUrl: 'https://placekitten.com/941/632',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cum temporibus.`,
      subtitle: `Delectus quod eaque at dicta.`,
      author: `Heloísa Castro`,
      publisher: `da Mata Novaes - ME`,
      publicationYear: 1959,
      genre: 'Autem',
      code: 'BOOK0510',
      isbn: '978-0-7536-2647-4',
      language: 'Português',
      edition: '1ª',
      pages: 313,
      synopsis: `Pariatur magni ullam dolorum. Tempore consequuntur ad nulla. Ipsum quisquam ad necessitatibus.`,
      coverUrl: 'https://placekitten.com/324/550',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Earum deleniti.`,
      subtitle: null,
      author: `Srta. Ana Clara Moraes`,
      publisher: `Melo Moraes S/A`,
      publicationYear: 1957,
      genre: 'Ipsum',
      code: 'BOOK0511',
      isbn: '978-1-321-91430-6',
      language: 'Português',
      edition: '5ª',
      pages: 372,
      synopsis: `Laborum nihil odit ea non consectetur. Similique corrupti atque molestias provident. Occaecati perferendis praesentium molestiae autem.`,
      coverUrl: 'https://placekitten.com/369/15',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam aliquam laudantium.`,
      subtitle: null,
      author: `Maria Julia da Paz`,
      publisher: `Duarte da Cunha - EI`,
      publicationYear: 1962,
      genre: 'Repudiandae',
      code: 'BOOK0512',
      isbn: '978-1-159-02578-6',
      language: 'Português',
      edition: '1ª',
      pages: 336,
      synopsis: `Eius sunt ex magnam quos quasi. Deleniti qui cupiditate quod praesentium quae labore.`,
      coverUrl: 'https://www.lorempixel.com/828/352',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eaque laboriosam omnis.`,
      subtitle: null,
      author: `João Guilherme Lima`,
      publisher: `Lopes Moura S/A`,
      publicationYear: 2023,
      genre: 'Reprehenderit',
      code: 'BOOK0513',
      isbn: '978-0-8222-5018-0',
      language: 'Português',
      edition: '3ª',
      pages: 790,
      synopsis: `Quas optio odio cumque sunt error. Mollitia deleniti quis sunt.`,
      coverUrl: 'https://dummyimage.com/26x185',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloribus earum.`,
      subtitle: `Necessitatibus cupiditate accusamus accusamus.`,
      author: `Dra. Kamilly Novaes`,
      publisher: `Pires Barbosa S.A.`,
      publicationYear: 1993,
      genre: 'Nemo',
      code: 'BOOK0514',
      isbn: '978-0-450-95632-4',
      language: 'Português',
      edition: '2ª',
      pages: 646,
      synopsis: `Saepe officia accusantium doloremque asperiores qui assumenda. Doloribus quis molestiae debitis cum.`,
      coverUrl: 'https://www.lorempixel.com/949/191',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore sequi possimus in.`,
      subtitle: null,
      author: `Luiz Miguel da Conceição`,
      publisher: `Rodrigues`,
      publicationYear: 2005,
      genre: 'Unde',
      code: 'BOOK0515',
      isbn: '978-1-64616-076-1',
      language: 'Português',
      edition: '3ª',
      pages: 723,
      synopsis: `Eligendi provident quae explicabo accusamus eveniet. Cupiditate earum at repudiandae omnis similique perferendis.`,
      coverUrl: 'https://placeimg.com/421/405/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusamus vel.`,
      subtitle: `Ea quae vitae error vel quaerat.`,
      author: `Isabel Freitas`,
      publisher: `Correia`,
      publicationYear: 2000,
      genre: 'Eius',
      code: 'BOOK0516',
      isbn: '978-0-7768-5760-2',
      language: 'Português',
      edition: '1ª',
      pages: 135,
      synopsis: `Ratione non debitis voluptate reprehenderit. Repellat labore similique aut mollitia accusantium. Saepe laudantium nulla deleniti.`,
      coverUrl: 'https://www.lorempixel.com/613/374',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim dolor.`,
      subtitle: `Eaque eaque quisquam cumque.`,
      author: `João Felipe Pereira`,
      publisher: `da Paz`,
      publicationYear: 1978,
      genre: 'Provident',
      code: 'BOOK0517',
      isbn: '978-1-79025-485-9',
      language: 'Português',
      edition: '2ª',
      pages: 422,
      synopsis: `Sapiente consequatur nam aliquam porro cupiditate. Inventore provident aperiam accusamus vero nisi dolorem.`,
      coverUrl: 'https://placeimg.com/690/640/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cupiditate hic.`,
      subtitle: `Doloremque quos nobis saepe.`,
      author: `Nathan das Neves`,
      publisher: `Teixeira`,
      publicationYear: 1995,
      genre: 'Autem',
      code: 'BOOK0518',
      isbn: '978-1-04-761437-5',
      language: 'Português',
      edition: '2ª',
      pages: 241,
      synopsis: `Ea distinctio amet quas aspernatur quibusdam sapiente. Soluta ducimus impedit iusto perspiciatis harum. Illo unde temporibus quos facilis.`,
      coverUrl: 'https://placekitten.com/608/178',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quia necessitatibus vel.`,
      subtitle: null,
      author: `Levi Ribeiro`,
      publisher: `Correia Alves - EI`,
      publicationYear: 1961,
      genre: 'Inventore',
      code: 'BOOK0519',
      isbn: '978-0-7860-4356-9',
      language: 'Português',
      edition: '5ª',
      pages: 509,
      synopsis: `Excepturi alias provident. Eaque incidunt magni distinctio id officia. Ad illo praesentium suscipit blanditiis.`,
      coverUrl: 'https://dummyimage.com/277x374',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illum similique tenetur.`,
      subtitle: `Quod nostrum quo iste.`,
      author: `Lívia Pinto`,
      publisher: `da Rosa`,
      publicationYear: 2023,
      genre: 'Provident',
      code: 'BOOK0520',
      isbn: '978-0-673-96342-0',
      language: 'Português',
      edition: '1ª',
      pages: 709,
      synopsis: `Sit magnam laboriosam id quia et voluptatibus eum. Sapiente odio necessitatibus. Repudiandae possimus animi officia.`,
      coverUrl: 'https://placeimg.com/865/159/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci hic deleniti.`,
      subtitle: null,
      author: `Vitor Hugo Campos`,
      publisher: `da Cruz`,
      publicationYear: 1992,
      genre: 'Repellat',
      code: 'BOOK0521',
      isbn: '978-1-399-28919-1',
      language: 'Português',
      edition: '3ª',
      pages: 544,
      synopsis: `Laudantium natus in eum. Quo doloremque at qui ullam. In rerum nostrum cupiditate nesciunt culpa dignissimos.`,
      coverUrl: 'https://dummyimage.com/480x178',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Esse voluptatibus nobis.`,
      subtitle: `Beatae facere natus.`,
      author: `Lavínia Araújo`,
      publisher: `da Luz`,
      publicationYear: 2017,
      genre: 'At',
      code: 'BOOK0522',
      isbn: '978-1-305-49824-2',
      language: 'Português',
      edition: '1ª',
      pages: 426,
      synopsis: `Totam quia eius ratione repellat possimus quos. Iure molestiae impedit magnam.`,
      coverUrl: 'https://placeimg.com/11/791/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio perspiciatis.`,
      subtitle: null,
      author: `Sr. Calebe Nascimento`,
      publisher: `da Conceição`,
      publicationYear: 2000,
      genre: 'Ullam',
      code: 'BOOK0523',
      isbn: '978-1-03-701709-4',
      language: 'Português',
      edition: '4ª',
      pages: 709,
      synopsis: `Occaecati aliquam sunt dignissimos maiores molestiae. Odit sint similique iste illo minus nobis.`,
      coverUrl: 'https://placekitten.com/849/356',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sapiente eveniet.`,
      subtitle: `Optio accusantium corporis.`,
      author: `Mirella Mendes`,
      publisher: `Rezende Freitas S/A`,
      publicationYear: 1993,
      genre: 'Autem',
      code: 'BOOK0524',
      isbn: '978-0-691-96127-9',
      language: 'Português',
      edition: '1ª',
      pages: 587,
      synopsis: `Consequatur nam minus sapiente dolores blanditiis. Odio rem voluptatibus in. Eligendi dolor rem fugit officiis.`,
      coverUrl: 'https://placeimg.com/518/684/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae.`,
      subtitle: `Ab quia repellat ut.`,
      author: `Heitor da Cruz`,
      publisher: `da Rosa`,
      publicationYear: 2005,
      genre: 'Nemo',
      code: 'BOOK0525',
      isbn: '978-0-237-53028-0',
      language: 'Português',
      edition: '2ª',
      pages: 238,
      synopsis: `Iste reprehenderit unde animi nostrum officiis ipsum. Ullam eos fugiat consequatur.`,
      coverUrl: 'https://placekitten.com/631/86',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore quisquam ducimus.`,
      subtitle: null,
      author: `Samuel Teixeira`,
      publisher: `Moura`,
      publicationYear: 2017,
      genre: 'Hic',
      code: 'BOOK0526',
      isbn: '978-0-6488215-9-5',
      language: 'Português',
      edition: '2ª',
      pages: 348,
      synopsis: `Dolorum fuga vel id corrupti deserunt consectetur. Alias illo iure quod voluptas illum. Asperiores fuga est repellendus voluptas sequi pariatur cupiditate.`,
      coverUrl: 'https://dummyimage.com/103x525',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minima delectus vero natus.`,
      subtitle: null,
      author: `André Nogueira`,
      publisher: `Novaes`,
      publicationYear: 2004,
      genre: 'Aut',
      code: 'BOOK0527',
      isbn: '978-1-235-69992-4',
      language: 'Português',
      edition: '3ª',
      pages: 456,
      synopsis: `Ratione quasi dolorum eum mollitia labore voluptate nam. Quae iste deleniti totam inventore error doloribus. Cupiditate minima sint dolorum non doloribus eveniet. Minus deleniti quisquam assumenda voluptatibus illo adipisci tempore.`,
      coverUrl: 'https://www.lorempixel.com/593/609',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut corporis nulla.`,
      subtitle: null,
      author: `Srta. Vitória Lima`,
      publisher: `Azevedo Gomes e Filhos`,
      publicationYear: 2006,
      genre: 'Recusandae',
      code: 'BOOK0528',
      isbn: '978-0-410-38975-9',
      language: 'Português',
      edition: '5ª',
      pages: 249,
      synopsis: `Iusto alias nostrum ipsa eveniet perferendis error. Error accusamus numquam quae.`,
      coverUrl: 'https://dummyimage.com/309x113',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi doloremque.`,
      subtitle: `Ut voluptatibus incidunt velit aut velit.`,
      author: `Mariane Nunes`,
      publisher: `Viana Azevedo e Filhos`,
      publicationYear: 1960,
      genre: 'Maxime',
      code: 'BOOK0529',
      isbn: '978-0-01-753079-0',
      language: 'Português',
      edition: '1ª',
      pages: 155,
      synopsis: `Aut minima nemo voluptatem corrupti quisquam. Sed ab dolorum vel laudantium. Quae et vitae omnis.`,
      coverUrl: 'https://placeimg.com/987/646/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusamus libero.`,
      subtitle: null,
      author: `Catarina da Cunha`,
      publisher: `Sales Ltda.`,
      publicationYear: 1964,
      genre: 'Assumenda',
      code: 'BOOK0530',
      isbn: '978-1-192-02599-6',
      language: 'Português',
      edition: '3ª',
      pages: 560,
      synopsis: `Nihil maiores deserunt itaque. Error delectus eos voluptatum eius. Enim non quod laudantium ad quibusdam modi. Quo et aperiam voluptas.`,
      coverUrl: 'https://placeimg.com/10/963/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Asperiores quidem architecto.`,
      subtitle: `Occaecati voluptate porro sequi voluptate at.`,
      author: `Srta. Mirella da Cunha`,
      publisher: `Cardoso`,
      publicationYear: 2019,
      genre: 'Fugiat',
      code: 'BOOK0531',
      isbn: '978-1-340-91858-3',
      language: 'Português',
      edition: '5ª',
      pages: 364,
      synopsis: `Expedita quia quas repellat eum saepe.`,
      coverUrl: 'https://placeimg.com/533/555/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum pariatur ullam.`,
      subtitle: `Officia reprehenderit a.`,
      author: `André Farias`,
      publisher: `Lima Ltda.`,
      publicationYear: 1957,
      genre: 'Ipsa',
      code: 'BOOK0532',
      isbn: '978-1-03-982218-4',
      language: 'Português',
      edition: '3ª',
      pages: 305,
      synopsis: `Nihil hic cum velit quasi.`,
      coverUrl: 'https://placeimg.com/488/761/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati possimus.`,
      subtitle: null,
      author: `Rafael Pires`,
      publisher: `da Costa - ME`,
      publicationYear: 1996,
      genre: 'Iste',
      code: 'BOOK0533',
      isbn: '978-1-164-69333-8',
      language: 'Português',
      edition: '1ª',
      pages: 119,
      synopsis: `Consequatur animi deleniti voluptates error sed. Tenetur tempore quis saepe laborum magni vitae. Laboriosam voluptas nisi aliquam perspiciatis blanditiis praesentium.`,
      coverUrl: 'https://dummyimage.com/189x577',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At perspiciatis.`,
      subtitle: null,
      author: `João Pedro Nascimento`,
      publisher: `Castro Ltda.`,
      publicationYear: 2018,
      genre: 'Quidem',
      code: 'BOOK0534',
      isbn: '978-1-80526-321-0',
      language: 'Português',
      edition: '1ª',
      pages: 290,
      synopsis: `Omnis adipisci voluptatibus reiciendis perferendis culpa accusantium dolorem. Perspiciatis labore veritatis facilis eius laboriosam praesentium.`,
      coverUrl: 'https://dummyimage.com/116x281',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsam aperiam.`,
      subtitle: null,
      author: `Sofia Cardoso`,
      publisher: `Farias`,
      publicationYear: 1989,
      genre: 'Repellat',
      code: 'BOOK0535',
      isbn: '978-1-76626-235-2',
      language: 'Português',
      edition: '3ª',
      pages: 601,
      synopsis: `Ullam facilis voluptate consequuntur fugit qui. Accusamus fugiat repellat tenetur ab. Maxime aliquid unde amet dolores id.`,
      coverUrl: 'https://www.lorempixel.com/488/888',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid quasi suscipit.`,
      subtitle: null,
      author: `Pedro Pereira`,
      publisher: `Alves`,
      publicationYear: 1980,
      genre: 'Soluta',
      code: 'BOOK0536',
      isbn: '978-0-390-91203-9',
      language: 'Português',
      edition: '5ª',
      pages: 382,
      synopsis: `Facilis ad ea culpa.`,
      coverUrl: 'https://placekitten.com/409/942',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iusto nisi doloremque.`,
      subtitle: `Nemo repudiandae voluptas.`,
      author: `Benjamin Teixeira`,
      publisher: `Barbosa`,
      publicationYear: 2000,
      genre: 'Deleniti',
      code: 'BOOK0537',
      isbn: '978-1-74544-920-0',
      language: 'Português',
      edition: '2ª',
      pages: 189,
      synopsis: `Quia vitae eligendi eligendi eveniet. At nam occaecati blanditiis molestias harum occaecati. Distinctio suscipit sapiente quis id illo sint.`,
      coverUrl: 'https://www.lorempixel.com/759/305',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nulla amet praesentium.`,
      subtitle: `Accusamus voluptas illum repellat saepe.`,
      author: `Marcelo Pereira`,
      publisher: `Porto S/A`,
      publicationYear: 1989,
      genre: 'Impedit',
      code: 'BOOK0538',
      isbn: '978-0-660-23515-8',
      language: 'Português',
      edition: '5ª',
      pages: 437,
      synopsis: `Ad fugiat dicta a ipsam perspiciatis. Incidunt repellat et amet. Ipsam aperiam consectetur ducimus asperiores doloribus eveniet.`,
      coverUrl: 'https://www.lorempixel.com/905/543',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas quasi facilis.`,
      subtitle: null,
      author: `Rodrigo Lopes`,
      publisher: `Barros`,
      publicationYear: 1989,
      genre: 'Ipsum',
      code: 'BOOK0539',
      isbn: '978-0-918986-64-1',
      language: 'Português',
      edition: '5ª',
      pages: 238,
      synopsis: `Dolor ex suscipit mollitia deserunt eum non eaque. Itaque molestias ab placeat aliquid delectus doloribus. Sed reiciendis at eaque sequi rem aut.`,
      coverUrl: 'https://www.lorempixel.com/380/335',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Facere laborum dolor sed.`,
      subtitle: `Porro nobis laboriosam.`,
      author: `Beatriz da Rocha`,
      publisher: `Gonçalves`,
      publicationYear: 2018,
      genre: 'Facilis',
      code: 'BOOK0540',
      isbn: '978-0-8253-2676-9',
      language: 'Português',
      edition: '1ª',
      pages: 288,
      synopsis: `Officiis ea ipsa ullam numquam quae dolore modi. Officiis aliquid dolores delectus nemo dolorum. Aperiam nulla dolorem. Maiores eos distinctio error.`,
      coverUrl: 'https://www.lorempixel.com/144/305',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ex eum assumenda.`,
      subtitle: `Porro consectetur harum totam.`,
      author: `Giovanna Pinto`,
      publisher: `da Paz - EI`,
      publicationYear: 1985,
      genre: 'Est',
      code: 'BOOK0541',
      isbn: '978-0-06-433226-2',
      language: 'Português',
      edition: '2ª',
      pages: 292,
      synopsis: `Totam laudantium iusto dolor. Impedit quas praesentium alias. Illo error laboriosam unde ipsam dignissimos. Amet fugiat alias nostrum cumque magnam.`,
      coverUrl: 'https://placekitten.com/623/277',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quas alias.`,
      subtitle: null,
      author: `Vitória Jesus`,
      publisher: `Costela - ME`,
      publicationYear: 2022,
      genre: 'Fugit',
      code: 'BOOK0542',
      isbn: '978-1-75826-762-4',
      language: 'Português',
      edition: '5ª',
      pages: 336,
      synopsis: `Unde sapiente inventore cum sapiente doloribus illo. Optio explicabo sed repellat illo veritatis ea. Quas eligendi ipsum et laborum nesciunt.`,
      coverUrl: 'https://placeimg.com/213/445/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe provident sapiente.`,
      subtitle: null,
      author: `Vitória Cardoso`,
      publisher: `Santos`,
      publicationYear: 2011,
      genre: 'Nobis',
      code: 'BOOK0543',
      isbn: '978-1-5049-3266-0',
      language: 'Português',
      edition: '2ª',
      pages: 614,
      synopsis: `Consectetur quia voluptate ducimus fugit. Aut quaerat nesciunt vel.`,
      coverUrl: 'https://placekitten.com/152/213',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim ut dolorem accusamus.`,
      subtitle: `Delectus ipsum qui.`,
      author: `Daniel da Mota`,
      publisher: `Sales`,
      publicationYear: 1974,
      genre: 'In',
      code: 'BOOK0544',
      isbn: '978-0-567-87188-6',
      language: 'Português',
      edition: '2ª',
      pages: 133,
      synopsis: `Tenetur consectetur ipsum officia. Animi omnis voluptate enim harum amet possimus. Praesentium ducimus odit id iusto.`,
      coverUrl: 'https://www.lorempixel.com/555/801',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores placeat numquam.`,
      subtitle: null,
      author: `Stephany Nogueira`,
      publisher: `Viana Duarte S/A`,
      publicationYear: 1958,
      genre: 'Sit',
      code: 'BOOK0545',
      isbn: '978-0-361-08092-7',
      language: 'Português',
      edition: '2ª',
      pages: 549,
      synopsis: `Fugit consequatur aut eum. Quasi placeat illo eius libero unde. Eum quibusdam facere laudantium aut vitae.`,
      coverUrl: 'https://placeimg.com/521/963/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ab amet.`,
      subtitle: `Ipsum maxime repellat repellat sequi enim.`,
      author: `João Gabriel Cardoso`,
      publisher: `Nascimento`,
      publicationYear: 1955,
      genre: 'Libero',
      code: 'BOOK0546',
      isbn: '978-1-122-44418-7',
      language: 'Português',
      edition: '5ª',
      pages: 489,
      synopsis: `Iusto eos corporis sed dicta minus totam voluptatum. Maiores doloremque et. Sint quas iste vero illum aliquid numquam. Culpa distinctio officia aperiam aliquid.`,
      coverUrl: 'https://dummyimage.com/681x99',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sequi.`,
      subtitle: `Quia distinctio pariatur accusamus.`,
      author: `Maysa Campos`,
      publisher: `Rodrigues`,
      publicationYear: 1955,
      genre: 'Repellat',
      code: 'BOOK0547',
      isbn: '978-0-452-84135-2',
      language: 'Português',
      edition: '2ª',
      pages: 631,
      synopsis: `Earum accusamus et aliquam dignissimos quidem fugiat porro. Voluptates voluptate accusamus eum odit. Nemo perspiciatis suscipit nesciunt occaecati.`,
      coverUrl: 'https://placeimg.com/92/287/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores.`,
      subtitle: `Dolorum corporis sit sequi reiciendis voluptas.`,
      author: `Sr. Isaac Silveira`,
      publisher: `Aragão`,
      publicationYear: 2006,
      genre: 'Omnis',
      code: 'BOOK0548',
      isbn: '978-1-203-19777-3',
      language: 'Português',
      edition: '4ª',
      pages: 411,
      synopsis: `Ipsa facere facilis veniam omnis architecto tempore. Voluptatibus placeat quam dicta magnam.`,
      coverUrl: 'https://placeimg.com/264/655/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rem eius necessitatibus.`,
      subtitle: null,
      author: `Felipe das Neves`,
      publisher: `Pereira Araújo e Filhos`,
      publicationYear: 1968,
      genre: 'Temporibus',
      code: 'BOOK0549',
      isbn: '978-1-942767-48-0',
      language: 'Português',
      edition: '4ª',
      pages: 761,
      synopsis: `Sed ipsam praesentium fugit. Sapiente distinctio vitae totam.`,
      coverUrl: 'https://www.lorempixel.com/177/760',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Unde reiciendis at.`,
      subtitle: null,
      author: `Lívia da Costa`,
      publisher: `da Conceição`,
      publicationYear: 2019,
      genre: 'Modi',
      code: 'BOOK0550',
      isbn: '978-1-946989-06-2',
      language: 'Português',
      edition: '2ª',
      pages: 502,
      synopsis: `Consequatur quam dolore labore ipsum. Veniam ad corrupti cupiditate iusto repudiandae animi.`,
      coverUrl: 'https://placekitten.com/877/647',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati ipsum perferendis.`,
      subtitle: null,
      author: `Emilly Rezende`,
      publisher: `Martins`,
      publicationYear: 1975,
      genre: 'Voluptatibus',
      code: 'BOOK0551',
      isbn: '978-0-7675-5398-8',
      language: 'Português',
      edition: '4ª',
      pages: 192,
      synopsis: `Molestiae placeat sapiente quibusdam iure architecto nesciunt. Laudantium animi neque fuga voluptates quis.`,
      coverUrl: 'https://placeimg.com/799/343/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio ea maiores.`,
      subtitle: null,
      author: `Cecília Souza`,
      publisher: `da Costa S/A`,
      publicationYear: 1996,
      genre: 'Vitae',
      code: 'BOOK0552',
      isbn: '978-1-123-96121-8',
      language: 'Português',
      edition: '1ª',
      pages: 636,
      synopsis: `Adipisci sed qui molestias rem aut unde officia. Minima harum omnis quis magni consequatur repellat. Ab illo quaerat sed nisi sit aliquid. Consequatur laboriosam corporis mollitia harum non doloremque eius.`,
      coverUrl: 'https://placeimg.com/894/622/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Exercitationem.`,
      subtitle: null,
      author: `Sra. Amanda Peixoto`,
      publisher: `Martins`,
      publicationYear: 2022,
      genre: 'Officia',
      code: 'BOOK0553',
      isbn: '978-0-355-70773-1',
      language: 'Português',
      edition: '2ª',
      pages: 266,
      synopsis: `Saepe omnis sunt aut. Excepturi aliquam sapiente et perspiciatis adipisci.`,
      coverUrl: 'https://placeimg.com/260/191/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis soluta dolore earum.`,
      subtitle: null,
      author: `Francisco Barbosa`,
      publisher: `Moura`,
      publicationYear: 2007,
      genre: 'Quaerat',
      code: 'BOOK0554',
      isbn: '978-0-14-147012-2',
      language: 'Português',
      edition: '3ª',
      pages: 741,
      synopsis: `Sed dicta modi ipsam eveniet quibusdam. Nobis quia nesciunt ipsa sit nulla modi.`,
      coverUrl: 'https://placekitten.com/291/475',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eaque incidunt eos illum.`,
      subtitle: null,
      author: `Maria Julia Gonçalves`,
      publisher: `Dias - ME`,
      publicationYear: 1982,
      genre: 'Nobis',
      code: 'BOOK0555',
      isbn: '978-0-16-329573-4',
      language: 'Português',
      edition: '1ª',
      pages: 569,
      synopsis: `Optio sit explicabo velit facilis provident cum. Optio doloremque magni vitae. Quae consequatur rerum ex fuga.`,
      coverUrl: 'https://dummyimage.com/623x335',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cupiditate at.`,
      subtitle: null,
      author: `Sra. Ana Clara Vieira`,
      publisher: `Fernandes`,
      publicationYear: 2010,
      genre: 'Quidem',
      code: 'BOOK0556',
      isbn: '978-1-60734-467-4',
      language: 'Português',
      edition: '4ª',
      pages: 519,
      synopsis: `Debitis commodi quia nemo molestias officiis. Laborum qui unde non incidunt ipsam excepturi veniam.`,
      coverUrl: 'https://www.lorempixel.com/339/157',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Natus asperiores rerum.`,
      subtitle: null,
      author: `Caio Dias`,
      publisher: `Freitas`,
      publicationYear: 2021,
      genre: 'Vel',
      code: 'BOOK0557',
      isbn: '978-1-09-483774-1',
      language: 'Português',
      edition: '2ª',
      pages: 150,
      synopsis: `Nihil quaerat commodi illo.`,
      coverUrl: 'https://www.lorempixel.com/494/412',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Incidunt sequi.`,
      subtitle: null,
      author: `Sr. Murilo Nogueira`,
      publisher: `Correia da Mota - ME`,
      publicationYear: 2023,
      genre: 'Minus',
      code: 'BOOK0558',
      isbn: '978-1-196-66610-2',
      language: 'Português',
      edition: '5ª',
      pages: 405,
      synopsis: `Quia totam eius repellat ullam consequatur. Consequatur praesentium dolore nostrum.`,
      coverUrl: 'https://dummyimage.com/81x148',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas mollitia tempora.`,
      subtitle: null,
      author: `Isabella Aragão`,
      publisher: `Ribeiro - ME`,
      publicationYear: 1970,
      genre: 'Sint',
      code: 'BOOK0559',
      isbn: '978-1-244-61440-6',
      language: 'Português',
      edition: '3ª',
      pages: 725,
      synopsis: `Distinctio quod expedita itaque. Tenetur ipsa esse sit fugiat amet. Fugit laudantium consectetur dolor necessitatibus quos explicabo. Tempora odio explicabo quidem odit laborum.`,
      coverUrl: 'https://placekitten.com/898/769',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error aliquid.`,
      subtitle: `Unde voluptas ullam molestias.`,
      author: `Davi Melo`,
      publisher: `Campos`,
      publicationYear: 1988,
      genre: 'Eos',
      code: 'BOOK0560',
      isbn: '978-1-4867-2288-4',
      language: 'Português',
      edition: '3ª',
      pages: 477,
      synopsis: `A iusto dolores doloremque dolorum facere fugiat. Fugiat laboriosam neque dicta.`,
      coverUrl: 'https://www.lorempixel.com/732/190',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Possimus nihil.`,
      subtitle: `Maxime nihil et aperiam soluta ab.`,
      author: `Nathan Martins`,
      publisher: `Farias`,
      publicationYear: 1985,
      genre: 'Nulla',
      code: 'BOOK0561',
      isbn: '978-1-61830-858-0',
      language: 'Português',
      edition: '3ª',
      pages: 639,
      synopsis: `Aut possimus laboriosam doloribus.`,
      coverUrl: 'https://www.lorempixel.com/639/422',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At aperiam dolorem.`,
      subtitle: `Modi cupiditate aut reiciendis laborum molestias.`,
      author: `Laís Castro`,
      publisher: `Nunes e Filhos`,
      publicationYear: 1986,
      genre: 'Qui',
      code: 'BOOK0562',
      isbn: '978-1-4257-0680-7',
      language: 'Português',
      edition: '4ª',
      pages: 723,
      synopsis: `Reprehenderit omnis doloribus repellat asperiores velit. Provident deserunt illo amet.`,
      coverUrl: 'https://dummyimage.com/399x111',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore excepturi officia.`,
      subtitle: null,
      author: `Sr. Renan Martins`,
      publisher: `da Cunha Gomes e Filhos`,
      publicationYear: 2016,
      genre: 'Consequatur',
      code: 'BOOK0563',
      isbn: '978-1-206-67015-0',
      language: 'Português',
      edition: '4ª',
      pages: 604,
      synopsis: `Eum nihil consequuntur atque similique. Tempora dignissimos qui consequuntur consequatur consequatur.`,
      coverUrl: 'https://placekitten.com/76/64',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sit nesciunt.`,
      subtitle: `Pariatur aliquid fugiat omnis.`,
      author: `Rafael Barbosa`,
      publisher: `Correia S.A.`,
      publicationYear: 2009,
      genre: 'Facere',
      code: 'BOOK0564',
      isbn: '978-0-391-33252-2',
      language: 'Português',
      edition: '1ª',
      pages: 312,
      synopsis: `Veritatis blanditiis dolor doloribus nisi excepturi. Perspiciatis ex dolor delectus id quo. Non incidunt a ea maiores.`,
      coverUrl: 'https://placekitten.com/879/395',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quia quas.`,
      subtitle: null,
      author: `Isabella Farias`,
      publisher: `Ramos`,
      publicationYear: 1977,
      genre: 'Tempora',
      code: 'BOOK0565',
      isbn: '978-0-498-52973-3',
      language: 'Português',
      edition: '1ª',
      pages: 755,
      synopsis: `Rerum at porro voluptatum voluptatem illo. Natus architecto laborum tempore vero fuga. Sit magni nulla impedit error.`,
      coverUrl: 'https://placekitten.com/545/968',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum sed.`,
      subtitle: null,
      author: `Sra. Bruna Gomes`,
      publisher: `Fogaça`,
      publicationYear: 1950,
      genre: 'Mollitia',
      code: 'BOOK0566',
      isbn: '978-1-353-89629-8',
      language: 'Português',
      edition: '1ª',
      pages: 441,
      synopsis: `Quibusdam culpa dicta tenetur quidem harum. Corrupti aut labore culpa itaque officia ut veritatis. Molestias dolore earum velit enim molestias magnam inventore.`,
      coverUrl: 'https://www.lorempixel.com/53/845',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quas corporis natus.`,
      subtitle: `Odit nulla quibusdam quis ratione aspernatur.`,
      author: `João Gabriel das Neves`,
      publisher: `Castro - ME`,
      publicationYear: 1993,
      genre: 'Quam',
      code: 'BOOK0567',
      isbn: '978-1-103-07372-6',
      language: 'Português',
      edition: '4ª',
      pages: 585,
      synopsis: `Iusto cumque rerum a. Earum nostrum repellendus vero. Nam consequuntur quasi.`,
      coverUrl: 'https://dummyimage.com/425x241',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem id.`,
      subtitle: null,
      author: `Nicolas Jesus`,
      publisher: `Novaes`,
      publicationYear: 2018,
      genre: 'Ea',
      code: 'BOOK0568',
      isbn: '978-1-292-64563-6',
      language: 'Português',
      edition: '3ª',
      pages: 573,
      synopsis: `Autem consequuntur ut similique nihil tempore accusamus hic. Ea sed aspernatur pariatur delectus impedit tenetur.`,
      coverUrl: 'https://www.lorempixel.com/598/942',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illum voluptatibus ad placeat.`,
      subtitle: null,
      author: `Clarice da Rosa`,
      publisher: `das Neves`,
      publicationYear: 1952,
      genre: 'Sapiente',
      code: 'BOOK0569',
      isbn: '978-0-16-125901-1',
      language: 'Português',
      edition: '2ª',
      pages: 691,
      synopsis: `Necessitatibus earum nesciunt quis aspernatur. Doloremque voluptas dolor ullam in. Omnis dignissimos placeat modi aut aliquid natus.`,
      coverUrl: 'https://www.lorempixel.com/543/181',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sint laudantium.`,
      subtitle: null,
      author: `Arthur Cardoso`,
      publisher: `Viana`,
      publicationYear: 2018,
      genre: 'Consectetur',
      code: 'BOOK0570',
      isbn: '978-1-04-991004-8',
      language: 'Português',
      edition: '2ª',
      pages: 684,
      synopsis: `Corrupti natus sunt. Unde illo molestias alias vitae soluta.`,
      coverUrl: 'https://placekitten.com/81/504',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi sapiente.`,
      subtitle: `Ducimus tempora vel esse.`,
      author: `Davi Lucas Caldeira`,
      publisher: `Lopes da Paz S/A`,
      publicationYear: 1961,
      genre: 'Nisi',
      code: 'BOOK0571',
      isbn: '978-1-917913-86-7',
      language: 'Português',
      edition: '4ª',
      pages: 343,
      synopsis: `Eum laboriosam sequi sunt. Blanditiis soluta quos atque placeat unde repellendus.`,
      coverUrl: 'https://placeimg.com/277/621/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorem.`,
      subtitle: `Nam omnis enim blanditiis saepe itaque.`,
      author: `Fernanda Lopes`,
      publisher: `Rodrigues Cardoso - EI`,
      publicationYear: 1954,
      genre: 'Error',
      code: 'BOOK0572',
      isbn: '978-1-85764-639-9',
      language: 'Português',
      edition: '2ª',
      pages: 194,
      synopsis: `Mollitia vitae alias odio error. Omnis fugiat quos voluptatum.`,
      coverUrl: 'https://dummyimage.com/346x510',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita soluta.`,
      subtitle: null,
      author: `Thales Duarte`,
      publisher: `Melo S.A.`,
      publicationYear: 2017,
      genre: 'Iure',
      code: 'BOOK0573',
      isbn: '978-1-962616-84-3',
      language: 'Português',
      edition: '3ª',
      pages: 435,
      synopsis: `Cumque eum quidem libero est asperiores. Odio eligendi quam aperiam. Nesciunt nisi nostrum maxime totam facere hic.`,
      coverUrl: 'https://www.lorempixel.com/578/452',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maxime.`,
      subtitle: `Nihil occaecati quas.`,
      author: `Lavínia Monteiro`,
      publisher: `da Rocha`,
      publicationYear: 2016,
      genre: 'Maiores',
      code: 'BOOK0574',
      isbn: '978-1-227-17266-4',
      language: 'Português',
      edition: '1ª',
      pages: 104,
      synopsis: `Illo ad fugit ab ad aliquam. Similique omnis earum saepe a.`,
      coverUrl: 'https://dummyimage.com/774x862',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquam praesentium.`,
      subtitle: `Quod aut a voluptas voluptatem.`,
      author: `Júlia Viana`,
      publisher: `Fogaça S/A`,
      publicationYear: 1955,
      genre: 'Placeat',
      code: 'BOOK0575',
      isbn: '978-0-07-623811-8',
      language: 'Português',
      edition: '1ª',
      pages: 633,
      synopsis: `Consequuntur consequuntur corporis cupiditate. Eligendi modi iusto sint. Deserunt voluptatum nihil error a at quas.`,
      coverUrl: 'https://www.lorempixel.com/548/926',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga quos.`,
      subtitle: `Vel expedita adipisci.`,
      author: `Sr. Ian Pires`,
      publisher: `da Cunha Souza - EI`,
      publicationYear: 1986,
      genre: 'Delectus',
      code: 'BOOK0576',
      isbn: '978-1-4157-8097-8',
      language: 'Português',
      edition: '3ª',
      pages: 645,
      synopsis: `Adipisci unde accusantium asperiores tempora. Numquam tenetur quae eveniet. Aspernatur ex quis ratione magni.`,
      coverUrl: 'https://placekitten.com/195/537',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam reiciendis enim.`,
      subtitle: `Consectetur alias assumenda magni nam nostrum ad.`,
      author: `Vitor Gabriel Monteiro`,
      publisher: `Araújo`,
      publicationYear: 1951,
      genre: 'Veniam',
      code: 'BOOK0577',
      isbn: '978-1-891213-97-7',
      language: 'Português',
      edition: '5ª',
      pages: 673,
      synopsis: `Reprehenderit illo nemo eum ex. Vero totam quos nihil esse quisquam.`,
      coverUrl: 'https://www.lorempixel.com/569/382',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis inventore odit.`,
      subtitle: `Facere corrupti non molestiae.`,
      author: `João Miguel Campos`,
      publisher: `Nogueira Ltda.`,
      publicationYear: 1986,
      genre: 'Nihil',
      code: 'BOOK0578',
      isbn: '978-0-374-57016-3',
      language: 'Português',
      edition: '5ª',
      pages: 350,
      synopsis: `Ipsam at dolore optio. Error tempore animi facere. Maiores deserunt quam.`,
      coverUrl: 'https://placekitten.com/329/814',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error quo.`,
      subtitle: `Similique debitis rem repellat minus perferendis.`,
      author: `Vinicius da Conceição`,
      publisher: `da Luz`,
      publicationYear: 1953,
      genre: 'Error',
      code: 'BOOK0579',
      isbn: '978-0-04-172415-8',
      language: 'Português',
      edition: '4ª',
      pages: 791,
      synopsis: `Velit id autem modi et. Sapiente nesciunt adipisci cupiditate libero. Accusamus eius fuga aperiam voluptatum distinctio.`,
      coverUrl: 'https://placekitten.com/295/692',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Debitis dolore assumenda.`,
      subtitle: `Ullam consequuntur harum aliquid accusantium repudiandae.`,
      author: `Larissa Novaes`,
      publisher: `Carvalho Pires S.A.`,
      publicationYear: 1972,
      genre: 'Consequuntur',
      code: 'BOOK0580',
      isbn: '978-1-292-20416-1',
      language: 'Português',
      edition: '5ª',
      pages: 706,
      synopsis: `Unde debitis blanditiis placeat nihil tempore fugit. Labore voluptatibus a dolore commodi. Quibusdam voluptas commodi dolorem culpa aliquid.`,
      coverUrl: 'https://dummyimage.com/733x15',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid atque.`,
      subtitle: `Aliquid nemo officia distinctio nulla laudantium.`,
      author: `Ana Júlia Caldeira`,
      publisher: `Caldeira e Filhos`,
      publicationYear: 2009,
      genre: 'Adipisci',
      code: 'BOOK0581',
      isbn: '978-1-61622-564-3',
      language: 'Português',
      edition: '5ª',
      pages: 234,
      synopsis: `Maiores fuga voluptas est. Neque numquam tempore dolorem eligendi quod quas. Consequatur doloremque vitae officiis iusto.`,
      coverUrl: 'https://placekitten.com/154/583',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim quasi saepe.`,
      subtitle: `Accusamus qui nostrum velit explicabo.`,
      author: `Mariana Cavalcanti`,
      publisher: `Porto - ME`,
      publicationYear: 1978,
      genre: 'Nobis',
      code: 'BOOK0582',
      isbn: '978-1-5052-7612-1',
      language: 'Português',
      edition: '2ª',
      pages: 731,
      synopsis: `Cum assumenda praesentium eum molestias illum asperiores.`,
      coverUrl: 'https://dummyimage.com/122x319',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Architecto beatae.`,
      subtitle: `Numquam perspiciatis ipsam harum repudiandae odio.`,
      author: `Isaac Farias`,
      publisher: `da Costa da Paz e Filhos`,
      publicationYear: 1958,
      genre: 'Placeat',
      code: 'BOOK0583',
      isbn: '978-1-921268-48-9',
      language: 'Português',
      edition: '4ª',
      pages: 215,
      synopsis: `Dolore libero assumenda sapiente non deserunt. Adipisci quia iste. Quo doloribus quibusdam natus possimus soluta.`,
      coverUrl: 'https://dummyimage.com/149x424',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsa nobis.`,
      subtitle: null,
      author: `Lívia Nascimento`,
      publisher: `da Rocha`,
      publicationYear: 2001,
      genre: 'Debitis',
      code: 'BOOK0584',
      isbn: '978-1-178-37659-3',
      language: 'Português',
      edition: '1ª',
      pages: 433,
      synopsis: `Tempora ullam consequuntur atque quod pariatur. Repellendus rem cum.`,
      coverUrl: 'https://placekitten.com/876/804',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore sint.`,
      subtitle: `Sit fuga rem laborum.`,
      author: `Ian Monteiro`,
      publisher: `Farias Rodrigues Ltda.`,
      publicationYear: 1981,
      genre: 'Veniam',
      code: 'BOOK0585',
      isbn: '978-1-69764-878-2',
      language: 'Português',
      edition: '5ª',
      pages: 262,
      synopsis: `Incidunt cum repellendus neque provident rerum accusantium illum. Et vero neque voluptas.`,
      coverUrl: 'https://placeimg.com/857/669/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut similique corporis.`,
      subtitle: `Sint quisquam quibusdam.`,
      author: `Raquel Sales`,
      publisher: `Dias Lopes e Filhos`,
      publicationYear: 2005,
      genre: 'Adipisci',
      code: 'BOOK0586',
      isbn: '978-0-442-12914-9',
      language: 'Português',
      edition: '5ª',
      pages: 450,
      synopsis: `Tempore delectus ratione eos laudantium mollitia. Enim exercitationem laudantium. Iure soluta fuga sint eos omnis itaque.`,
      coverUrl: 'https://dummyimage.com/416x471',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos nam.`,
      subtitle: null,
      author: `Yago Farias`,
      publisher: `Pires da Costa e Filhos`,
      publicationYear: 2009,
      genre: 'Aspernatur',
      code: 'BOOK0587',
      isbn: '978-1-167-67063-3',
      language: 'Português',
      edition: '3ª',
      pages: 668,
      synopsis: `Dolor consequuntur sint voluptatem maxime dicta beatae voluptates. Ad veniam aliquid suscipit. Eos ullam consectetur repellendus quo sit dignissimos.`,
      coverUrl: 'https://placeimg.com/435/866/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugit veniam magni.`,
      subtitle: null,
      author: `Dra. Maria Nunes`,
      publisher: `Cardoso`,
      publicationYear: 1998,
      genre: 'Voluptatem',
      code: 'BOOK0588',
      isbn: '978-1-05-494692-6',
      language: 'Português',
      edition: '3ª',
      pages: 606,
      synopsis: `Voluptates totam eius quaerat amet sint corporis.`,
      coverUrl: 'https://dummyimage.com/756x191',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Amet officiis suscipit.`,
      subtitle: null,
      author: `Breno Cavalcanti`,
      publisher: `Gonçalves`,
      publicationYear: 1950,
      genre: 'Mollitia',
      code: 'BOOK0589',
      isbn: '978-1-58080-388-5',
      language: 'Português',
      edition: '2ª',
      pages: 776,
      synopsis: `Enim odit aperiam. Earum aperiam illo tempora. Asperiores distinctio ex minima omnis earum.`,
      coverUrl: 'https://placekitten.com/444/977',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eum magni deserunt.`,
      subtitle: `Odit aut illo ut fugit ipsum.`,
      author: `Lavínia Vieira`,
      publisher: `Azevedo`,
      publicationYear: 1990,
      genre: 'Consectetur',
      code: 'BOOK0590',
      isbn: '978-0-7169-8837-3',
      language: 'Português',
      edition: '3ª',
      pages: 683,
      synopsis: `Atque facilis unde incidunt reiciendis voluptate. Assumenda necessitatibus repudiandae harum.`,
      coverUrl: 'https://dummyimage.com/729x413',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit labore.`,
      subtitle: null,
      author: `Thiago Martins`,
      publisher: `Melo - EI`,
      publicationYear: 1987,
      genre: 'Eos',
      code: 'BOOK0591',
      isbn: '978-0-458-19565-7',
      language: 'Português',
      edition: '1ª',
      pages: 478,
      synopsis: `Molestias doloribus veritatis voluptates. Omnis quo magni eligendi harum optio atque temporibus. Ex aliquam placeat molestiae eaque incidunt molestias.`,
      coverUrl: 'https://dummyimage.com/426x8',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio.`,
      subtitle: null,
      author: `Heloísa da Rocha`,
      publisher: `Rezende da Luz - ME`,
      publicationYear: 1953,
      genre: 'Molestiae',
      code: 'BOOK0592',
      isbn: '978-0-451-50252-0',
      language: 'Português',
      edition: '2ª',
      pages: 542,
      synopsis: `Velit incidunt voluptas a molestias repellendus. Modi natus iusto. Odit quisquam dolore.`,
      coverUrl: 'https://placeimg.com/341/990/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste quia quidem.`,
      subtitle: null,
      author: `Vitor Hugo Santos`,
      publisher: `Cunha`,
      publicationYear: 1972,
      genre: 'Ipsum',
      code: 'BOOK0593',
      isbn: '978-1-86309-007-0',
      language: 'Português',
      edition: '4ª',
      pages: 242,
      synopsis: `Asperiores repudiandae quaerat eius. Eos enim dolor perspiciatis amet.`,
      coverUrl: 'https://placeimg.com/990/915/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quidem rerum.`,
      subtitle: null,
      author: `Sra. Ana Vitória Ribeiro`,
      publisher: `Nascimento Ltda.`,
      publicationYear: 1966,
      genre: 'Voluptatum',
      code: 'BOOK0594',
      isbn: '978-1-66764-099-0',
      language: 'Português',
      edition: '2ª',
      pages: 111,
      synopsis: `Sequi deserunt quod accusamus nostrum facilis cum. Velit voluptates fugit quae deserunt. Numquam vero delectus saepe neque quis doloribus.`,
      coverUrl: 'https://www.lorempixel.com/27/939',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Possimus laboriosam doloribus.`,
      subtitle: `Quis ex ratione.`,
      author: `Ana Sophia Cardoso`,
      publisher: `Azevedo`,
      publicationYear: 2003,
      genre: 'Voluptates',
      code: 'BOOK0595',
      isbn: '978-0-16-260080-5',
      language: 'Português',
      edition: '4ª',
      pages: 718,
      synopsis: `Expedita nemo distinctio ea iusto excepturi. Sint ullam dignissimos et magni quae facere.`,
      coverUrl: 'https://www.lorempixel.com/182/382',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus iusto.`,
      subtitle: `Repellendus fugit voluptas.`,
      author: `Dra. Júlia Nogueira`,
      publisher: `Duarte`,
      publicationYear: 1978,
      genre: 'Dolor',
      code: 'BOOK0596',
      isbn: '978-0-17-266528-3',
      language: 'Português',
      edition: '2ª',
      pages: 534,
      synopsis: `Hic ex similique nihil cumque. Pariatur enim aliquam alias sunt perferendis consequuntur.`,
      coverUrl: 'https://www.lorempixel.com/801/101',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Pariatur fugiat.`,
      subtitle: `Eum nihil nam.`,
      author: `Dr. Emanuel da Conceição`,
      publisher: `Correia`,
      publicationYear: 2019,
      genre: 'Natus',
      code: 'BOOK0597',
      isbn: '978-0-335-63693-8',
      language: 'Português',
      edition: '5ª',
      pages: 475,
      synopsis: `Tenetur animi alias amet.`,
      coverUrl: 'https://placeimg.com/480/135/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae a velit.`,
      subtitle: null,
      author: `Amanda da Luz`,
      publisher: `Melo Freitas S/A`,
      publicationYear: 1960,
      genre: 'Iusto',
      code: 'BOOK0598',
      isbn: '978-0-930437-66-4',
      language: 'Português',
      edition: '2ª',
      pages: 639,
      synopsis: `Quo hic modi odit maiores. Consequuntur consequatur odio maxime.`,
      coverUrl: 'https://placeimg.com/714/620/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam sed.`,
      subtitle: `Tenetur dolore voluptatibus sint at.`,
      author: `Sr. Renan Farias`,
      publisher: `Pinto - ME`,
      publicationYear: 1959,
      genre: 'Eligendi',
      code: 'BOOK0599',
      isbn: '978-1-218-91426-6',
      language: 'Português',
      edition: '5ª',
      pages: 693,
      synopsis: `Labore illum sint officia quidem. Illo laborum laboriosam sint. Libero id tempore omnis molestiae vero illum. Inventore minima optio facere assumenda.`,
      coverUrl: 'https://placeimg.com/812/330/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cupiditate culpa incidunt.`,
      subtitle: null,
      author: `Laura Silva`,
      publisher: `da Mota - ME`,
      publicationYear: 2010,
      genre: 'Temporibus',
      code: 'BOOK0600',
      isbn: '978-0-652-28989-3',
      language: 'Português',
      edition: '5ª',
      pages: 439,
      synopsis: `Eos nesciunt repellat natus autem eum numquam.`,
      coverUrl: 'https://dummyimage.com/983x952',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eum nobis libero.`,
      subtitle: null,
      author: `Antônio Vieira`,
      publisher: `Moura Teixeira S/A`,
      publicationYear: 1988,
      genre: 'Ipsum',
      code: 'BOOK0601',
      isbn: '978-0-417-16578-3',
      language: 'Português',
      edition: '5ª',
      pages: 366,
      synopsis: `Nemo veritatis consequuntur vero sint. Expedita at minus aspernatur beatae voluptate. Incidunt animi officiis quo a nobis ea. Provident debitis veniam natus suscipit expedita iure amet.`,
      coverUrl: 'https://dummyimage.com/477x34',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deserunt commodi quasi corrupti.`,
      subtitle: `Aperiam magni saepe.`,
      author: `Luiz Felipe Freitas`,
      publisher: `Aragão Nunes e Filhos`,
      publicationYear: 1960,
      genre: 'Temporibus',
      code: 'BOOK0602',
      isbn: '978-0-223-36931-3',
      language: 'Português',
      edition: '2ª',
      pages: 617,
      synopsis: `Fugit suscipit accusamus. Odit accusantium consequatur ea cupiditate harum quae. Ea rem iste dolores.`,
      coverUrl: 'https://placekitten.com/590/50',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sunt porro rem.`,
      subtitle: `Esse veniam vero facilis.`,
      author: `Nicole Sales`,
      publisher: `Barros`,
      publicationYear: 1964,
      genre: 'Modi',
      code: 'BOOK0603',
      isbn: '978-0-544-53451-3',
      language: 'Português',
      edition: '5ª',
      pages: 278,
      synopsis: `Omnis tempore voluptate optio in unde. Dicta quibusdam eaque dicta eos qui dolorem.`,
      coverUrl: 'https://dummyimage.com/723x878',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rerum dolor voluptatem.`,
      subtitle: null,
      author: `Luiz Henrique Lopes`,
      publisher: `da Costa Araújo e Filhos`,
      publicationYear: 1980,
      genre: 'Officia',
      code: 'BOOK0604',
      isbn: '978-1-870894-32-6',
      language: 'Português',
      edition: '4ª',
      pages: 285,
      synopsis: `Natus omnis officiis error sit quas voluptatum porro. Adipisci ad quam esse reiciendis facere quam. Cupiditate eaque iure quasi ab itaque eligendi ullam.`,
      coverUrl: 'https://placeimg.com/401/93/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorem qui tenetur.`,
      subtitle: null,
      author: `Gabrielly Fogaça`,
      publisher: `Almeida`,
      publicationYear: 1969,
      genre: 'Excepturi',
      code: 'BOOK0605',
      isbn: '978-0-625-85150-8',
      language: 'Português',
      edition: '4ª',
      pages: 522,
      synopsis: `Error exercitationem omnis. Atque distinctio dolorem aperiam tenetur nisi quo.`,
      coverUrl: 'https://placeimg.com/476/458/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Similique quis deleniti reiciendis.`,
      subtitle: `Beatae dolores explicabo.`,
      author: `Guilherme da Cunha`,
      publisher: `Moraes`,
      publicationYear: 1983,
      genre: 'Ea',
      code: 'BOOK0606',
      isbn: '978-1-286-62510-1',
      language: 'Português',
      edition: '1ª',
      pages: 153,
      synopsis: `Libero minus mollitia perspiciatis expedita exercitationem. Ea quidem voluptate reiciendis. Aspernatur doloremque atque labore temporibus esse repudiandae est.`,
      coverUrl: 'https://www.lorempixel.com/450/929',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur delectus sapiente.`,
      subtitle: `Iste dolorum dolorum atque sapiente.`,
      author: `Raul Lopes`,
      publisher: `Moura`,
      publicationYear: 1999,
      genre: 'Nisi',
      code: 'BOOK0607',
      isbn: '978-1-4126-0848-0',
      language: 'Português',
      edition: '4ª',
      pages: 368,
      synopsis: `Voluptate omnis hic accusamus numquam animi necessitatibus. Nobis inventore accusantium sapiente.`,
      coverUrl: 'https://placeimg.com/688/151/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit est adipisci.`,
      subtitle: null,
      author: `Sr. Cauê Peixoto`,
      publisher: `Dias`,
      publicationYear: 1955,
      genre: 'Veritatis',
      code: 'BOOK0608',
      isbn: '978-0-343-88804-6',
      language: 'Português',
      edition: '1ª',
      pages: 644,
      synopsis: `Sed at eos corrupti corporis non. Id facilis similique corporis cupiditate. Autem ducimus iusto quisquam ipsam.`,
      coverUrl: 'https://www.lorempixel.com/955/378',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quaerat eos.`,
      subtitle: null,
      author: `Vinicius Gomes`,
      publisher: `da Mota`,
      publicationYear: 1982,
      genre: 'Blanditiis',
      code: 'BOOK0609',
      isbn: '978-1-369-53102-2',
      language: 'Português',
      edition: '5ª',
      pages: 500,
      synopsis: `Laborum perspiciatis autem accusamus corporis nesciunt veniam. Non harum quos excepturi aperiam iste similique. Beatae incidunt placeat assumenda amet magnam dolorem. Culpa atque mollitia id tempore ratione ipsam perspiciatis.`,
      coverUrl: 'https://www.lorempixel.com/891/991',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magnam.`,
      subtitle: `Natus placeat laborum.`,
      author: `Melissa Gonçalves`,
      publisher: `Cardoso`,
      publicationYear: 1973,
      genre: 'Minima',
      code: 'BOOK0610',
      isbn: '978-0-445-00202-9',
      language: 'Português',
      edition: '3ª',
      pages: 660,
      synopsis: `Doloribus laudantium nostrum suscipit quia est expedita. Cumque et id quis. Dolores quod earum.`,
      coverUrl: 'https://placeimg.com/421/559/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis error architecto.`,
      subtitle: `Dolores incidunt magnam.`,
      author: `Breno Farias`,
      publisher: `Porto da Luz S/A`,
      publicationYear: 1963,
      genre: 'Architecto',
      code: 'BOOK0611',
      isbn: '978-0-334-60184-5',
      language: 'Português',
      edition: '4ª',
      pages: 459,
      synopsis: `A doloremque omnis cumque. Cupiditate quo qui placeat asperiores.`,
      coverUrl: 'https://placeimg.com/792/248/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit ab.`,
      subtitle: null,
      author: `Maria Fernanda Carvalho`,
      publisher: `Farias`,
      publicationYear: 1957,
      genre: 'Modi',
      code: 'BOOK0612',
      isbn: '978-1-894767-20-0',
      language: 'Português',
      edition: '5ª',
      pages: 772,
      synopsis: `Explicabo aspernatur praesentium.`,
      coverUrl: 'https://placeimg.com/204/103/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit.`,
      subtitle: `Inventore eaque facilis.`,
      author: `Pietro Teixeira`,
      publisher: `Cavalcanti`,
      publicationYear: 2022,
      genre: 'Ducimus',
      code: 'BOOK0613',
      isbn: '978-1-08-511919-1',
      language: 'Português',
      edition: '2ª',
      pages: 213,
      synopsis: `Facere vel in labore nulla. Excepturi reprehenderit nobis iste libero dolores.`,
      coverUrl: 'https://placeimg.com/913/238/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sed dolores.`,
      subtitle: null,
      author: `Dr. Calebe Cunha`,
      publisher: `Nascimento`,
      publicationYear: 1991,
      genre: 'Nulla',
      code: 'BOOK0614',
      isbn: '978-0-557-37138-9',
      language: 'Português',
      edition: '3ª',
      pages: 265,
      synopsis: `Quibusdam reprehenderit aliquid quas dolor omnis quaerat. Pariatur vero error ratione suscipit. Laudantium dignissimos dolor error.`,
      coverUrl: 'https://placeimg.com/226/146/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quod placeat cupiditate.`,
      subtitle: `Fugiat eos dolorem.`,
      author: `Julia Teixeira`,
      publisher: `da Rocha`,
      publicationYear: 1983,
      genre: 'Nesciunt',
      code: 'BOOK0615',
      isbn: '978-1-04-656896-9',
      language: 'Português',
      edition: '2ª',
      pages: 551,
      synopsis: `Temporibus unde dolor mollitia quod doloremque adipisci. Dolore placeat ullam dolorem quas porro aspernatur. Nemo debitis veritatis quod provident veniam. Optio cumque vel fugit.`,
      coverUrl: 'https://www.lorempixel.com/456/573',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga.`,
      subtitle: `Fugiat vel corporis.`,
      author: `Bruno Viana`,
      publisher: `da Cunha`,
      publicationYear: 2019,
      genre: 'Debitis',
      code: 'BOOK0616',
      isbn: '978-1-71830-181-8',
      language: 'Português',
      edition: '4ª',
      pages: 323,
      synopsis: `Quo veniam officiis sed laboriosam perspiciatis minima quas. Omnis rerum labore eligendi nostrum numquam animi. Ut consequatur laudantium beatae.`,
      coverUrl: 'https://placeimg.com/838/687/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maxime atque nulla.`,
      subtitle: `Voluptatum tempora ab.`,
      author: `Luiz Felipe da Rosa`,
      publisher: `Oliveira`,
      publicationYear: 2023,
      genre: 'Exercitationem',
      code: 'BOOK0617',
      isbn: '978-1-312-97557-6',
      language: 'Português',
      edition: '3ª',
      pages: 556,
      synopsis: `Aut nisi non dolor totam magni. Nemo tempora minima porro.`,
      coverUrl: 'https://dummyimage.com/109x802',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cum.`,
      subtitle: `Officia accusamus asperiores voluptatibus.`,
      author: `Sr. Rodrigo da Cunha`,
      publisher: `Nogueira S.A.`,
      publicationYear: 1992,
      genre: 'Voluptas',
      code: 'BOOK0618',
      isbn: '978-1-131-79854-7',
      language: 'Português',
      edition: '4ª',
      pages: 688,
      synopsis: `Quidem aliquid porro. Doloribus perferendis nobis quibusdam. Maiores ex dolore possimus temporibus reprehenderit. Perspiciatis totam molestias rerum corrupti.`,
      coverUrl: 'https://dummyimage.com/570x446',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tenetur quod.`,
      subtitle: `Autem repellat architecto nobis qui.`,
      author: `Sr. Pedro Lucas Fernandes`,
      publisher: `Peixoto`,
      publicationYear: 1999,
      genre: 'Dolorum',
      code: 'BOOK0619',
      isbn: '978-0-360-18639-2',
      language: 'Português',
      edition: '4ª',
      pages: 224,
      synopsis: `Facere atque dignissimos quo dolorum. Atque harum quod nobis ab. Nisi maxime qui quod numquam officiis inventore. Facere ratione modi consequatur eius.`,
      coverUrl: 'https://www.lorempixel.com/65/360',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam quod deleniti.`,
      subtitle: `In magni architecto.`,
      author: `Enrico Ribeiro`,
      publisher: `Pereira Porto S/A`,
      publicationYear: 1993,
      genre: 'Perferendis',
      code: 'BOOK0620',
      isbn: '978-0-7340-2422-0',
      language: 'Português',
      edition: '1ª',
      pages: 570,
      synopsis: `Atque nulla sunt saepe dolorem. Illum totam delectus doloremque.`,
      coverUrl: 'https://www.lorempixel.com/640/631',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempora aut.`,
      subtitle: `Enim cumque quis mollitia.`,
      author: `Davi Lucas Araújo`,
      publisher: `Freitas Farias Ltda.`,
      publicationYear: 1999,
      genre: 'Ab',
      code: 'BOOK0621',
      isbn: '978-1-65118-615-2',
      language: 'Português',
      edition: '1ª',
      pages: 745,
      synopsis: `Ab rem eligendi est expedita. Molestiae provident tempore iusto eum rerum consequatur saepe. Placeat numquam magni repudiandae.`,
      coverUrl: 'https://www.lorempixel.com/789/155',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus.`,
      subtitle: `Et eum eaque quibusdam.`,
      author: `Camila Azevedo`,
      publisher: `Duarte Rocha - ME`,
      publicationYear: 2025,
      genre: 'Modi',
      code: 'BOOK0622',
      isbn: '978-1-922953-38-4',
      language: 'Português',
      edition: '2ª',
      pages: 600,
      synopsis: `Necessitatibus at aperiam reprehenderit. Non accusamus numquam dolorem recusandae. Eligendi occaecati corrupti a.`,
      coverUrl: 'https://dummyimage.com/869x363',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illum dicta.`,
      subtitle: null,
      author: `Renan Silveira`,
      publisher: `Duarte Fernandes S.A.`,
      publicationYear: 1952,
      genre: 'Optio',
      code: 'BOOK0623',
      isbn: '978-0-86694-086-3',
      language: 'Português',
      edition: '1ª',
      pages: 447,
      synopsis: `Cupiditate dolorum natus fugit nulla. Mollitia exercitationem ipsum dignissimos. Neque expedita voluptate.`,
      coverUrl: 'https://placeimg.com/764/557/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sint dolorum incidunt temporibus.`,
      subtitle: null,
      author: `Esther Martins`,
      publisher: `Martins Castro - ME`,
      publicationYear: 2016,
      genre: 'Necessitatibus',
      code: 'BOOK0624',
      isbn: '978-0-471-88300-5',
      language: 'Português',
      edition: '4ª',
      pages: 794,
      synopsis: `Excepturi consequatur magni iste vel voluptates qui nostrum. Pariatur maiores inventore ipsum molestiae neque. Accusamus praesentium itaque sequi odit sit sint. Nesciunt assumenda ea ipsam aspernatur ad.`,
      coverUrl: 'https://placeimg.com/440/533/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi laboriosam.`,
      subtitle: `In quas a excepturi molestiae.`,
      author: `Lara Aragão`,
      publisher: `Nogueira - ME`,
      publicationYear: 1968,
      genre: 'Ut',
      code: 'BOOK0625',
      isbn: '978-1-923435-96-4',
      language: 'Português',
      edition: '4ª',
      pages: 769,
      synopsis: `Eveniet sunt voluptatibus eius quis accusantium ex. Illum provident ratione dolorem exercitationem aliquid. Temporibus recusandae ipsa iusto praesentium.`,
      coverUrl: 'https://placeimg.com/343/678/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error alias.`,
      subtitle: `Ex voluptatem placeat.`,
      author: `Luiz Otávio Martins`,
      publisher: `Pereira`,
      publicationYear: 1956,
      genre: 'Doloribus',
      code: 'BOOK0626',
      isbn: '978-1-81638-493-5',
      language: 'Português',
      edition: '3ª',
      pages: 199,
      synopsis: `Sit perferendis deserunt maiores dolore quam assumenda. Sed consequuntur molestias fugiat. Assumenda rem officiis a eos ullam.`,
      coverUrl: 'https://placeimg.com/755/301/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Expedita fugiat labore.`,
      subtitle: `Harum impedit amet deserunt.`,
      author: `Clara Fernandes`,
      publisher: `Gomes`,
      publicationYear: 1978,
      genre: 'Error',
      code: 'BOOK0627',
      isbn: '978-1-896331-81-2',
      language: 'Português',
      edition: '1ª',
      pages: 307,
      synopsis: `Dolore ipsam in labore sapiente. Ipsum dolore commodi.`,
      coverUrl: 'https://placekitten.com/914/617',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Itaque suscipit cupiditate.`,
      subtitle: null,
      author: `Beatriz Nogueira`,
      publisher: `Novaes Pires - EI`,
      publicationYear: 1991,
      genre: 'Ipsam',
      code: 'BOOK0628',
      isbn: '978-1-74759-443-4',
      language: 'Português',
      edition: '2ª',
      pages: 146,
      synopsis: `Quae consequuntur explicabo deleniti quibusdam ratione soluta. Vitae quos labore.`,
      coverUrl: 'https://placeimg.com/953/859/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ad sit.`,
      subtitle: `Vero laboriosam iusto.`,
      author: `Henrique Pires`,
      publisher: `da Paz`,
      publicationYear: 2003,
      genre: 'In',
      code: 'BOOK0629',
      isbn: '978-0-573-30990-8',
      language: 'Português',
      edition: '2ª',
      pages: 478,
      synopsis: `Necessitatibus eius alias.`,
      coverUrl: 'https://placeimg.com/837/763/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quas corrupti quia.`,
      subtitle: `Exercitationem minima vero ex.`,
      author: `Lara Moreira`,
      publisher: `Mendes da Mata S.A.`,
      publicationYear: 1962,
      genre: 'Veritatis',
      code: 'BOOK0630',
      isbn: '978-1-60004-709-1',
      language: 'Português',
      edition: '5ª',
      pages: 485,
      synopsis: `Animi doloribus esse voluptatibus. Repudiandae aspernatur nobis quisquam magnam nihil.`,
      coverUrl: 'https://www.lorempixel.com/817/643',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestias placeat.`,
      subtitle: `Magnam quibusdam ipsum ut illo.`,
      author: `Henrique Lima`,
      publisher: `Porto`,
      publicationYear: 1961,
      genre: 'Nisi',
      code: 'BOOK0631',
      isbn: '978-1-870479-66-0',
      language: 'Português',
      edition: '5ª',
      pages: 390,
      synopsis: `Suscipit provident accusamus fuga consequatur illo voluptate. Fugiat minima nulla eius cum doloremque doloremque quas. Provident libero tenetur sequi et saepe perspiciatis.`,
      coverUrl: 'https://dummyimage.com/864x357',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ducimus explicabo.`,
      subtitle: null,
      author: `Bryan Teixeira`,
      publisher: `Nascimento`,
      publicationYear: 2002,
      genre: 'Aliquid',
      code: 'BOOK0632',
      isbn: '978-1-4733-8914-4',
      language: 'Português',
      edition: '2ª',
      pages: 278,
      synopsis: `Excepturi ea error esse consectetur deleniti non. Aut ut quia perferendis totam. Quos laboriosam dolorem facere aspernatur.`,
      coverUrl: 'https://placekitten.com/832/847',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam atque at.`,
      subtitle: null,
      author: `João Guilherme Cardoso`,
      publisher: `Alves da Conceição Ltda.`,
      publicationYear: 1961,
      genre: 'Quam',
      code: 'BOOK0633',
      isbn: '978-0-465-81539-5',
      language: 'Português',
      edition: '3ª',
      pages: 456,
      synopsis: `Facilis cumque blanditiis mollitia eveniet soluta rem. Repellat minima provident perspiciatis. Totam voluptas mollitia fugiat.`,
      coverUrl: 'https://placeimg.com/739/226/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Exercitationem nulla dolor.`,
      subtitle: `Velit atque dolore minus.`,
      author: `Ana Laura Vieira`,
      publisher: `Caldeira S.A.`,
      publicationYear: 2017,
      genre: 'Quibusdam',
      code: 'BOOK0634',
      isbn: '978-1-63429-242-9',
      language: 'Português',
      edition: '1ª',
      pages: 733,
      synopsis: `Soluta nemo quia doloribus quis amet nesciunt unde. Aperiam et iusto deserunt.`,
      coverUrl: 'https://placekitten.com/185/178',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At dolorum ex.`,
      subtitle: `Facere sed veritatis eum aliquam.`,
      author: `Henrique Gonçalves`,
      publisher: `Porto - ME`,
      publicationYear: 1969,
      genre: 'Quibusdam',
      code: 'BOOK0635',
      isbn: '978-0-09-659845-2',
      language: 'Português',
      edition: '4ª',
      pages: 609,
      synopsis: `Illum saepe inventore quibusdam esse voluptates esse. Quia delectus nihil consequuntur vel similique nisi. Corrupti impedit placeat vel totam rem.`,
      coverUrl: 'https://www.lorempixel.com/46/858',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem fugit nulla.`,
      subtitle: `Animi quidem saepe.`,
      author: `Dra. Marcela Costela`,
      publisher: `Fernandes Cunha e Filhos`,
      publicationYear: 2005,
      genre: 'Cupiditate',
      code: 'BOOK0636',
      isbn: '978-0-682-21756-9',
      language: 'Português',
      edition: '3ª',
      pages: 442,
      synopsis: `Saepe necessitatibus fugit corporis minus occaecati. Nemo ut assumenda a exercitationem dolorem optio.`,
      coverUrl: 'https://dummyimage.com/720x1008',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia iste.`,
      subtitle: `Culpa adipisci vero optio.`,
      author: `Matheus Mendes`,
      publisher: `Costela`,
      publicationYear: 1953,
      genre: 'Facere',
      code: 'BOOK0637',
      isbn: '978-1-129-51452-4',
      language: 'Português',
      edition: '4ª',
      pages: 627,
      synopsis: `Perspiciatis maiores unde odit provident corporis.`,
      coverUrl: 'https://placeimg.com/818/32/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo.`,
      subtitle: `Adipisci recusandae rerum ea in facere.`,
      author: `Lucca Ferreira`,
      publisher: `Nunes`,
      publicationYear: 1991,
      genre: 'Voluptate',
      code: 'BOOK0638',
      isbn: '978-0-904189-85-8',
      language: 'Português',
      edition: '2ª',
      pages: 212,
      synopsis: `Vitae ea alias tempore eveniet sapiente. Rem dolore nam minus unde ipsam. Expedita possimus tenetur nostrum repudiandae asperiores.`,
      coverUrl: 'https://placeimg.com/797/107/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit consequuntur.`,
      subtitle: null,
      author: `Alexia Carvalho`,
      publisher: `da Mota - EI`,
      publicationYear: 1998,
      genre: 'Modi',
      code: 'BOOK0639',
      isbn: '978-1-79471-990-3',
      language: 'Português',
      edition: '2ª',
      pages: 175,
      synopsis: `Accusantium eveniet quis quas sequi maxime reiciendis. Quas nam veritatis necessitatibus est nihil.`,
      coverUrl: 'https://placeimg.com/249/531/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quasi vero doloremque.`,
      subtitle: null,
      author: `Ana Duarte`,
      publisher: `Carvalho`,
      publicationYear: 2008,
      genre: 'Nemo',
      code: 'BOOK0640',
      isbn: '978-0-09-532670-4',
      language: 'Português',
      edition: '2ª',
      pages: 496,
      synopsis: `Sint quis illo occaecati quibusdam. Rerum ex porro corrupti tempora facilis. Optio sit culpa temporibus quaerat tempore quis.`,
      coverUrl: 'https://dummyimage.com/226x447',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga aliquam.`,
      subtitle: `Maiores incidunt quas placeat rerum laborum.`,
      author: `Maysa Sales`,
      publisher: `Nunes Ltda.`,
      publicationYear: 1966,
      genre: 'Iste',
      code: 'BOOK0641',
      isbn: '978-1-4495-9752-8',
      language: 'Português',
      edition: '1ª',
      pages: 682,
      synopsis: `Facere dicta vel eum exercitationem. Nobis culpa magnam numquam earum provident.`,
      coverUrl: 'https://www.lorempixel.com/566/178',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas harum.`,
      subtitle: `Incidunt eum blanditiis quibusdam.`,
      author: `Paulo Sales`,
      publisher: `Fernandes`,
      publicationYear: 1993,
      genre: 'Iusto',
      code: 'BOOK0642',
      isbn: '978-1-965515-64-8',
      language: 'Português',
      edition: '2ª',
      pages: 402,
      synopsis: `Illo minus incidunt vel ab repellat natus dignissimos. Repellendus aperiam beatae quos saepe assumenda qui.`,
      coverUrl: 'https://dummyimage.com/973x317',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corporis minima.`,
      subtitle: null,
      author: `Vitória da Rosa`,
      publisher: `da Cunha`,
      publicationYear: 1979,
      genre: 'Perferendis',
      code: 'BOOK0643',
      isbn: '978-1-80984-601-3',
      language: 'Português',
      edition: '1ª',
      pages: 521,
      synopsis: `Earum recusandae deserunt. Mollitia asperiores sequi sit ipsa. Fugiat sunt id voluptates laborum.`,
      coverUrl: 'https://placekitten.com/708/668',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit accusamus.`,
      subtitle: null,
      author: `Nathan da Costa`,
      publisher: `Barbosa`,
      publicationYear: 1981,
      genre: 'Sint',
      code: 'BOOK0644',
      isbn: '978-1-4627-2053-8',
      language: 'Português',
      edition: '2ª',
      pages: 435,
      synopsis: `Numquam aperiam nobis corrupti minus. Illum qui unde corrupti magnam qui. Voluptatem sunt veniam voluptas.`,
      coverUrl: 'https://www.lorempixel.com/445/503',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste soluta molestias.`,
      subtitle: null,
      author: `Davi Lucca Nogueira`,
      publisher: `Peixoto Ferreira S.A.`,
      publicationYear: 2003,
      genre: 'Sequi',
      code: 'BOOK0645',
      isbn: '978-1-78446-078-5',
      language: 'Português',
      edition: '1ª',
      pages: 141,
      synopsis: `Rerum rerum aspernatur. Possimus vel non aperiam laboriosam fuga corrupti. Error recusandae nobis cumque dignissimos. Inventore eius molestiae maxime.`,
      coverUrl: 'https://placeimg.com/500/688/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsam ipsa.`,
      subtitle: `Quod neque alias accusantium eveniet.`,
      author: `Dra. Emanuella da Rocha`,
      publisher: `das Neves`,
      publicationYear: 1980,
      genre: 'Non',
      code: 'BOOK0646',
      isbn: '978-1-156-92209-5',
      language: 'Português',
      edition: '1ª',
      pages: 671,
      synopsis: `Similique amet illo veniam dolores sint exercitationem facere. Iure voluptatibus optio autem veniam officia iure.`,
      coverUrl: 'https://placekitten.com/468/589',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio repellendus.`,
      subtitle: null,
      author: `Emanuella Teixeira`,
      publisher: `Cunha`,
      publicationYear: 1961,
      genre: 'Doloribus',
      code: 'BOOK0647',
      isbn: '978-1-78564-135-0',
      language: 'Português',
      edition: '1ª',
      pages: 591,
      synopsis: `Est hic eveniet officiis iusto nulla et. Similique modi vitae expedita accusantium.`,
      coverUrl: 'https://placekitten.com/704/995',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Facere magnam officiis.`,
      subtitle: `Aliquid ratione tenetur quo ea.`,
      author: `Ana Vitória da Mota`,
      publisher: `da Cunha`,
      publicationYear: 1967,
      genre: 'Excepturi',
      code: 'BOOK0648',
      isbn: '978-1-70407-146-6',
      language: 'Português',
      edition: '4ª',
      pages: 289,
      synopsis: `Odio atque quas laudantium nihil quam. Voluptate commodi expedita eum excepturi. Maxime dolor vel. Quae illo commodi ad non harum.`,
      coverUrl: 'https://placeimg.com/39/159/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nulla adipisci sed.`,
      subtitle: `Ipsa alias fugit.`,
      author: `Vitória Fogaça`,
      publisher: `Rodrigues - EI`,
      publicationYear: 2004,
      genre: 'Non',
      code: 'BOOK0649',
      isbn: '978-1-5162-1593-5',
      language: 'Português',
      edition: '3ª',
      pages: 727,
      synopsis: `Incidunt illo dolorum voluptatum ratione laborum dolores sunt. Praesentium nisi aliquid animi consectetur modi. Earum assumenda distinctio reiciendis reprehenderit.`,
      coverUrl: 'https://www.lorempixel.com/397/14',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deleniti nobis.`,
      subtitle: null,
      author: `Davi Luiz Sales`,
      publisher: `Dias`,
      publicationYear: 1964,
      genre: 'Non',
      code: 'BOOK0650',
      isbn: '978-0-579-67148-1',
      language: 'Português',
      edition: '4ª',
      pages: 474,
      synopsis: `Provident sequi tempora accusamus amet.`,
      coverUrl: 'https://placekitten.com/934/467',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsa facilis repellendus harum.`,
      subtitle: null,
      author: `Luiz Gustavo da Luz`,
      publisher: `da Mata`,
      publicationYear: 2021,
      genre: 'Velit',
      code: 'BOOK0651',
      isbn: '978-0-7941-2886-9',
      language: 'Português',
      edition: '2ª',
      pages: 241,
      synopsis: `Aut repellat perferendis vero reiciendis cumque eaque omnis. Sint rem assumenda autem laudantium odit. Rem corporis ex nulla esse voluptate quis.`,
      coverUrl: 'https://placekitten.com/924/540',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam praesentium debitis.`,
      subtitle: null,
      author: `Gabrielly Freitas`,
      publisher: `Cardoso`,
      publicationYear: 2024,
      genre: 'Culpa',
      code: 'BOOK0652',
      isbn: '978-1-136-73805-0',
      language: 'Português',
      edition: '2ª',
      pages: 330,
      synopsis: `Dignissimos repudiandae officia aut. Dolor saepe quam maiores quos modi tempore similique.`,
      coverUrl: 'https://placeimg.com/164/532/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cumque veniam.`,
      subtitle: `Optio doloribus doloribus eaque.`,
      author: `Caio Correia`,
      publisher: `Pires da Cunha - EI`,
      publicationYear: 1994,
      genre: 'Eos',
      code: 'BOOK0653',
      isbn: '978-0-308-76477-4',
      language: 'Português',
      edition: '4ª',
      pages: 597,
      synopsis: `Ab in pariatur ipsa voluptas dolores iure.`,
      coverUrl: 'https://www.lorempixel.com/295/764',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `In laboriosam saepe.`,
      subtitle: `Delectus atque corporis eligendi minima.`,
      author: `Julia Barros`,
      publisher: `Cavalcanti`,
      publicationYear: 1997,
      genre: 'Provident',
      code: 'BOOK0654',
      isbn: '978-0-03-264564-6',
      language: 'Português',
      edition: '1ª',
      pages: 292,
      synopsis: `Iusto autem nostrum illo eum temporibus. Non accusantium quos dolorum reiciendis. Vitae quaerat quibusdam. Dolorem consectetur repellendus.`,
      coverUrl: 'https://www.lorempixel.com/234/922',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia qui.`,
      subtitle: null,
      author: `Sr. Diogo Novaes`,
      publisher: `Novaes Rezende S/A`,
      publicationYear: 1959,
      genre: 'Officiis',
      code: 'BOOK0655',
      isbn: '978-0-15-319362-0',
      language: 'Português',
      edition: '1ª',
      pages: 268,
      synopsis: `Illo a cupiditate incidunt. Mollitia magni facilis. Maiores consequuntur sapiente nobis dicta.`,
      coverUrl: 'https://placekitten.com/753/472',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Placeat numquam.`,
      subtitle: null,
      author: `Alexandre Oliveira`,
      publisher: `Porto`,
      publicationYear: 1952,
      genre: 'Excepturi',
      code: 'BOOK0656',
      isbn: '978-0-7454-6935-5',
      language: 'Português',
      edition: '3ª',
      pages: 526,
      synopsis: `Soluta quasi esse. Corrupti molestiae deleniti necessitatibus.`,
      coverUrl: 'https://www.lorempixel.com/752/987',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi quis.`,
      subtitle: null,
      author: `Laís Castro`,
      publisher: `Sales`,
      publicationYear: 1952,
      genre: 'Beatae',
      code: 'BOOK0657',
      isbn: '978-0-305-68709-0',
      language: 'Português',
      edition: '3ª',
      pages: 293,
      synopsis: `Consectetur tenetur praesentium a. Vitae ducimus repellat quis.`,
      coverUrl: 'https://dummyimage.com/656x427',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Harum ea quidem.`,
      subtitle: null,
      author: `Sophie Nunes`,
      publisher: `Rezende`,
      publicationYear: 1991,
      genre: 'Vel',
      code: 'BOOK0658',
      isbn: '978-0-06-434597-2',
      language: 'Português',
      edition: '4ª',
      pages: 707,
      synopsis: `Odit iusto dolores dolorem. Eaque recusandae quibusdam quam.`,
      coverUrl: 'https://placeimg.com/924/682/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum excepturi.`,
      subtitle: null,
      author: `Heitor Viana`,
      publisher: `Teixeira`,
      publicationYear: 1979,
      genre: 'Aperiam',
      code: 'BOOK0659',
      isbn: '978-1-318-15605-4',
      language: 'Português',
      edition: '4ª',
      pages: 480,
      synopsis: `Laborum iste quod nesciunt. Repellendus quaerat error labore rerum autem.`,
      coverUrl: 'https://placeimg.com/104/991/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Esse ipsum enim.`,
      subtitle: null,
      author: `Sra. Kamilly Mendes`,
      publisher: `da Costa`,
      publicationYear: 1970,
      genre: 'Quam',
      code: 'BOOK0660',
      isbn: '978-0-269-34854-9',
      language: 'Português',
      edition: '5ª',
      pages: 392,
      synopsis: `Neque non ducimus placeat minus.`,
      coverUrl: 'https://www.lorempixel.com/714/853',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat nihil nisi.`,
      subtitle: `Architecto maxime ut quos labore.`,
      author: `Stella Pires`,
      publisher: `Ramos`,
      publicationYear: 1990,
      genre: 'Nulla',
      code: 'BOOK0661',
      isbn: '978-1-03-996263-7',
      language: 'Português',
      edition: '5ª',
      pages: 229,
      synopsis: `Nihil sunt repellat ullam architecto quos animi. Quis voluptates commodi mollitia in deleniti. Illum vitae officiis.`,
      coverUrl: 'https://dummyimage.com/343x588',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloremque placeat.`,
      subtitle: null,
      author: `Benjamin da Conceição`,
      publisher: `Dias Fernandes Ltda.`,
      publicationYear: 1990,
      genre: 'Modi',
      code: 'BOOK0662',
      isbn: '978-1-06-943069-4',
      language: 'Português',
      edition: '3ª',
      pages: 251,
      synopsis: `Deleniti ipsa sunt eum. Nisi at magni doloribus. Alias fugit velit.`,
      coverUrl: 'https://placekitten.com/519/688',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam veniam doloribus.`,
      subtitle: `Vitae occaecati quisquam.`,
      author: `Valentina Alves`,
      publisher: `da Cunha`,
      publicationYear: 2013,
      genre: 'Magni',
      code: 'BOOK0663',
      isbn: '978-1-280-53764-6',
      language: 'Português',
      edition: '2ª',
      pages: 569,
      synopsis: `Ex adipisci nam voluptas incidunt minus. Molestias ad debitis dolorem nihil consectetur commodi.`,
      coverUrl: 'https://www.lorempixel.com/153/984',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Numquam quaerat.`,
      subtitle: null,
      author: `Dr. Kaique da Rocha`,
      publisher: `Viana Ribeiro - EI`,
      publicationYear: 1987,
      genre: 'Qui',
      code: 'BOOK0664',
      isbn: '978-0-87314-249-6',
      language: 'Português',
      edition: '4ª',
      pages: 396,
      synopsis: `Cupiditate repellendus labore pariatur hic error. Ab deserunt delectus nam ab a. Aspernatur aliquam minima est placeat corrupti.`,
      coverUrl: 'https://dummyimage.com/43x301',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis.`,
      subtitle: null,
      author: `Sra. Isabelly Jesus`,
      publisher: `Fogaça`,
      publicationYear: 1955,
      genre: 'Atque',
      code: 'BOOK0665',
      isbn: '978-1-879210-46-2',
      language: 'Português',
      edition: '2ª',
      pages: 794,
      synopsis: `Soluta eum qui quod. Cupiditate perspiciatis necessitatibus ducimus cupiditate amet. Animi modi quisquam eos molestiae vel.`,
      coverUrl: 'https://www.lorempixel.com/386/413',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas magni laudantium.`,
      subtitle: null,
      author: `Ryan da Rosa`,
      publisher: `Teixeira`,
      publicationYear: 1978,
      genre: 'Voluptatum',
      code: 'BOOK0666',
      isbn: '978-1-01-457923-2',
      language: 'Português',
      edition: '4ª',
      pages: 465,
      synopsis: `Laborum eaque optio exercitationem provident numquam. Ab facilis quam natus libero voluptatem voluptate.`,
      coverUrl: 'https://dummyimage.com/270x56',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Asperiores consectetur blanditiis.`,
      subtitle: `Culpa quam explicabo dolores provident voluptas.`,
      author: `Agatha Fogaça`,
      publisher: `Rocha Mendes - EI`,
      publicationYear: 1960,
      genre: 'Dolorem',
      code: 'BOOK0667',
      isbn: '978-1-85511-639-9',
      language: 'Português',
      edition: '5ª',
      pages: 556,
      synopsis: `Eligendi cumque accusantium ratione. Rerum itaque possimus beatae recusandae est. Error repellat repudiandae nesciunt.`,
      coverUrl: 'https://dummyimage.com/324x789',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis maxime molestias.`,
      subtitle: null,
      author: `Srta. Camila Jesus`,
      publisher: `Porto`,
      publicationYear: 1996,
      genre: 'Ex',
      code: 'BOOK0668',
      isbn: '978-1-72443-435-7',
      language: 'Português',
      edition: '4ª',
      pages: 251,
      synopsis: `Tempore maxime cum voluptate fugiat labore excepturi illo. Dolore maxime perspiciatis aliquam culpa.`,
      coverUrl: 'https://placekitten.com/96/463',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officia odit commodi.`,
      subtitle: `Neque in amet adipisci amet enim.`,
      author: `Ana Clara Peixoto`,
      publisher: `Rocha`,
      publicationYear: 1989,
      genre: 'Eum',
      code: 'BOOK0669',
      isbn: '978-1-242-66225-6',
      language: 'Português',
      edition: '4ª',
      pages: 674,
      synopsis: `Corrupti alias impedit nobis amet quis quaerat eaque. Voluptate totam perspiciatis corporis dolores velit beatae itaque.`,
      coverUrl: 'https://placekitten.com/373/811',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea vero.`,
      subtitle: `In voluptas accusamus accusamus aperiam.`,
      author: `Cauê das Neves`,
      publisher: `Melo Souza e Filhos`,
      publicationYear: 2004,
      genre: 'Fugit',
      code: 'BOOK0670',
      isbn: '978-1-229-83596-3',
      language: 'Português',
      edition: '4ª',
      pages: 242,
      synopsis: `Ratione reiciendis assumenda explicabo sint accusantium cumque. Quisquam cum error quas dolores eveniet. Quaerat corporis natus.`,
      coverUrl: 'https://placeimg.com/77/113/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sapiente illo.`,
      subtitle: `Error iste laborum sapiente.`,
      author: `Sra. Gabrielly Ferreira`,
      publisher: `Gomes S.A.`,
      publicationYear: 2017,
      genre: 'Temporibus',
      code: 'BOOK0671',
      isbn: '978-0-697-92067-6',
      language: 'Português',
      edition: '3ª',
      pages: 167,
      synopsis: `Veniam dolore deserunt veritatis placeat. Nesciunt eius sequi qui perferendis sint. Cupiditate iusto possimus ex dicta repudiandae.`,
      coverUrl: 'https://dummyimage.com/201x453',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis.`,
      subtitle: `Eius dolorum tempore perspiciatis.`,
      author: `Diego Dias`,
      publisher: `Lima`,
      publicationYear: 2009,
      genre: 'Consequuntur',
      code: 'BOOK0672',
      isbn: '978-0-474-09853-6',
      language: 'Português',
      edition: '5ª',
      pages: 240,
      synopsis: `Animi dolorem aliquid totam. Aliquid dolorum consequatur atque adipisci provident. Veniam eveniet similique amet nesciunt vitae.`,
      coverUrl: 'https://dummyimage.com/107x559',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempora repellendus.`,
      subtitle: `Veniam hic architecto nisi.`,
      author: `João Lucas Moura`,
      publisher: `Costela Ltda.`,
      publicationYear: 1988,
      genre: 'Eveniet',
      code: 'BOOK0673',
      isbn: '978-1-81913-505-3',
      language: 'Português',
      edition: '5ª',
      pages: 411,
      synopsis: `Nostrum ducimus quis architecto quae. Beatae porro similique et libero commodi ut.`,
      coverUrl: 'https://dummyimage.com/885x472',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati consectetur eius.`,
      subtitle: `Accusantium quos blanditiis illum.`,
      author: `Raul Teixeira`,
      publisher: `Pinto`,
      publicationYear: 2010,
      genre: 'Ex',
      code: 'BOOK0674',
      isbn: '978-0-00-761504-9',
      language: 'Português',
      edition: '1ª',
      pages: 769,
      synopsis: `Et natus harum repellat. Nisi itaque aspernatur deleniti dolor vitae.`,
      coverUrl: 'https://www.lorempixel.com/49/86',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid totam.`,
      subtitle: null,
      author: `Sabrina Castro`,
      publisher: `da Rosa - EI`,
      publicationYear: 2013,
      genre: 'Distinctio',
      code: 'BOOK0675',
      isbn: '978-0-89304-616-3',
      language: 'Português',
      edition: '1ª',
      pages: 713,
      synopsis: `Minima illum magni provident quasi at repellendus. Ut ut aliquid expedita alias nihil.`,
      coverUrl: 'https://dummyimage.com/684x819',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam minima accusamus.`,
      subtitle: `Quaerat culpa a.`,
      author: `Maria Clara Correia`,
      publisher: `Porto`,
      publicationYear: 2023,
      genre: 'Dolor',
      code: 'BOOK0676',
      isbn: '978-1-356-40783-5',
      language: 'Português',
      edition: '1ª',
      pages: 365,
      synopsis: `Dolore quisquam nobis veritatis maxime nisi occaecati.`,
      coverUrl: 'https://placekitten.com/760/211',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptate non dignissimos.`,
      subtitle: `Tempora ea laboriosam natus velit.`,
      author: `Marcela Silva`,
      publisher: `Porto`,
      publicationYear: 1956,
      genre: 'Minima',
      code: 'BOOK0677',
      isbn: '978-1-71164-560-5',
      language: 'Português',
      edition: '3ª',
      pages: 469,
      synopsis: `Recusandae reprehenderit dignissimos esse unde at aliquid numquam. Distinctio ut accusamus adipisci expedita rerum. Incidunt quis distinctio quo provident laboriosam.`,
      coverUrl: 'https://dummyimage.com/495x37',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat porro.`,
      subtitle: null,
      author: `Ana Lívia da Cruz`,
      publisher: `Cavalcanti`,
      publicationYear: 1973,
      genre: 'Minima',
      code: 'BOOK0678',
      isbn: '978-1-201-24025-9',
      language: 'Português',
      edition: '1ª',
      pages: 713,
      synopsis: `Eum omnis voluptatum eos voluptatibus magni. Pariatur nesciunt mollitia.`,
      coverUrl: 'https://placeimg.com/427/1015/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Itaque maxime laboriosam est.`,
      subtitle: null,
      author: `João Vitor da Rosa`,
      publisher: `da Paz Ltda.`,
      publicationYear: 1995,
      genre: 'Expedita',
      code: 'BOOK0679',
      isbn: '978-0-00-914352-6',
      language: 'Português',
      edition: '2ª',
      pages: 113,
      synopsis: `Nulla dolorem accusantium porro quae. Ipsa necessitatibus vitae impedit. Impedit harum maiores libero deserunt. Maxime reiciendis culpa excepturi.`,
      coverUrl: 'https://placeimg.com/926/670/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `A consectetur.`,
      subtitle: `Consectetur tempore enim.`,
      author: `Dr. Vinicius Rezende`,
      publisher: `Cavalcanti`,
      publicationYear: 1969,
      genre: 'Ea',
      code: 'BOOK0680',
      isbn: '978-0-589-04182-3',
      language: 'Português',
      edition: '5ª',
      pages: 326,
      synopsis: `Excepturi impedit inventore. Reiciendis sed dolor consectetur minima eos eius. Alias nam reiciendis impedit eveniet labore nostrum repudiandae.`,
      coverUrl: 'https://placekitten.com/577/620',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusamus cum.`,
      subtitle: null,
      author: `Ryan da Costa`,
      publisher: `Teixeira`,
      publicationYear: 1952,
      genre: 'Quisquam',
      code: 'BOOK0681',
      isbn: '978-0-13-737145-7',
      language: 'Português',
      edition: '4ª',
      pages: 456,
      synopsis: `Velit saepe sit totam adipisci.`,
      coverUrl: 'https://placeimg.com/312/778/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nesciunt commodi ea commodi.`,
      subtitle: null,
      author: `Raul Oliveira`,
      publisher: `Nogueira S/A`,
      publicationYear: 1953,
      genre: 'Alias',
      code: 'BOOK0682',
      isbn: '978-1-189-11992-9',
      language: 'Português',
      edition: '1ª',
      pages: 327,
      synopsis: `Vero perspiciatis corporis esse laborum nam. Enim voluptas dolore aspernatur at. Maiores beatae similique sequi.`,
      coverUrl: 'https://www.lorempixel.com/212/639',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ullam possimus doloremque.`,
      subtitle: `Odio ipsam nesciunt a est.`,
      author: `Luiz Fernando Moreira`,
      publisher: `Almeida`,
      publicationYear: 1960,
      genre: 'Rem',
      code: 'BOOK0683',
      isbn: '978-0-671-48783-6',
      language: 'Português',
      edition: '4ª',
      pages: 214,
      synopsis: `Dicta ea rem. Earum labore veniam corrupti eveniet voluptate.`,
      coverUrl: 'https://placeimg.com/550/111/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ad dolor.`,
      subtitle: `Eaque nulla neque ullam minima.`,
      author: `Otávio Dias`,
      publisher: `Cavalcanti Dias - ME`,
      publicationYear: 2015,
      genre: 'Sint',
      code: 'BOOK0684',
      isbn: '978-0-264-10603-8',
      language: 'Português',
      edition: '5ª',
      pages: 160,
      synopsis: `Quis iste doloremque aperiam officia aliquid. Unde id assumenda saepe aspernatur voluptatum nobis.`,
      coverUrl: 'https://placeimg.com/680/604/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cumque dolorem.`,
      subtitle: `Harum enim aperiam.`,
      author: `Evelyn Silveira`,
      publisher: `Rezende`,
      publicationYear: 1951,
      genre: 'Sapiente',
      code: 'BOOK0685',
      isbn: '978-1-989484-81-4',
      language: 'Português',
      edition: '1ª',
      pages: 226,
      synopsis: `Tempore doloribus repellat. Voluptates ullam iste. A asperiores laborum veritatis similique officiis et.`,
      coverUrl: 'https://dummyimage.com/634x404',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Numquam.`,
      subtitle: null,
      author: `Ana Lívia Correia`,
      publisher: `Pires S/A`,
      publicationYear: 1953,
      genre: 'Rem',
      code: 'BOOK0686',
      isbn: '978-0-04-902144-0',
      language: 'Português',
      edition: '1ª',
      pages: 249,
      synopsis: `Velit repellat ex nihil. Eius doloremque pariatur maxime optio quas voluptates.`,
      coverUrl: 'https://dummyimage.com/701x766',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus autem.`,
      subtitle: `Repellendus quas facere.`,
      author: `Vitor Gabriel Caldeira`,
      publisher: `da Mata`,
      publicationYear: 2024,
      genre: 'Molestiae',
      code: 'BOOK0687',
      isbn: '978-1-361-97731-6',
      language: 'Português',
      edition: '1ª',
      pages: 641,
      synopsis: `Vero sit quis possimus culpa. Libero quam ut deserunt quia nam expedita. Fugiat eveniet optio saepe corrupti laboriosam repellat.`,
      coverUrl: 'https://placekitten.com/928/189',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus vero.`,
      subtitle: `Nemo ratione tempora laboriosam.`,
      author: `Joana Pires`,
      publisher: `Pinto S/A`,
      publicationYear: 1962,
      genre: 'Maiores',
      code: 'BOOK0688',
      isbn: '978-0-7357-9211-1',
      language: 'Português',
      edition: '2ª',
      pages: 616,
      synopsis: `Excepturi hic repellat nam. Vel fuga ea esse dignissimos. Modi nisi accusamus vel optio occaecati eveniet laborum.`,
      coverUrl: 'https://placekitten.com/472/486',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Labore saepe.`,
      subtitle: null,
      author: `Thiago Viana`,
      publisher: `Novaes`,
      publicationYear: 1998,
      genre: 'Reprehenderit',
      code: 'BOOK0689',
      isbn: '978-1-5290-5092-9',
      language: 'Português',
      edition: '4ª',
      pages: 319,
      synopsis: `Ab pariatur quos. Pariatur quibusdam assumenda eveniet. Impedit sapiente itaque natus.`,
      coverUrl: 'https://dummyimage.com/516x167',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sequi a.`,
      subtitle: `Maiores omnis deserunt sequi pariatur fugiat.`,
      author: `Mariane Barros`,
      publisher: `Rocha`,
      publicationYear: 1964,
      genre: 'Debitis',
      code: 'BOOK0690',
      isbn: '978-0-10-448177-6',
      language: 'Português',
      edition: '5ª',
      pages: 239,
      synopsis: `Occaecati impedit tempore facilis et. Architecto consequuntur voluptates quo minus consequatur. Accusantium distinctio aspernatur quas. Reprehenderit commodi fugit odit occaecati quaerat.`,
      coverUrl: 'https://dummyimage.com/59x318',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea blanditiis occaecati.`,
      subtitle: `Dolores magni et numquam nihil impedit.`,
      author: `Larissa Freitas`,
      publisher: `Farias S.A.`,
      publicationYear: 1999,
      genre: 'Et',
      code: 'BOOK0691',
      isbn: '978-0-252-82671-9',
      language: 'Português',
      edition: '3ª',
      pages: 567,
      synopsis: `Suscipit dolores nesciunt non numquam eum. Vel est tenetur impedit.`,
      coverUrl: 'https://placekitten.com/526/528',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eius vero reiciendis.`,
      subtitle: `Inventore provident molestiae magni sit sunt asperiores.`,
      author: `Enzo Gabriel Barbosa`,
      publisher: `Fernandes`,
      publicationYear: 1958,
      genre: 'Alias',
      code: 'BOOK0692',
      isbn: '978-1-877155-59-8',
      language: 'Português',
      edition: '4ª',
      pages: 795,
      synopsis: `Praesentium cumque laboriosam laboriosam non cupiditate. Neque porro accusamus quas veritatis veritatis.`,
      coverUrl: 'https://www.lorempixel.com/958/344',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Debitis quam id.`,
      subtitle: `Dolor deleniti magni.`,
      author: `Luiz Otávio Almeida`,
      publisher: `Lopes Monteiro e Filhos`,
      publicationYear: 1960,
      genre: 'Sit',
      code: 'BOOK0693',
      isbn: '978-1-379-39579-9',
      language: 'Português',
      edition: '1ª',
      pages: 246,
      synopsis: `Architecto vitae repellendus ducimus iste placeat. Aperiam perferendis voluptates vitae. Accusamus quae incidunt vero hic officiis sint.`,
      coverUrl: 'https://dummyimage.com/213x211',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veniam eos sed.`,
      subtitle: null,
      author: `Emanuel Araújo`,
      publisher: `Viana S/A`,
      publicationYear: 1993,
      genre: 'Magni',
      code: 'BOOK0694',
      isbn: '978-0-08-292482-1',
      language: 'Português',
      edition: '2ª',
      pages: 709,
      synopsis: `Dolore tenetur sint reiciendis aliquam iusto quaerat. Dicta cupiditate ipsam quaerat voluptatem quis enim. Corrupti a consequatur aperiam ipsum ad.`,
      coverUrl: 'https://placeimg.com/604/282/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repudiandae architecto.`,
      subtitle: null,
      author: `Raquel da Cruz`,
      publisher: `Pinto`,
      publicationYear: 2024,
      genre: 'Eos',
      code: 'BOOK0695',
      isbn: '978-1-129-55510-7',
      language: 'Português',
      edition: '5ª',
      pages: 379,
      synopsis: `Suscipit adipisci beatae esse modi ducimus.`,
      coverUrl: 'https://placeimg.com/263/263/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dignissimos aliquid.`,
      subtitle: `In voluptatum consequatur dolores.`,
      author: `Davi Lucas Souza`,
      publisher: `Almeida da Mota e Filhos`,
      publicationYear: 2008,
      genre: 'Fugit',
      code: 'BOOK0696',
      isbn: '978-1-375-39169-6',
      language: 'Português',
      edition: '1ª',
      pages: 225,
      synopsis: `Adipisci non sit quae dolore in tempore. Nostrum saepe iusto perspiciatis ab dignissimos.`,
      coverUrl: 'https://placekitten.com/2/520',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tenetur aperiam.`,
      subtitle: null,
      author: `João Pedro Castro`,
      publisher: `Novaes`,
      publicationYear: 1958,
      genre: 'Fuga',
      code: 'BOOK0697',
      isbn: '978-0-08-445801-0',
      language: 'Português',
      edition: '4ª',
      pages: 794,
      synopsis: `Laudantium error neque impedit. Maiores nesciunt eos blanditiis. Et accusantium non.`,
      coverUrl: 'https://www.lorempixel.com/835/851',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi saepe.`,
      subtitle: null,
      author: `Sra. Isadora da Cruz`,
      publisher: `da Cruz Cunha e Filhos`,
      publicationYear: 1962,
      genre: 'Quod',
      code: 'BOOK0698',
      isbn: '978-1-883774-35-6',
      language: 'Português',
      edition: '1ª',
      pages: 776,
      synopsis: `Veritatis sed esse voluptatum. Vel quia perspiciatis nisi.`,
      coverUrl: 'https://www.lorempixel.com/95/218',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam quod.`,
      subtitle: null,
      author: `Dr. Luiz Fernando Pinto`,
      publisher: `Rezende Porto e Filhos`,
      publicationYear: 2019,
      genre: 'Quisquam',
      code: 'BOOK0699',
      isbn: '978-1-03-174890-1',
      language: 'Português',
      edition: '3ª',
      pages: 653,
      synopsis: `Ducimus vitae rem. Tempora magni provident nihil blanditiis molestiae architecto.`,
      coverUrl: 'https://dummyimage.com/633x268',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus dolore vero eveniet.`,
      subtitle: `Optio facilis sunt aliquid.`,
      author: `Sra. Maria Fernanda Oliveira`,
      publisher: `Martins`,
      publicationYear: 1998,
      genre: 'Numquam',
      code: 'BOOK0700',
      isbn: '978-0-13-798304-9',
      language: 'Português',
      edition: '4ª',
      pages: 570,
      synopsis: `Illum consequuntur soluta eveniet sint aut voluptatum. Mollitia voluptatem sed. Necessitatibus tenetur aliquam quidem soluta omnis vitae.`,
      coverUrl: 'https://dummyimage.com/371x238',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugiat maxime.`,
      subtitle: `Aperiam totam deserunt itaque perspiciatis.`,
      author: `Cauê Santos`,
      publisher: `Almeida Sales Ltda.`,
      publicationYear: 1989,
      genre: 'Molestias',
      code: 'BOOK0701',
      isbn: '978-0-399-79927-3',
      language: 'Português',
      edition: '4ª',
      pages: 599,
      synopsis: `Possimus vel totam sequi dolore maxime. Quibusdam sunt perspiciatis sunt corporis facilis odit.`,
      coverUrl: 'https://placekitten.com/812/214',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas iusto.`,
      subtitle: null,
      author: `Srta. Ana Beatriz Alves`,
      publisher: `Ribeiro S.A.`,
      publicationYear: 2000,
      genre: 'Praesentium',
      code: 'BOOK0702',
      isbn: '978-1-4574-4410-4',
      language: 'Português',
      edition: '3ª',
      pages: 606,
      synopsis: `Neque repudiandae quia consequatur odit unde. Omnis error iste explicabo necessitatibus. Adipisci reiciendis ea exercitationem officiis maiores.`,
      coverUrl: 'https://placeimg.com/674/110/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Provident nemo inventore magni.`,
      subtitle: `Ipsum quidem ullam libero impedit.`,
      author: `Ana Julia Nascimento`,
      publisher: `Souza`,
      publicationYear: 1955,
      genre: 'Ipsa',
      code: 'BOOK0703',
      isbn: '978-1-07-307177-7',
      language: 'Português',
      edition: '2ª',
      pages: 475,
      synopsis: `Sunt placeat similique et. Odit a magni. Harum culpa deleniti quaerat magnam.`,
      coverUrl: 'https://dummyimage.com/578x27',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illum nesciunt.`,
      subtitle: `Consectetur mollitia placeat aliquam deleniti.`,
      author: `Vitor Hugo Cunha`,
      publisher: `Lopes`,
      publicationYear: 1995,
      genre: 'Eius',
      code: 'BOOK0704',
      isbn: '978-1-355-14972-9',
      language: 'Português',
      edition: '4ª',
      pages: 459,
      synopsis: `Porro deleniti voluptas doloribus laboriosam asperiores incidunt nostrum. Nesciunt quae et.`,
      coverUrl: 'https://www.lorempixel.com/705/924',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias illum.`,
      subtitle: null,
      author: `Eloah Cardoso`,
      publisher: `Peixoto Lima Ltda.`,
      publicationYear: 1958,
      genre: 'Magni',
      code: 'BOOK0705',
      isbn: '978-1-61218-939-0',
      language: 'Português',
      edition: '3ª',
      pages: 217,
      synopsis: `Labore quasi quos sapiente. Adipisci quasi aut corrupti sit temporibus.`,
      coverUrl: 'https://placekitten.com/485/54',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos in possimus.`,
      subtitle: null,
      author: `Raul Almeida`,
      publisher: `Moura`,
      publicationYear: 2004,
      genre: 'Maxime',
      code: 'BOOK0706',
      isbn: '978-1-950263-56-1',
      language: 'Português',
      edition: '5ª',
      pages: 627,
      synopsis: `Libero quisquam non perferendis ullam dolor officia.`,
      coverUrl: 'https://dummyimage.com/999x839',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam aperiam perspiciatis.`,
      subtitle: null,
      author: `Alícia Araújo`,
      publisher: `Farias Nunes - EI`,
      publicationYear: 1991,
      genre: 'Minus',
      code: 'BOOK0707',
      isbn: '978-1-902220-97-0',
      language: 'Português',
      edition: '5ª',
      pages: 200,
      synopsis: `Perspiciatis id itaque non inventore vel. Ad quam vero perspiciatis cupiditate animi nesciunt. Ducimus nostrum itaque nobis tempora.`,
      coverUrl: 'https://dummyimage.com/234x783',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia deserunt.`,
      subtitle: null,
      author: `Vitor Gabriel Dias`,
      publisher: `da Cruz - EI`,
      publicationYear: 1993,
      genre: 'Minus',
      code: 'BOOK0708',
      isbn: '978-0-05-307122-6',
      language: 'Português',
      edition: '2ª',
      pages: 729,
      synopsis: `Sint tempore commodi. Magni officiis ipsam eius. Quod et nulla eum quasi modi ipsam.`,
      coverUrl: 'https://www.lorempixel.com/341/297',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deserunt culpa optio.`,
      subtitle: `Vero voluptatem cumque.`,
      author: `Maria Clara Barros`,
      publisher: `Ferreira`,
      publicationYear: 1983,
      genre: 'Nesciunt',
      code: 'BOOK0709',
      isbn: '978-1-895247-60-2',
      language: 'Português',
      edition: '1ª',
      pages: 404,
      synopsis: `Repellendus reprehenderit officia suscipit veritatis ipsam. Ducimus repellendus exercitationem facere dolor mollitia possimus iusto. Temporibus ea ipsam repellat praesentium earum et.`,
      coverUrl: 'https://www.lorempixel.com/958/938',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Assumenda temporibus maiores.`,
      subtitle: `Iste ullam molestias culpa minima recusandae.`,
      author: `Luiz Gustavo da Conceição`,
      publisher: `Cardoso`,
      publicationYear: 2022,
      genre: 'Voluptatum',
      code: 'BOOK0710',
      isbn: '978-1-170-05371-3',
      language: 'Português',
      edition: '5ª',
      pages: 586,
      synopsis: `Alias harum quaerat molestiae ab dicta. Fugiat voluptatum voluptas neque facilis aperiam. Nesciunt deleniti commodi cupiditate quis ea nam.`,
      coverUrl: 'https://placekitten.com/739/487',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Assumenda id.`,
      subtitle: null,
      author: `Bruno Cardoso`,
      publisher: `Aragão`,
      publicationYear: 1988,
      genre: 'Quasi',
      code: 'BOOK0711',
      isbn: '978-0-17-086715-3',
      language: 'Português',
      edition: '4ª',
      pages: 779,
      synopsis: `Laboriosam officiis quam. Iusto eligendi eligendi dolore.`,
      coverUrl: 'https://placeimg.com/763/906/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Praesentium officia eos.`,
      subtitle: `Pariatur eveniet architecto.`,
      author: `Murilo Almeida`,
      publisher: `Ribeiro S/A`,
      publicationYear: 2020,
      genre: 'Corrupti',
      code: 'BOOK0712',
      isbn: '978-1-02-050254-5',
      language: 'Português',
      edition: '2ª',
      pages: 119,
      synopsis: `Cum quis occaecati provident nulla adipisci accusamus. Nulla suscipit facilis numquam. Labore officiis perferendis omnis similique ex dolorem nobis.`,
      coverUrl: 'https://placekitten.com/658/924',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rerum cumque.`,
      subtitle: `Fugit perspiciatis nulla.`,
      author: `Sra. Natália da Cunha`,
      publisher: `Gomes S/A`,
      publicationYear: 2018,
      genre: 'Necessitatibus',
      code: 'BOOK0713',
      isbn: '978-0-537-40513-4',
      language: 'Português',
      edition: '5ª',
      pages: 544,
      synopsis: `Vel voluptatem quisquam sit ratione recusandae hic. Quo placeat ipsum modi quia tempore quisquam.`,
      coverUrl: 'https://placekitten.com/9/655',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam repellat itaque.`,
      subtitle: `Omnis reiciendis maxime nostrum hic magni.`,
      author: `Gabriel Azevedo`,
      publisher: `da Rosa Ltda.`,
      publicationYear: 1980,
      genre: 'Provident',
      code: 'BOOK0714',
      isbn: '978-0-405-74450-1',
      language: 'Português',
      edition: '2ª',
      pages: 407,
      synopsis: `Neque ipsa delectus fugiat doloribus corporis ipsam nihil. Temporibus at vitae tenetur. Fuga possimus architecto modi illum incidunt maiores.`,
      coverUrl: 'https://dummyimage.com/658x455',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloribus repudiandae.`,
      subtitle: null,
      author: `Ana Vitória Santos`,
      publisher: `Barros Ramos e Filhos`,
      publicationYear: 1970,
      genre: 'Voluptate',
      code: 'BOOK0715',
      isbn: '978-1-80022-642-5',
      language: 'Português',
      edition: '3ª',
      pages: 715,
      synopsis: `Voluptas libero ut ab sed eos repudiandae reprehenderit. Sit unde ullam molestias aut non voluptas. Iusto placeat non molestiae ipsum.`,
      coverUrl: 'https://placekitten.com/791/10',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nesciunt vel.`,
      subtitle: `Laboriosam molestias dolorum.`,
      author: `Vitória da Mata`,
      publisher: `Ferreira - ME`,
      publicationYear: 1989,
      genre: 'Beatae',
      code: 'BOOK0716',
      isbn: '978-0-7580-4529-4',
      language: 'Português',
      edition: '4ª',
      pages: 597,
      synopsis: `Ipsum velit incidunt ullam maxime nulla. Voluptatibus minima velit ex eius maiores sunt quis.`,
      coverUrl: 'https://placekitten.com/141/482',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Cum.`,
      subtitle: `Unde consequatur vel voluptatibus voluptates impedit.`,
      author: `Ryan Melo`,
      publisher: `da Mata`,
      publicationYear: 1953,
      genre: 'Voluptatem',
      code: 'BOOK0717',
      isbn: '978-1-193-46389-6',
      language: 'Português',
      edition: '3ª',
      pages: 384,
      synopsis: `Corrupti eius voluptate enim.`,
      coverUrl: 'https://dummyimage.com/603x980',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quaerat pariatur illum.`,
      subtitle: null,
      author: `João Guilherme Oliveira`,
      publisher: `Cunha`,
      publicationYear: 1960,
      genre: 'Voluptatibus',
      code: 'BOOK0718',
      isbn: '978-0-07-065948-3',
      language: 'Português',
      edition: '3ª',
      pages: 716,
      synopsis: `Voluptas aut alias provident ipsum unde.`,
      coverUrl: 'https://www.lorempixel.com/494/508',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe vero.`,
      subtitle: null,
      author: `Pietro Rodrigues`,
      publisher: `Teixeira - ME`,
      publicationYear: 1967,
      genre: 'Tempora',
      code: 'BOOK0719',
      isbn: '978-1-4756-3112-8',
      language: 'Português',
      edition: '2ª',
      pages: 214,
      synopsis: `Distinctio praesentium laudantium sed. Temporibus molestiae reiciendis temporibus impedit eum sunt. Numquam magni maiores fugiat explicabo eveniet. Aspernatur ut cumque sequi perspiciatis.`,
      coverUrl: 'https://dummyimage.com/360x693',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vel totam.`,
      subtitle: `Provident fugit nesciunt tenetur et veritatis.`,
      author: `João Pedro Souza`,
      publisher: `da Luz`,
      publicationYear: 1961,
      genre: 'Quidem',
      code: 'BOOK0720',
      isbn: '978-1-70520-313-2',
      language: 'Português',
      edition: '2ª',
      pages: 714,
      synopsis: `Molestiae sint itaque recusandae quidem cumque quia ullam. Sint velit minima voluptatem consectetur.`,
      coverUrl: 'https://placeimg.com/906/984/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Incidunt molestiae.`,
      subtitle: `Delectus corporis iure fugiat adipisci.`,
      author: `Davi Lucas Almeida`,
      publisher: `Porto`,
      publicationYear: 1972,
      genre: 'Ratione',
      code: 'BOOK0721',
      isbn: '978-1-71062-833-3',
      language: 'Português',
      edition: '2ª',
      pages: 381,
      synopsis: `Repellendus quidem voluptatem odio fuga doloribus. Cupiditate veritatis consectetur rem saepe libero.`,
      coverUrl: 'https://placekitten.com/74/114',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio minus provident.`,
      subtitle: null,
      author: `Clara Caldeira`,
      publisher: `Rezende das Neves e Filhos`,
      publicationYear: 1964,
      genre: 'Tempora',
      code: 'BOOK0722',
      isbn: '978-0-85704-240-8',
      language: 'Português',
      edition: '3ª',
      pages: 658,
      synopsis: `Exercitationem enim illum nobis ratione placeat. Recusandae tempora voluptatem officiis eos aut labore nam.`,
      coverUrl: 'https://placeimg.com/141/736/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Id officia.`,
      subtitle: `Minus sapiente voluptates exercitationem.`,
      author: `Alana Jesus`,
      publisher: `Silva`,
      publicationYear: 1997,
      genre: 'Velit',
      code: 'BOOK0723',
      isbn: '978-1-7332291-2-8',
      language: 'Português',
      edition: '3ª',
      pages: 121,
      synopsis: `Nobis explicabo iure porro adipisci omnis incidunt. Dolores nostrum velit nesciunt.`,
      coverUrl: 'https://placeimg.com/571/326/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci impedit.`,
      subtitle: `Nisi dignissimos assumenda velit aliquid similique.`,
      author: `Murilo Silva`,
      publisher: `Costa S.A.`,
      publicationYear: 1996,
      genre: 'Quae',
      code: 'BOOK0724',
      isbn: '978-0-628-33568-5',
      language: 'Português',
      edition: '1ª',
      pages: 647,
      synopsis: `Eum suscipit quod. Alias perferendis veniam facilis. Dignissimos eius repellat eveniet itaque. Odio ipsum cumque quisquam.`,
      coverUrl: 'https://placeimg.com/145/652/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Non optio facilis.`,
      subtitle: `Pariatur eos vero excepturi exercitationem necessitatibus.`,
      author: `Sr. Joaquim Martins`,
      publisher: `Nogueira Cunha - EI`,
      publicationYear: 1980,
      genre: 'Voluptatum',
      code: 'BOOK0725',
      isbn: '978-1-148-54183-9',
      language: 'Português',
      edition: '3ª',
      pages: 315,
      synopsis: `Velit porro consectetur sequi tempore corporis. Velit tempora quo officia. Cum quis hic et soluta nostrum quae. Error tenetur laudantium quae.`,
      coverUrl: 'https://www.lorempixel.com/654/305',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquam rem.`,
      subtitle: null,
      author: `Lucas Nogueira`,
      publisher: `Rezende`,
      publicationYear: 2012,
      genre: 'Eligendi',
      code: 'BOOK0726',
      isbn: '978-0-403-53212-4',
      language: 'Português',
      edition: '4ª',
      pages: 522,
      synopsis: `Ab praesentium nesciunt voluptatum ipsa. Officia recusandae ad dolorum debitis.`,
      coverUrl: 'https://placekitten.com/181/79',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Explicabo nemo.`,
      subtitle: `Necessitatibus provident eligendi repellendus non ducimus.`,
      author: `Pietro Duarte`,
      publisher: `Martins Jesus - ME`,
      publicationYear: 2020,
      genre: 'Accusamus',
      code: 'BOOK0727',
      isbn: '978-0-13-434857-5',
      language: 'Português',
      edition: '3ª',
      pages: 564,
      synopsis: `Dolor quisquam numquam porro tempora. Molestias assumenda laudantium enim consectetur quisquam.`,
      coverUrl: 'https://dummyimage.com/308x53',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Assumenda possimus dignissimos assumenda.`,
      subtitle: `Aliquam enim similique natus.`,
      author: `Pedro Henrique Souza`,
      publisher: `Viana e Filhos`,
      publicationYear: 1989,
      genre: 'Quia',
      code: 'BOOK0728',
      isbn: '978-1-64523-191-2',
      language: 'Português',
      edition: '3ª',
      pages: 689,
      synopsis: `Alias culpa perferendis deleniti hic natus repellendus dignissimos. Vero doloremque inventore similique id amet. Voluptate quae possimus architecto laborum.`,
      coverUrl: 'https://www.lorempixel.com/23/445',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae magni quis enim.`,
      subtitle: null,
      author: `Sr. Carlos Eduardo Duarte`,
      publisher: `da Cruz Aragão S.A.`,
      publicationYear: 1966,
      genre: 'Fugit',
      code: 'BOOK0729',
      isbn: '978-1-60714-876-0',
      language: 'Português',
      edition: '5ª',
      pages: 520,
      synopsis: `Repudiandae libero expedita provident. Provident officiis corrupti asperiores fugiat quia. Hic saepe optio vero.`,
      coverUrl: 'https://www.lorempixel.com/157/190',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quo porro ipsa.`,
      subtitle: null,
      author: `Diogo Nascimento`,
      publisher: `Caldeira Pereira - ME`,
      publicationYear: 1975,
      genre: 'Officiis',
      code: 'BOOK0730',
      isbn: '978-0-599-46966-2',
      language: 'Português',
      edition: '1ª',
      pages: 524,
      synopsis: `Similique consequatur quisquam dolor itaque. Laudantium quia et. Quos neque sint. Earum aliquid in dolorum.`,
      coverUrl: 'https://dummyimage.com/442x610',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus.`,
      subtitle: `Suscipit quod eos sunt molestiae.`,
      author: `Maria Clara da Mota`,
      publisher: `Farias Rezende Ltda.`,
      publicationYear: 1952,
      genre: 'Sapiente',
      code: 'BOOK0731',
      isbn: '978-1-228-58258-5',
      language: 'Português',
      edition: '5ª',
      pages: 762,
      synopsis: `Explicabo voluptatum beatae nulla beatae. Veritatis quos vitae ullam maxime cumque quibusdam. Libero natus dignissimos quae deserunt soluta.`,
      coverUrl: 'https://dummyimage.com/394x297',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusantium ducimus doloremque.`,
      subtitle: null,
      author: `Leonardo Moreira`,
      publisher: `Oliveira`,
      publicationYear: 1971,
      genre: 'Nihil',
      code: 'BOOK0732',
      isbn: '978-1-74163-712-0',
      language: 'Português',
      edition: '1ª',
      pages: 510,
      synopsis: `Dolorem itaque exercitationem cumque ipsam id.`,
      coverUrl: 'https://placekitten.com/249/532',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error maiores beatae.`,
      subtitle: null,
      author: `Fernando Cardoso`,
      publisher: `Pires`,
      publicationYear: 1971,
      genre: 'Dolorum',
      code: 'BOOK0733',
      isbn: '978-1-361-16861-5',
      language: 'Português',
      edition: '5ª',
      pages: 220,
      synopsis: `Harum adipisci dicta fugiat at. Cumque quibusdam ad ex excepturi occaecati fugiat expedita.`,
      coverUrl: 'https://placeimg.com/528/359/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas fugit quidem.`,
      subtitle: null,
      author: `Luiz Felipe Porto`,
      publisher: `Fogaça S/A`,
      publicationYear: 1974,
      genre: 'Eius',
      code: 'BOOK0734',
      isbn: '978-1-5459-5660-1',
      language: 'Português',
      edition: '3ª',
      pages: 394,
      synopsis: `Voluptatibus sed at veritatis officia.`,
      coverUrl: 'https://placeimg.com/281/311/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero voluptas.`,
      subtitle: `Reiciendis iusto eaque commodi aut.`,
      author: `Sra. Sofia da Rocha`,
      publisher: `Souza`,
      publicationYear: 1986,
      genre: 'Eveniet',
      code: 'BOOK0735',
      isbn: '978-0-9570934-0-9',
      language: 'Português',
      edition: '2ª',
      pages: 528,
      synopsis: `Assumenda placeat tenetur alias beatae deleniti rem. Sequi quidem veniam dolores repellendus. Dolorum earum sit vero repellat alias porro cupiditate. Unde ex optio excepturi quae esse debitis.`,
      coverUrl: 'https://placekitten.com/727/522',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quibusdam incidunt eveniet consequuntur.`,
      subtitle: null,
      author: `Vicente Ribeiro`,
      publisher: `Pinto`,
      publicationYear: 1981,
      genre: 'Delectus',
      code: 'BOOK0736',
      isbn: '978-1-280-01617-2',
      language: 'Português',
      edition: '3ª',
      pages: 696,
      synopsis: `Esse neque quos possimus eum. Doloremque perferendis repellendus quae.`,
      coverUrl: 'https://placeimg.com/466/332/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tenetur maiores.`,
      subtitle: null,
      author: `Raquel Carvalho`,
      publisher: `Barros S/A`,
      publicationYear: 2000,
      genre: 'Numquam',
      code: 'BOOK0737',
      isbn: '978-1-81294-576-5',
      language: 'Português',
      edition: '2ª',
      pages: 492,
      synopsis: `Aliquam earum voluptatum veniam necessitatibus. Eligendi praesentium sequi cupiditate provident odio suscipit.`,
      coverUrl: 'https://placekitten.com/502/641',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ratione suscipit.`,
      subtitle: null,
      author: `Catarina da Rosa`,
      publisher: `da Cunha`,
      publicationYear: 2010,
      genre: 'Veniam',
      code: 'BOOK0738',
      isbn: '978-1-67981-302-3',
      language: 'Português',
      edition: '3ª',
      pages: 720,
      synopsis: `Fugiat odio veritatis iusto repudiandae exercitationem. Consectetur quas voluptates saepe sint vero vero. Ratione eius ut vel laborum nemo blanditiis.`,
      coverUrl: 'https://www.lorempixel.com/853/244',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut ducimus.`,
      subtitle: `Quae aspernatur aut nesciunt magnam.`,
      author: `Vitor Hugo Ramos`,
      publisher: `Jesus`,
      publicationYear: 2000,
      genre: 'Doloribus',
      code: 'BOOK0739',
      isbn: '978-1-388-52377-0',
      language: 'Português',
      edition: '3ª',
      pages: 235,
      synopsis: `Perferendis voluptas libero a iusto natus commodi. Excepturi cupiditate ut culpa.`,
      coverUrl: 'https://dummyimage.com/63x334',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam voluptas animi.`,
      subtitle: `Pariatur illum accusantium molestiae facere.`,
      author: `Srta. Maria Clara da Rosa`,
      publisher: `Ramos`,
      publicationYear: 2013,
      genre: 'At',
      code: 'BOOK0740',
      isbn: '978-1-68210-037-0',
      language: 'Português',
      edition: '3ª',
      pages: 579,
      synopsis: `Sapiente accusantium aliquid doloribus maxime aperiam occaecati quibusdam.`,
      coverUrl: 'https://dummyimage.com/853x890',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias reiciendis.`,
      subtitle: `Necessitatibus suscipit maiores.`,
      author: `Luiz Fernando Fogaça`,
      publisher: `Pinto Rodrigues e Filhos`,
      publicationYear: 1990,
      genre: 'Incidunt',
      code: 'BOOK0741',
      isbn: '978-1-296-50744-2',
      language: 'Português',
      edition: '1ª',
      pages: 230,
      synopsis: `Et consequatur iusto facere eius quo. Cum aut voluptatum earum labore expedita similique. Deserunt ex consequatur.`,
      coverUrl: 'https://dummyimage.com/305x124',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptate id voluptatibus.`,
      subtitle: null,
      author: `Benício da Rosa`,
      publisher: `Nogueira Fernandes Ltda.`,
      publicationYear: 2005,
      genre: 'Dolores',
      code: 'BOOK0742',
      isbn: '978-1-330-90740-5',
      language: 'Português',
      edition: '2ª',
      pages: 423,
      synopsis: `Ex inventore exercitationem officia earum. Quia facilis commodi provident dicta quis. Nisi ad quam facere saepe distinctio quam.`,
      coverUrl: 'https://dummyimage.com/835x427',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laudantium dolorem.`,
      subtitle: `Consectetur minus explicabo id.`,
      author: `Daniela Rezende`,
      publisher: `das Neves Sales e Filhos`,
      publicationYear: 1979,
      genre: 'Dolorum',
      code: 'BOOK0743',
      isbn: '978-1-931033-70-1',
      language: 'Português',
      edition: '2ª',
      pages: 136,
      synopsis: `Possimus est omnis dolorum tempore dignissimos ipsum.`,
      coverUrl: 'https://dummyimage.com/547x404',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit deserunt.`,
      subtitle: `Odio modi repellat.`,
      author: `Luiz Otávio Freitas`,
      publisher: `Nunes`,
      publicationYear: 1995,
      genre: 'Tempora',
      code: 'BOOK0744',
      isbn: '978-0-578-04737-9',
      language: 'Português',
      edition: '5ª',
      pages: 596,
      synopsis: `Minima quae numquam quibusdam porro beatae veniam necessitatibus. Molestiae tempora officiis harum fuga provident.`,
      coverUrl: 'https://dummyimage.com/629x619',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Facilis pariatur.`,
      subtitle: `Recusandae iure pariatur ipsa adipisci dignissimos.`,
      author: `Pedro Lucas Porto`,
      publisher: `Pereira Silveira - EI`,
      publicationYear: 1986,
      genre: 'Magni',
      code: 'BOOK0745',
      isbn: '978-1-288-39039-7',
      language: 'Português',
      edition: '2ª',
      pages: 272,
      synopsis: `Tenetur iusto totam perferendis similique perspiciatis aspernatur fuga. Cumque nisi fugiat neque perferendis. Reiciendis quod perspiciatis quas consectetur accusamus.`,
      coverUrl: 'https://placeimg.com/892/889/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus.`,
      subtitle: `Dolore error impedit atque error.`,
      author: `Maria Julia Teixeira`,
      publisher: `Farias`,
      publicationYear: 1959,
      genre: 'Dicta',
      code: 'BOOK0746',
      isbn: '978-0-03-852427-3',
      language: 'Português',
      edition: '2ª',
      pages: 610,
      synopsis: `Corrupti eveniet necessitatibus id. Eos nemo voluptates dolorem nobis nostrum. Enim dicta natus eum quia impedit ipsa optio.`,
      coverUrl: 'https://www.lorempixel.com/753/406',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Animi laudantium adipisci.`,
      subtitle: null,
      author: `Vicente Carvalho`,
      publisher: `da Conceição e Filhos`,
      publicationYear: 1963,
      genre: 'Omnis',
      code: 'BOOK0747',
      isbn: '978-1-63256-732-1',
      language: 'Português',
      edition: '3ª',
      pages: 257,
      synopsis: `Eligendi magnam eaque distinctio voluptatem. Pariatur a atque commodi nobis esse.`,
      coverUrl: 'https://www.lorempixel.com/882/811',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dignissimos similique culpa.`,
      subtitle: null,
      author: `Heitor Porto`,
      publisher: `Ribeiro Silva Ltda.`,
      publicationYear: 1950,
      genre: 'Sint',
      code: 'BOOK0748',
      isbn: '978-1-176-09093-4',
      language: 'Português',
      edition: '3ª',
      pages: 144,
      synopsis: `Ullam eos vel provident. Odit nam accusamus expedita laudantium doloribus. In vero saepe ducimus laudantium.`,
      coverUrl: 'https://placeimg.com/437/478/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sunt quia ratione.`,
      subtitle: null,
      author: `Sra. Ana Santos`,
      publisher: `Melo - ME`,
      publicationYear: 1986,
      genre: 'Nostrum',
      code: 'BOOK0749',
      isbn: '978-0-8378-4771-9',
      language: 'Português',
      edition: '3ª',
      pages: 156,
      synopsis: `Ullam molestiae dolores ipsum doloribus eaque aliquam. Magni nulla magnam hic quia animi. Aliquid similique officia repudiandae harum. Rem veritatis cumque ut error soluta.`,
      coverUrl: 'https://placeimg.com/733/514/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ex voluptatum delectus aut.`,
      subtitle: null,
      author: `Dr. Arthur Duarte`,
      publisher: `Campos`,
      publicationYear: 2001,
      genre: 'Ab',
      code: 'BOOK0750',
      isbn: '978-0-546-94660-4',
      language: 'Português',
      edition: '1ª',
      pages: 121,
      synopsis: `Rem distinctio illo ipsam itaque quasi nesciunt omnis. Incidunt delectus blanditiis excepturi.`,
      coverUrl: 'https://placekitten.com/486/829',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia illum magnam.`,
      subtitle: `Odit temporibus aliquid.`,
      author: `Cauã Lopes`,
      publisher: `da Rosa da Rosa Ltda.`,
      publicationYear: 2012,
      genre: 'Delectus',
      code: 'BOOK0751',
      isbn: '978-1-01-385500-9',
      language: 'Português',
      edition: '4ª',
      pages: 417,
      synopsis: `Excepturi sequi deserunt maxime autem soluta adipisci delectus. Repellat sequi atque molestiae tenetur.`,
      coverUrl: 'https://www.lorempixel.com/112/788',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos necessitatibus neque deleniti.`,
      subtitle: `Numquam quam alias explicabo blanditiis.`,
      author: `Raul das Neves`,
      publisher: `Teixeira`,
      publicationYear: 1999,
      genre: 'Nulla',
      code: 'BOOK0752',
      isbn: '978-1-71708-049-3',
      language: 'Português',
      edition: '4ª',
      pages: 374,
      synopsis: `Sed provident quibusdam veniam sed tenetur veritatis sed. Accusantium ullam praesentium nobis assumenda vitae.`,
      coverUrl: 'https://dummyimage.com/450x425',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quis eius.`,
      subtitle: `Cum consequatur natus velit quo.`,
      author: `Augusto Barros`,
      publisher: `Rocha Cardoso - ME`,
      publicationYear: 2004,
      genre: 'Possimus',
      code: 'BOOK0753',
      isbn: '978-1-62748-066-6',
      language: 'Português',
      edition: '1ª',
      pages: 141,
      synopsis: `Porro tempore voluptatem temporibus. Quam officiis totam voluptatum.`,
      coverUrl: 'https://placeimg.com/758/150/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laudantium at beatae.`,
      subtitle: `Inventore rerum aperiam aspernatur commodi quas.`,
      author: `Rafaela Dias`,
      publisher: `da Paz Caldeira S.A.`,
      publicationYear: 2005,
      genre: 'Itaque',
      code: 'BOOK0754',
      isbn: '978-1-920623-14-2',
      language: 'Português',
      edition: '1ª',
      pages: 589,
      synopsis: `Inventore omnis magnam non sed autem accusantium nesciunt. Odio necessitatibus illo molestias vitae facere. Cum aperiam quidem sapiente recusandae ab.`,
      coverUrl: 'https://placekitten.com/250/829',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit suscipit.`,
      subtitle: `Ducimus quia rem.`,
      author: `Marcelo Cardoso`,
      publisher: `Cavalcanti`,
      publicationYear: 1956,
      genre: 'Facere',
      code: 'BOOK0755',
      isbn: '978-0-469-54495-6',
      language: 'Português',
      edition: '5ª',
      pages: 178,
      synopsis: `Accusamus perspiciatis sed ex tenetur magnam.`,
      coverUrl: 'https://placeimg.com/847/269/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Excepturi inventore.`,
      subtitle: `Dolore nulla molestias rerum nemo aliquam.`,
      author: `Danilo Freitas`,
      publisher: `Lima S.A.`,
      publicationYear: 2022,
      genre: 'Vel',
      code: 'BOOK0756',
      isbn: '978-1-957762-53-1',
      language: 'Português',
      edition: '3ª',
      pages: 463,
      synopsis: `Enim illo hic assumenda nobis exercitationem aliquid. Vel voluptas libero minima occaecati commodi. Perferendis fugiat maxime nesciunt accusamus. Consectetur rem vero assumenda quis harum.`,
      coverUrl: 'https://www.lorempixel.com/817/891',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Est minima.`,
      subtitle: null,
      author: `João Vieira`,
      publisher: `Rocha`,
      publicationYear: 2009,
      genre: 'Totam',
      code: 'BOOK0757',
      isbn: '978-0-656-27740-7',
      language: 'Português',
      edition: '2ª',
      pages: 286,
      synopsis: `Tempore reprehenderit libero consequatur. Quaerat corporis corporis debitis.`,
      coverUrl: 'https://dummyimage.com/415x696',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repudiandae hic alias.`,
      subtitle: null,
      author: `Giovanna Silveira`,
      publisher: `Nogueira`,
      publicationYear: 2008,
      genre: 'At',
      code: 'BOOK0758',
      isbn: '978-0-15-052053-5',
      language: 'Português',
      edition: '4ª',
      pages: 738,
      synopsis: `Quisquam deleniti blanditiis earum ullam. Eveniet vero numquam. Optio doloribus consectetur quaerat commodi.`,
      coverUrl: 'https://placekitten.com/174/300',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit dolorem.`,
      subtitle: null,
      author: `Guilherme Cardoso`,
      publisher: `Araújo`,
      publicationYear: 1983,
      genre: 'Quidem',
      code: 'BOOK0759',
      isbn: '978-0-437-79824-4',
      language: 'Português',
      edition: '1ª',
      pages: 544,
      synopsis: `Atque beatae ut corporis.`,
      coverUrl: 'https://placeimg.com/189/444/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit sint temporibus maxime.`,
      subtitle: `Autem accusamus aliquam perspiciatis fugit similique.`,
      author: `Juan Monteiro`,
      publisher: `Silveira`,
      publicationYear: 2011,
      genre: 'Sint',
      code: 'BOOK0760',
      isbn: '978-0-558-77452-3',
      language: 'Português',
      edition: '4ª',
      pages: 514,
      synopsis: `Quisquam error minima modi deserunt. Reprehenderit corrupti est quibusdam consectetur eum eveniet. Tempore voluptas perspiciatis quidem.`,
      coverUrl: 'https://www.lorempixel.com/51/678',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum facilis.`,
      subtitle: `Quasi delectus vitae culpa voluptates ipsam.`,
      author: `Larissa Nascimento`,
      publisher: `Barbosa`,
      publicationYear: 1951,
      genre: 'Quibusdam',
      code: 'BOOK0761',
      isbn: '978-1-4587-1207-3',
      language: 'Português',
      edition: '2ª',
      pages: 214,
      synopsis: `Asperiores sapiente dolor tenetur nam. Deleniti fuga quibusdam consequatur consectetur omnis alias sapiente. Ducimus veritatis dolore odio.`,
      coverUrl: 'https://placeimg.com/249/31/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eius enim.`,
      subtitle: null,
      author: `Nicolas Nascimento`,
      publisher: `Moraes`,
      publicationYear: 1980,
      genre: 'Voluptatum',
      code: 'BOOK0762',
      isbn: '978-1-4331-9971-4',
      language: 'Português',
      edition: '4ª',
      pages: 741,
      synopsis: `Dolorem reprehenderit suscipit quos ut cum. Sapiente iusto at quibusdam quia recusandae.`,
      coverUrl: 'https://placekitten.com/619/463',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis libero.`,
      subtitle: `Praesentium repellendus quaerat occaecati quasi minima.`,
      author: `Lucas Silva`,
      publisher: `Barros`,
      publicationYear: 1952,
      genre: 'Voluptatum',
      code: 'BOOK0763',
      isbn: '978-0-599-27943-8',
      language: 'Português',
      edition: '1ª',
      pages: 270,
      synopsis: `Voluptate dolor consectetur temporibus nesciunt aliquid. Dolor cum delectus sit eum. Aliquam sunt accusamus ipsum placeat voluptatem quasi.`,
      coverUrl: 'https://placeimg.com/447/811/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Itaque quam.`,
      subtitle: null,
      author: `Eloah Almeida`,
      publisher: `Aragão`,
      publicationYear: 1975,
      genre: 'Est',
      code: 'BOOK0764',
      isbn: '978-1-65600-762-9',
      language: 'Português',
      edition: '3ª',
      pages: 683,
      synopsis: `Sequi blanditiis voluptas ratione officia consectetur neque. Similique magnam sint modi laboriosam.`,
      coverUrl: 'https://dummyimage.com/535x901',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea ratione nisi.`,
      subtitle: null,
      author: `André Jesus`,
      publisher: `Pinto`,
      publicationYear: 2005,
      genre: 'Reiciendis',
      code: 'BOOK0765',
      isbn: '978-0-666-04853-0',
      language: 'Português',
      edition: '4ª',
      pages: 607,
      synopsis: `Dicta officiis eaque voluptatum. Repellat eius soluta natus beatae maxime est.`,
      coverUrl: 'https://www.lorempixel.com/886/719',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vitae debitis.`,
      subtitle: null,
      author: `João Pedro Duarte`,
      publisher: `Carvalho`,
      publicationYear: 2012,
      genre: 'Pariatur',
      code: 'BOOK0766',
      isbn: '978-1-83648-116-4',
      language: 'Português',
      edition: '2ª',
      pages: 162,
      synopsis: `Expedita facere voluptates mollitia numquam fuga ut cumque. Doloribus nemo deserunt autem quis illum tenetur hic. Libero laborum itaque maxime labore facilis distinctio.`,
      coverUrl: 'https://dummyimage.com/870x147',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `At ducimus.`,
      subtitle: `Asperiores exercitationem quo voluptatum ad molestias.`,
      author: `Yasmin Jesus`,
      publisher: `Pinto Rodrigues S.A.`,
      publicationYear: 2003,
      genre: 'Earum',
      code: 'BOOK0767',
      isbn: '978-0-7615-0011-7',
      language: 'Português',
      edition: '4ª',
      pages: 219,
      synopsis: `Non ex minima a eligendi. Impedit dolorum nulla quidem ea.`,
      coverUrl: 'https://www.lorempixel.com/26/178',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veritatis atque ut.`,
      subtitle: `Repudiandae provident accusantium saepe.`,
      author: `Maria Carvalho`,
      publisher: `Rocha`,
      publicationYear: 1974,
      genre: 'Et',
      code: 'BOOK0768',
      isbn: '978-1-79967-367-5',
      language: 'Português',
      edition: '4ª',
      pages: 452,
      synopsis: `Nesciunt hic aliquid. Quis itaque inventore dolore.`,
      coverUrl: 'https://placekitten.com/355/117',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reiciendis necessitatibus ipsa.`,
      subtitle: null,
      author: `Gabriel Moreira`,
      publisher: `Cavalcanti`,
      publicationYear: 1993,
      genre: 'Vel',
      code: 'BOOK0769',
      isbn: '978-1-79327-701-5',
      language: 'Português',
      edition: '5ª',
      pages: 772,
      synopsis: `Est nulla rerum iure libero numquam. Quas sed a vitae.`,
      coverUrl: 'https://placeimg.com/868/696/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia modi odit.`,
      subtitle: null,
      author: `Kamilly Campos`,
      publisher: `Souza Ltda.`,
      publicationYear: 1970,
      genre: 'Veniam',
      code: 'BOOK0770',
      isbn: '978-0-586-79433-3',
      language: 'Português',
      edition: '5ª',
      pages: 312,
      synopsis: `Earum libero cumque dicta laudantium. Omnis suscipit quisquam expedita hic sit eaque. Maxime omnis harum nulla reprehenderit odio.`,
      coverUrl: 'https://placekitten.com/906/160',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sapiente repellat dolores.`,
      subtitle: `Tenetur sint officia quaerat consectetur.`,
      author: `Yago Moreira`,
      publisher: `Pires Sales S.A.`,
      publicationYear: 2012,
      genre: 'Sapiente',
      code: 'BOOK0771',
      isbn: '978-1-896539-45-4',
      language: 'Português',
      edition: '1ª',
      pages: 525,
      synopsis: `Ipsam repellendus eius sint adipisci.`,
      coverUrl: 'https://placekitten.com/987/14',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus dicta.`,
      subtitle: null,
      author: `Isadora Nunes`,
      publisher: `da Mata Costa S.A.`,
      publicationYear: 1995,
      genre: 'Nemo',
      code: 'BOOK0772',
      isbn: '978-1-80407-373-5',
      language: 'Português',
      edition: '2ª',
      pages: 278,
      synopsis: `Assumenda a sunt dolor repellat. Saepe et aliquid qui consequuntur.`,
      coverUrl: 'https://placeimg.com/739/471/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque dignissimos tempora unde.`,
      subtitle: null,
      author: `Emilly Pereira`,
      publisher: `Novaes`,
      publicationYear: 1965,
      genre: 'Non',
      code: 'BOOK0773',
      isbn: '978-0-327-39974-2',
      language: 'Português',
      edition: '5ª',
      pages: 329,
      synopsis: `Nisi quos provident quidem eligendi repellendus. Soluta accusantium occaecati.`,
      coverUrl: 'https://placeimg.com/893/91/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Beatae soluta eveniet.`,
      subtitle: `Error maxime nihil itaque natus.`,
      author: `Catarina Silveira`,
      publisher: `Duarte Aragão - ME`,
      publicationYear: 1969,
      genre: 'Commodi',
      code: 'BOOK0774',
      isbn: '978-1-357-54789-9',
      language: 'Português',
      edition: '5ª',
      pages: 718,
      synopsis: `Ad repellat exercitationem quidem odit delectus. Delectus iusto quas.`,
      coverUrl: 'https://placeimg.com/963/684/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aperiam assumenda sapiente.`,
      subtitle: null,
      author: `Dra. Nina Costa`,
      publisher: `da Mata Duarte e Filhos`,
      publicationYear: 1963,
      genre: 'Natus',
      code: 'BOOK0775',
      isbn: '978-0-912377-45-2',
      language: 'Português',
      edition: '5ª',
      pages: 142,
      synopsis: `Maxime error perferendis praesentium vitae tenetur dolorum illum. Ipsum ex possimus quod accusamus neque quis. Rem illo odit blanditiis adipisci incidunt aliquam alias. Minus quis perspiciatis error minus eaque voluptas.`,
      coverUrl: 'https://placekitten.com/21/466',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sapiente expedita distinctio.`,
      subtitle: `Optio porro ab enim ea.`,
      author: `Lucca da Mata`,
      publisher: `Alves S.A.`,
      publicationYear: 1987,
      genre: 'Cumque',
      code: 'BOOK0776',
      isbn: '978-0-643-16785-8',
      language: 'Português',
      edition: '4ª',
      pages: 618,
      synopsis: `Repudiandae veniam voluptatibus suscipit mollitia omnis tempore. Dolor dicta delectus numquam itaque suscipit ipsa sapiente. Culpa nulla quos commodi facere dignissimos. Tempore non nisi.`,
      coverUrl: 'https://dummyimage.com/823x780',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusantium nobis.`,
      subtitle: `Tenetur facere vitae explicabo.`,
      author: `Felipe Araújo`,
      publisher: `Costa`,
      publicationYear: 1975,
      genre: 'Libero',
      code: 'BOOK0777',
      isbn: '978-0-273-20129-8',
      language: 'Português',
      edition: '4ª',
      pages: 525,
      synopsis: `Atque voluptate eveniet ad consectetur. Optio minus praesentium quidem. Ut commodi tenetur error soluta quos.`,
      coverUrl: 'https://www.lorempixel.com/66/486',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Error enim ipsum.`,
      subtitle: `Facere quidem laborum ipsum dignissimos repellat.`,
      author: `Srta. Emanuelly Melo`,
      publisher: `Duarte`,
      publicationYear: 1984,
      genre: 'Qui',
      code: 'BOOK0778',
      isbn: '978-1-182-72382-6',
      language: 'Português',
      edition: '3ª',
      pages: 524,
      synopsis: `Sequi nesciunt sint atque exercitationem. Facilis iusto in minus minima quam. Temporibus nihil doloribus vel commodi incidunt.`,
      coverUrl: 'https://placekitten.com/672/621',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iste aut reiciendis.`,
      subtitle: null,
      author: `Thales Gonçalves`,
      publisher: `Correia`,
      publicationYear: 2002,
      genre: 'Itaque',
      code: 'BOOK0779',
      isbn: '978-0-446-40350-4',
      language: 'Português',
      edition: '4ª',
      pages: 569,
      synopsis: `Nisi facere quos nobis reiciendis vel. Similique magni aspernatur aperiam quidem consequatur. Ipsum quod error quisquam.`,
      coverUrl: 'https://placeimg.com/925/1017/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga soluta.`,
      subtitle: null,
      author: `Dr. Thales Costa`,
      publisher: `da Rosa Silva - ME`,
      publicationYear: 2016,
      genre: 'Dignissimos',
      code: 'BOOK0780',
      isbn: '978-0-7979-0070-7',
      language: 'Português',
      edition: '1ª',
      pages: 186,
      synopsis: `Tempora nobis eligendi rerum necessitatibus qui. Tempore ullam sapiente autem incidunt deserunt natus.`,
      coverUrl: 'https://www.lorempixel.com/863/1000',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ex nesciunt.`,
      subtitle: null,
      author: `Sr. Davi Luiz Porto`,
      publisher: `Porto`,
      publicationYear: 1969,
      genre: 'Fuga',
      code: 'BOOK0781',
      isbn: '978-1-4122-7276-6',
      language: 'Português',
      edition: '5ª',
      pages: 159,
      synopsis: `Rem velit repellendus veniam possimus. Eius libero ut reprehenderit animi. Vero excepturi dolores enim explicabo.`,
      coverUrl: 'https://placeimg.com/688/744/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero incidunt.`,
      subtitle: null,
      author: `Mirella da Rosa`,
      publisher: `Moura Rocha e Filhos`,
      publicationYear: 1951,
      genre: 'Nesciunt',
      code: 'BOOK0782',
      isbn: '978-0-89504-910-0',
      language: 'Português',
      edition: '3ª',
      pages: 640,
      synopsis: `Quis amet dicta labore fuga eveniet. Nam quisquam atque quaerat itaque doloremque hic. Suscipit quod nulla vitae sit pariatur.`,
      coverUrl: 'https://placekitten.com/860/73',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi.`,
      subtitle: null,
      author: `João Lucas Moura`,
      publisher: `Cardoso Carvalho S/A`,
      publicationYear: 2006,
      genre: 'Maxime',
      code: 'BOOK0783',
      isbn: '978-0-02-640093-0',
      language: 'Português',
      edition: '3ª',
      pages: 764,
      synopsis: `Velit inventore libero aliquam tenetur. Molestiae odio maxime velit voluptatibus.`,
      coverUrl: 'https://placekitten.com/128/432',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veritatis ipsum.`,
      subtitle: null,
      author: `Vitor Gabriel Oliveira`,
      publisher: `Pinto`,
      publicationYear: 1999,
      genre: 'Necessitatibus',
      code: 'BOOK0784',
      isbn: '978-1-208-34812-5',
      language: 'Português',
      edition: '2ª',
      pages: 632,
      synopsis: `Quia illo eos eius. Esse sed ducimus officia deserunt placeat.`,
      coverUrl: 'https://placeimg.com/340/1013/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores nisi officiis.`,
      subtitle: null,
      author: `Ana Laura Vieira`,
      publisher: `Pires`,
      publicationYear: 1970,
      genre: 'Incidunt',
      code: 'BOOK0785',
      isbn: '978-0-468-71446-6',
      language: 'Português',
      edition: '1ª',
      pages: 128,
      synopsis: `Voluptatem necessitatibus praesentium dolorum repellat. Repellat illo officiis deserunt eius velit. Fugiat recusandae quis sed vel rem eaque veritatis. Hic pariatur repellat aperiam tempore optio.`,
      coverUrl: 'https://dummyimage.com/372x284',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Pariatur officiis.`,
      subtitle: null,
      author: `Beatriz Fogaça`,
      publisher: `Rodrigues`,
      publicationYear: 1997,
      genre: 'Deserunt',
      code: 'BOOK0786',
      isbn: '978-0-373-37840-1',
      language: 'Português',
      edition: '3ª',
      pages: 742,
      synopsis: `Dignissimos impedit ullam provident. Vitae libero doloribus unde ratione eveniet harum. Perferendis ipsum id reprehenderit totam voluptatem.`,
      coverUrl: 'https://www.lorempixel.com/942/789',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Libero.`,
      subtitle: null,
      author: `Sr. Vicente Costela`,
      publisher: `Rocha`,
      publicationYear: 1950,
      genre: 'Totam',
      code: 'BOOK0787',
      isbn: '978-1-4943-6327-7',
      language: 'Português',
      edition: '4ª',
      pages: 447,
      synopsis: `Illum ducimus ipsa deserunt dolorum ducimus.`,
      coverUrl: 'https://placekitten.com/86/125',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Assumenda placeat.`,
      subtitle: null,
      author: `Laura Fernandes`,
      publisher: `Castro`,
      publicationYear: 2016,
      genre: 'Maxime',
      code: 'BOOK0788',
      isbn: '978-0-351-91985-5',
      language: 'Português',
      edition: '2ª',
      pages: 207,
      synopsis: `Illum occaecati doloremque et sequi eum.`,
      coverUrl: 'https://dummyimage.com/179x538',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rerum quae.`,
      subtitle: null,
      author: `Lorena Pereira`,
      publisher: `da Rocha`,
      publicationYear: 2002,
      genre: 'Ea',
      code: 'BOOK0789',
      isbn: '978-0-423-38106-1',
      language: 'Português',
      edition: '1ª',
      pages: 194,
      synopsis: `Nulla aspernatur reprehenderit aliquam facilis consectetur aspernatur.`,
      coverUrl: 'https://placeimg.com/547/715/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque quisquam.`,
      subtitle: `Nulla accusantium sed labore praesentium.`,
      author: `Dr. Caio Correia`,
      publisher: `da Rosa`,
      publicationYear: 2017,
      genre: 'Ipsum',
      code: 'BOOK0790',
      isbn: '978-0-407-75130-9',
      language: 'Português',
      edition: '4ª',
      pages: 702,
      synopsis: `Ab quibusdam tempore voluptatem. Illo nesciunt enim rem. Reprehenderit beatae voluptatum dolores rerum.`,
      coverUrl: 'https://dummyimage.com/89x580',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Non ipsam.`,
      subtitle: null,
      author: `Bryan da Luz`,
      publisher: `Pereira`,
      publicationYear: 2003,
      genre: 'Neque',
      code: 'BOOK0791',
      isbn: '978-1-02-336165-1',
      language: 'Português',
      edition: '2ª',
      pages: 247,
      synopsis: `Ad quis dolorum eveniet excepturi in velit. Perferendis illo tempora. Corporis quam beatae ab.`,
      coverUrl: 'https://placeimg.com/729/894/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis.`,
      subtitle: null,
      author: `Agatha Lopes`,
      publisher: `Cardoso`,
      publicationYear: 2008,
      genre: 'Aut',
      code: 'BOOK0792',
      isbn: '978-0-8167-9323-5',
      language: 'Português',
      edition: '4ª',
      pages: 133,
      synopsis: `Nemo dolorem possimus doloremque occaecati. Earum eligendi nesciunt eum aspernatur sit. Labore animi ipsam error corporis autem.`,
      coverUrl: 'https://dummyimage.com/465x65',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Debitis placeat.`,
      subtitle: `Quibusdam quos occaecati placeat qui.`,
      author: `Alice da Conceição`,
      publisher: `Jesus S/A`,
      publicationYear: 1987,
      genre: 'Ullam',
      code: 'BOOK0793',
      isbn: '978-1-4880-5109-8',
      language: 'Português',
      edition: '1ª',
      pages: 635,
      synopsis: `Eligendi quo quam dolore impedit. Ab laboriosam quo praesentium deserunt.`,
      coverUrl: 'https://placekitten.com/108/5',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo voluptatibus.`,
      subtitle: `Iste ipsum odit corporis.`,
      author: `Alana Fogaça`,
      publisher: `Caldeira`,
      publicationYear: 1953,
      genre: 'Culpa',
      code: 'BOOK0794',
      isbn: '978-1-928339-71-7',
      language: 'Português',
      edition: '2ª',
      pages: 245,
      synopsis: `Fugiat minus iste non fugiat explicabo atque. Voluptas quo dolores quis architecto. Placeat quam tempora nihil.`,
      coverUrl: 'https://dummyimage.com/775x387',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum distinctio.`,
      subtitle: null,
      author: `Esther Sales`,
      publisher: `Silveira - EI`,
      publicationYear: 2012,
      genre: 'Facere',
      code: 'BOOK0795',
      isbn: '978-0-654-52593-7',
      language: 'Português',
      edition: '1ª',
      pages: 225,
      synopsis: `Accusantium libero velit fugit fuga nemo hic. Iusto sunt eum. Officiis quam ipsum neque.`,
      coverUrl: 'https://www.lorempixel.com/327/841',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem rerum.`,
      subtitle: null,
      author: `Joana Campos`,
      publisher: `Pinto - EI`,
      publicationYear: 1993,
      genre: 'Adipisci',
      code: 'BOOK0796',
      isbn: '978-0-936091-94-5',
      language: 'Português',
      edition: '4ª',
      pages: 586,
      synopsis: `Repellendus architecto iusto. Sit voluptatum libero. Pariatur minima exercitationem sapiente pariatur porro.`,
      coverUrl: 'https://placeimg.com/945/952/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quos assumenda perferendis.`,
      subtitle: `Consequatur harum consectetur vero autem.`,
      author: `Dr. Pedro Nunes`,
      publisher: `Pinto`,
      publicationYear: 1991,
      genre: 'Aliquam',
      code: 'BOOK0797',
      isbn: '978-1-359-56919-6',
      language: 'Português',
      edition: '1ª',
      pages: 739,
      synopsis: `Alias sint temporibus blanditiis. Fuga dolores unde rerum ut.`,
      coverUrl: 'https://dummyimage.com/941x578',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid libero autem.`,
      subtitle: `Quia sunt quam impedit labore.`,
      author: `Sr. Marcos Vinicius Costela`,
      publisher: `Rodrigues e Filhos`,
      publicationYear: 2006,
      genre: 'Praesentium',
      code: 'BOOK0798',
      isbn: '978-1-4779-3599-6',
      language: 'Português',
      edition: '3ª',
      pages: 761,
      synopsis: `Esse modi fuga non nihil quibusdam debitis. Quo sapiente nostrum aperiam. Tempora incidunt neque corrupti repellat beatae.`,
      coverUrl: 'https://dummyimage.com/182x860',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga perspiciatis.`,
      subtitle: null,
      author: `Pedro Lucas Cardoso`,
      publisher: `Rocha da Rosa S/A`,
      publicationYear: 1960,
      genre: 'Iste',
      code: 'BOOK0799',
      isbn: '978-0-87533-552-0',
      language: 'Português',
      edition: '2ª',
      pages: 733,
      synopsis: `Amet nisi eius molestias. Ducimus magnam beatae nam illo sequi nihil. Quia commodi dolorem voluptate reiciendis.`,
      coverUrl: 'https://www.lorempixel.com/281/452',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officia magni excepturi.`,
      subtitle: `Recusandae necessitatibus eius.`,
      author: `Sra. Isadora Caldeira`,
      publisher: `Martins`,
      publicationYear: 2018,
      genre: 'Perspiciatis',
      code: 'BOOK0800',
      isbn: '978-1-917431-24-8',
      language: 'Português',
      edition: '2ª',
      pages: 119,
      synopsis: `Odit dignissimos dolorum unde asperiores. Libero adipisci nesciunt tempore itaque amet.`,
      coverUrl: 'https://dummyimage.com/556x70',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nihil sequi iste.`,
      subtitle: null,
      author: `Dr. Diego Fernandes`,
      publisher: `da Paz Castro - ME`,
      publicationYear: 1991,
      genre: 'Quidem',
      code: 'BOOK0801',
      isbn: '978-1-08-855069-4',
      language: 'Português',
      edition: '4ª',
      pages: 703,
      synopsis: `Quo neque totam eaque autem. Accusamus corporis laborum quibusdam.`,
      coverUrl: 'https://dummyimage.com/970x533',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eius nesciunt beatae.`,
      subtitle: `Autem minima architecto.`,
      author: `Maysa Peixoto`,
      publisher: `da Rosa S.A.`,
      publicationYear: 2017,
      genre: 'Sunt',
      code: 'BOOK0802',
      isbn: '978-1-75384-811-8',
      language: 'Português',
      edition: '3ª',
      pages: 491,
      synopsis: `Quaerat alias deleniti itaque id officia. Enim ut porro fugit error velit.`,
      coverUrl: 'https://placeimg.com/662/581/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `A debitis.`,
      subtitle: `Rerum exercitationem dolorum.`,
      author: `Mariane da Cunha`,
      publisher: `Farias Gomes S/A`,
      publicationYear: 1968,
      genre: 'Porro',
      code: 'BOOK0803',
      isbn: '978-1-343-46609-8',
      language: 'Português',
      edition: '2ª',
      pages: 361,
      synopsis: `Iusto amet optio impedit recusandae. Unde minima voluptates amet neque. Autem deleniti consequatur ea quis assumenda.`,
      coverUrl: 'https://dummyimage.com/363x0',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim autem.`,
      subtitle: null,
      author: `Dr. Bernardo Nogueira`,
      publisher: `Mendes - ME`,
      publicationYear: 1991,
      genre: 'Explicabo',
      code: 'BOOK0804',
      isbn: '978-1-4133-3665-8',
      language: 'Português',
      edition: '2ª',
      pages: 127,
      synopsis: `Maxime voluptatem nisi ullam.`,
      coverUrl: 'https://placekitten.com/673/882',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis officia aut.`,
      subtitle: null,
      author: `Dr. Marcos Vinicius da Cunha`,
      publisher: `Melo S.A.`,
      publicationYear: 1983,
      genre: 'Incidunt',
      code: 'BOOK0805',
      isbn: '978-0-19-114299-4',
      language: 'Português',
      edition: '4ª',
      pages: 223,
      synopsis: `Magnam enim eligendi quibusdam dolor. Vero possimus id neque deleniti commodi sequi. Eum ab blanditiis cum quae autem. Suscipit corrupti nulla magni esse.`,
      coverUrl: 'https://placeimg.com/629/892/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Facilis error asperiores.`,
      subtitle: null,
      author: `Bianca Rezende`,
      publisher: `Costa Farias e Filhos`,
      publicationYear: 2014,
      genre: 'Molestiae',
      code: 'BOOK0806',
      isbn: '978-1-916449-15-2',
      language: 'Português',
      edition: '4ª',
      pages: 217,
      synopsis: `Quaerat nam ad atque. Aperiam et consequuntur aut illo.`,
      coverUrl: 'https://placekitten.com/349/482',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestiae vel.`,
      subtitle: `Quas corporis quas.`,
      author: `Sra. Julia da Luz`,
      publisher: `Rocha`,
      publicationYear: 1953,
      genre: 'Beatae',
      code: 'BOOK0807',
      isbn: '978-0-02-534238-5',
      language: 'Português',
      edition: '4ª',
      pages: 748,
      synopsis: `Reiciendis repellendus labore adipisci quo nulla. Officiis odio optio nihil modi. Provident tenetur esse voluptas praesentium tempore.`,
      coverUrl: 'https://dummyimage.com/1022x996',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquam officiis.`,
      subtitle: null,
      author: `Gustavo Barros`,
      publisher: `Duarte S.A.`,
      publicationYear: 1966,
      genre: 'Voluptatem',
      code: 'BOOK0808',
      isbn: '978-1-109-72472-1',
      language: 'Português',
      edition: '3ª',
      pages: 681,
      synopsis: `Delectus expedita suscipit ipsa repellat. Nihil dignissimos debitis voluptatum ipsa quam quidem. Neque eum delectus nam aut.`,
      coverUrl: 'https://placeimg.com/346/390/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas occaecati.`,
      subtitle: `Molestias incidunt accusantium suscipit qui.`,
      author: `Guilherme da Mata`,
      publisher: `Moraes Ramos e Filhos`,
      publicationYear: 1971,
      genre: 'Eveniet',
      code: 'BOOK0809',
      isbn: '978-1-931169-92-9',
      language: 'Português',
      edition: '2ª',
      pages: 650,
      synopsis: `Eum est iusto animi ab. Voluptatem voluptatum a laboriosam ab nam ullam.`,
      coverUrl: 'https://placeimg.com/609/578/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quos itaque.`,
      subtitle: null,
      author: `Kamilly Peixoto`,
      publisher: `Cardoso Duarte - EI`,
      publicationYear: 1971,
      genre: 'Accusamus',
      code: 'BOOK0810',
      isbn: '978-1-194-84542-4',
      language: 'Português',
      edition: '1ª',
      pages: 161,
      synopsis: `Nesciunt excepturi deserunt sapiente deleniti alias. Nostrum expedita atque impedit optio explicabo.`,
      coverUrl: 'https://placeimg.com/203/53/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Est autem dolorem.`,
      subtitle: null,
      author: `Daniela Nunes`,
      publisher: `Alves`,
      publicationYear: 2015,
      genre: 'Iusto',
      code: 'BOOK0811',
      isbn: '978-1-173-72234-0',
      language: 'Português',
      edition: '3ª',
      pages: 146,
      synopsis: `Sint laborum magnam repellat sit vero. Sunt repudiandae cupiditate odio molestias.`,
      coverUrl: 'https://placeimg.com/286/164/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Suscipit sit.`,
      subtitle: null,
      author: `Milena Dias`,
      publisher: `Lima`,
      publicationYear: 1967,
      genre: 'Veniam',
      code: 'BOOK0812',
      isbn: '978-1-211-27596-8',
      language: 'Português',
      edition: '5ª',
      pages: 386,
      synopsis: `Tempora dolor assumenda non veritatis dolores voluptates. Voluptatum magnam cum.`,
      coverUrl: 'https://placeimg.com/493/110/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quos neque ea.`,
      subtitle: null,
      author: `Antônio Duarte`,
      publisher: `Silva S/A`,
      publicationYear: 2007,
      genre: 'Exercitationem',
      code: 'BOOK0813',
      isbn: '978-1-85100-218-4',
      language: 'Português',
      edition: '3ª',
      pages: 351,
      synopsis: `Asperiores ducimus molestias ipsum consequatur. Voluptas aperiam odio iusto ipsum.`,
      coverUrl: 'https://www.lorempixel.com/392/376',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Necessitatibus nemo.`,
      subtitle: null,
      author: `Emanuel Costela`,
      publisher: `Freitas S.A.`,
      publicationYear: 1950,
      genre: 'Temporibus',
      code: 'BOOK0814',
      isbn: '978-1-4334-4210-0',
      language: 'Português',
      edition: '5ª',
      pages: 587,
      synopsis: `Architecto aliquid accusantium sapiente a accusamus. Beatae commodi excepturi ex quia. Esse aliquid iusto voluptate corporis perspiciatis perspiciatis.`,
      coverUrl: 'https://placeimg.com/731/866/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Omnis laudantium.`,
      subtitle: null,
      author: `Thales Silveira`,
      publisher: `Vieira`,
      publicationYear: 2018,
      genre: 'Odit',
      code: 'BOOK0815',
      isbn: '978-1-77513-877-8',
      language: 'Português',
      edition: '1ª',
      pages: 764,
      synopsis: `Ratione non assumenda voluptas. Nostrum officia reiciendis aliquam magni.`,
      coverUrl: 'https://placekitten.com/460/79',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis ducimus exercitationem.`,
      subtitle: null,
      author: `Júlia Silva`,
      publisher: `Ramos e Filhos`,
      publicationYear: 1995,
      genre: 'Et',
      code: 'BOOK0816',
      isbn: '978-0-88079-640-8',
      language: 'Português',
      edition: '4ª',
      pages: 281,
      synopsis: `Odio autem soluta rem magni nulla tenetur autem. Odit dolores hic consequuntur facere eius esse.`,
      coverUrl: 'https://dummyimage.com/391x482',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aspernatur natus dolorum.`,
      subtitle: `Dolorem et in itaque consequuntur.`,
      author: `Vicente Rezende`,
      publisher: `Moraes S.A.`,
      publicationYear: 1952,
      genre: 'Officia',
      code: 'BOOK0817',
      isbn: '978-0-05-555354-6',
      language: 'Português',
      edition: '3ª',
      pages: 796,
      synopsis: `Ipsum vel maiores. Perspiciatis iste praesentium magnam minima voluptas nesciunt soluta.`,
      coverUrl: 'https://www.lorempixel.com/277/216',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit.`,
      subtitle: null,
      author: `Renan Alves`,
      publisher: `Aragão`,
      publicationYear: 1996,
      genre: 'Sit',
      code: 'BOOK0818',
      isbn: '978-1-112-46175-0',
      language: 'Português',
      edition: '1ª',
      pages: 387,
      synopsis: `Possimus tempora eius velit ad possimus est. Illum aspernatur in veritatis corrupti inventore. Error veniam libero possimus natus.`,
      coverUrl: 'https://www.lorempixel.com/848/962',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Rem voluptatem.`,
      subtitle: `Iure quod doloremque culpa iure aliquid.`,
      author: `Rafael Gonçalves`,
      publisher: `Araújo Rezende S.A.`,
      publicationYear: 1985,
      genre: 'Deleniti',
      code: 'BOOK0819',
      isbn: '978-1-68997-490-5',
      language: 'Português',
      edition: '5ª',
      pages: 612,
      synopsis: `Ea vero maiores aut. Ipsam nisi qui ut nemo ea sapiente.`,
      coverUrl: 'https://placeimg.com/329/580/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Id.`,
      subtitle: null,
      author: `Ana Vitória Cavalcanti`,
      publisher: `Caldeira Carvalho - EI`,
      publicationYear: 2022,
      genre: 'Nobis',
      code: 'BOOK0820',
      isbn: '978-0-231-45651-7',
      language: 'Português',
      edition: '2ª',
      pages: 166,
      synopsis: `Cumque facilis aspernatur repellendus. Accusantium earum temporibus itaque. Quas culpa suscipit rem iusto.`,
      coverUrl: 'https://dummyimage.com/58x677',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequuntur at officiis.`,
      subtitle: null,
      author: `Emanuel Costa`,
      publisher: `Mendes Ltda.`,
      publicationYear: 1979,
      genre: 'Corrupti',
      code: 'BOOK0821',
      isbn: '978-0-902060-71-5',
      language: 'Português',
      edition: '5ª',
      pages: 380,
      synopsis: `Officiis dignissimos quos facere consectetur asperiores. Eaque officia incidunt unde omnis.`,
      coverUrl: 'https://dummyimage.com/500x748',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eaque consequatur quod.`,
      subtitle: `Commodi illum vitae.`,
      author: `Dr. Gabriel da Conceição`,
      publisher: `Cardoso`,
      publicationYear: 2004,
      genre: 'Quibusdam',
      code: 'BOOK0822',
      isbn: '978-1-5375-8268-9',
      language: 'Português',
      edition: '1ª',
      pages: 430,
      synopsis: `Fuga modi earum nostrum repellendus omnis voluptas delectus. Consequatur expedita fuga dolorem expedita.`,
      coverUrl: 'https://placekitten.com/114/422',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magni adipisci.`,
      subtitle: `Unde libero aliquid.`,
      author: `Raquel Silva`,
      publisher: `Porto S.A.`,
      publicationYear: 1955,
      genre: 'Magni',
      code: 'BOOK0823',
      isbn: '978-1-252-47777-2',
      language: 'Português',
      edition: '2ª',
      pages: 148,
      synopsis: `Quod earum hic recusandae doloribus. Incidunt rem aliquid ab necessitatibus.`,
      coverUrl: 'https://placekitten.com/277/799',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsa vero perferendis.`,
      subtitle: `Rem rem libero nisi quos.`,
      author: `Isabella Gonçalves`,
      publisher: `Aragão`,
      publicationYear: 1960,
      genre: 'Reprehenderit',
      code: 'BOOK0824',
      isbn: '978-0-10-407254-7',
      language: 'Português',
      edition: '5ª',
      pages: 125,
      synopsis: `Nobis aliquam quidem aperiam rerum. Sequi repellendus consequuntur odio ducimus adipisci natus id. Facere vel recusandae provident.`,
      coverUrl: 'https://www.lorempixel.com/607/412',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quo dolor fuga.`,
      subtitle: `Quibusdam voluptatem quod error.`,
      author: `Maysa Silva`,
      publisher: `Fogaça`,
      publicationYear: 1958,
      genre: 'Dolor',
      code: 'BOOK0825',
      isbn: '978-1-236-17949-4',
      language: 'Português',
      edition: '1ª',
      pages: 128,
      synopsis: `Excepturi reiciendis non quibusdam explicabo. Explicabo itaque magni blanditiis ipsum deserunt autem quae. Perspiciatis sint reiciendis ipsa autem.`,
      coverUrl: 'https://dummyimage.com/468x271',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus cum.`,
      subtitle: `Vitae hic pariatur consectetur harum iure.`,
      author: `Thales Araújo`,
      publisher: `Barbosa`,
      publicationYear: 1993,
      genre: 'Hic',
      code: 'BOOK0826',
      isbn: '978-1-5112-8638-1',
      language: 'Português',
      edition: '1ª',
      pages: 441,
      synopsis: `Vitae expedita vel provident. Minus nobis alias quod.`,
      coverUrl: 'https://placekitten.com/597/693',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae ut.`,
      subtitle: null,
      author: `Srta. Laura Peixoto`,
      publisher: `Rocha`,
      publicationYear: 2024,
      genre: 'Fugit',
      code: 'BOOK0827',
      isbn: '978-0-935433-73-9',
      language: 'Português',
      edition: '1ª',
      pages: 187,
      synopsis: `Maxime dolor in quia deleniti repudiandae. Blanditiis accusamus fugit laudantium quidem architecto.`,
      coverUrl: 'https://placeimg.com/396/514/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Pariatur fugit ratione.`,
      subtitle: `Dolor libero facere explicabo dolorum.`,
      author: `João Gabriel da Mata`,
      publisher: `da Mota S/A`,
      publicationYear: 2006,
      genre: 'Quos',
      code: 'BOOK0828',
      isbn: '978-0-09-507933-4',
      language: 'Português',
      edition: '1ª',
      pages: 408,
      synopsis: `Sed temporibus autem consectetur labore deserunt veniam. Quia maxime amet voluptatem. Placeat iste totam fuga.`,
      coverUrl: 'https://placeimg.com/54/305/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quaerat a animi.`,
      subtitle: `Cupiditate natus occaecati.`,
      author: `Davi Lucca Costa`,
      publisher: `Monteiro`,
      publicationYear: 1998,
      genre: 'Ducimus',
      code: 'BOOK0829',
      isbn: '978-1-960233-15-8',
      language: 'Português',
      edition: '4ª',
      pages: 198,
      synopsis: `Maiores iure expedita itaque ipsum numquam deserunt deserunt. Minima animi inventore a non vel iure. Cumque recusandae eius. Ut aliquid maiores molestias laudantium.`,
      coverUrl: 'https://placekitten.com/715/992',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Placeat excepturi voluptatibus.`,
      subtitle: null,
      author: `Heloísa Castro`,
      publisher: `Melo`,
      publicationYear: 1962,
      genre: 'Aperiam',
      code: 'BOOK0830',
      isbn: '978-1-236-69462-1',
      language: 'Português',
      edition: '3ª',
      pages: 766,
      synopsis: `Magnam veritatis aut tenetur. Quisquam consequatur est voluptas dolorem. Earum optio totam placeat porro tenetur corporis.`,
      coverUrl: 'https://placekitten.com/997/790',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut non.`,
      subtitle: `Similique temporibus autem quos.`,
      author: `Sra. Lavínia Fernandes`,
      publisher: `Pires - EI`,
      publicationYear: 1958,
      genre: 'Veritatis',
      code: 'BOOK0831',
      isbn: '978-1-85749-110-4',
      language: 'Português',
      edition: '5ª',
      pages: 298,
      synopsis: `Itaque corrupti inventore veniam magnam numquam. Ipsum nostrum et iste amet vitae eius distinctio. Inventore eaque perferendis nisi.`,
      coverUrl: 'https://dummyimage.com/301x529',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestias earum a.`,
      subtitle: `Laboriosam nihil harum.`,
      author: `Luiz Gustavo Porto`,
      publisher: `Novaes`,
      publicationYear: 2006,
      genre: 'Repellendus',
      code: 'BOOK0832',
      isbn: '978-1-920327-35-4',
      language: 'Português',
      edition: '2ª',
      pages: 348,
      synopsis: `Consequuntur harum laborum delectus. Culpa dolorum ad quos. Optio similique expedita nesciunt facilis consequuntur esse.`,
      coverUrl: 'https://placeimg.com/697/795/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ab.`,
      subtitle: null,
      author: `Maria Cecília Almeida`,
      publisher: `Rodrigues`,
      publicationYear: 2015,
      genre: 'Quidem',
      code: 'BOOK0833',
      isbn: '978-1-903034-13-2',
      language: 'Português',
      edition: '3ª',
      pages: 418,
      synopsis: `Omnis commodi maiores inventore vel eaque. Voluptatum ipsam quam ipsam vitae qui reiciendis incidunt. Libero vel aut.`,
      coverUrl: 'https://dummyimage.com/569x490',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci amet eius.`,
      subtitle: `Aspernatur sint laborum est veniam deserunt.`,
      author: `Laura Cardoso`,
      publisher: `Duarte`,
      publicationYear: 1951,
      genre: 'Provident',
      code: 'BOOK0834',
      isbn: '978-1-215-77405-4',
      language: 'Português',
      edition: '5ª',
      pages: 700,
      synopsis: `Rerum ipsa commodi corrupti quis quam. Architecto cupiditate magni sunt occaecati.`,
      coverUrl: 'https://placeimg.com/513/222/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `In quae.`,
      subtitle: `Cupiditate odio consequatur quae nemo nesciunt.`,
      author: `Bruna Costa`,
      publisher: `Araújo`,
      publicationYear: 1975,
      genre: 'Accusantium',
      code: 'BOOK0835',
      isbn: '978-0-320-44845-4',
      language: 'Português',
      edition: '2ª',
      pages: 170,
      synopsis: `Unde laboriosam facilis repudiandae eaque quasi iure. Hic eos in nihil dolorem assumenda. Illo reprehenderit est ipsam.`,
      coverUrl: 'https://placeimg.com/820/1006/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut repellendus quaerat.`,
      subtitle: null,
      author: `Juliana Fernandes`,
      publisher: `Novaes`,
      publicationYear: 2003,
      genre: 'Aperiam',
      code: 'BOOK0836',
      isbn: '978-0-08-529645-1',
      language: 'Português',
      edition: '3ª',
      pages: 266,
      synopsis: `Architecto facilis enim numquam. Libero consequatur nam laborum corporis facere qui. Cumque inventore porro mollitia.`,
      coverUrl: 'https://dummyimage.com/83x848',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repudiandae iusto perspiciatis officia.`,
      subtitle: null,
      author: `Valentina Freitas`,
      publisher: `Caldeira - ME`,
      publicationYear: 1979,
      genre: 'Perferendis',
      code: 'BOOK0837',
      isbn: '978-1-66390-321-1',
      language: 'Português',
      edition: '4ª',
      pages: 738,
      synopsis: `Animi at possimus voluptatum reprehenderit. Doloribus accusantium aspernatur ullam reiciendis.`,
      coverUrl: 'https://placeimg.com/538/43/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum minus exercitationem.`,
      subtitle: `Eum consequatur enim corrupti hic exercitationem.`,
      author: `Diogo Oliveira`,
      publisher: `Fernandes`,
      publicationYear: 1950,
      genre: 'Laborum',
      code: 'BOOK0838',
      isbn: '978-0-517-98387-4',
      language: 'Português',
      edition: '3ª',
      pages: 110,
      synopsis: `Eveniet voluptas veritatis totam inventore. Omnis dignissimos sapiente quae nemo.`,
      coverUrl: 'https://www.lorempixel.com/895/512',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officiis unde eveniet.`,
      subtitle: `Temporibus possimus nobis quibusdam voluptatibus.`,
      author: `Sra. Ana Ferreira`,
      publisher: `Lima`,
      publicationYear: 1974,
      genre: 'Tempora',
      code: 'BOOK0839',
      isbn: '978-1-293-68426-9',
      language: 'Português',
      edition: '5ª',
      pages: 468,
      synopsis: `Saepe laborum nihil deleniti laboriosam quas. Suscipit aliquid repellat a omnis ut sed repellendus. Quis perspiciatis voluptatum est quam perspiciatis consectetur ab.`,
      coverUrl: 'https://www.lorempixel.com/930/325',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi similique.`,
      subtitle: `Odio nemo odio tempore quasi.`,
      author: `Bárbara Lima`,
      publisher: `Peixoto`,
      publicationYear: 1983,
      genre: 'Voluptas',
      code: 'BOOK0840',
      isbn: '978-0-01-656633-2',
      language: 'Português',
      edition: '2ª',
      pages: 447,
      synopsis: `Voluptates explicabo maxime enim quasi. Consectetur dolores modi veritatis accusamus amet. Et velit nisi minima eligendi perferendis tempora. Consequuntur eligendi error quidem.`,
      coverUrl: 'https://placeimg.com/709/100/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga quis.`,
      subtitle: `Distinctio sint velit maiores sequi odit.`,
      author: `Maria Rezende`,
      publisher: `Cunha Ltda.`,
      publicationYear: 1983,
      genre: 'Fugit',
      code: 'BOOK0841',
      isbn: '978-1-310-90771-5',
      language: 'Português',
      edition: '1ª',
      pages: 121,
      synopsis: `Doloremque eveniet porro vel. Quidem laborum occaecati dolore. Explicabo ducimus id ipsa ipsam labore.`,
      coverUrl: 'https://placekitten.com/461/691',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam autem.`,
      subtitle: `Vel debitis harum incidunt excepturi.`,
      author: `Elisa da Rosa`,
      publisher: `Fogaça da Luz - ME`,
      publicationYear: 1997,
      genre: 'Voluptatum',
      code: 'BOOK0842',
      isbn: '978-0-15-013433-6',
      language: 'Português',
      edition: '3ª',
      pages: 776,
      synopsis: `Ipsa labore sequi. Voluptas officia ex debitis enim ipsum deleniti. Architecto consectetur sint sint dolore ullam porro.`,
      coverUrl: 'https://placeimg.com/224/303/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nobis necessitatibus ratione.`,
      subtitle: null,
      author: `Dr. Raul Carvalho`,
      publisher: `da Mata`,
      publicationYear: 1974,
      genre: 'Blanditiis',
      code: 'BOOK0843',
      isbn: '978-1-220-65910-0',
      language: 'Português',
      edition: '5ª',
      pages: 487,
      synopsis: `Rerum deleniti dolorum dolor eaque.`,
      coverUrl: 'https://dummyimage.com/514x430',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repellat in at.`,
      subtitle: null,
      author: `Davi Lucca Almeida`,
      publisher: `Rezende e Filhos`,
      publicationYear: 1987,
      genre: 'Distinctio',
      code: 'BOOK0844',
      isbn: '978-1-68352-780-0',
      language: 'Português',
      edition: '2ª',
      pages: 435,
      synopsis: `Temporibus ullam ullam eum laboriosam animi totam. Molestiae fuga aliquam aliquam aliquam. Pariatur distinctio voluptate exercitationem. Officia labore ipsum ex illo mollitia.`,
      coverUrl: 'https://dummyimage.com/246x981',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Omnis vitae omnis.`,
      subtitle: null,
      author: `Gustavo Freitas`,
      publisher: `da Rosa`,
      publicationYear: 2012,
      genre: 'Est',
      code: 'BOOK0845',
      isbn: '978-1-65684-154-4',
      language: 'Português',
      edition: '2ª',
      pages: 183,
      synopsis: `Ex iure libero et voluptates. Repellendus maiores autem quas. Id perferendis facere repellendus facere neque eveniet.`,
      coverUrl: 'https://www.lorempixel.com/843/25',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Provident ipsum.`,
      subtitle: `Corrupti necessitatibus hic earum ducimus.`,
      author: `Bryan Alves`,
      publisher: `da Mata Costela Ltda.`,
      publicationYear: 2009,
      genre: 'Consectetur',
      code: 'BOOK0846',
      isbn: '978-1-57953-723-4',
      language: 'Português',
      edition: '2ª',
      pages: 429,
      synopsis: `Impedit earum eligendi vel esse animi. Sed aliquid aspernatur ratione culpa nihil consequuntur accusamus. Facere quidem est voluptatem deleniti.`,
      coverUrl: 'https://placekitten.com/312/340',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi.`,
      subtitle: null,
      author: `Dra. Natália Lima`,
      publisher: `Cunha`,
      publicationYear: 2024,
      genre: 'Quos',
      code: 'BOOK0847',
      isbn: '978-0-7695-3908-9',
      language: 'Português',
      edition: '1ª',
      pages: 312,
      synopsis: `Ut omnis omnis quibusdam illo porro ad. Magni est id voluptatem fugiat est. Dolore ut reprehenderit perspiciatis natus est maxime.`,
      coverUrl: 'https://www.lorempixel.com/325/729',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eveniet neque ex.`,
      subtitle: `Cumque labore delectus fugit quibusdam.`,
      author: `Emanuel da Conceição`,
      publisher: `Porto`,
      publicationYear: 2004,
      genre: 'Dolore',
      code: 'BOOK0848',
      isbn: '978-0-468-92704-0',
      language: 'Português',
      edition: '4ª',
      pages: 685,
      synopsis: `Deserunt perferendis dolores odit. Impedit autem explicabo vel error quas. Assumenda aliquid fugiat maiores cumque repellendus.`,
      coverUrl: 'https://dummyimage.com/790x964',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas nobis.`,
      subtitle: null,
      author: `Anthony Farias`,
      publisher: `Cardoso`,
      publicationYear: 1987,
      genre: 'Quasi',
      code: 'BOOK0849',
      isbn: '978-1-61344-088-9',
      language: 'Português',
      edition: '4ª',
      pages: 631,
      synopsis: `Sit molestias molestias commodi neque. Eaque in architecto consequatur rerum.`,
      coverUrl: 'https://placeimg.com/416/1011/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas dolorum voluptas mollitia.`,
      subtitle: null,
      author: `Bryan da Cruz`,
      publisher: `Araújo Cardoso - ME`,
      publicationYear: 1993,
      genre: 'Esse',
      code: 'BOOK0850',
      isbn: '978-1-200-23915-5',
      language: 'Português',
      edition: '4ª',
      pages: 561,
      synopsis: `Asperiores deserunt repellendus hic quis. Perspiciatis enim a mollitia aspernatur.`,
      coverUrl: 'https://dummyimage.com/993x93',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi nisi.`,
      subtitle: `Laborum alias beatae numquam nobis.`,
      author: `Caio Ramos`,
      publisher: `Lopes`,
      publicationYear: 1972,
      genre: 'Natus',
      code: 'BOOK0851',
      isbn: '978-0-01-917653-8',
      language: 'Português',
      edition: '4ª',
      pages: 339,
      synopsis: `Sed minus ducimus dolor sint. Beatae totam est quaerat esse nulla beatae.`,
      coverUrl: 'https://www.lorempixel.com/119/926',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam modi.`,
      subtitle: null,
      author: `Arthur Fernandes`,
      publisher: `Barbosa - EI`,
      publicationYear: 2015,
      genre: 'Ex',
      code: 'BOOK0852',
      isbn: '978-0-491-23216-6',
      language: 'Português',
      edition: '5ª',
      pages: 759,
      synopsis: `Fugiat nobis quae.`,
      coverUrl: 'https://www.lorempixel.com/364/543',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloremque placeat quidem.`,
      subtitle: `Quae fugit facere omnis.`,
      author: `Davi Lucca Carvalho`,
      publisher: `Correia Castro - ME`,
      publicationYear: 2019,
      genre: 'Omnis',
      code: 'BOOK0853',
      isbn: '978-1-283-26701-4',
      language: 'Português',
      edition: '2ª',
      pages: 441,
      synopsis: `Ipsum beatae rem voluptates iusto repudiandae. Illum consequatur nisi debitis atque deleniti id.`,
      coverUrl: 'https://placeimg.com/525/346/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloremque accusamus cupiditate.`,
      subtitle: null,
      author: `Maria Julia Jesus`,
      publisher: `Rocha e Filhos`,
      publicationYear: 2019,
      genre: 'Labore',
      code: 'BOOK0854',
      isbn: '978-0-405-31984-6',
      language: 'Português',
      edition: '3ª',
      pages: 108,
      synopsis: `Optio ad eum eum. Ea eum molestias impedit laudantium aperiam quos.`,
      coverUrl: 'https://placeimg.com/513/893/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laudantium quasi nam quas.`,
      subtitle: `Officiis hic optio.`,
      author: `Joaquim Silva`,
      publisher: `Martins Martins e Filhos`,
      publicationYear: 2015,
      genre: 'Ab',
      code: 'BOOK0855',
      isbn: '978-1-272-79732-4',
      language: 'Português',
      edition: '2ª',
      pages: 507,
      synopsis: `Natus blanditiis porro tenetur. Ab autem quibusdam aperiam. Ducimus incidunt deserunt fugit adipisci.`,
      coverUrl: 'https://www.lorempixel.com/80/745',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Esse illo.`,
      subtitle: null,
      author: `Bernardo Ribeiro`,
      publisher: `Ribeiro`,
      publicationYear: 2020,
      genre: 'Autem',
      code: 'BOOK0856',
      isbn: '978-1-06-485796-0',
      language: 'Português',
      edition: '4ª',
      pages: 572,
      synopsis: `Illo deserunt omnis cum veritatis recusandae repudiandae. Qui nobis est error placeat velit molestiae. Blanditiis aperiam commodi voluptatum veniam earum tenetur.`,
      coverUrl: 'https://placeimg.com/833/1023/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ipsa temporibus nesciunt.`,
      subtitle: null,
      author: `Sr. Gabriel Nunes`,
      publisher: `Castro - ME`,
      publicationYear: 2003,
      genre: 'Amet',
      code: 'BOOK0857',
      isbn: '978-0-7645-1770-9',
      language: 'Português',
      edition: '2ª',
      pages: 549,
      synopsis: `Pariatur nam dolorum voluptates. Esse magnam cum itaque consequatur.`,
      coverUrl: 'https://www.lorempixel.com/388/304',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam odio officia delectus.`,
      subtitle: null,
      author: `Luiz Miguel Ribeiro`,
      publisher: `Moreira Santos - ME`,
      publicationYear: 1989,
      genre: 'Doloribus',
      code: 'BOOK0858',
      isbn: '978-0-9933570-2-2',
      language: 'Português',
      edition: '1ª',
      pages: 611,
      synopsis: `Tempora nostrum nemo. Pariatur deserunt non minus quisquam enim.`,
      coverUrl: 'https://dummyimage.com/585x545',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorum nam eum.`,
      subtitle: `Recusandae expedita quae nobis mollitia.`,
      author: `Kamilly Ramos`,
      publisher: `da Cunha`,
      publicationYear: 2025,
      genre: 'Dolor',
      code: 'BOOK0859',
      isbn: '978-0-533-40620-3',
      language: 'Português',
      edition: '1ª',
      pages: 681,
      synopsis: `Incidunt doloribus quod blanditiis porro consequatur. Id deserunt sunt voluptates debitis soluta.`,
      coverUrl: 'https://dummyimage.com/433x821',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nam delectus dolor.`,
      subtitle: null,
      author: `Dr. Arthur Gomes`,
      publisher: `Fogaça`,
      publicationYear: 1976,
      genre: 'Maiores',
      code: 'BOOK0860',
      isbn: '978-0-434-42111-4',
      language: 'Português',
      edition: '4ª',
      pages: 165,
      synopsis: `Eaque nemo eos necessitatibus laboriosam enim. Occaecati minus error sequi. Fugiat magni tempore asperiores numquam.`,
      coverUrl: 'https://placekitten.com/251/835',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit cupiditate dolorum.`,
      subtitle: null,
      author: `Esther da Luz`,
      publisher: `da Luz`,
      publicationYear: 2007,
      genre: 'Explicabo',
      code: 'BOOK0861',
      isbn: '978-0-539-98759-1',
      language: 'Português',
      edition: '3ª',
      pages: 195,
      synopsis: `Dolores a iure repellat ea voluptatem. Reiciendis dolore eius sunt.`,
      coverUrl: 'https://www.lorempixel.com/363/480',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero repellat nam.`,
      subtitle: null,
      author: `Igor da Paz`,
      publisher: `Araújo e Filhos`,
      publicationYear: 2012,
      genre: 'Provident',
      code: 'BOOK0862',
      isbn: '978-0-464-37862-4',
      language: 'Português',
      edition: '1ª',
      pages: 291,
      synopsis: `Quia voluptates odio ullam odio. Incidunt qui nihil.`,
      coverUrl: 'https://placeimg.com/233/54/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati doloribus ipsum est.`,
      subtitle: `Sunt corporis similique.`,
      author: `Luiz Henrique Rodrigues`,
      publisher: `Nogueira Ltda.`,
      publicationYear: 2017,
      genre: 'Accusamus',
      code: 'BOOK0863',
      isbn: '978-0-471-59011-8',
      language: 'Português',
      edition: '1ª',
      pages: 565,
      synopsis: `A quas deleniti impedit a ducimus. Deleniti voluptatem cumque.`,
      coverUrl: 'https://dummyimage.com/851x464',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Unde animi.`,
      subtitle: null,
      author: `Ana Júlia Ferreira`,
      publisher: `da Conceição`,
      publicationYear: 2002,
      genre: 'Minima',
      code: 'BOOK0864',
      isbn: '978-1-966997-84-9',
      language: 'Português',
      edition: '4ª',
      pages: 260,
      synopsis: `Ut officia enim. Saepe consequatur hic odit dolore.`,
      coverUrl: 'https://dummyimage.com/1000x347',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam architecto voluptatem.`,
      subtitle: `Fuga maxime unde eum nobis sint.`,
      author: `Lorenzo Martins`,
      publisher: `Pinto`,
      publicationYear: 1976,
      genre: 'Error',
      code: 'BOOK0865',
      isbn: '978-0-930557-79-9',
      language: 'Português',
      edition: '2ª',
      pages: 310,
      synopsis: `Odit sed distinctio ipsam accusamus est numquam aliquam. Dolor earum perferendis aut a eligendi sed necessitatibus. Exercitationem repellat quia soluta minus.`,
      coverUrl: 'https://placeimg.com/839/784/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sit.`,
      subtitle: null,
      author: `Clara Moraes`,
      publisher: `Rezende`,
      publicationYear: 2008,
      genre: 'Mollitia',
      code: 'BOOK0866',
      isbn: '978-1-5121-0184-3',
      language: 'Português',
      edition: '3ª',
      pages: 306,
      synopsis: `Cumque consequatur est omnis totam minima. Sequi exercitationem eos magnam.`,
      coverUrl: 'https://placeimg.com/479/658/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolores culpa eius.`,
      subtitle: null,
      author: `Lucas Ramos`,
      publisher: `Azevedo`,
      publicationYear: 1981,
      genre: 'Occaecati',
      code: 'BOOK0867',
      isbn: '978-1-57374-852-0',
      language: 'Português',
      edition: '5ª',
      pages: 436,
      synopsis: `Cupiditate velit vel quia. In recusandae sapiente amet optio. Quo sequi sequi nihil odio cupiditate.`,
      coverUrl: 'https://placekitten.com/560/876',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio numquam.`,
      subtitle: null,
      author: `Eloah Barros`,
      publisher: `Caldeira das Neves e Filhos`,
      publicationYear: 2008,
      genre: 'Quas',
      code: 'BOOK0868',
      isbn: '978-1-07-008415-2',
      language: 'Português',
      edition: '3ª',
      pages: 404,
      synopsis: `Velit eligendi impedit qui. Suscipit dolore possimus exercitationem provident dicta velit. Fugiat dolorum cum eligendi architecto consectetur ipsa.`,
      coverUrl: 'https://placekitten.com/343/44',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores consequuntur.`,
      subtitle: null,
      author: `Vitória Farias`,
      publisher: `Ferreira Oliveira S/A`,
      publicationYear: 2005,
      genre: 'Atque',
      code: 'BOOK0869',
      isbn: '978-1-372-82659-7',
      language: 'Português',
      edition: '4ª',
      pages: 493,
      synopsis: `Porro aliquam aut veritatis architecto. Rem rem aliquid doloribus.`,
      coverUrl: 'https://placekitten.com/473/125',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eligendi minus.`,
      subtitle: `Dolorum officiis sint amet.`,
      author: `Renan Aragão`,
      publisher: `Carvalho das Neves - ME`,
      publicationYear: 2018,
      genre: 'Quod',
      code: 'BOOK0870',
      isbn: '978-0-10-936767-9',
      language: 'Português',
      edition: '3ª',
      pages: 782,
      synopsis: `Iste sequi exercitationem veritatis fugiat explicabo error. Suscipit dignissimos tempore magnam nostrum rem possimus dicta. Autem amet fugit dignissimos.`,
      coverUrl: 'https://dummyimage.com/645x760',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reprehenderit modi.`,
      subtitle: null,
      author: `Srta. Caroline Farias`,
      publisher: `Cardoso da Rocha Ltda.`,
      publicationYear: 1959,
      genre: 'Veritatis',
      code: 'BOOK0871',
      isbn: '978-1-85507-026-4',
      language: 'Português',
      edition: '1ª',
      pages: 616,
      synopsis: `Inventore reiciendis in. Ipsam quaerat eum voluptatum quia error.`,
      coverUrl: 'https://dummyimage.com/977x894',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut temporibus.`,
      subtitle: `Vero natus doloribus voluptates optio.`,
      author: `Pietra Ramos`,
      publisher: `Barros da Luz - EI`,
      publicationYear: 1953,
      genre: 'Id',
      code: 'BOOK0872',
      isbn: '978-1-957252-02-5',
      language: 'Português',
      edition: '1ª',
      pages: 754,
      synopsis: `Magni dignissimos iure beatae fugiat debitis. Minus quisquam nobis assumenda pariatur.`,
      coverUrl: 'https://www.lorempixel.com/614/733',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis ex neque.`,
      subtitle: `Eius saepe hic voluptatum voluptatum inventore.`,
      author: `Sr. Erick Almeida`,
      publisher: `Ferreira S/A`,
      publicationYear: 1982,
      genre: 'Maxime',
      code: 'BOOK0873',
      isbn: '978-1-286-78554-6',
      language: 'Português',
      edition: '1ª',
      pages: 239,
      synopsis: `Ratione magnam iusto. Nobis expedita aliquid tempora error iste aliquam. Perspiciatis dolorem laudantium quis veritatis temporibus quia tenetur.`,
      coverUrl: 'https://placekitten.com/57/117',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Itaque tempore.`,
      subtitle: null,
      author: `Pedro Miguel Sales`,
      publisher: `Fogaça Pereira S/A`,
      publicationYear: 1981,
      genre: 'Veniam',
      code: 'BOOK0874',
      isbn: '978-0-613-40799-1',
      language: 'Português',
      edition: '4ª',
      pages: 243,
      synopsis: `Harum eaque laboriosam sapiente. Exercitationem officia quaerat quae pariatur dicta commodi.`,
      coverUrl: 'https://placekitten.com/818/1003',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero perspiciatis.`,
      subtitle: `Tenetur hic vel architecto facere.`,
      author: `Ana Sophia Martins`,
      publisher: `Peixoto`,
      publicationYear: 1987,
      genre: 'Veritatis',
      code: 'BOOK0875',
      isbn: '978-0-668-94093-1',
      language: 'Português',
      edition: '1ª',
      pages: 647,
      synopsis: `Harum illum accusamus necessitatibus fuga. Possimus blanditiis temporibus dolor. Ex voluptates deleniti ea fuga asperiores corrupti hic.`,
      coverUrl: 'https://dummyimage.com/827x137',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veniam odit.`,
      subtitle: `Temporibus iste qui est saepe.`,
      author: `Sra. Maria Luiza Rodrigues`,
      publisher: `Souza`,
      publicationYear: 1972,
      genre: 'Perspiciatis',
      code: 'BOOK0876',
      isbn: '978-0-19-630527-1',
      language: 'Português',
      edition: '2ª',
      pages: 135,
      synopsis: `Ea dignissimos necessitatibus. Debitis expedita natus aspernatur. Consequatur a blanditiis laboriosam illo. Beatae hic voluptate.`,
      coverUrl: 'https://dummyimage.com/185x870',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum officiis saepe.`,
      subtitle: `Pariatur dolorem harum in corrupti.`,
      author: `André Oliveira`,
      publisher: `Monteiro Peixoto - ME`,
      publicationYear: 1989,
      genre: 'Enim',
      code: 'BOOK0877',
      isbn: '978-1-75694-298-1',
      language: 'Português',
      edition: '4ª',
      pages: 153,
      synopsis: `A error ab voluptate. Dolor quia iusto.`,
      coverUrl: 'https://dummyimage.com/37x446',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam cupiditate.`,
      subtitle: `Esse possimus fugit quibusdam eveniet.`,
      author: `Rebeca Dias`,
      publisher: `Oliveira`,
      publicationYear: 1980,
      genre: 'Beatae',
      code: 'BOOK0878',
      isbn: '978-0-03-806958-3',
      language: 'Português',
      edition: '2ª',
      pages: 193,
      synopsis: `Optio natus dicta officiis. Quae atque ut magnam. Iure recusandae adipisci vel.`,
      coverUrl: 'https://placeimg.com/801/868/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolorem officiis vel.`,
      subtitle: `Laboriosam magni officiis culpa.`,
      author: `Dr. Joaquim Alves`,
      publisher: `da Paz Rodrigues - EI`,
      publicationYear: 1962,
      genre: 'Architecto',
      code: 'BOOK0879',
      isbn: '978-1-03-753531-4',
      language: 'Português',
      edition: '2ª',
      pages: 271,
      synopsis: `Quae qui commodi porro. Impedit rerum neque exercitationem repellendus repudiandae.`,
      coverUrl: 'https://placekitten.com/511/111',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magnam nam itaque.`,
      subtitle: null,
      author: `Cauê Novaes`,
      publisher: `da Costa`,
      publicationYear: 1976,
      genre: 'Id',
      code: 'BOOK0880',
      isbn: '978-0-85298-388-1',
      language: 'Português',
      edition: '5ª',
      pages: 504,
      synopsis: `Tenetur asperiores blanditiis. Iure libero eaque at id assumenda sequi ipsam.`,
      coverUrl: 'https://dummyimage.com/709x281',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Praesentium rem.`,
      subtitle: `Autem necessitatibus eveniet eaque ut.`,
      author: `Alice Costela`,
      publisher: `Ferreira`,
      publicationYear: 1972,
      genre: 'Repellendus',
      code: 'BOOK0881',
      isbn: '978-0-457-76613-1',
      language: 'Português',
      edition: '1ª',
      pages: 511,
      synopsis: `Sapiente exercitationem excepturi quod vero totam provident. Sed possimus nisi quam quia maiores consequuntur dignissimos. Vero quidem quidem fugit accusamus blanditiis.`,
      coverUrl: 'https://dummyimage.com/583x178',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Adipisci fugit natus.`,
      subtitle: `Perferendis illum provident laudantium aliquam.`,
      author: `Beatriz Almeida`,
      publisher: `Araújo das Neves e Filhos`,
      publicationYear: 1985,
      genre: 'Error',
      code: 'BOOK0882',
      isbn: '978-0-209-96676-5',
      language: 'Português',
      edition: '5ª',
      pages: 477,
      synopsis: `Cum accusantium officia dolore quo magnam. Facere laboriosam itaque aut occaecati a.`,
      coverUrl: 'https://placeimg.com/830/667/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Saepe sed.`,
      subtitle: null,
      author: `Júlia Rodrigues`,
      publisher: `Azevedo`,
      publicationYear: 1963,
      genre: 'Ipsum',
      code: 'BOOK0883',
      isbn: '978-1-7393164-9-5',
      language: 'Português',
      edition: '5ª',
      pages: 682,
      synopsis: `Veniam voluptatum earum incidunt mollitia minus quia dolores.`,
      coverUrl: 'https://placeimg.com/102/724/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Commodi sed ex.`,
      subtitle: `Consequatur nihil debitis.`,
      author: `Ana Lopes`,
      publisher: `Sales`,
      publicationYear: 1990,
      genre: 'Quaerat',
      code: 'BOOK0884',
      isbn: '978-0-9580401-4-3',
      language: 'Português',
      edition: '4ª',
      pages: 169,
      synopsis: `Rerum non iure quasi. Ad totam perferendis. Iste maxime vel.`,
      coverUrl: 'https://placeimg.com/527/803/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Occaecati quas.`,
      subtitle: null,
      author: `Felipe Nunes`,
      publisher: `Azevedo Vieira - EI`,
      publicationYear: 1951,
      genre: 'Harum',
      code: 'BOOK0885',
      isbn: '978-0-19-859671-4',
      language: 'Português',
      edition: '2ª',
      pages: 121,
      synopsis: `Corporis dicta accusamus eos ut. Odit omnis quae facere architecto assumenda temporibus. Deserunt explicabo error.`,
      coverUrl: 'https://dummyimage.com/29x601',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eligendi repudiandae et.`,
      subtitle: null,
      author: `Mariane Azevedo`,
      publisher: `Cunha Farias - EI`,
      publicationYear: 1960,
      genre: 'Quis',
      code: 'BOOK0886',
      isbn: '978-1-76606-289-1',
      language: 'Português',
      edition: '1ª',
      pages: 240,
      synopsis: `Tempora quos rerum accusantium. Natus repellendus iusto dolor itaque. Pariatur officiis accusantium aut deserunt.`,
      coverUrl: 'https://dummyimage.com/489x329',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Sit reprehenderit provident debitis.`,
      subtitle: `Doloribus cumque a commodi ut.`,
      author: `Ana Júlia Vieira`,
      publisher: `Costa`,
      publicationYear: 1954,
      genre: 'Est',
      code: 'BOOK0887',
      isbn: '978-0-17-860577-1',
      language: 'Português',
      edition: '2ª',
      pages: 712,
      synopsis: `Laudantium nihil voluptates quos repellat nam non. Soluta animi culpa. Eum ipsa alias magnam quibusdam delectus.`,
      coverUrl: 'https://placeimg.com/26/428/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus.`,
      subtitle: null,
      author: `Luiza Souza`,
      publisher: `Correia`,
      publicationYear: 2003,
      genre: 'Saepe',
      code: 'BOOK0888',
      isbn: '978-1-972655-71-9',
      language: 'Português',
      edition: '3ª',
      pages: 124,
      synopsis: `Eligendi sapiente labore ea facilis possimus. Et iste quisquam explicabo quaerat.`,
      coverUrl: 'https://placekitten.com/608/299',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam omnis.`,
      subtitle: `Nemo aliquid beatae maxime veniam quis.`,
      author: `Carlos Eduardo Lopes`,
      publisher: `Ribeiro`,
      publicationYear: 1981,
      genre: 'Expedita',
      code: 'BOOK0889',
      isbn: '978-1-157-64670-9',
      language: 'Português',
      edition: '2ª',
      pages: 722,
      synopsis: `Optio quibusdam sed minus. Molestias magnam distinctio architecto nesciunt ea eum aperiam. Eum veritatis amet ullam error quia exercitationem.`,
      coverUrl: 'https://dummyimage.com/415x493',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Neque doloribus numquam.`,
      subtitle: `Consequuntur quo iste excepturi et.`,
      author: `Dr. Luiz Miguel Cunha`,
      publisher: `da Mota`,
      publicationYear: 1974,
      genre: 'Quidem',
      code: 'BOOK0890',
      isbn: '978-0-242-71618-1',
      language: 'Português',
      edition: '1ª',
      pages: 749,
      synopsis: `Quaerat porro tenetur fugiat. Vero dolorum in rem veritatis voluptatum odio. Distinctio nam officiis.`,
      coverUrl: 'https://placeimg.com/571/961/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Impedit atque.`,
      subtitle: null,
      author: `Cauã da Costa`,
      publisher: `Freitas Carvalho e Filhos`,
      publicationYear: 1976,
      genre: 'Doloribus',
      code: 'BOOK0891',
      isbn: '978-0-8062-5394-7',
      language: 'Português',
      edition: '2ª',
      pages: 619,
      synopsis: `Facere exercitationem eius sapiente nostrum et tempore. Assumenda quisquam amet doloremque illo.`,
      coverUrl: 'https://dummyimage.com/57x415',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corrupti labore eveniet.`,
      subtitle: `Sit ab voluptates neque.`,
      author: `Isis Moreira`,
      publisher: `Castro`,
      publicationYear: 1972,
      genre: 'Nobis',
      code: 'BOOK0892',
      isbn: '978-0-13-250862-9',
      language: 'Português',
      edition: '5ª',
      pages: 354,
      synopsis: `Tenetur et eos numquam error harum. Reprehenderit velit cupiditate accusantium cumque facere ipsa. Nisi officiis enim iure soluta distinctio distinctio.`,
      coverUrl: 'https://dummyimage.com/812x414',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quod.`,
      subtitle: `Harum aut culpa hic.`,
      author: `Luiz Gustavo Alves`,
      publisher: `da Rocha Nunes Ltda.`,
      publicationYear: 1996,
      genre: 'Sequi',
      code: 'BOOK0893',
      isbn: '978-1-74911-634-4',
      language: 'Português',
      edition: '4ª',
      pages: 486,
      synopsis: `Dolorem atque quae. Harum doloremque fugiat debitis.`,
      coverUrl: 'https://placekitten.com/294/561',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Esse enim a.`,
      subtitle: null,
      author: `Helena Ramos`,
      publisher: `da Costa`,
      publicationYear: 2011,
      genre: 'Dolorem',
      code: 'BOOK0894',
      isbn: '978-0-10-848610-4',
      language: 'Português',
      edition: '1ª',
      pages: 490,
      synopsis: `Quibusdam qui ratione delectus harum ab. Nihil odio ipsam nostrum excepturi maiores. Autem reprehenderit fugit reprehenderit temporibus eius vitae impedit.`,
      coverUrl: 'https://placekitten.com/1006/589',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Soluta dolore repudiandae.`,
      subtitle: `Inventore animi debitis.`,
      author: `Emilly da Costa`,
      publisher: `Souza da Mota Ltda.`,
      publicationYear: 2009,
      genre: 'Fugiat',
      code: 'BOOK0895',
      isbn: '978-0-7110-7298-5',
      language: 'Português',
      edition: '3ª',
      pages: 564,
      synopsis: `Cumque optio ad. Odit quibusdam saepe inventore atque molestiae. Ut omnis quod libero aspernatur.`,
      coverUrl: 'https://placekitten.com/932/648',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quasi architecto.`,
      subtitle: `Ullam sint possimus eos quis debitis.`,
      author: `Yuri da Mata`,
      publisher: `Moraes e Filhos`,
      publicationYear: 2010,
      genre: 'Ducimus',
      code: 'BOOK0896',
      isbn: '978-1-217-68012-4',
      language: 'Português',
      edition: '2ª',
      pages: 258,
      synopsis: `Inventore ex aliquid eveniet animi qui voluptates consequatur. Aperiam suscipit eos amet repellendus porro cumque aliquid. Laborum nobis repellendus ratione.`,
      coverUrl: 'https://placekitten.com/490/471',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid totam.`,
      subtitle: null,
      author: `Daniela Rocha`,
      publisher: `Moraes`,
      publicationYear: 2000,
      genre: 'Facere',
      code: 'BOOK0897',
      isbn: '978-1-285-80330-2',
      language: 'Português',
      edition: '3ª',
      pages: 493,
      synopsis: `Odit reprehenderit enim illum doloribus consectetur. Maiores repellat ex. Quidem earum perferendis sequi.`,
      coverUrl: 'https://www.lorempixel.com/216/685',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Blanditiis commodi distinctio.`,
      subtitle: `Cupiditate animi amet ducimus ducimus nemo.`,
      author: `Miguel Cavalcanti`,
      publisher: `Ribeiro S/A`,
      publicationYear: 2022,
      genre: 'Placeat',
      code: 'BOOK0898',
      isbn: '978-0-03-456884-4',
      language: 'Português',
      edition: '2ª',
      pages: 298,
      synopsis: `Eveniet ut quidem laboriosam quos nisi. Fugiat a consequatur hic quas quisquam. Ea corporis nam molestiae deserunt maxime distinctio.`,
      coverUrl: 'https://dummyimage.com/315x728',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis nesciunt eligendi.`,
      subtitle: null,
      author: `Enrico Farias`,
      publisher: `Correia`,
      publicationYear: 2004,
      genre: 'Natus',
      code: 'BOOK0899',
      isbn: '978-0-695-77526-1',
      language: 'Português',
      edition: '2ª',
      pages: 348,
      synopsis: `Enim nam amet pariatur atque deserunt iusto. Itaque corrupti rerum mollitia. Excepturi laborum suscipit culpa rerum.`,
      coverUrl: 'https://www.lorempixel.com/471/450',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Vero quis.`,
      subtitle: null,
      author: `Sr. Noah Moreira`,
      publisher: `Novaes Barbosa - EI`,
      publicationYear: 1968,
      genre: 'Ullam',
      code: 'BOOK0900',
      isbn: '978-0-298-73401-6',
      language: 'Português',
      edition: '3ª',
      pages: 353,
      synopsis: `Nulla nobis saepe esse voluptatem. Quas dicta sit ipsum iure.`,
      coverUrl: 'https://placeimg.com/564/81/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Modi nobis facilis.`,
      subtitle: null,
      author: `Heloísa Rocha`,
      publisher: `Dias`,
      publicationYear: 1999,
      genre: 'Similique',
      code: 'BOOK0901',
      isbn: '978-0-03-405736-2',
      language: 'Português',
      edition: '4ª',
      pages: 700,
      synopsis: `Atque amet sint accusantium repellat provident libero sunt. Numquam eius dolor labore quae cum. Tempore magnam recusandae itaque.`,
      coverUrl: 'https://placeimg.com/929/139/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nihil harum magni.`,
      subtitle: `Doloremque doloribus quis blanditiis.`,
      author: `Luiz Otávio Melo`,
      publisher: `Peixoto`,
      publicationYear: 1988,
      genre: 'Odio',
      code: 'BOOK0902',
      isbn: '978-0-657-28182-3',
      language: 'Português',
      edition: '5ª',
      pages: 645,
      synopsis: `Cumque laudantium natus odit. Magni tenetur cum neque perferendis aperiam sunt. Odit eos quaerat. Perspiciatis nam ex facilis iure dolorem.`,
      coverUrl: 'https://placeimg.com/569/439/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dicta minus fuga.`,
      subtitle: null,
      author: `Luna Aragão`,
      publisher: `Costa`,
      publicationYear: 1994,
      genre: 'Nostrum',
      code: 'BOOK0903',
      isbn: '978-1-81440-004-0',
      language: 'Português',
      edition: '2ª',
      pages: 375,
      synopsis: `Fuga aliquid dolores similique commodi quas.`,
      coverUrl: 'https://placeimg.com/639/82/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum nesciunt minima cum.`,
      subtitle: `Magnam tempore quibusdam esse iste dignissimos.`,
      author: `Francisco Rodrigues`,
      publisher: `Moura Correia e Filhos`,
      publicationYear: 1958,
      genre: 'Saepe',
      code: 'BOOK0904',
      isbn: '978-0-665-47587-0',
      language: 'Português',
      edition: '4ª',
      pages: 637,
      synopsis: `Veritatis laborum architecto animi praesentium. Voluptate quia corporis officia nihil. Possimus libero blanditiis eum quaerat a.`,
      coverUrl: 'https://placekitten.com/218/973',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Praesentium ducimus.`,
      subtitle: `Expedita veritatis animi eos.`,
      author: `Caio Oliveira`,
      publisher: `Sales`,
      publicationYear: 1967,
      genre: 'Omnis',
      code: 'BOOK0905',
      isbn: '978-0-7071-2797-2',
      language: 'Português',
      edition: '2ª',
      pages: 598,
      synopsis: `Inventore qui eveniet illum reiciendis eos. Culpa quam totam porro distinctio molestias aut.`,
      coverUrl: 'https://placeimg.com/833/945/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ut cumque.`,
      subtitle: `Alias qui est veritatis id.`,
      author: `Murilo Campos`,
      publisher: `Silva`,
      publicationYear: 1973,
      genre: 'Ipsa',
      code: 'BOOK0906',
      isbn: '978-1-72560-467-4',
      language: 'Português',
      edition: '2ª',
      pages: 365,
      synopsis: `Voluptatem aliquid dignissimos nulla. Possimus autem quae praesentium adipisci repellat. Tenetur dolores adipisci numquam voluptatibus dolorem.`,
      coverUrl: 'https://www.lorempixel.com/276/316',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugit ipsa voluptas.`,
      subtitle: `Omnis eveniet quasi debitis.`,
      author: `Pedro Lucas Correia`,
      publisher: `Freitas`,
      publicationYear: 1965,
      genre: 'Est',
      code: 'BOOK0907',
      isbn: '978-0-286-17805-1',
      language: 'Português',
      edition: '3ª',
      pages: 165,
      synopsis: `Dolores vitae adipisci ex. Delectus dolore quod ipsam nam. Harum explicabo rerum consequatur beatae blanditiis ipsam.`,
      coverUrl: 'https://placeimg.com/712/748/any',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Maiores.`,
      subtitle: `Numquam fuga natus minus.`,
      author: `Gustavo Carvalho`,
      publisher: `da Mota Mendes e Filhos`,
      publicationYear: 1962,
      genre: 'Repudiandae',
      code: 'BOOK0908',
      isbn: '978-0-586-92635-2',
      language: 'Português',
      edition: '1ª',
      pages: 162,
      synopsis: `Alias officia ex. Aperiam assumenda reiciendis veritatis sit ipsum. Asperiores nesciunt labore maxime nihil dolor.`,
      coverUrl: 'https://dummyimage.com/353x930',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam dolorum.`,
      subtitle: `Minus accusantium architecto voluptatibus incidunt.`,
      author: `Carlos Eduardo da Paz`,
      publisher: `Peixoto`,
      publicationYear: 1950,
      genre: 'Commodi',
      code: 'BOOK0909',
      isbn: '978-1-61526-532-9',
      language: 'Português',
      edition: '4ª',
      pages: 717,
      synopsis: `Sed ratione temporibus quo. Qui magni voluptatem.`,
      coverUrl: 'https://placekitten.com/4/219',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Porro cumque quam.`,
      subtitle: `Nulla modi aliquam.`,
      author: `Maria Vitória Fernandes`,
      publisher: `Porto Jesus - EI`,
      publicationYear: 1993,
      genre: 'Vel',
      code: 'BOOK0910',
      isbn: '978-0-681-79300-2',
      language: 'Português',
      edition: '3ª',
      pages: 345,
      synopsis: `Eum molestiae nihil. Ex omnis voluptatibus. Molestias eaque deserunt.`,
      coverUrl: 'https://placekitten.com/578/51',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quod.`,
      subtitle: `Possimus tempora excepturi.`,
      author: `Srta. Heloísa Silveira`,
      publisher: `Azevedo`,
      publicationYear: 2001,
      genre: 'Tempora',
      code: 'BOOK0911',
      isbn: '978-0-311-66946-2',
      language: 'Português',
      edition: '2ª',
      pages: 126,
      synopsis: `Vero asperiores totam sunt.`,
      coverUrl: 'https://placeimg.com/880/917/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Corporis beatae.`,
      subtitle: `Necessitatibus sint id culpa itaque.`,
      author: `Pedro Henrique Silva`,
      publisher: `Martins`,
      publicationYear: 2010,
      genre: 'Sapiente',
      code: 'BOOK0912',
      isbn: '978-0-609-20331-6',
      language: 'Português',
      edition: '5ª',
      pages: 523,
      synopsis: `Fuga voluptas explicabo quaerat sit quis. Explicabo sed ullam occaecati distinctio eligendi.`,
      coverUrl: 'https://placekitten.com/707/117',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Unde necessitatibus.`,
      subtitle: null,
      author: `Evelyn Castro`,
      publisher: `Fogaça`,
      publicationYear: 1991,
      genre: 'Libero',
      code: 'BOOK0913',
      isbn: '978-1-295-32230-5',
      language: 'Português',
      edition: '4ª',
      pages: 339,
      synopsis: `Voluptatibus tempora voluptatem mollitia. Harum atque delectus atque dolor sint facilis. Laudantium eum id magnam accusamus eum.`,
      coverUrl: 'https://placekitten.com/409/502',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quas.`,
      subtitle: null,
      author: `João Lucas Fogaça`,
      publisher: `da Conceição`,
      publicationYear: 1962,
      genre: 'Veniam',
      code: 'BOOK0914',
      isbn: '978-1-988192-06-2',
      language: 'Português',
      edition: '4ª',
      pages: 400,
      synopsis: `Fuga nostrum debitis optio nisi repellat. Ipsa cum dolores molestiae assumenda cupiditate excepturi. Commodi dignissimos qui provident voluptatum. Odio iusto natus quibusdam veritatis cum.`,
      coverUrl: 'https://www.lorempixel.com/274/36',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Libero perspiciatis ad.`,
      subtitle: `Natus facilis totam.`,
      author: `Vinicius Nogueira`,
      publisher: `Fogaça`,
      publicationYear: 1961,
      genre: 'Odit',
      code: 'BOOK0915',
      isbn: '978-1-341-43910-0',
      language: 'Português',
      edition: '3ª',
      pages: 789,
      synopsis: `Veniam quasi commodi minus. Vitae sequi odio suscipit in laborum.`,
      coverUrl: 'https://placeimg.com/526/963/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quibusdam quae.`,
      subtitle: null,
      author: `Bruno Caldeira`,
      publisher: `Almeida`,
      publicationYear: 1980,
      genre: 'Quod',
      code: 'BOOK0916',
      isbn: '978-1-378-26018-0',
      language: 'Português',
      edition: '2ª',
      pages: 316,
      synopsis: `Quae ratione quidem officia deleniti ut ut. Consequatur distinctio dolorem nulla. Ea facere quisquam labore.`,
      coverUrl: 'https://placeimg.com/371/933/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Facere perferendis.`,
      subtitle: null,
      author: `Davi Luiz Cavalcanti`,
      publisher: `da Mata`,
      publicationYear: 1991,
      genre: 'Consectetur',
      code: 'BOOK0917',
      isbn: '978-1-84603-638-5',
      language: 'Português',
      edition: '4ª',
      pages: 387,
      synopsis: `Repudiandae quae modi molestiae magni error repellat accusamus. Iure tempore numquam sunt quo.`,
      coverUrl: 'https://placekitten.com/505/754',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quidem animi fugit.`,
      subtitle: `Placeat debitis excepturi consectetur.`,
      author: `Ana Beatriz da Costa`,
      publisher: `Lima`,
      publicationYear: 1992,
      genre: 'Nemo',
      code: 'BOOK0918',
      isbn: '978-1-79467-781-4',
      language: 'Português',
      edition: '2ª',
      pages: 689,
      synopsis: `Maxime ipsa quaerat quia aspernatur dolore nemo. Quaerat quos eveniet quos consequatur voluptas beatae nam. Cupiditate veritatis ex occaecati assumenda eligendi.`,
      coverUrl: 'https://placeimg.com/437/1012/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `In id deserunt.`,
      subtitle: null,
      author: `Isis Moraes`,
      publisher: `Sales`,
      publicationYear: 2005,
      genre: 'Veritatis',
      code: 'BOOK0919',
      isbn: '978-0-7822-0081-2',
      language: 'Português',
      edition: '2ª',
      pages: 328,
      synopsis: `Atque ducimus magnam.`,
      coverUrl: 'https://www.lorempixel.com/835/852',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Delectus assumenda laborum.`,
      subtitle: `Excepturi ducimus nesciunt quidem aliquam praesentium.`,
      author: `Ana Luiza Alves`,
      publisher: `Almeida e Filhos`,
      publicationYear: 2025,
      genre: 'Fuga',
      code: 'BOOK0920',
      isbn: '978-1-242-27496-1',
      language: 'Português',
      edition: '2ª',
      pages: 218,
      synopsis: `Provident consectetur error maiores sequi veniam. Beatae commodi iure quia aperiam officiis. Dignissimos velit eveniet velit iure.`,
      coverUrl: 'https://placeimg.com/916/991/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio temporibus ratione.`,
      subtitle: `Harum rerum ex.`,
      author: `Giovanna Barros`,
      publisher: `Campos Alves Ltda.`,
      publicationYear: 2025,
      genre: 'Voluptatum',
      code: 'BOOK0921',
      isbn: '978-0-407-71280-5',
      language: 'Português',
      edition: '5ª',
      pages: 294,
      synopsis: `Velit voluptatibus nisi laboriosam. Voluptatum hic provident impedit quis. Labore recusandae tempore quibusdam itaque.`,
      coverUrl: 'https://dummyimage.com/348x593',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Harum magnam repellat.`,
      subtitle: `Dolor expedita deserunt.`,
      author: `Isadora da Conceição`,
      publisher: `Martins`,
      publicationYear: 1951,
      genre: 'Quibusdam',
      code: 'BOOK0922',
      isbn: '978-1-7350781-0-6',
      language: 'Português',
      edition: '5ª',
      pages: 571,
      synopsis: `Minima dolore nisi repellat. Eaque quas quibusdam vitae asperiores perspiciatis. Ea possimus ratione dignissimos.`,
      coverUrl: 'https://www.lorempixel.com/829/484',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Hic similique totam.`,
      subtitle: null,
      author: `Dr. Samuel Jesus`,
      publisher: `das Neves`,
      publicationYear: 1968,
      genre: 'Repellendus',
      code: 'BOOK0923',
      isbn: '978-1-195-66300-3',
      language: 'Português',
      edition: '5ª',
      pages: 390,
      synopsis: `Harum quae blanditiis voluptatibus facere. Harum animi magni sit. Sit saepe magnam at.`,
      coverUrl: 'https://placeimg.com/745/400/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatibus occaecati nobis facilis.`,
      subtitle: null,
      author: `Lucca da Cruz`,
      publisher: `Viana`,
      publicationYear: 1965,
      genre: 'Mollitia',
      code: 'BOOK0924',
      isbn: '978-1-70554-899-8',
      language: 'Português',
      edition: '3ª',
      pages: 687,
      synopsis: `At delectus nesciunt non non nobis atque.`,
      coverUrl: 'https://placeimg.com/598/374/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Architecto.`,
      subtitle: null,
      author: `Ana Farias`,
      publisher: `Cavalcanti da Rosa S.A.`,
      publicationYear: 1992,
      genre: 'Mollitia',
      code: 'BOOK0925',
      isbn: '978-1-4602-1368-1',
      language: 'Português',
      edition: '2ª',
      pages: 315,
      synopsis: `Asperiores libero assumenda consequatur non. Minima cupiditate numquam fugiat. Explicabo impedit assumenda ipsa voluptates facilis nam culpa.`,
      coverUrl: 'https://placekitten.com/450/754',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Porro eum.`,
      subtitle: null,
      author: `Natália Araújo`,
      publisher: `da Mota`,
      publicationYear: 1970,
      genre: 'Ab',
      code: 'BOOK0926',
      isbn: '978-0-8293-3528-6',
      language: 'Português',
      edition: '1ª',
      pages: 661,
      synopsis: `Nostrum aut quas deserunt rem nisi illum. Velit illum optio sed libero impedit perspiciatis. Alias placeat tempore doloribus quidem unde.`,
      coverUrl: 'https://www.lorempixel.com/251/723',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestias vel laboriosam.`,
      subtitle: `Qui reprehenderit velit quibusdam quia.`,
      author: `Sr. Pietro Alves`,
      publisher: `Souza`,
      publicationYear: 1986,
      genre: 'Accusamus',
      code: 'BOOK0927',
      isbn: '978-0-88679-744-7',
      language: 'Português',
      edition: '3ª',
      pages: 299,
      synopsis: `Aspernatur distinctio minus quo molestias incidunt. Rerum ratione eos quis doloribus. Doloremque repellendus ipsam quia illum.`,
      coverUrl: 'https://placeimg.com/468/406/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempora corporis recusandae.`,
      subtitle: null,
      author: `Sra. Bárbara Santos`,
      publisher: `Cardoso Ltda.`,
      publicationYear: 1988,
      genre: 'A',
      code: 'BOOK0928',
      isbn: '978-0-7438-7345-1',
      language: 'Português',
      edition: '4ª',
      pages: 770,
      synopsis: `Vitae beatae enim eum odio dolorum.`,
      coverUrl: 'https://www.lorempixel.com/267/853',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam tenetur natus cum.`,
      subtitle: `Earum veniam laborum.`,
      author: `Juan Nascimento`,
      publisher: `Teixeira e Filhos`,
      publicationYear: 1975,
      genre: 'Ipsum',
      code: 'BOOK0929',
      isbn: '978-0-7473-6653-9',
      language: 'Português',
      edition: '1ª',
      pages: 470,
      synopsis: `Officia minima minima rem magni nisi. Temporibus sit iste doloribus reiciendis nostrum. Vero eaque recusandae nobis hic. Doloribus natus debitis laboriosam labore laboriosam.`,
      coverUrl: 'https://dummyimage.com/485x898',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequuntur magni.`,
      subtitle: null,
      author: `Laís Pires`,
      publisher: `Nogueira`,
      publicationYear: 1962,
      genre: 'Aut',
      code: 'BOOK0930',
      isbn: '978-1-55798-322-0',
      language: 'Português',
      edition: '3ª',
      pages: 585,
      synopsis: `Odit adipisci animi. Accusamus enim qui ipsa fugit mollitia eligendi eum. Architecto dolore esse delectus illum similique qui. Aut consequatur nostrum doloribus sunt animi voluptatem.`,
      coverUrl: 'https://dummyimage.com/832x688',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fuga recusandae.`,
      subtitle: null,
      author: `Sra. Mariana Ribeiro`,
      publisher: `Viana`,
      publicationYear: 2001,
      genre: 'Adipisci',
      code: 'BOOK0931',
      isbn: '978-0-8219-6087-5',
      language: 'Português',
      edition: '2ª',
      pages: 134,
      synopsis: `Quisquam eveniet iusto officiis mollitia quod ratione. Iure vel dolorum nihil iusto. Neque repellat quam sint sapiente.`,
      coverUrl: 'https://placeimg.com/843/55/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum magnam eveniet.`,
      subtitle: null,
      author: `Sr. Vitor Gabriel Caldeira`,
      publisher: `Freitas`,
      publicationYear: 1998,
      genre: 'Maiores',
      code: 'BOOK0932',
      isbn: '978-1-296-29010-8',
      language: 'Português',
      edition: '1ª',
      pages: 574,
      synopsis: `Doloremque delectus veniam illo corporis maxime exercitationem harum. Ex esse aspernatur. Incidunt commodi itaque eum nesciunt saepe.`,
      coverUrl: 'https://placekitten.com/905/337',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Mollitia quaerat nihil.`,
      subtitle: `Itaque alias magni magnam ab eveniet.`,
      author: `Sr. Ryan Vieira`,
      publisher: `Moreira S.A.`,
      publicationYear: 1965,
      genre: 'Mollitia',
      code: 'BOOK0933',
      isbn: '978-1-268-39507-7',
      language: 'Português',
      edition: '4ª',
      pages: 756,
      synopsis: `Aspernatur deleniti aliquid non ipsum aperiam.`,
      coverUrl: 'https://placekitten.com/263/218',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestias mollitia quos.`,
      subtitle: null,
      author: `Lucca Silveira`,
      publisher: `das Neves`,
      publicationYear: 1962,
      genre: 'Odio',
      code: 'BOOK0934',
      isbn: '978-0-492-41371-7',
      language: 'Português',
      edition: '5ª',
      pages: 285,
      synopsis: `A suscipit porro necessitatibus repudiandae. Fuga dolor illum ea ullam dignissimos similique. Ut incidunt cum modi incidunt pariatur aliquid.`,
      coverUrl: 'https://placeimg.com/817/972/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatum expedita explicabo.`,
      subtitle: `Quasi quidem eveniet aut.`,
      author: `Ian Pires`,
      publisher: `Costela`,
      publicationYear: 2018,
      genre: 'Libero',
      code: 'BOOK0935',
      isbn: '978-1-02-589881-0',
      language: 'Português',
      edition: '2ª',
      pages: 515,
      synopsis: `Molestiae eum eveniet ipsum distinctio laborum eos facere.`,
      coverUrl: 'https://www.lorempixel.com/967/305',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusantium enim beatae.`,
      subtitle: null,
      author: `Bruno Moura`,
      publisher: `Rezende e Filhos`,
      publicationYear: 1976,
      genre: 'Incidunt',
      code: 'BOOK0936',
      isbn: '978-0-660-81611-1',
      language: 'Português',
      edition: '1ª',
      pages: 285,
      synopsis: `Occaecati voluptas at officia accusantium eius. Aliquid aliquam repudiandae excepturi error veniam. Nesciunt consectetur labore illo tempora numquam alias.`,
      coverUrl: 'https://placekitten.com/787/635',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Doloribus ipsa expedita possimus.`,
      subtitle: `Veniam ullam dolore omnis distinctio dolor.`,
      author: `Luigi Cunha`,
      publisher: `Jesus Moreira Ltda.`,
      publicationYear: 2023,
      genre: 'Quaerat',
      code: 'BOOK0937',
      isbn: '978-1-08-335142-5',
      language: 'Português',
      edition: '2ª',
      pages: 768,
      synopsis: `Officia sit nostrum rerum illum. Perferendis alias aliquam alias explicabo.`,
      coverUrl: 'https://placeimg.com/37/559/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odio sapiente autem.`,
      subtitle: null,
      author: `Rodrigo Nascimento`,
      publisher: `Pires S/A`,
      publicationYear: 2014,
      genre: 'Recusandae',
      code: 'BOOK0938',
      isbn: '978-0-17-098166-8',
      language: 'Português',
      edition: '3ª',
      pages: 472,
      synopsis: `Aut tempora dolorem occaecati eos nobis perspiciatis. Atque amet fugit eveniet unde harum corrupti. Doloremque culpa expedita in consectetur illo.`,
      coverUrl: 'https://dummyimage.com/926x808',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ratione velit.`,
      subtitle: `Explicabo libero quia nesciunt est eius.`,
      author: `Matheus Caldeira`,
      publisher: `Costa`,
      publicationYear: 2016,
      genre: 'Omnis',
      code: 'BOOK0939',
      isbn: '978-0-15-716042-0',
      language: 'Português',
      edition: '3ª',
      pages: 774,
      synopsis: `Eaque tenetur dolorum assumenda. Ex sed ea autem delectus ea. Placeat magnam odio nobis recusandae qui.`,
      coverUrl: 'https://placekitten.com/585/755',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio saepe.`,
      subtitle: null,
      author: `Enzo Gabriel Rezende`,
      publisher: `Fernandes - EI`,
      publicationYear: 2015,
      genre: 'Quae',
      code: 'BOOK0940',
      isbn: '978-1-209-38373-6',
      language: 'Português',
      edition: '2ª',
      pages: 201,
      synopsis: `Ut quasi est cupiditate labore impedit. Eligendi perspiciatis est ea quis earum reiciendis. Possimus deleniti deleniti culpa explicabo harum. Deserunt repellendus inventore corrupti at modi vel.`,
      coverUrl: 'https://www.lorempixel.com/737/705',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repellat.`,
      subtitle: `Earum consequatur voluptas facere consequuntur.`,
      author: `Heloísa Almeida`,
      publisher: `Nunes`,
      publicationYear: 1977,
      genre: 'Quis',
      code: 'BOOK0941',
      isbn: '978-1-82072-712-4',
      language: 'Português',
      edition: '2ª',
      pages: 716,
      synopsis: `Dignissimos adipisci optio omnis distinctio. Vel quasi dolorum illum culpa dolorum culpa. Commodi ipsum quam ipsa ipsa nostrum.`,
      coverUrl: 'https://placeimg.com/253/599/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptas odit itaque.`,
      subtitle: null,
      author: `Nathan da Costa`,
      publisher: `Fogaça`,
      publicationYear: 2004,
      genre: 'Sequi',
      code: 'BOOK0942',
      isbn: '978-0-367-57266-2',
      language: 'Português',
      edition: '1ª',
      pages: 663,
      synopsis: `Quae nobis soluta tenetur ex. Officiis tempore officia distinctio delectus deleniti. Commodi quae quod soluta laborum nisi.`,
      coverUrl: 'https://placekitten.com/699/498',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos.`,
      subtitle: null,
      author: `Nina Teixeira`,
      publisher: `da Mota da Paz S/A`,
      publicationYear: 2004,
      genre: 'Ullam',
      code: 'BOOK0943',
      isbn: '978-0-8016-6480-9',
      language: 'Português',
      edition: '2ª',
      pages: 648,
      synopsis: `Incidunt modi sit sit dolore. Saepe qui nostrum sit veritatis asperiores explicabo.`,
      coverUrl: 'https://www.lorempixel.com/493/991',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laborum ea assumenda.`,
      subtitle: `Neque assumenda perferendis quod accusamus.`,
      author: `Carolina Duarte`,
      publisher: `Moraes`,
      publicationYear: 1969,
      genre: 'Assumenda',
      code: 'BOOK0944',
      isbn: '978-1-02-622478-6',
      language: 'Português',
      edition: '3ª',
      pages: 544,
      synopsis: `Corporis unde excepturi odit. Voluptatibus corporis vero incidunt odit velit quod. Aliquam impedit aperiam minus alias eum. Sapiente suscipit libero officiis hic quae sunt.`,
      coverUrl: 'https://placeimg.com/131/76/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Delectus veritatis minus.`,
      subtitle: `Ut amet modi in at.`,
      author: `Maria Eduarda da Cruz`,
      publisher: `Gonçalves S/A`,
      publicationYear: 2018,
      genre: 'Numquam',
      code: 'BOOK0945',
      isbn: '978-1-308-71439-4',
      language: 'Português',
      edition: '1ª',
      pages: 800,
      synopsis: `Nulla nobis veritatis ad amet.`,
      coverUrl: 'https://placeimg.com/801/362/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis.`,
      subtitle: null,
      author: `Pedro Lucas da Luz`,
      publisher: `Sales`,
      publicationYear: 1968,
      genre: 'Illo',
      code: 'BOOK0946',
      isbn: '978-1-988892-13-9',
      language: 'Português',
      edition: '2ª',
      pages: 380,
      synopsis: `Dolorem blanditiis ex cupiditate nisi repudiandae cupiditate. Iste perspiciatis vitae eveniet alias error perferendis.`,
      coverUrl: 'https://placeimg.com/509/605/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Eos odit magni.`,
      subtitle: null,
      author: `Valentina Lima`,
      publisher: `Fogaça`,
      publicationYear: 1965,
      genre: 'Odit',
      code: 'BOOK0947',
      isbn: '978-0-7924-6366-5',
      language: 'Português',
      edition: '2ª',
      pages: 639,
      synopsis: `Doloribus sapiente facere odit facilis accusantium rerum. Molestias molestiae facere accusamus qui quibusdam. Nulla amet deleniti. Ratione atque soluta recusandae quisquam voluptatibus.`,
      coverUrl: 'https://placekitten.com/1024/4',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio beatae.`,
      subtitle: null,
      author: `Dr. Nathan Peixoto`,
      publisher: `Aragão`,
      publicationYear: 1962,
      genre: 'Cum',
      code: 'BOOK0948',
      isbn: '978-0-460-19335-1',
      language: 'Português',
      edition: '1ª',
      pages: 274,
      synopsis: `Sed ipsa voluptates. Amet necessitatibus aspernatur harum eius quis.`,
      coverUrl: 'https://dummyimage.com/816x464',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugit eos.`,
      subtitle: `Veritatis deleniti ab labore porro commodi.`,
      author: `Evelyn Lopes`,
      publisher: `Fernandes`,
      publicationYear: 1966,
      genre: 'Aperiam',
      code: 'BOOK0949',
      isbn: '978-0-9950819-0-1',
      language: 'Português',
      edition: '3ª',
      pages: 109,
      synopsis: `Impedit ipsam repellat odit culpa impedit.`,
      coverUrl: 'https://placekitten.com/462/747',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Iusto inventore.`,
      subtitle: null,
      author: `Sr. Francisco Correia`,
      publisher: `Araújo da Costa e Filhos`,
      publicationYear: 1984,
      genre: 'Ea',
      code: 'BOOK0950',
      isbn: '978-1-106-65602-5',
      language: 'Português',
      edition: '1ª',
      pages: 754,
      synopsis: `Cumque deserunt sunt ipsam enim optio neque facilis. Libero deleniti consectetur libero.`,
      coverUrl: 'https://dummyimage.com/1010x712',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptates et iure.`,
      subtitle: `Numquam tenetur unde nisi quae id.`,
      author: `Dra. Elisa Castro`,
      publisher: `Cavalcanti`,
      publicationYear: 1995,
      genre: 'Ipsum',
      code: 'BOOK0951',
      isbn: '978-0-14-241248-0',
      language: 'Português',
      edition: '4ª',
      pages: 614,
      synopsis: `Suscipit vitae ipsam asperiores perferendis dignissimos. Unde iusto sapiente quae.`,
      coverUrl: 'https://placeimg.com/189/1/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nisi est velit.`,
      subtitle: null,
      author: `Ana Beatriz Viana`,
      publisher: `Ribeiro`,
      publicationYear: 2002,
      genre: 'Ab',
      code: 'BOOK0952',
      isbn: '978-1-01-176170-8',
      language: 'Português',
      edition: '3ª',
      pages: 192,
      synopsis: `Dignissimos soluta beatae perferendis. Distinctio dolore at veritatis occaecati officiis iste. Vel vitae iusto.`,
      coverUrl: 'https://placeimg.com/779/732/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Accusamus aperiam.`,
      subtitle: null,
      author: `Raul Lopes`,
      publisher: `Costela`,
      publicationYear: 1960,
      genre: 'Natus',
      code: 'BOOK0953',
      isbn: '978-1-82411-643-6',
      language: 'Português',
      edition: '3ª',
      pages: 667,
      synopsis: `Esse optio voluptates architecto. Ducimus voluptatum et eos.`,
      coverUrl: 'https://dummyimage.com/810x893',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tenetur minus.`,
      subtitle: `Dolorem sapiente officia.`,
      author: `Cauê Cardoso`,
      publisher: `Pereira - EI`,
      publicationYear: 2018,
      genre: 'Facilis',
      code: 'BOOK0954',
      isbn: '978-0-389-51592-0',
      language: 'Português',
      edition: '1ª',
      pages: 515,
      synopsis: `Ullam in et aperiam quidem. Incidunt eveniet quis doloremque veniam.`,
      coverUrl: 'https://www.lorempixel.com/553/644',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Alias eum reprehenderit.`,
      subtitle: `Atque sunt labore.`,
      author: `Ana Lívia das Neves`,
      publisher: `Pereira`,
      publicationYear: 2017,
      genre: 'Excepturi',
      code: 'BOOK0955',
      isbn: '978-0-7890-7869-8',
      language: 'Português',
      edition: '5ª',
      pages: 143,
      synopsis: `Quibusdam amet nam quisquam dolorem accusamus autem. Odio vitae odit laborum saepe dolores. Praesentium fuga omnis officiis non.`,
      coverUrl: 'https://placeimg.com/509/884/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Consequatur.`,
      subtitle: `Magnam facere saepe facilis dolores.`,
      author: `Pietra Rocha`,
      publisher: `Barros`,
      publicationYear: 1967,
      genre: 'Facere',
      code: 'BOOK0956',
      isbn: '978-0-7011-8596-1',
      language: 'Português',
      edition: '5ª',
      pages: 461,
      synopsis: `Possimus eaque accusantium nulla cumque accusantium quam. Adipisci expedita ullam corrupti architecto eaque. Hic magnam id dignissimos.`,
      coverUrl: 'https://www.lorempixel.com/352/589',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Velit atque nisi.`,
      subtitle: null,
      author: `Arthur Nascimento`,
      publisher: `Rodrigues Silva e Filhos`,
      publicationYear: 1993,
      genre: 'Similique',
      code: 'BOOK0957',
      isbn: '978-0-683-11217-7',
      language: 'Português',
      edition: '2ª',
      pages: 652,
      synopsis: `Nobis soluta corrupti repudiandae cum dolores. Delectus hic libero expedita. Maxime exercitationem quidem inventore incidunt. Praesentium vero ea deleniti ratione libero provident.`,
      coverUrl: 'https://dummyimage.com/386x294',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officiis doloremque laudantium.`,
      subtitle: `Debitis quos perspiciatis est.`,
      author: `André Fernandes`,
      publisher: `Azevedo Pires - EI`,
      publicationYear: 2022,
      genre: 'Excepturi',
      code: 'BOOK0958',
      isbn: '978-1-158-71994-5',
      language: 'Português',
      edition: '4ª',
      pages: 322,
      synopsis: `Amet similique eveniet necessitatibus optio sed. Dolorem sit odit tenetur sint nemo.`,
      coverUrl: 'https://placeimg.com/735/1006/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reiciendis provident dolore eos.`,
      subtitle: `Laborum itaque expedita corrupti.`,
      author: `Rebeca Castro`,
      publisher: `Cardoso`,
      publicationYear: 2008,
      genre: 'Debitis',
      code: 'BOOK0959',
      isbn: '978-0-351-11330-7',
      language: 'Português',
      edition: '3ª',
      pages: 405,
      synopsis: `Labore deleniti veniam. Debitis ea voluptate.`,
      coverUrl: 'https://www.lorempixel.com/571/590',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Distinctio reprehenderit.`,
      subtitle: `Delectus sequi temporibus.`,
      author: `Luana Farias`,
      publisher: `Ribeiro`,
      publicationYear: 1962,
      genre: 'Assumenda',
      code: 'BOOK0960',
      isbn: '978-0-913708-58-3',
      language: 'Português',
      edition: '4ª',
      pages: 603,
      synopsis: `Dignissimos nulla commodi veniam beatae repellendus qui. Consequuntur officiis maiores nulla. Distinctio architecto autem doloremque unde sapiente error quaerat.`,
      coverUrl: 'https://dummyimage.com/504x6',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Rerum' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Odit voluptates ipsa.`,
      subtitle: null,
      author: `Srta. Maria Cecília Costa`,
      publisher: `das Neves S.A.`,
      publicationYear: 1950,
      genre: 'Occaecati',
      code: 'BOOK0961',
      isbn: '978-1-946245-54-0',
      language: 'Português',
      edition: '2ª',
      pages: 772,
      synopsis: `Sequi sunt accusamus eum doloremque explicabo.`,
      coverUrl: 'https://placekitten.com/266/418',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quam pariatur quod.`,
      subtitle: `Pariatur repellat natus.`,
      author: `Srta. Manuela Martins`,
      publisher: `Cunha e Filhos`,
      publicationYear: 1973,
      genre: 'Quibusdam',
      code: 'BOOK0962',
      isbn: '978-1-79825-875-0',
      language: 'Português',
      edition: '5ª',
      pages: 375,
      synopsis: `Architecto fuga quo aut sunt rem doloremque. Ipsum accusamus illum.`,
      coverUrl: 'https://placeimg.com/1010/124/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quisquam doloremque.`,
      subtitle: null,
      author: `Murilo Campos`,
      publisher: `Carvalho`,
      publicationYear: 1950,
      genre: 'Corporis',
      code: 'BOOK0963',
      isbn: '978-1-309-37313-2',
      language: 'Português',
      edition: '3ª',
      pages: 303,
      synopsis: `Dolorem laudantium aspernatur iure. Laborum occaecati distinctio impedit repellat.`,
      coverUrl: 'https://www.lorempixel.com/280/104',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptates fuga.`,
      subtitle: `Aliquid corporis atque.`,
      author: `Gabriel Porto`,
      publisher: `Costela`,
      publicationYear: 1992,
      genre: 'In',
      code: 'BOOK0964',
      isbn: '978-1-7325506-5-0',
      language: 'Português',
      edition: '1ª',
      pages: 264,
      synopsis: `Optio ad quaerat dolor rem velit numquam. Consectetur repellendus voluptates temporibus.`,
      coverUrl: 'https://placeimg.com/70/707/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Repellat voluptas ad.`,
      subtitle: `Et voluptate eum ullam.`,
      author: `Ana Luiza Peixoto`,
      publisher: `Freitas`,
      publicationYear: 1966,
      genre: 'Iste',
      code: 'BOOK0965',
      isbn: '978-1-78174-420-8',
      language: 'Português',
      edition: '3ª',
      pages: 509,
      synopsis: `Animi vero facere assumenda tempora. Unde pariatur in reiciendis eligendi natus. Aliquid quas officia reiciendis.`,
      coverUrl: 'https://www.lorempixel.com/497/72',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Dolore ducimus.`,
      subtitle: `Aspernatur sit expedita occaecati amet occaecati accusantium.`,
      author: `Fernando Fogaça`,
      publisher: `Moraes`,
      publicationYear: 1994,
      genre: 'Ipsa',
      code: 'BOOK0966',
      isbn: '978-0-00-040046-8',
      language: 'Português',
      edition: '5ª',
      pages: 113,
      synopsis: `Dolorum iure minus distinctio quasi modi. Expedita facere accusantium voluptatibus mollitia non.`,
      coverUrl: 'https://placeimg.com/577/811/any',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Et in.`,
      subtitle: `Vitae minus possimus.`,
      author: `Helena Cardoso`,
      publisher: `Santos S/A`,
      publicationYear: 1987,
      genre: 'Dolores',
      code: 'BOOK0967',
      isbn: '978-1-5250-8159-0',
      language: 'Português',
      edition: '3ª',
      pages: 597,
      synopsis: `Ad dolores excepturi accusantium sint ut architecto libero. Odio placeat laboriosam rem. Soluta repellendus rerum aut aliquam vitae.`,
      coverUrl: 'https://dummyimage.com/468x320',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Nesciunt illo.`,
      subtitle: `Cum esse fugiat.`,
      author: `Maitê Fernandes`,
      publisher: `Freitas`,
      publicationYear: 1964,
      genre: 'Modi',
      code: 'BOOK0968',
      isbn: '978-1-58924-418-4',
      language: 'Português',
      edition: '3ª',
      pages: 353,
      synopsis: `Magni quo sint sequi. Sint odio earum quia perspiciatis.`,
      coverUrl: 'https://placeimg.com/1009/321/any',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem at similique.`,
      subtitle: `Voluptas tenetur nemo esse.`,
      author: `Murilo Lima`,
      publisher: `Mendes`,
      publicationYear: 2025,
      genre: 'Quisquam',
      code: 'BOOK0969',
      isbn: '978-1-392-48878-2',
      language: 'Português',
      edition: '2ª',
      pages: 334,
      synopsis: `Quibusdam laboriosam pariatur perferendis labore rem sequi.`,
      coverUrl: 'https://placeimg.com/962/421/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Aliquid dolorum sequi.`,
      subtitle: null,
      author: `Sr. Miguel Castro`,
      publisher: `Costa`,
      publicationYear: 1968,
      genre: 'Nisi',
      code: 'BOOK0970',
      isbn: '978-1-4767-6660-7',
      language: 'Português',
      edition: '4ª',
      pages: 118,
      synopsis: `Nihil nobis tempora cum. Commodi nemo officiis distinctio ipsum. Libero unde accusamus recusandae in similique et blanditiis. Fugiat officiis quasi distinctio tempora nihil perferendis voluptatem.`,
      coverUrl: 'https://placekitten.com/993/95',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Quos labore.`,
      subtitle: `Totam voluptatibus earum explicabo ipsum sed.`,
      author: `Daniel Moreira`,
      publisher: `Cardoso Ltda.`,
      publicationYear: 1989,
      genre: 'Maxime',
      code: 'BOOK0971',
      isbn: '978-1-940998-57-2',
      language: 'Português',
      edition: '2ª',
      pages: 327,
      synopsis: `Fuga voluptatibus dolor ea. Ut mollitia explicabo quasi quae. Hic rerum quidem illum doloribus excepturi earum.`,
      coverUrl: 'https://placekitten.com/376/6',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae.`,
      subtitle: `Veritatis quos placeat cum unde.`,
      author: `Ana Souza`,
      publisher: `Ribeiro Nogueira - EI`,
      publicationYear: 1996,
      genre: 'Itaque',
      code: 'BOOK0972',
      isbn: '978-0-89426-603-4',
      language: 'Português',
      edition: '3ª',
      pages: 459,
      synopsis: `Repellat molestiae ratione deleniti iure placeat. Eaque cupiditate temporibus nobis reprehenderit. Deserunt facere animi laboriosam rerum.`,
      coverUrl: 'https://placekitten.com/210/885',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laboriosam sit.`,
      subtitle: `Perspiciatis ducimus eius autem voluptatibus.`,
      author: `Ana Clara Correia`,
      publisher: `da Mota`,
      publicationYear: 1956,
      genre: 'Vero',
      code: 'BOOK0973',
      isbn: '978-1-07-259250-1',
      language: 'Português',
      edition: '3ª',
      pages: 317,
      synopsis: `Non expedita nostrum minus laboriosam magni. Amet pariatur accusantium aperiam dolor.`,
      coverUrl: 'https://dummyimage.com/630x37',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Veniam laboriosam.`,
      subtitle: null,
      author: `Davi Pinto`,
      publisher: `Freitas Gomes S/A`,
      publicationYear: 1996,
      genre: 'Quod',
      code: 'BOOK0974',
      isbn: '978-0-695-99112-8',
      language: 'Português',
      edition: '3ª',
      pages: 411,
      synopsis: `In ea dolorum voluptatibus molestiae. Iure nobis atque ipsa facere expedita voluptate. Adipisci deleniti dolorem repellendus.`,
      coverUrl: 'https://placeimg.com/121/752/any',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Perspiciatis officia ducimus.`,
      subtitle: `Nemo unde repudiandae nam.`,
      author: `Thiago Rocha`,
      publisher: `Gomes`,
      publicationYear: 1996,
      genre: 'Dolore',
      code: 'BOOK0975',
      isbn: '978-1-377-34850-6',
      language: 'Português',
      edition: '5ª',
      pages: 641,
      synopsis: `Repellendus quasi soluta. Ratione placeat aspernatur iste dignissimos asperiores culpa.`,
      coverUrl: 'https://placekitten.com/95/675',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Harum' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Culpa ipsam.`,
      subtitle: `Corporis similique omnis esse quo maiores.`,
      author: `Sra. Bianca Novaes`,
      publisher: `Rodrigues`,
      publicationYear: 1963,
      genre: 'Repudiandae',
      code: 'BOOK0976',
      isbn: '978-1-912867-28-8',
      language: 'Português',
      edition: '2ª',
      pages: 744,
      synopsis: `Ducimus ratione fugit nulla amet accusantium fugit. Nisi sint vero fugit. Rerum eligendi quia laborum.`,
      coverUrl: 'https://dummyimage.com/152x102',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Illo.`,
      subtitle: null,
      author: `Francisco Cardoso`,
      publisher: `Ramos S/A`,
      publicationYear: 1959,
      genre: 'Reiciendis',
      code: 'BOOK0977',
      isbn: '978-0-943370-26-2',
      language: 'Português',
      edition: '5ª',
      pages: 733,
      synopsis: `Minus aut nulla dolore facere adipisci. Distinctio distinctio aperiam aspernatur sunt quaerat maiores fuga. Sapiente veritatis at dolor animi aliquid.`,
      coverUrl: 'https://placekitten.com/134/944',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Deleniti temporibus iste.`,
      subtitle: `Veritatis reiciendis voluptatum ab velit.`,
      author: `Dra. Laura da Rosa`,
      publisher: `da Rosa`,
      publicationYear: 2020,
      genre: 'Ex',
      code: 'BOOK0978',
      isbn: '978-0-10-149262-1',
      language: 'Português',
      edition: '3ª',
      pages: 673,
      synopsis: `Nulla culpa sint veniam perspiciatis ea voluptatem. Aspernatur minima ex sed nisi unde.`,
      coverUrl: 'https://placekitten.com/108/350',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Corporis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptate earum.`,
      subtitle: `Molestiae aliquam eius iusto aperiam.`,
      author: `Raquel Araújo`,
      publisher: `Jesus Ltda.`,
      publicationYear: 2014,
      genre: 'Asperiores',
      code: 'BOOK0979',
      isbn: '978-1-311-95960-7',
      language: 'Português',
      edition: '1ª',
      pages: 270,
      synopsis: `Illo quos reiciendis praesentium earum unde quidem. Non impedit sed ducimus magnam tempora fugiat.`,
      coverUrl: 'https://placekitten.com/648/967',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Fugit.`,
      subtitle: `Debitis id ea animi.`,
      author: `Emanuella Santos`,
      publisher: `Correia`,
      publicationYear: 1974,
      genre: 'Porro',
      code: 'BOOK0980',
      isbn: '978-1-182-77114-8',
      language: 'Português',
      edition: '4ª',
      pages: 606,
      synopsis: `Repudiandae atque animi vitae accusantium asperiores libero. Explicabo laudantium nam illo qui fugit. Suscipit ea quasi at error voluptates.`,
      coverUrl: 'https://dummyimage.com/281x533',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Laudantium occaecati minus.`,
      subtitle: null,
      author: `Samuel Monteiro`,
      publisher: `Campos Ltda.`,
      publicationYear: 1999,
      genre: 'Cupiditate',
      code: 'BOOK0981',
      isbn: '978-1-86268-497-3',
      language: 'Português',
      edition: '4ª',
      pages: 721,
      synopsis: `Corporis aperiam quas pariatur blanditiis.`,
      coverUrl: 'https://placeimg.com/306/11/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Optio aspernatur officiis.`,
      subtitle: null,
      author: `Kevin Teixeira`,
      publisher: `Ferreira S.A.`,
      publicationYear: 2025,
      genre: 'Nobis',
      code: 'BOOK0982',
      isbn: '978-1-239-76610-3',
      language: 'Português',
      edition: '1ª',
      pages: 625,
      synopsis: `Commodi itaque assumenda alias recusandae. Accusamus porro sit expedita vero quae. Sunt a ipsum labore dolorum magni voluptate.`,
      coverUrl: 'https://placeimg.com/742/935/any',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }, { category: { connect: { name: 'Harum' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Minus incidunt.`,
      subtitle: `Laboriosam aliquid incidunt consectetur at quas.`,
      author: `Marcos Vinicius Dias`,
      publisher: `Costa`,
      publicationYear: 1978,
      genre: 'Facilis',
      code: 'BOOK0983',
      isbn: '978-0-921527-25-1',
      language: 'Português',
      edition: '1ª',
      pages: 646,
      synopsis: `Modi deserunt veritatis iure voluptate quos amet. Perspiciatis aut porro aliquid nihil repellat repellat. Occaecati quo nihil sed voluptates molestiae at. Exercitationem illo consectetur minus.`,
      coverUrl: 'https://www.lorempixel.com/849/196',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }, { category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Molestiae corrupti laudantium.`,
      subtitle: null,
      author: `Alícia Campos`,
      publisher: `da Cunha`,
      publicationYear: 1956,
      genre: 'Architecto',
      code: 'BOOK0984',
      isbn: '978-0-7035-5959-3',
      language: 'Português',
      edition: '2ª',
      pages: 315,
      synopsis: `Commodi ipsa fugiat asperiores provident corrupti. Illo rem expedita similique unde quia harum.`,
      coverUrl: 'https://placekitten.com/111/271',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Voluptatem fugiat.`,
      subtitle: `Deleniti corporis aperiam corporis eveniet eius.`,
      author: `Marcos Vinicius Aragão`,
      publisher: `Fogaça`,
      publicationYear: 2020,
      genre: 'Ad',
      code: 'BOOK0985',
      isbn: '978-1-387-18341-8',
      language: 'Português',
      edition: '3ª',
      pages: 236,
      synopsis: `Odit ipsa eum. Maiores voluptatibus voluptas dolores quae.`,
      coverUrl: 'https://www.lorempixel.com/473/55',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Et' } } }, { category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }, { tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Inventore dolore.`,
      subtitle: null,
      author: `Dr. Alexandre Teixeira`,
      publisher: `Azevedo`,
      publicationYear: 1985,
      genre: 'Molestiae',
      code: 'BOOK0986',
      isbn: '978-0-7590-4479-1',
      language: 'Português',
      edition: '2ª',
      pages: 362,
      synopsis: `Quibusdam reprehenderit animi iusto consectetur omnis.`,
      coverUrl: 'https://placeimg.com/48/327/any',
      quantity: 1,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }, { tag: { connect: { name: 'Quae' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Ea beatae deleniti.`,
      subtitle: null,
      author: `Stella Barros`,
      publisher: `Barros`,
      publicationYear: 1978,
      genre: 'Cumque',
      code: 'BOOK0987',
      isbn: '978-1-5473-8808-0',
      language: 'Português',
      edition: '3ª',
      pages: 375,
      synopsis: `Laborum ad cum cum. Quos ipsam exercitationem dolore accusamus possimus.`,
      coverUrl: 'https://placekitten.com/738/149',
      quantity: 4,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Tempore blanditiis eveniet.`,
      subtitle: `Iusto at ipsa magni.`,
      author: `Sophie Monteiro`,
      publisher: `Moreira S/A`,
      publicationYear: 2011,
      genre: 'Eos',
      code: 'BOOK0988',
      isbn: '978-1-180-51412-9',
      language: 'Português',
      edition: '1ª',
      pages: 607,
      synopsis: `Laudantium odio aliquam.`,
      coverUrl: 'https://www.lorempixel.com/562/765',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }, { category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Incidunt nobis saepe.`,
      subtitle: `Rem culpa illum numquam.`,
      author: `Maria Eduarda Ferreira`,
      publisher: `das Neves`,
      publicationYear: 1973,
      genre: 'Quaerat',
      code: 'BOOK0989',
      isbn: '978-0-09-252390-8',
      language: 'Português',
      edition: '3ª',
      pages: 121,
      synopsis: `Facilis dicta repellat. Aspernatur error repellat commodi labore non. Nulla consequatur est voluptates architecto.`,
      coverUrl: 'https://placeimg.com/454/881/any',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Alias' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Sed' } } }, { tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Enim deleniti error voluptas.`,
      subtitle: `Perspiciatis deserunt omnis temporibus voluptas.`,
      author: `Dra. Vitória Freitas`,
      publisher: `Peixoto`,
      publicationYear: 1959,
      genre: 'Quod',
      code: 'BOOK0990',
      isbn: '978-1-08-951463-3',
      language: 'Português',
      edition: '4ª',
      pages: 351,
      synopsis: `Ipsum mollitia laboriosam illum dolorem voluptate quis. Dicta eligendi repellat distinctio.`,
      coverUrl: 'https://www.lorempixel.com/454/490',
      quantity: 8,
      categories: {
        create: [{ category: { connect: { name: 'Culpa' } } }, { category: { connect: { name: 'Veritatis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Harum quisquam eveniet.`,
      subtitle: null,
      author: `Rebeca da Costa`,
      publisher: `Aragão`,
      publicationYear: 1998,
      genre: 'Facilis',
      code: 'BOOK0991',
      isbn: '978-0-438-66684-9',
      language: 'Português',
      edition: '4ª',
      pages: 121,
      synopsis: `Repellat officiis harum. Iure labore magni in. Dicta magnam explicabo voluptas laborum minus.`,
      coverUrl: 'https://dummyimage.com/301x412',
      quantity: 2,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquid' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Recusandae.`,
      subtitle: null,
      author: `Alice Carvalho`,
      publisher: `Gonçalves Rezende - ME`,
      publicationYear: 1984,
      genre: 'Architecto',
      code: 'BOOK0992',
      isbn: '978-1-186-21098-8',
      language: 'Português',
      edition: '2ª',
      pages: 742,
      synopsis: `Saepe illo minima voluptates cupiditate officiis. Sunt molestias nemo accusamus. Quod tempore sequi magnam tenetur aperiam. Laborum aliquid quas cum.`,
      coverUrl: 'https://placeimg.com/351/545/any',
      quantity: 10,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Quae' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Magnam ad molestias.`,
      subtitle: null,
      author: `Renan Porto`,
      publisher: `da Cruz Gomes S/A`,
      publicationYear: 1993,
      genre: 'Vel',
      code: 'BOOK0993',
      isbn: '978-1-03-108083-4',
      language: 'Português',
      edition: '1ª',
      pages: 307,
      synopsis: `Quam nulla totam exercitationem quas ducimus minus. Mollitia aliquid reprehenderit veniam tempore modi deserunt.`,
      coverUrl: 'https://placeimg.com/852/651/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }, { category: { connect: { name: 'Corporis' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Totam odio harum.`,
      subtitle: `Aut architecto voluptatum porro.`,
      author: `Rafaela Pereira`,
      publisher: `Jesus`,
      publicationYear: 1969,
      genre: 'Aspernatur',
      code: 'BOOK0994',
      isbn: '978-1-4308-7803-2',
      language: 'Português',
      edition: '2ª',
      pages: 157,
      synopsis: `Cupiditate voluptate quod provident sapiente ipsa consectetur. Minus ad voluptatibus aspernatur ratione eum molestiae. Doloremque quasi dicta aspernatur.`,
      coverUrl: 'https://placeimg.com/342/244/any',
      quantity: 9,
      categories: {
        create: [{ category: { connect: { name: 'Veritatis' } } }, { category: { connect: { name: 'Culpa' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Harum consequuntur laboriosam.`,
      subtitle: `Eius quam doloribus rerum libero molestias.`,
      author: `Clarice Azevedo`,
      publisher: `Rocha`,
      publicationYear: 1987,
      genre: 'Nemo',
      code: 'BOOK0995',
      isbn: '978-0-08-407846-1',
      language: 'Português',
      edition: '1ª',
      pages: 623,
      synopsis: `Quisquam ex ipsum. Voluptas consequuntur nobis praesentium maiores et.`,
      coverUrl: 'https://dummyimage.com/875x702',
      quantity: 7,
      categories: {
        create: [{ category: { connect: { name: 'Tempore' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Commodi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Temporibus optio error.`,
      subtitle: `Ex ratione illo cupiditate.`,
      author: `Murilo Caldeira`,
      publisher: `da Cruz`,
      publicationYear: 1999,
      genre: 'Deleniti',
      code: 'BOOK0996',
      isbn: '978-1-940601-54-0',
      language: 'Português',
      edition: '2ª',
      pages: 461,
      synopsis: `Maxime ipsa unde doloremque illum. Minima voluptatibus nulla rem rerum pariatur non.`,
      coverUrl: 'https://dummyimage.com/799x282',
      quantity: 5,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Eveniet' } } }, { tag: { connect: { name: 'Nisi' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Officia ducimus officiis.`,
      subtitle: null,
      author: `Sra. Carolina Oliveira`,
      publisher: `Carvalho`,
      publicationYear: 1978,
      genre: 'Assumenda',
      code: 'BOOK0997',
      isbn: '978-1-65748-084-1',
      language: 'Português',
      edition: '1ª',
      pages: 388,
      synopsis: `Officiis aspernatur esse quo cum corporis doloremque. A id amet aspernatur reprehenderit impedit.`,
      coverUrl: 'https://www.lorempixel.com/584/799',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Quisquam' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Rerum' } } }, { tag: { connect: { name: 'Consectetur' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Reiciendis asperiores non alias.`,
      subtitle: null,
      author: `Alexandre Barros`,
      publisher: `Pinto - ME`,
      publicationYear: 1960,
      genre: 'Magnam',
      code: 'BOOK0998',
      isbn: '978-1-5430-0178-5',
      language: 'Português',
      edition: '1ª',
      pages: 719,
      synopsis: `Consectetur quasi laudantium error quis porro. Tenetur et reprehenderit.`,
      coverUrl: 'https://placeimg.com/267/696/any',
      quantity: 3,
      categories: {
        create: [{ category: { connect: { name: 'Deserunt' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Nisi' } } }, { tag: { connect: { name: 'Esse' } } }]
      }
    }
  });
  await prisma.book.create({
    data: {
      title: `Animi quo.`,
      subtitle: `Culpa illum id reprehenderit.`,
      author: `Maria Fernanda Cavalcanti`,
      publisher: `Porto S/A`,
      publicationYear: 1988,
      genre: 'Sunt',
      code: 'BOOK0999',
      isbn: '978-0-17-134025-9',
      language: 'Português',
      edition: '5ª',
      pages: 393,
      synopsis: `Illum debitis voluptatem.`,
      coverUrl: 'https://dummyimage.com/861x526',
      quantity: 6,
      categories: {
        create: [{ category: { connect: { name: 'Exercitationem' } } }]
      },
      tags: {
        create: [{ tag: { connect: { name: 'Consectetur' } } }, { tag: { connect: { name: 'Aliquam' } } }]
      }
    }
  });

  // Reviews
  await prisma.review.createMany({ data: [
    {
      userId: 'user-045',
      bookId: 'BOOK0817',
      rating: 1,
      comment: `Dolor saepe accusamus dignissimos soluta eos molestiae.`,
      createdAt: new Date('2025-01-01T00:19:32')
    },
    {
      userId: 'user-000',
      bookId: 'BOOK0882',
      rating: 2,
      comment: `Quae architecto tempora in neque aperiam nemo.`,
      createdAt: new Date('2025-05-07T02:09:48')
    },
    {
      userId: 'user-049',
      bookId: 'BOOK0671',
      rating: 2,
      comment: `Beatae sint laboriosam similique amet id.`,
      createdAt: new Date('2025-03-19T03:35:15')
    },
    {
      userId: 'user-020',
      bookId: 'BOOK0151',
      rating: 4,
      comment: `Amet inventore sit animi nemo eaque blanditiis omnis.`,
      createdAt: new Date('2025-04-22T11:35:35')
    },
    {
      userId: 'user-028',
      bookId: 'BOOK0738',
      rating: 4,
      comment: `Ipsam inventore dicta nisi voluptatem impedit adipisci.`,
      createdAt: new Date('2025-06-30T14:30:54')
    },
    {
      userId: 'user-004',
      bookId: 'BOOK0115',
      rating: 5,
      comment: `Harum aliquid itaque nulla repudiandae sint corrupti sint.`,
      createdAt: new Date('2025-04-10T06:41:57')
    },
    {
      userId: 'user-027',
      bookId: 'BOOK0982',
      rating: 3,
      comment: `Accusantium pariatur laudantium maxime quae.`,
      createdAt: new Date('2025-03-29T19:57:26')
    },
    {
      userId: 'user-009',
      bookId: 'BOOK0092',
      rating: 3,
      comment: `Molestiae temporibus corrupti quod iste numquam voluptates.`,
      createdAt: new Date('2025-05-24T20:26:04')
    },
    {
      userId: 'user-008',
      bookId: 'BOOK0186',
      rating: 4,
      comment: `Modi inventore debitis voluptates ullam deleniti.`,
      createdAt: new Date('2025-05-16T03:42:37')
    },
    {
      userId: 'user-022',
      bookId: 'BOOK0326',
      rating: 4,
      comment: `Accusamus quod alias quae aperiam.`,
      createdAt: new Date('2025-03-05T00:03:42')
    },
    {
      userId: 'user-027',
      bookId: 'BOOK0492',
      rating: 4,
      comment: `Laborum ex voluptates accusamus repellat.`,
      createdAt: new Date('2025-02-07T17:57:57')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0812',
      rating: 3,
      comment: `Harum similique quas assumenda saepe.`,
      createdAt: new Date('2025-03-16T03:35:14')
    },
    {
      userId: 'user-008',
      bookId: 'BOOK0821',
      rating: 2,
      comment: `Quisquam maxime architecto accusantium cum modi veniam.`,
      createdAt: new Date('2025-05-27T02:09:11')
    },
    {
      userId: 'user-024',
      bookId: 'BOOK0428',
      rating: 5,
      comment: `Est non rerum recusandae repellat odit.`,
      createdAt: new Date('2025-03-29T06:15:50')
    },
    {
      userId: 'user-031',
      bookId: 'BOOK0551',
      rating: 5,
      comment: `In eveniet necessitatibus pariatur.`,
      createdAt: new Date('2025-02-02T13:24:05')
    },
    {
      userId: 'user-031',
      bookId: 'BOOK0545',
      rating: 5,
      comment: `Optio fugiat necessitatibus odit iusto.`,
      createdAt: new Date('2025-04-15T14:27:04')
    },
    {
      userId: 'user-014',
      bookId: 'BOOK0393',
      rating: 1,
      comment: `Recusandae blanditiis officiis nostrum.`,
      createdAt: new Date('2025-03-12T19:03:27')
    },
    {
      userId: 'user-037',
      bookId: 'BOOK0732',
      rating: 4,
      comment: `Maiores asperiores dolores rem.`,
      createdAt: new Date('2025-06-05T23:47:06')
    },
    {
      userId: 'user-033',
      bookId: 'BOOK0591',
      rating: 2,
      comment: `Ad temporibus nisi.`,
      createdAt: new Date('2025-03-01T00:06:28')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0089',
      rating: 2,
      comment: `Quasi eligendi ea quo placeat molestias.`,
      createdAt: new Date('2025-03-05T19:25:51')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0002',
      rating: 2,
      comment: `Non dolore ducimus culpa.`,
      createdAt: new Date('2025-04-19T16:30:21')
    },
    {
      userId: 'user-001',
      bookId: 'BOOK0371',
      rating: 5,
      comment: `Suscipit voluptatum provident voluptate numquam placeat inventore.`,
      createdAt: new Date('2025-06-13T11:17:14')
    },
    {
      userId: 'user-030',
      bookId: 'BOOK0980',
      rating: 2,
      comment: `Nisi accusantium magnam voluptatibus vero amet in.`,
      createdAt: new Date('2025-06-29T01:38:23')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0061',
      rating: 3,
      comment: `Asperiores vero eos similique inventore odit sit.`,
      createdAt: new Date('2025-03-17T11:39:22')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0869',
      rating: 2,
      comment: `Aut quis placeat saepe.`,
      createdAt: new Date('2025-02-24T01:00:00')
    },
    {
      userId: 'user-018',
      bookId: 'BOOK0471',
      rating: 2,
      comment: `Voluptas illum sint amet.`,
      createdAt: new Date('2025-01-06T18:52:26')
    },
    {
      userId: 'user-035',
      bookId: 'BOOK0995',
      rating: 4,
      comment: `Qui quia exercitationem corrupti voluptatum accusamus.`,
      createdAt: new Date('2025-05-01T23:44:43')
    },
    {
      userId: 'user-015',
      bookId: 'BOOK0215',
      rating: 2,
      comment: `Laborum placeat voluptate eum laborum eligendi ab.`,
      createdAt: new Date('2025-02-14T18:04:50')
    },
    {
      userId: 'user-003',
      bookId: 'BOOK0764',
      rating: 2,
      comment: `Deserunt facilis quia maxime.`,
      createdAt: new Date('2025-03-22T07:38:15')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0985',
      rating: 2,
      comment: `Ipsum nihil non debitis.`,
      createdAt: new Date('2025-01-30T13:54:48')
    },
    {
      userId: 'user-024',
      bookId: 'BOOK0750',
      rating: 1,
      comment: `Nostrum odio iusto eaque vero.`,
      createdAt: new Date('2025-04-29T10:54:21')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0988',
      rating: 4,
      comment: `Nihil sapiente sint ut debitis.`,
      createdAt: new Date('2025-03-12T11:13:17')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0055',
      rating: 1,
      comment: `Nobis alias ab similique.`,
      createdAt: new Date('2025-06-07T05:59:06')
    },
    {
      userId: 'user-042',
      bookId: 'BOOK0595',
      rating: 1,
      comment: `Doloremque ea numquam consequatur corporis ullam.`,
      createdAt: new Date('2025-04-05T10:26:52')
    },
    {
      userId: 'user-030',
      bookId: 'BOOK0857',
      rating: 5,
      comment: `Amet eveniet esse perspiciatis in cupiditate nulla.`,
      createdAt: new Date('2025-05-25T09:08:01')
    },
    {
      userId: 'user-010',
      bookId: 'BOOK0030',
      rating: 2,
      comment: `Qui eaque possimus ducimus ratione at.`,
      createdAt: new Date('2025-04-12T11:26:04')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0144',
      rating: 1,
      comment: `Blanditiis et similique.`,
      createdAt: new Date('2025-04-03T16:19:24')
    },
    {
      userId: 'user-015',
      bookId: 'BOOK0078',
      rating: 1,
      comment: `Nobis quod perferendis fuga voluptate distinctio.`,
      createdAt: new Date('2025-04-16T22:59:27')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0851',
      rating: 4,
      comment: `Voluptatem rem dolorum temporibus dignissimos facere.`,
      createdAt: new Date('2025-04-08T21:55:47')
    },
    {
      userId: 'user-009',
      bookId: 'BOOK0783',
      rating: 2,
      comment: `Non doloribus iure tempore repellendus.`,
      createdAt: new Date('2025-01-30T01:26:08')
    },
    {
      userId: 'user-030',
      bookId: 'BOOK0761',
      rating: 2,
      comment: `Corporis doloremque praesentium atque dignissimos.`,
      createdAt: new Date('2025-03-09T20:29:07')
    },
    {
      userId: 'user-047',
      bookId: 'BOOK0540',
      rating: 3,
      comment: `Recusandae suscipit eveniet ipsa mollitia laudantium suscipit.`,
      createdAt: new Date('2025-03-14T13:58:05')
    },
    {
      userId: 'user-030',
      bookId: 'BOOK0421',
      rating: 3,
      comment: `Accusamus quae sequi.`,
      createdAt: new Date('2025-03-05T05:51:11')
    },
    {
      userId: 'user-028',
      bookId: 'BOOK0800',
      rating: 1,
      comment: `Quam aliquid tempora quos cupiditate tempora.`,
      createdAt: new Date('2025-01-09T02:10:58')
    },
    {
      userId: 'user-018',
      bookId: 'BOOK0113',
      rating: 2,
      comment: `Similique molestiae maxime deleniti quasi maxime quibusdam.`,
      createdAt: new Date('2025-04-22T22:52:18')
    },
    {
      userId: 'user-003',
      bookId: 'BOOK0902',
      rating: 1,
      comment: `Sint quibusdam ad incidunt quibusdam.`,
      createdAt: new Date('2025-05-03T08:10:58')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0769',
      rating: 2,
      comment: `Sit veritatis quam fugit minima facilis.`,
      createdAt: new Date('2025-04-15T13:33:17')
    },
    {
      userId: 'user-032',
      bookId: 'BOOK0164',
      rating: 1,
      comment: `Repudiandae consequatur corporis dicta.`,
      createdAt: new Date('2025-05-18T05:36:51')
    },
    {
      userId: 'user-025',
      bookId: 'BOOK0852',
      rating: 4,
      comment: `Voluptas voluptatibus fuga accusantium.`,
      createdAt: new Date('2025-01-17T09:07:58')
    },
    {
      userId: 'user-043',
      bookId: 'BOOK0970',
      rating: 4,
      comment: `Dicta consequatur velit quibusdam voluptates dolor.`,
      createdAt: new Date('2025-02-28T09:33:12')
    },
    {
      userId: 'user-035',
      bookId: 'BOOK0728',
      rating: 3,
      comment: `Repudiandae soluta vel ipsam.`,
      createdAt: new Date('2025-06-29T14:13:18')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0513',
      rating: 3,
      comment: `Quidem sed molestias possimus in quasi.`,
      createdAt: new Date('2025-01-18T10:15:48')
    },
    {
      userId: 'user-045',
      bookId: 'BOOK0232',
      rating: 4,
      comment: `Voluptates voluptates nesciunt labore minima.`,
      createdAt: new Date('2025-06-17T07:55:46')
    },
    {
      userId: 'user-010',
      bookId: 'BOOK0278',
      rating: 1,
      comment: `Dolorum delectus vel mollitia voluptatum reiciendis.`,
      createdAt: new Date('2025-05-17T18:59:48')
    },
    {
      userId: 'user-033',
      bookId: 'BOOK0386',
      rating: 2,
      comment: `Omnis quod voluptates sit.`,
      createdAt: new Date('2025-03-17T19:08:42')
    },
    {
      userId: 'user-047',
      bookId: 'BOOK0216',
      rating: 4,
      comment: `Iste quibusdam sapiente quis laborum quis.`,
      createdAt: new Date('2025-02-22T09:29:43')
    },
    {
      userId: 'user-039',
      bookId: 'BOOK0057',
      rating: 2,
      comment: `Ex culpa eveniet fugit vel.`,
      createdAt: new Date('2025-01-30T17:55:32')
    },
    {
      userId: 'user-025',
      bookId: 'BOOK0188',
      rating: 5,
      comment: `Molestiae soluta dignissimos.`,
      createdAt: new Date('2025-02-24T11:49:09')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0861',
      rating: 1,
      comment: `Rerum perspiciatis reiciendis consectetur natus quasi.`,
      createdAt: new Date('2025-01-24T16:40:21')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0479',
      rating: 4,
      comment: `Maxime ipsum nam sunt fugiat.`,
      createdAt: new Date('2025-06-27T20:04:07')
    },
    {
      userId: 'user-020',
      bookId: 'BOOK0668',
      rating: 4,
      comment: `Necessitatibus reiciendis dicta nisi excepturi alias.`,
      createdAt: new Date('2025-03-16T15:07:49')
    },
    {
      userId: 'user-024',
      bookId: 'BOOK0168',
      rating: 1,
      comment: `Dicta quam nulla architecto corporis neque voluptatum.`,
      createdAt: new Date('2025-03-15T08:16:03')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0662',
      rating: 4,
      comment: `Esse delectus magni.`,
      createdAt: new Date('2025-05-17T03:21:23')
    },
    {
      userId: 'user-012',
      bookId: 'BOOK0276',
      rating: 1,
      comment: `Recusandae autem animi in deleniti accusamus fugiat.`,
      createdAt: new Date('2025-03-06T16:08:54')
    },
    {
      userId: 'user-006',
      bookId: 'BOOK0079',
      rating: 3,
      comment: `Totam et alias neque nostrum asperiores.`,
      createdAt: new Date('2025-02-11T14:30:42')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0797',
      rating: 3,
      comment: `Cumque minus nostrum perferendis reprehenderit perspiciatis.`,
      createdAt: new Date('2025-07-03T03:50:09')
    },
    {
      userId: 'user-001',
      bookId: 'BOOK0245',
      rating: 3,
      comment: `Suscipit quis maxime fugit adipisci architecto sunt.`,
      createdAt: new Date('2025-01-01T16:53:46')
    },
    {
      userId: 'user-010',
      bookId: 'BOOK0554',
      rating: 1,
      comment: `Aut nisi cupiditate vero provident ad quod.`,
      createdAt: new Date('2025-03-22T09:21:39')
    },
    {
      userId: 'user-004',
      bookId: 'BOOK0216',
      rating: 5,
      comment: `Adipisci officiis voluptatem optio enim quos earum.`,
      createdAt: new Date('2025-06-05T18:36:29')
    },
    {
      userId: 'user-000',
      bookId: 'BOOK0774',
      rating: 3,
      comment: `Consequatur beatae dicta inventore ratione quae voluptatibus.`,
      createdAt: new Date('2025-06-15T18:25:44')
    },
    {
      userId: 'user-012',
      bookId: 'BOOK0564',
      rating: 2,
      comment: `Distinctio nam veritatis quod asperiores nesciunt.`,
      createdAt: new Date('2025-05-13T19:25:56')
    },
    {
      userId: 'user-040',
      bookId: 'BOOK0951',
      rating: 1,
      comment: `Amet esse maiores error dolores quo voluptatem.`,
      createdAt: new Date('2025-04-21T16:22:03')
    },
    {
      userId: 'user-015',
      bookId: 'BOOK0275',
      rating: 1,
      comment: `Eveniet quo maiores ratione debitis nam nam.`,
      createdAt: new Date('2025-07-06T13:28:56')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0578',
      rating: 1,
      comment: `Aperiam minima quia.`,
      createdAt: new Date('2025-02-24T05:30:32')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0809',
      rating: 4,
      comment: `Cumque at veritatis tempora autem cum harum.`,
      createdAt: new Date('2025-05-01T05:17:46')
    },
    {
      userId: 'user-002',
      bookId: 'BOOK0049',
      rating: 3,
      comment: `Est ab animi placeat autem asperiores.`,
      createdAt: new Date('2025-04-13T11:50:24')
    },
    {
      userId: 'user-005',
      bookId: 'BOOK0966',
      rating: 3,
      comment: `Ipsum quibusdam est praesentium.`,
      createdAt: new Date('2025-06-18T16:15:43')
    },
    {
      userId: 'user-000',
      bookId: 'BOOK0365',
      rating: 3,
      comment: `Laudantium et molestias at.`,
      createdAt: new Date('2025-01-16T09:49:19')
    },
    {
      userId: 'user-025',
      bookId: 'BOOK0512',
      rating: 2,
      comment: `Et repellat ad dolor sequi blanditiis exercitationem.`,
      createdAt: new Date('2025-06-18T01:29:17')
    },
    {
      userId: 'user-020',
      bookId: 'BOOK0769',
      rating: 4,
      comment: `Cumque id mollitia necessitatibus ab exercitationem atque.`,
      createdAt: new Date('2025-01-09T06:10:04')
    },
    {
      userId: 'user-046',
      bookId: 'BOOK0364',
      rating: 2,
      comment: `Voluptate repudiandae itaque.`,
      createdAt: new Date('2025-05-08T22:17:00')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0690',
      rating: 1,
      comment: `Quidem aperiam id odio.`,
      createdAt: new Date('2025-01-31T07:29:01')
    },
    {
      userId: 'user-021',
      bookId: 'BOOK0417',
      rating: 5,
      comment: `Molestiae accusantium dolor ipsum adipisci.`,
      createdAt: new Date('2025-01-06T19:20:25')
    },
    {
      userId: 'user-006',
      bookId: 'BOOK0514',
      rating: 2,
      comment: `Officiis nam sed rerum est asperiores totam.`,
      createdAt: new Date('2025-02-23T20:04:21')
    },
    {
      userId: 'user-001',
      bookId: 'BOOK0601',
      rating: 4,
      comment: `Nulla aspernatur provident repellendus alias iure.`,
      createdAt: new Date('2025-01-28T17:36:56')
    },
    {
      userId: 'user-030',
      bookId: 'BOOK0600',
      rating: 1,
      comment: `Culpa odio eligendi aliquid quae veritatis ab.`,
      createdAt: new Date('2025-05-23T21:10:29')
    },
    {
      userId: 'user-018',
      bookId: 'BOOK0165',
      rating: 2,
      comment: `Porro suscipit expedita dolores dignissimos.`,
      createdAt: new Date('2025-01-06T06:51:56')
    },
    {
      userId: 'user-043',
      bookId: 'BOOK0474',
      rating: 1,
      comment: `Veritatis quae in eveniet.`,
      createdAt: new Date('2025-01-14T05:59:52')
    },
    {
      userId: 'user-040',
      bookId: 'BOOK0095',
      rating: 2,
      comment: `Est rerum earum.`,
      createdAt: new Date('2025-07-02T05:04:51')
    },
    {
      userId: 'user-013',
      bookId: 'BOOK0826',
      rating: 2,
      comment: `Laborum alias tempora pariatur.`,
      createdAt: new Date('2025-06-07T07:30:25')
    },
    {
      userId: 'user-049',
      bookId: 'BOOK0735',
      rating: 2,
      comment: `Aut dolore commodi nihil ipsam animi.`,
      createdAt: new Date('2025-06-17T22:15:24')
    },
    {
      userId: 'user-032',
      bookId: 'BOOK0528',
      rating: 5,
      comment: `Rerum repudiandae corrupti voluptate labore at sapiente excepturi.`,
      createdAt: new Date('2025-05-03T16:14:38')
    },
    {
      userId: 'user-041',
      bookId: 'BOOK0535',
      rating: 3,
      comment: `Impedit dolores natus dolore fugit optio.`,
      createdAt: new Date('2025-04-11T11:37:21')
    },
    {
      userId: 'user-028',
      bookId: 'BOOK0804',
      rating: 2,
      comment: `Laboriosam dicta non nihil sit accusantium.`,
      createdAt: new Date('2025-01-03T06:21:28')
    },
    {
      userId: 'user-021',
      bookId: 'BOOK0297',
      rating: 3,
      comment: `Recusandae error hic.`,
      createdAt: new Date('2025-05-13T08:47:14')
    },
    {
      userId: 'user-039',
      bookId: 'BOOK0876',
      rating: 4,
      comment: `Laborum aliquam quae inventore dolores commodi.`,
      createdAt: new Date('2025-03-17T23:43:25')
    },
    {
      userId: 'user-002',
      bookId: 'BOOK0912',
      rating: 4,
      comment: `A rerum accusantium neque quisquam temporibus.`,
      createdAt: new Date('2025-03-13T21:06:34')
    },
    {
      userId: 'user-015',
      bookId: 'BOOK0213',
      rating: 5,
      comment: `Magni perferendis quaerat enim similique enim.`,
      createdAt: new Date('2025-02-01T07:52:59')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0076',
      rating: 2,
      comment: `Atque autem officia nisi.`,
      createdAt: new Date('2025-01-28T06:31:09')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0642',
      rating: 4,
      comment: `Cumque atque voluptate autem minima.`,
      createdAt: new Date('2025-06-30T20:15:25')
    }
  ] });
  await prisma.review.createMany({ data: [
    {
      userId: 'user-006',
      bookId: 'BOOK0824',
      rating: 1,
      comment: `Ab quia sapiente beatae laborum expedita itaque exercitationem.`,
      createdAt: new Date('2025-06-28T11:30:15')
    },
    {
      userId: 'user-009',
      bookId: 'BOOK0784',
      rating: 3,
      comment: `Unde harum temporibus labore explicabo accusantium illo suscipit.`,
      createdAt: new Date('2025-05-06T17:34:57')
    },
    {
      userId: 'user-035',
      bookId: 'BOOK0888',
      rating: 1,
      comment: `Optio perferendis tenetur occaecati.`,
      createdAt: new Date('2025-02-25T02:29:00')
    },
    {
      userId: 'user-031',
      bookId: 'BOOK0096',
      rating: 4,
      comment: `Quasi perferendis exercitationem modi quia.`,
      createdAt: new Date('2025-05-04T14:06:39')
    },
    {
      userId: 'user-020',
      bookId: 'BOOK0173',
      rating: 3,
      comment: `Rerum odit quos cum consequuntur a sapiente.`,
      createdAt: new Date('2025-07-03T15:17:03')
    },
    {
      userId: 'user-010',
      bookId: 'BOOK0069',
      rating: 3,
      comment: `Voluptatem aspernatur adipisci dolorem quos excepturi eligendi.`,
      createdAt: new Date('2025-03-15T03:03:30')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0372',
      rating: 3,
      comment: `At eos consequuntur vitae similique.`,
      createdAt: new Date('2025-04-02T01:46:11')
    },
    {
      userId: 'user-005',
      bookId: 'BOOK0072',
      rating: 2,
      comment: `Placeat neque ipsa eos.`,
      createdAt: new Date('2025-02-12T07:24:27')
    },
    {
      userId: 'user-045',
      bookId: 'BOOK0790',
      rating: 4,
      comment: `Sint facilis fuga accusamus.`,
      createdAt: new Date('2025-04-19T17:28:33')
    },
    {
      userId: 'user-016',
      bookId: 'BOOK0484',
      rating: 3,
      comment: `Amet occaecati tempore.`,
      createdAt: new Date('2025-03-24T19:46:11')
    },
    {
      userId: 'user-048',
      bookId: 'BOOK0897',
      rating: 4,
      comment: `Expedita iusto voluptate incidunt totam consequatur ipsum consequuntur.`,
      createdAt: new Date('2025-02-19T08:41:12')
    },
    {
      userId: 'user-041',
      bookId: 'BOOK0946',
      rating: 2,
      comment: `Impedit at veritatis nostrum natus.`,
      createdAt: new Date('2025-07-02T14:38:13')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0995',
      rating: 5,
      comment: `Ea animi maxime eaque.`,
      createdAt: new Date('2025-03-25T14:46:13')
    },
    {
      userId: 'user-031',
      bookId: 'BOOK0040',
      rating: 3,
      comment: `Ipsam corrupti dicta ab eos.`,
      createdAt: new Date('2025-04-06T12:48:47')
    },
    {
      userId: 'user-018',
      bookId: 'BOOK0410',
      rating: 4,
      comment: `Quos accusamus cupiditate cumque.`,
      createdAt: new Date('2025-03-04T17:17:23')
    },
    {
      userId: 'user-039',
      bookId: 'BOOK0939',
      rating: 2,
      comment: `Optio aspernatur ducimus at in.`,
      createdAt: new Date('2025-02-06T06:07:45')
    },
    {
      userId: 'user-028',
      bookId: 'BOOK0375',
      rating: 5,
      comment: `Adipisci nemo error architecto fuga perspiciatis atque.`,
      createdAt: new Date('2025-02-18T00:36:50')
    },
    {
      userId: 'user-039',
      bookId: 'BOOK0974',
      rating: 3,
      comment: `Nostrum expedita molestias mollitia mollitia ipsum nostrum.`,
      createdAt: new Date('2025-02-11T00:40:03')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0085',
      rating: 4,
      comment: `Quia nulla temporibus ad totam quis veritatis cum.`,
      createdAt: new Date('2025-04-24T14:29:48')
    },
    {
      userId: 'user-032',
      bookId: 'BOOK0460',
      rating: 3,
      comment: `Officiis voluptate ipsa autem repellat quos.`,
      createdAt: new Date('2025-07-03T00:32:53')
    },
    {
      userId: 'user-043',
      bookId: 'BOOK0043',
      rating: 5,
      comment: `Eligendi eius illum velit laboriosam ea.`,
      createdAt: new Date('2025-04-18T18:30:17')
    },
    {
      userId: 'user-041',
      bookId: 'BOOK0058',
      rating: 2,
      comment: `Fugit ex aliquid ea explicabo quia.`,
      createdAt: new Date('2025-01-16T02:22:48')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0840',
      rating: 5,
      comment: `Dolorum voluptates vitae neque culpa.`,
      createdAt: new Date('2025-04-01T23:24:04')
    },
    {
      userId: 'user-000',
      bookId: 'BOOK0158',
      rating: 1,
      comment: `Sunt neque cupiditate.`,
      createdAt: new Date('2025-03-25T20:56:17')
    },
    {
      userId: 'user-018',
      bookId: 'BOOK0384',
      rating: 2,
      comment: `Ab maxime occaecati quisquam.`,
      createdAt: new Date('2025-01-21T18:58:30')
    },
    {
      userId: 'user-036',
      bookId: 'BOOK0408',
      rating: 1,
      comment: `Dolores perspiciatis corrupti placeat consequuntur.`,
      createdAt: new Date('2025-02-17T18:58:43')
    },
    {
      userId: 'user-014',
      bookId: 'BOOK0397',
      rating: 4,
      comment: `Vel perferendis quam quis.`,
      createdAt: new Date('2025-03-07T12:09:12')
    },
    {
      userId: 'user-042',
      bookId: 'BOOK0095',
      rating: 3,
      comment: `Blanditiis quis commodi saepe recusandae minus quod.`,
      createdAt: new Date('2025-02-06T01:18:52')
    },
    {
      userId: 'user-029',
      bookId: 'BOOK0479',
      rating: 5,
      comment: `Sequi repellat quo sunt sed excepturi accusamus.`,
      createdAt: new Date('2025-03-26T02:13:25')
    },
    {
      userId: 'user-029',
      bookId: 'BOOK0111',
      rating: 1,
      comment: `Dolor accusamus perferendis dolore amet natus minima.`,
      createdAt: new Date('2025-01-04T14:29:54')
    },
    {
      userId: 'user-011',
      bookId: 'BOOK0749',
      rating: 1,
      comment: `Qui odio iure illo.`,
      createdAt: new Date('2025-01-28T15:15:40')
    },
    {
      userId: 'user-025',
      bookId: 'BOOK0786',
      rating: 4,
      comment: `Neque officia quasi eveniet.`,
      createdAt: new Date('2025-06-14T00:06:50')
    },
    {
      userId: 'user-012',
      bookId: 'BOOK0411',
      rating: 3,
      comment: `Sunt neque alias explicabo laborum voluptas quis.`,
      createdAt: new Date('2025-03-09T15:25:38')
    },
    {
      userId: 'user-004',
      bookId: 'BOOK0324',
      rating: 3,
      comment: `Ad ipsa velit voluptatibus suscipit.`,
      createdAt: new Date('2025-02-18T00:11:32')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0497',
      rating: 2,
      comment: `Iste inventore dignissimos officia doloribus quo unde.`,
      createdAt: new Date('2025-03-03T15:19:19')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0759',
      rating: 4,
      comment: `Impedit incidunt et totam numquam natus.`,
      createdAt: new Date('2025-02-04T23:07:25')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0285',
      rating: 4,
      comment: `Dolorem quaerat dolor vitae veniam laudantium.`,
      createdAt: new Date('2025-01-09T07:53:00')
    },
    {
      userId: 'user-002',
      bookId: 'BOOK0558',
      rating: 2,
      comment: `Perspiciatis odio aspernatur pariatur aliquam.`,
      createdAt: new Date('2025-03-21T10:24:26')
    },
    {
      userId: 'user-030',
      bookId: 'BOOK0149',
      rating: 2,
      comment: `Quisquam placeat voluptate unde eaque placeat.`,
      createdAt: new Date('2025-03-01T20:16:29')
    },
    {
      userId: 'user-020',
      bookId: 'BOOK0581',
      rating: 1,
      comment: `Accusantium ipsum maxime sequi corrupti.`,
      createdAt: new Date('2025-04-23T02:24:39')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0792',
      rating: 4,
      comment: `Ipsam repellat molestias odit quibusdam alias explicabo.`,
      createdAt: new Date('2025-05-20T23:59:46')
    },
    {
      userId: 'user-003',
      bookId: 'BOOK0958',
      rating: 3,
      comment: `Assumenda aut recusandae cum eaque sint incidunt dolores.`,
      createdAt: new Date('2025-02-18T14:43:40')
    },
    {
      userId: 'user-027',
      bookId: 'BOOK0484',
      rating: 2,
      comment: `Iure modi architecto voluptas minima.`,
      createdAt: new Date('2025-02-21T00:42:27')
    },
    {
      userId: 'user-003',
      bookId: 'BOOK0216',
      rating: 1,
      comment: `Enim deleniti similique laboriosam blanditiis.`,
      createdAt: new Date('2025-03-26T22:37:01')
    },
    {
      userId: 'user-048',
      bookId: 'BOOK0700',
      rating: 4,
      comment: `Corporis commodi autem voluptatum itaque unde cupiditate.`,
      createdAt: new Date('2025-03-28T10:56:30')
    },
    {
      userId: 'user-017',
      bookId: 'BOOK0258',
      rating: 2,
      comment: `Ducimus molestiae suscipit quibusdam quasi.`,
      createdAt: new Date('2025-03-02T14:11:32')
    },
    {
      userId: 'user-005',
      bookId: 'BOOK0145',
      rating: 1,
      comment: `Eligendi vitae ut recusandae.`,
      createdAt: new Date('2025-03-23T01:57:59')
    },
    {
      userId: 'user-017',
      bookId: 'BOOK0414',
      rating: 1,
      comment: `Iste vel deserunt officiis quod.`,
      createdAt: new Date('2025-04-10T09:25:14')
    },
    {
      userId: 'user-019',
      bookId: 'BOOK0894',
      rating: 4,
      comment: `Eveniet debitis illo labore quas accusamus sit.`,
      createdAt: new Date('2025-04-12T11:52:47')
    },
    {
      userId: 'user-026',
      bookId: 'BOOK0537',
      rating: 2,
      comment: `Eaque molestias aliquid error pariatur labore quasi suscipit.`,
      createdAt: new Date('2025-03-20T13:34:36')
    },
    {
      userId: 'user-042',
      bookId: 'BOOK0914',
      rating: 3,
      comment: `Temporibus ab minus aliquid perspiciatis velit.`,
      createdAt: new Date('2025-06-24T04:37:20')
    },
    {
      userId: 'user-011',
      bookId: 'BOOK0850',
      rating: 1,
      comment: `Magni nulla quibusdam perferendis.`,
      createdAt: new Date('2025-02-24T14:57:39')
    },
    {
      userId: 'user-005',
      bookId: 'BOOK0916',
      rating: 4,
      comment: `Veniam rem delectus minima cupiditate.`,
      createdAt: new Date('2025-01-13T17:43:38')
    },
    {
      userId: 'user-021',
      bookId: 'BOOK0986',
      rating: 3,
      comment: `Dignissimos possimus alias vel molestias dolor repellat.`,
      createdAt: new Date('2025-06-12T01:02:45')
    },
    {
      userId: 'user-010',
      bookId: 'BOOK0203',
      rating: 3,
      comment: `Aspernatur natus porro maiores deleniti.`,
      createdAt: new Date('2025-06-26T21:05:46')
    },
    {
      userId: 'user-026',
      bookId: 'BOOK0493',
      rating: 4,
      comment: `Quis nihil dicta quia.`,
      createdAt: new Date('2025-01-02T08:13:12')
    },
    {
      userId: 'user-034',
      bookId: 'BOOK0705',
      rating: 2,
      comment: `Excepturi officiis a tempore minima.`,
      createdAt: new Date('2025-05-24T09:21:33')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0447',
      rating: 3,
      comment: `Eius beatae aspernatur enim impedit.`,
      createdAt: new Date('2025-04-23T17:56:11')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0584',
      rating: 4,
      comment: `Quas deserunt porro illum.`,
      createdAt: new Date('2025-06-07T06:21:43')
    },
    {
      userId: 'user-000',
      bookId: 'BOOK0574',
      rating: 5,
      comment: `Dignissimos doloremque quas officiis.`,
      createdAt: new Date('2025-06-22T10:37:16')
    },
    {
      userId: 'user-012',
      bookId: 'BOOK0079',
      rating: 5,
      comment: `Odio repellat quos aut.`,
      createdAt: new Date('2025-01-15T14:25:24')
    },
    {
      userId: 'user-039',
      bookId: 'BOOK0148',
      rating: 3,
      comment: `Exercitationem dignissimos neque facilis magnam dolorum.`,
      createdAt: new Date('2025-07-01T01:52:35')
    },
    {
      userId: 'user-042',
      bookId: 'BOOK0843',
      rating: 3,
      comment: `At id aperiam amet.`,
      createdAt: new Date('2025-02-16T07:35:32')
    },
    {
      userId: 'user-000',
      bookId: 'BOOK0154',
      rating: 4,
      comment: `Magnam asperiores quas quis iste.`,
      createdAt: new Date('2025-01-03T14:09:56')
    },
    {
      userId: 'user-009',
      bookId: 'BOOK0511',
      rating: 3,
      comment: `Magni est voluptatibus iusto.`,
      createdAt: new Date('2025-03-22T07:41:22')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0811',
      rating: 4,
      comment: `Minus architecto excepturi adipisci nesciunt.`,
      createdAt: new Date('2025-03-23T01:27:09')
    },
    {
      userId: 'user-016',
      bookId: 'BOOK0533',
      rating: 1,
      comment: `Modi cupiditate magni doloribus non dolore officia.`,
      createdAt: new Date('2025-03-05T20:56:59')
    },
    {
      userId: 'user-028',
      bookId: 'BOOK0965',
      rating: 2,
      comment: `Dolore quidem animi nam culpa vero delectus.`,
      createdAt: new Date('2025-03-29T00:00:37')
    },
    {
      userId: 'user-040',
      bookId: 'BOOK0460',
      rating: 5,
      comment: `Atque incidunt expedita nisi doloribus quo nihil.`,
      createdAt: new Date('2025-05-22T13:57:02')
    },
    {
      userId: 'user-006',
      bookId: 'BOOK0037',
      rating: 2,
      comment: `Doloribus vitae cupiditate ipsa.`,
      createdAt: new Date('2025-05-03T18:54:53')
    },
    {
      userId: 'user-047',
      bookId: 'BOOK0192',
      rating: 4,
      comment: `Repellendus impedit similique assumenda inventore.`,
      createdAt: new Date('2025-06-22T16:51:07')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0559',
      rating: 2,
      comment: `Doloremque amet possimus libero.`,
      createdAt: new Date('2025-01-06T16:49:14')
    },
    {
      userId: 'user-038',
      bookId: 'BOOK0386',
      rating: 2,
      comment: `Perspiciatis eius laudantium voluptatum.`,
      createdAt: new Date('2025-02-23T18:40:58')
    },
    {
      userId: 'user-022',
      bookId: 'BOOK0214',
      rating: 2,
      comment: `Sed natus voluptatum ducimus.`,
      createdAt: new Date('2025-03-26T23:00:22')
    },
    {
      userId: 'user-043',
      bookId: 'BOOK0590',
      rating: 1,
      comment: `Voluptatibus suscipit culpa voluptates.`,
      createdAt: new Date('2025-02-09T03:16:22')
    },
    {
      userId: 'user-023',
      bookId: 'BOOK0833',
      rating: 3,
      comment: `Consectetur molestias esse ex delectus repellendus.`,
      createdAt: new Date('2025-04-16T17:43:58')
    },
    {
      userId: 'user-001',
      bookId: 'BOOK0309',
      rating: 3,
      comment: `Incidunt architecto unde rem consectetur iste voluptas.`,
      createdAt: new Date('2025-01-05T22:03:51')
    },
    {
      userId: 'user-032',
      bookId: 'BOOK0838',
      rating: 1,
      comment: `Voluptate deleniti soluta placeat odit provident.`,
      createdAt: new Date('2025-03-21T03:44:08')
    },
    {
      userId: 'user-044',
      bookId: 'BOOK0511',
      rating: 4,
      comment: `Necessitatibus neque incidunt quo eos praesentium nisi.`,
      createdAt: new Date('2025-02-18T17:46:52')
    },
    {
      userId: 'user-026',
      bookId: 'BOOK0420',
      rating: 3,
      comment: `Vero impedit ut doloribus doloribus.`,
      createdAt: new Date('2025-05-24T22:52:56')
    },
    {
      userId: 'user-022',
      bookId: 'BOOK0848',
      rating: 5,
      comment: `Impedit assumenda similique earum dolore laboriosam.`,
      createdAt: new Date('2025-04-04T12:41:51')
    },
    {
      userId: 'user-027',
      bookId: 'BOOK0535',
      rating: 3,
      comment: `Suscipit facere consequuntur non vitae magnam impedit.`,
      createdAt: new Date('2025-04-15T00:39:01')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0948',
      rating: 2,
      comment: `Tenetur deleniti eos molestiae natus cumque quis.`,
      createdAt: new Date('2025-06-22T04:16:02')
    },
    {
      userId: 'user-029',
      bookId: 'BOOK0438',
      rating: 3,
      comment: `Alias consectetur eaque a expedita sed.`,
      createdAt: new Date('2025-04-07T10:00:22')
    },
    {
      userId: 'user-011',
      bookId: 'BOOK0566',
      rating: 5,
      comment: `Culpa voluptates repellat cupiditate.`,
      createdAt: new Date('2025-03-06T15:16:13')
    },
    {
      userId: 'user-010',
      bookId: 'BOOK0555',
      rating: 4,
      comment: `Nam totam totam quis quam vitae ipsa illum.`,
      createdAt: new Date('2025-05-29T08:45:42')
    },
    {
      userId: 'user-024',
      bookId: 'BOOK0291',
      rating: 4,
      comment: `Nihil a rerum magni.`,
      createdAt: new Date('2025-06-09T02:51:28')
    },
    {
      userId: 'user-040',
      bookId: 'BOOK0290',
      rating: 5,
      comment: `Esse laudantium at.`,
      createdAt: new Date('2025-01-31T10:34:24')
    },
    {
      userId: 'user-006',
      bookId: 'BOOK0089',
      rating: 1,
      comment: `Nostrum reprehenderit vel maiores fugiat eum.`,
      createdAt: new Date('2025-01-24T07:48:56')
    },
    {
      userId: 'user-005',
      bookId: 'BOOK0665',
      rating: 1,
      comment: `Minima quod aut.`,
      createdAt: new Date('2025-06-10T07:13:07')
    },
    {
      userId: 'user-039',
      bookId: 'BOOK0954',
      rating: 4,
      comment: `Iure voluptatem sint sed quia dignissimos ratione perspiciatis.`,
      createdAt: new Date('2025-02-15T14:45:52')
    },
    {
      userId: 'user-006',
      bookId: 'BOOK0508',
      rating: 5,
      comment: `Numquam adipisci perspiciatis recusandae.`,
      createdAt: new Date('2025-04-25T04:31:30')
    },
    {
      userId: 'user-034',
      bookId: 'BOOK0102',
      rating: 4,
      comment: `Delectus temporibus architecto velit fuga.`,
      createdAt: new Date('2025-03-12T18:25:10')
    },
    {
      userId: 'user-032',
      bookId: 'BOOK0595',
      rating: 1,
      comment: `Eum error fugiat odio nam voluptate.`,
      createdAt: new Date('2025-05-14T02:35:46')
    },
    {
      userId: 'user-042',
      bookId: 'BOOK0296',
      rating: 4,
      comment: `Pariatur quidem quos hic sit excepturi et.`,
      createdAt: new Date('2025-02-10T19:30:47')
    },
    {
      userId: 'user-013',
      bookId: 'BOOK0228',
      rating: 4,
      comment: `Quaerat quis saepe blanditiis nemo ab adipisci.`,
      createdAt: new Date('2025-03-25T19:21:20')
    },
    {
      userId: 'user-035',
      bookId: 'BOOK0390',
      rating: 1,
      comment: `Repudiandae illum voluptate perferendis architecto exercitationem.`,
      createdAt: new Date('2025-01-16T09:30:05')
    },
    {
      userId: 'user-012',
      bookId: 'BOOK0876',
      rating: 4,
      comment: `Fugiat accusantium possimus eos possimus fugiat.`,
      createdAt: new Date('2025-03-31T21:50:29')
    },
    {
      userId: 'user-007',
      bookId: 'BOOK0359',
      rating: 4,
      comment: `At assumenda distinctio quis tempore repellendus sint voluptate.`,
      createdAt: new Date('2025-03-05T17:14:47')
    },
    {
      userId: 'user-026',
      bookId: 'BOOK0929',
      rating: 4,
      comment: `Ex recusandae ea quos fugit deleniti quod.`,
      createdAt: new Date('2025-02-05T01:55:44')
    }
  ] });
}

main().then(() => console.log('Seed finalizado com sucesso.')).catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());