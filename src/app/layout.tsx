import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartographer — Every Parcel in Utah, Inside Google Earth Pro",
  description:
    "See 1.67 million parcel boundaries, ownership records, and property values on aerial imagery. Subscribe, open a link, and start exploring.",
  openGraph: {
    title: "Cartographer — Every Parcel in Utah, Inside Google Earth Pro",
    description:
      "See 1.67 million parcel boundaries, ownership records, and property values on aerial imagery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
