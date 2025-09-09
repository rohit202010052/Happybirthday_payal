import "./globals.css";

export const metadata = {
  title: "Happy Birthday Chikun",
  description: "A small gesture of heartfelt love and wishes to my better half
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
