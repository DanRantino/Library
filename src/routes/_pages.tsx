import { createFileRoute, Outlet } from '@tanstack/react-router';
import NavBar from '~/components/NavBar';
import * as React from 'react';

export const Route = createFileRoute('/_pages')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}
