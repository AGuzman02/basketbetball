import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Games Dashboard",
  description: "View live NBA games, scores, and highlights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="bg-blue-500 text-white p-4">
          This should be a blue box with white text and padding.
        </div>
      </body>
    </html>
  );
}
