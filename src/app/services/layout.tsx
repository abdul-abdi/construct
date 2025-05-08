import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silverpack Group | Our Company",
  description: "Learn about our mission, vision, capabilities, and policies. Silverpack Group is a premier construction and development company in Kenya.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 