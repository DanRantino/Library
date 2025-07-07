import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import { Button } from '~/components/ui/button';
import { authClient } from '~/utils/auth';
import { Link } from '@tanstack/react-router';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSession } from '~/hooks/useSession';

const components: {
  [key: string]: { title: string; href: string; description: string }[];
} = {
  books: [
    // 📚 Books
    {
      title: 'Book List',
      href: '/books',
      description: 'Browse all books available in the library.',
    },
    {
      title: 'Add Book',
      href: '/books/new',
      description: 'Register a new book with title, author, and status.',
    },
    {
      title: 'Edit Book',
      href: '/books/:id/edit',
      description: 'Update the details of an existing book.',
    },
  ],
  loans: [
    // 🔄 Loans
    {
      title: 'My Loans',
      href: '/loans',
      description: 'View the books you have currently borrowed.',
    },
    {
      title: 'Borrow Book',
      href: '/loans/new',
      description: 'Record the borrowing of an available book.',
    },
    {
      title: 'Return Book',
      href: '/loans/return',
      description: 'Complete a loan and return the book to the library.',
    },
  ],
  users: [
    // 👤 Account
    {
      title: 'Account Settings',
      href: '/account/settings',
      description: 'Update your personal information and preferences.',
    },
    {
      title: 'Logout',
      href: '/sign-out',
      description: 'Sign out of your session securely.',
    },
  ],
};

export default function NavBar() {
  const session = useSession();
  const { signOut } = authClient;
  return (
    <div className="w-screen fixed h-12 top-0 z-50 border-b bg-background p-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      to={components.books[0].href}
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        {components.books[0].title}
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        {components.books[0].description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {components.books.slice(1).map(component => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Loans</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.loans.map(component => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Avatar>
                <AvatarImage src={session.data?.user.image || ''} />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                {components.users.map(component => {
                  if (component.title === 'Logout') {
                    return (
                      <Button
                        variant="destructive"
                        key={component.title}
                        title={component.title}
                        onClick={() => {
                          signOut();
                        }}
                      >
                        {component.title}
                      </Button>
                    );
                  }
                  return (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
