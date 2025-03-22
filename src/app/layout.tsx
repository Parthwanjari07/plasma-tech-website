import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Setup fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"]
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "THE PLASMA | Software Development Agency",
  description: "Your One-Stop Solution for Web, App, and Machine Learning Projects. We provide software solutions tailored for market clients and students.",
  keywords: "software development, web development, app development, machine learning, UI/UX design, digital agency, Mumbai, Bangalore",
  authors: [{ name: "The Plasma Tech" }],
  creator: "The Plasma Tech",
  metadataBase: new URL("https://theplasma.tech"),
  openGraph: {
    type: "website",
    title: "THE PLASMA | Software Development Agency",
    description: "Your One-Stop Solution for Web, App, and Machine Learning Projects",
    siteName: "THE PLASMA",
    url: "https://theplasma.tech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE PLASMA | Software Development Agency",
    description: "Your One-Stop Solution for Web, App, and Machine Learning Projects",
    creator: "@theplasmatech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth dark`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
