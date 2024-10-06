import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fira_Sans } from 'next/font/google'
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const neueMachinaUltrabold = localFont({
  src: "./fonts/PPNeueMachina-InktrapUltrabold.otf",
  variable: "--font-neue-machina-ultrabold",
  weight: "800",
});
// const neueMachinaRegular = localFont({
//   src: "./fonts/PPNeueMachina-InktrapRegular.otf",
//   variable: "--font-neue-machina-regular",
//   weight: "500",
// });
const neueMachinaPlainLight = localFont({
  src: "./fonts/PPNeueMachina-InktrapLight.otf",
  variable: "--font-neue-machina-plain-light",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Poup Fest",
  description: "Closing　Celebration for Pop-up Villages in Chiangmai, Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMachinaUltrabold.variable} ${neueMachinaPlainLight.variable} ${firaSans.className} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
