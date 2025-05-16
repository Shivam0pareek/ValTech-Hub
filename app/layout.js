import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Theme } from "@radix-ui/themes";

const outfit = Outfit({subsets: ['latin']})

export const metadata = {
  title: "Free Course",
  description: "AI Course Generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7250733813180385"></meta>
      </head>
      <body
        className={outfit.className}
      >
        <Provider>
          <Theme>
          {children}
          </Theme>
        
        </Provider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
