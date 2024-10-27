import "./globals.css";
import { merriweather } from "./fonts/fonts";

export const metadata = {
  title: "PEOPLE CRUD",
  description: "CRUD of people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
