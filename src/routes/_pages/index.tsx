import { createFileRoute, Link, useRouter } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';
import { getAuth } from '~/server/auth';
import { authClient } from '~/utils/auth';

export const Route = createFileRoute('/_pages/')({
  component: Home,
  beforeLoad: async ({ context }) => {
    const { context: ctx } = await getAuth();

    return {
      authContext: ctx,
      queryClient: context.queryClient,
    };
  },
});

function Home() {
  const { useSession, signOut } = authClient;
  const { data, error } = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    // Optionally, you can redirect or show a message after signing out
    router.navigate({
      to: '/sign-in',
      replace: true,
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div>
        <h2>Loading...</h2>
        <Button asChild>
          <Link to="/sign-in">Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Hello, {data.user.name}</h2>
      <p>Welcome to the library app!</p>
      <Button variant="destructive" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
}
