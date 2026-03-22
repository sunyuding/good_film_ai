import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Film AI — AI-Powered Film Production",
  description:
    "Silicon Valley-based film production studio with Hollywood production team. Corporate videos, event coverage, commercials, and AI filmmaking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
