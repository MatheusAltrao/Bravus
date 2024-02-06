import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { url } from 'inspector';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
    title: 'Bravus',
    description: 'Bravus Jiu-Jitsu',
    icons: {
        icon: [
            {
                url: '/favicon.jpg',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
