import "../styles/globals.css";
import type { Metadata } from "next";
import BottomNav from "../components/BottomNav";
import { ThemeProvider } from "next-themes";
import Providers from "./theme-provider";

//TODO: Add metadata from _app.tsx
export const metadata: Metadata = {
  title: "Mahesh Sanikommu | Portfolio",
  description: "MaheshtheDev's Portfolio",
  authors: [
    {
      name: "Mahesh Sanikommu",
      url: "https://maheshthedev.me",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://maheshthedev.me/images/OG-Image.png",
        alt: "MaheshtheDev",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
