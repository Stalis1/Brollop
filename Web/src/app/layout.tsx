import '../../styles/globals.scss'; // Ensure this is the correct path to your globals.css
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
