import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pingna Day 坪常日",
  description: "坪常日｜源自新北坪林的氣泡茶品牌。包種氣泡茶與橘香氣泡茶，堅持傳統、持續創新。",
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-36C73MZM6G"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-36C73MZM6G');`
        }}></script>
      </body>
    </html>
  );
}
