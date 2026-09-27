import type { Metadata } from "next";
import { Sora, Figtree, DM_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ClinAssure | Clinical assurance for digital health programmes",
    template: "%s | ClinAssure",
  },
  description:
    "ClinAssure supports NHS organisations, independent healthcare providers and health tech suppliers to embed clinical assurance early, align with DCB0129, DCB0160 and DTAC, and make safer digital transformation decisions at pace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${figtree.variable} ${dmMono.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
