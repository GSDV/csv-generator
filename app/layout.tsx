import type { Metadata } from 'next';

import '@Styles/layout.css';


export const metadata: Metadata = {
    title: 'CSV File Generator',
    description: 'Generate a CSV file',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
            <html lang="en">
                <body>{children}</body>
            </html>
    );
}
