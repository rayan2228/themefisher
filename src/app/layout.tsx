import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Daryl Smith | Full Stack Developer Portfolio",
  description:
    "I'm Daryl Smith, a passionate Full Stack Developer specializing in modern web technologies like React, Node.js, and MongoDB. Check out my projects and get in touch.",
  keywords: [
    "Daryl Smith",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "Software Engineer",
    "Portfolio Website"
  ],
  authors: [{ name: "Daryl Smith", url: "https://themefisher.vercel.app" }],
  creator: "Daryl Smith",
  openGraph: {
    title: "Daryl Smith | Full Stack Developer",
    description:
      "Explore Daryl Smith's developer portfolio, featuring high-quality web apps built with React, Node.js, and more.",
    url: "https://themefisher.vercel.app",
    siteName: "Daryl Smith Portfolio",
    type: "website",
    images: [
      {
        url: "https://themefisher.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daryl Smith Portfolio Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Daryl Smith | Full Stack Developer",
    description:
      "Check out the personal portfolio of Daryl Smith, a Full Stack Developer building high-quality web experiences.",
    images: ["https://themefisher.vercel.app/og-image.png"],
    creator: "@themefirsher"
  },
  metadataBase: new URL("https://themefisher.vercel.app")
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
