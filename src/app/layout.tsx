import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel Vera | Superclones",
  description: "Relojes de lujo tipo superclone, máxima calidad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
