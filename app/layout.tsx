import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert Laws | Practical AI Workflow Tools",
  description:
    "Robert Laws helps small teams turn manual workflows into practical AI-assisted tools, automations, dashboards, and learning systems.",
  icons: {
    icon: [
      { url: "/app-icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/app-icons/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/app-icons/apple-icon-180x180.png", sizes: "180x180" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
