import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_pages/account')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello &quot;/_pages/account&quot;!</div>;
}
