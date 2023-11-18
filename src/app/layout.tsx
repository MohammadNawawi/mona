"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layouts/navbar";
import { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme/theme-provider";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
  component,
  pageProps,
}: {
  children: React.ReactNode;
  component: AppProps;
  pageProps: AppProps;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <SessionProvider> */}
          {!disableNavbar.includes(pathname) && <Navbar />}

          {children}
          {/* </SessionProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
