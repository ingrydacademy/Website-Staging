import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
