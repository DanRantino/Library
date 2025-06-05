import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import NavBar from "~/components/NavBar";
import * as React from "react";

export const Route = createFileRoute("/_authed")({
    beforeLoad: ({ context }) => {
        // Check if the user is authenticated
        if (!context?.authContext) {
            return redirect({
                to: "/sign-in",
                search: {
                    redirectUrl: "/books",
                },
            });
        }
    },
    errorComponent: ({ error }) => {
        if (error.message === "Not authenticated") {
            return;
        }

        throw error;
    },

    component: () => {
        return (
            <>
                <NavBar />
                <Outlet />
            </>
        );
    },
});
