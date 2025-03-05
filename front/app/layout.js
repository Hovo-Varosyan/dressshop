import clsx from "clsx/lite";
import { Playfair_Display } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import "./globals.css";

const font = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "beauty shop",
  description: "shop",
};

export default function LoginLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={clsx(font.className, "font-medium")}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
