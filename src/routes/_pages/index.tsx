import { createFileRoute, Link } from '@tanstack/react-router';
import { authClient } from '~/utils/auth';
import { Button } from '~/components/ui/button';
import { getAuth } from '~/server/auth';

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
    
    const { useSession } = authClient;
    const {data,error} = useSession();
    
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
        </div>
    );
}
