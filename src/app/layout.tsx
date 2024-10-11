import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Lato } from 'next/font/google';
import Header from "@/components/header";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500', '600','700','800'], // Include weights you plan to use
  variable: '--font-playfair',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
