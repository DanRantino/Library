/// <reference types="vite/client" />
import {
    createRootRoute,
    HeadContent,
    Outlet,
    redirect,
    Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary.js";
import { NotFound } from "~/components/NotFound.js";
import appCss from "~/styles/app.css?url";
import { ThemeProvider } from "~/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { authClient } from "~/utils/auth";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const client = new QueryClient();

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
            { rel: "icon", href: "/favicon.ico" },
        ],
    }),
    beforeLoad: async (ctx) => {
        const { error } = await authClient.getSession();
        if (error) {
            redirect({
                to: "/sign-in",
            });
            return {
                authContext: authClient,
                queryClient: client,
            };
        }
        return {
            authContext: authClient,
            queryClient: client,
        };
    },
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        );
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent,
});

function RootComponent() {
    return (
        <QueryClientProvider client={client}>
            <ThemeProvider>
                <RootDocument>
                    <Outlet />
                </RootDocument>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-background">
            <head>
                <HeadContent />
            </head>
            <body>
                <hr />
                {children}
                <ReactQueryDevtools />
                <TanStackRouterDevtools position="bottom-left" />
                <Scripts />
            </body>
        </html>
    );
}
