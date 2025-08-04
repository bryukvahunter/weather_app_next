import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import ThemeProvider from "@/components/theme/ThemeProvider";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "weather app",
  description: "check your weather",
  icons: {
    icon: "/sun_icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} flex min-h-screen w-full flex-col items-center justify-between gap-3 bg-gradient-to-br from-[#c48ef1] to-[#5076b4] p-1 pb-1 font-sans antialiased dark:from-[#160524] dark:to-[#002e78]`}
      >
        <ThemeProvider />
        <Header />
        {children}
        <footer className="text-white/50">
          © 2025 @NE_UNIVAEM. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
