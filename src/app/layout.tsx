import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manuel Vera | Superclones",
  description: "Relojes de lujo tipo superclone, máxima calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
