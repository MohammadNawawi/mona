"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layouts/navbar";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
