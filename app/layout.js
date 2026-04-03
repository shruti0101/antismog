import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SplashCursor from "@/components/SplashCursor";

import Whatsapp from "@/components/Whatsapp";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Anti Smog Gun Supplier Kapmix Machinery | Dust Suppression Machine",
  description:
    "Leading Anti Smog Gun Supplier in India offering dust suppression systems, fog cannons & pollution control machines for construction, mining & industrial use.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <Whatsapp />

        <SplashCursor />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
