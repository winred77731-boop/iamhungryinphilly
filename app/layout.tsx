import type { Metadata } from "next";
import { Source_Sans_3, Roboto } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "I Am Hungry In Philadelphia — A Documentary Film by Harry Hayman",
  description:
    "The Many Faces of Food Insecurity. A documentary exploring hunger in one of America's largest cities. Produced by Harry Hayman, directed by Kaloni Davis, written by David J. Greenberg.",
  keywords: [
    "food insecurity Philadelphia",
    "Philadelphia documentary",
    "hunger documentary",
    "Harry Hayman",
    "Kaloni Davis",
    "David Greenberg",
    "food insecurity film",
    "Philadelphia hunger crisis",
  ],
  openGraph: {
    title: "I Am Hungry In Philadelphia — A Documentary Film",
    description:
      "The Many Faces of Food Insecurity. A documentary exploring hunger in one of America's largest cities.",
    type: "website",
    url: "https://iamhungryinphilly.com",
    siteName: "I Am Hungry In Philadelphia",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Am Hungry In Philadelphia — A Documentary Film",
    description:
      "The Many Faces of Food Insecurity. A documentary exploring hunger in one of America's largest cities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${roboto.variable}`}>
      <body className="bg-base-dark text-text-muted antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}