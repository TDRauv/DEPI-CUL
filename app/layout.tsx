import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import I18nProvider from "@/components/providers/I18nProvider";
import LanguageSwitcherFloating from "@/components/ui/LanguageSwitcherFloating";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Departamento de Internacionalización | CUL",
  description: "Portal oficial del Departamento de Internacionalización - CUL Global",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased selection:bg-[#D9A404]/30 selection:text-[#003B70]`}
      >
        <I18nProvider>
          <Header />
          {children}
          <LanguageSwitcherFloating />
        </I18nProvider>
      </body>
    </html>
  );
}