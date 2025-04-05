import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { IBM_Plex_Sans} from "next/font/google";
import { cn } from "./lib/utils";

import "./global.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight : ['400', '500', '600', '700'],
  variable : '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "OpticX",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className= {cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              {/* <SignInButton />
              <SignUpButton /> */}
            </SignedOut>
            <SignedIn>
              {/* <UserButton /> */}
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}


