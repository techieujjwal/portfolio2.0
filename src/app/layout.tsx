import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { NavigationEvents } from "@/components/navigation-events";
import { ThemeProvider } from "next-themes";
import { ClientLayout } from "./client-layout";
import { generateMetadata } from "./metadata";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = generateMetadata();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark" // 👈 force dark on initial SSR
    >
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"      // 👈 always dark
          enableSystem={false}     // 👈 ignore system theme
          disableTransitionOnChange
        >
          <ClientLayout>
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <PageWrapper>
                <main className="flex-1">{children}</main>
              </PageWrapper>
              <Footer />
            </div>
          </ClientLayout>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
