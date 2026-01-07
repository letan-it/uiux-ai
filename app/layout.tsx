import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import 'primeicons/primeicons.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Genesis | Multipurpose Landing Template',
  description: 'Genesis Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0 transition-colors duration-300`}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
