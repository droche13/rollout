import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-transparent dark:bg-gray-900">
      <body className="bg-transparent dark:bg-gray-900">{children}</body>
    </html>
  );
}
