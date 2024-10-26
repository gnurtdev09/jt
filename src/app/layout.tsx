import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Jt Official Website",
    description: "Created, Designed, Developed by Jt",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
