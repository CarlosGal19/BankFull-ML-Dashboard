import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Logistic Regression Model",
  description: "Dashboard for Logistic Regression Model by Carlos Galindo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
