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
    
    return (
        <div>
            <h1>Index Route</h1>
        </div>
    );
}
