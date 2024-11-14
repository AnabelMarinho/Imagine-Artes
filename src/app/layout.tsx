import type { Metadata } from "next";
import "./globals.css"; 
import Navbar from "@/componentes/ui/Navbar";

export const metadata: Metadata = {
  title: "Imagine Artes", 
  description: "Minhas artes", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
      <link rel="icon" type="image/ico" href="favicon.ico" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
