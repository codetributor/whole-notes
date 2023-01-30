import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="max-w-7xl mx-auto">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
