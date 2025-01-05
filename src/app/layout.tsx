import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kkurl - minimal url shortener",
  description: "The only url shortener you'll ever need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <div className="fixed bottom-0 z-50">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="https://kenneth-nextjs-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="bg-white w-full m-2 px-1 py-1 border rounded-full shadow-sm "
                >
                  @kennethjohnras
                </Button>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 m-2 ">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQGYeY9NljHwng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723030081864?e=1741824000&v=beta&t=W7z4l3aoXSqJ7M08WMj7vB8mLKJdr4mzFlsTlZ7s-JM" />
                  <AvatarFallback>KR</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <a
                    href="https://kenneth-nextjs-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="text-sm font-semibold">@kennethjohnras</h4>
                  </a>
                  <p className="text-sm">
                    This tool was created by Kenneth John Ras.
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      Launched 5 January 2025
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </body>
    </html>
  );
}
