import type { Metadata, Viewport } from "next";
import { Outfit, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CartProvider } from "@/components/cart/cart-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROCTOREX — Ajutor natural. Zi de zi.",
  description:
    "Cremă naturală pentru îngrijirea zonei sensibile în perioadele de disconfort cauzat de hemoroizi. Formulă pe bază de plante, creată pentru calmare, protecție și regenerarea țesutului inflamat.",
  applicationName: "PROCTOREX",
  authors: [{ name: "PROCTOREX" }],
  keywords: ["PROCTOREX", "cremă naturală", "hemoroizi", "calmare", "plante"],
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${outfit.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
