import type { Metadata } from "next";
import { Syne } from "next/font/google"; // The pro font loader
import "./globals.css";

// Configure the Syne font
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shipyards.ai | The AI Builder Fleet",
  description: "Stop building in the dark. Start shipping in the light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#030303]">
      {/* Apply the syne font class here */}
      <body className={`${syne.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}