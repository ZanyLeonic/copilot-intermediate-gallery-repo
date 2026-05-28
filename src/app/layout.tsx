import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Camera } from "lucide-react";
import { ThemeProvider, ThemeToggle, THEME_STORAGE_KEY } from "@/components/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Gallery & Portfolio",
  description: "A curated collection of photographs and creative works showcasing a personal portfolio.",
};

// Inline script that runs before React hydrates so the correct theme class is
// on <html> for the first paint. Avoids a flash of incorrect theme.
const themeInitScript = `(() => {
  try {
    var KEY = ${JSON.stringify(THEME_STORAGE_KEY)};
    var stored = localStorage.getItem(KEY);
    var theme = (stored === 'light' || stored === 'dark' || stored === 'system') ? stored : 'system';
    var resolved = theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    var root = document.documentElement;
    if (resolved === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    root.style.colorScheme = resolved;
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Navigation Header */}
          <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <Camera className="h-8 w-8 text-blue-600" />
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Portfolio Gallery
                  </h1>
                </Link>
                <nav className="flex items-center gap-6">
                  <Link href="/gallery" className="nav-link">
                    Gallery
                  </Link>
                  <Link href="/upload" className="nav-link">
                    Upload
                  </Link>
                  <Link href="/admin" className="btn-primary">
                    Admin
                  </Link>
                  <ThemeToggle />
                </nav>
              </div>
            </div>
          </header>
          {children}
          {/* REPLACE THIS COMMENT */}
        </ThemeProvider>
      </body>
    </html>
  );
}
