import './globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col ">
                <Header title="Layout Header" />
                <main className="flex-grow bg-peach">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
