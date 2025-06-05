import { Link, useRouter } from '@tanstack/react-router';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu';
import { cn } from '~/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { authClient } from '~/utils/auth';
import { Button } from './ui/button';

const Navbar = () => {

  const router = useRouter();
  const [path, setPath] = React.useState(router.parseLocation().href);
  const { useSession } = authClient;
  if (path.includes('/sign-up') || path.includes('/sign-in')) return null;


  return (
    <div className="w-screen h-12 flex items-center justify-between bg-accent">
      <div className="flex items-center justify-center">
        <NavigationMenu side="right">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Books 1</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] max-w-fit ">
                  <ListItem
                    title="List of Books"
                    href={'/books'}>
                    Here we can view each book and access some information about the loan
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link to={'/books'}>
                  Documentation
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <NavigationMenu viewport side="left">
        <NavigationMenuList
        >
          <NavigationMenuItem data-side="left">
            <NavigationMenuTrigger
              data-state={'open'}
            >
              <Avatar>
                <AvatarImage src={useSession().data?.user.image || ''} />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] max-w-fit">
                <ListItem title="Account" href="/account">
                  Account settings
                </ListItem>
                <NavigationMenuLink>
                  <Button variant="destructive" onClick={() => {
                    authClient.signOut();
                  }}>
                    Log out
                  </Button>
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  Props
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';