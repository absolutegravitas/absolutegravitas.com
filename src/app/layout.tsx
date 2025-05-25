import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbsoluteGravitas LLC",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://www.absolutegravitas.com",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://media.licdn.com/dms/image/v2/D4E0BAQFkg4g2Xz9RZw/company-logo_100_100/company-logo_100_100/0/1729661480711/absolutegravitas_logo?e=1747872000&v=beta&t=YzItCAdXtJLaZ6N3_-4dUDK8SPQriNUGSIcFF6tDXk4",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
