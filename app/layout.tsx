import type React from "react";
import "./globals.css";
import { Inter, Afacad, Quicksand, Montserrat } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
import { ThemeProvider } from "next-themes";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pledge4Peace - Building a Peaceful World Together",
  description:
    "Join our global movement to promote peace through pledges, advocacy, and action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
