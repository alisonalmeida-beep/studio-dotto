import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu";
import LoadingScreen from "@/components/LoadingScreen";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Dotto",
  description: "Studio Dotto — Brand Product Designer",
  icons: {
    icon: [
      { url: `/assets/logotype/favicon.svg`, type: "image/svg+xml" },
      { url: `/assets/logotype/favicon.png`, type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={ibmPlexSans.className}>
      <body>
        <LoadingScreen />
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
