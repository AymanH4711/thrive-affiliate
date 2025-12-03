import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Thrive",
  description: "Natural Blood Sugar Support & Healthy Living",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
