import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Seth Phinehas | Backend Engineer",
  description: "I'm a Backend Engineer focused on building simple, reliable web applications. I solve difficult problems behind the scenes so things just work.",
  openGraph: {
    title: "Seth Phinehas | Backend Engineer",
    description: "Building the foundational logic that powers modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-[-1] opacity-50 pointer-events-none bg-mesh" />
            <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
            
            <Navbar />
            <main className="flex-grow pt-24">
              {children}
            </main>
            
            <footer className="py-12 px-6 border-t border-white/5 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Seth Phinehas. Engineered for Excellence.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
