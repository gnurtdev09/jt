import { ThemeProvider } from "@/contexts";
import { Header } from "@/layouts";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <main className="relative h-full overflow-auto">
                <Header />
                <section className="max-w-7xl mx-auto px-6 py-3">
                    {children}
                </section>
            </main>
        </ThemeProvider>
    );
}
