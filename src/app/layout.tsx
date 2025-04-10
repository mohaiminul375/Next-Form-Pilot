'use client'
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const manrope = Manrope({
  weight: '700',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="min-h-[calc(100vh-160px)] my-14">
            {children}
          </main>
          <Toaster />
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
