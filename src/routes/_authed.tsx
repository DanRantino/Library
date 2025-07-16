import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import NavBar from '~/components/NavBar';

export const Route = createFileRoute('/_authed')({
  beforeLoad: ({ context }) => {
    // Check if the user is authenticated
    if (!context?.authContext) {
      return redirect({
        to: '/sign-in',
        search: {
          redirectUrl: '/books',
        },
      });
    }
  },
  errorComponent: ({ error }) => {
    throw error;
  },

  component: () => {
    return (
      <div className="w-screen h-screen">
        <NavBar />
        <div className="pt-8 h-screen flex items-center justify-center overflow-auto">
          <Outlet />
        </div>
      </div>
    );
  },
});
