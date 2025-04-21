import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Praveen Upadhyay | Senior Software Engineer',
  description: 'Portfolio of Praveen Kumar Upadhyay, a Senior Software Engineer specialized in building exceptional digital experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}