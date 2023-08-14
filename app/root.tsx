import {cssBundleHref} from "@remix-run/css-bundle";
import type {LinksFunction} from "@remix-run/node";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import stylesheet from "@styles/tailwind.css";
import {NextUIProvider} from "@nextui-org/react";

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
    {rel: "stylesheet", href: stylesheet},
];

export default function App() {
    return (
        <html lang="fr">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
            <title>Remix Test App</title>
        </head>
        <body>
        <NextUIProvider>
            <main className="text-foreground bg-background">
                <Outlet/>
                <ScrollRestoration/>
                <Scripts/>
                <LiveReload/>
            </main>
        </NextUIProvider>
        </body>
        </html>
    );
}
