import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "MOTO LOOP | バイク買取・中古バイク販売",
    description: "バイク専門の無料出張査定と、整備・保証付き中古バイク販売。愛車の価値を、次のライダーへ。",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "MOTO LOOP | 愛車の価値を、次のライダーへ。",
      description: "バイク専門の無料出張査定と、整備・保証付き中古バイク販売。",
      type: "website",
      locale: "ja_JP",
      images: [{ url: `${origin}/og.png`, width: 1792, height: 933, alt: "MOTO LOOP" }],
    },
    twitter: { card: "summary_large_image", title: "MOTO LOOP", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
