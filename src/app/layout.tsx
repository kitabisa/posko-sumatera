import type { Metadata } from "next";
import { Rubik } from 'next/font/google';
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: "Daftar Posko - Warga Bantu Warga",
  description: "Bantuan Warga Terdampak Bencana Sumatera",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${rubik.variable} h-full`}>
      <body className="min-h-full font-sans">
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
