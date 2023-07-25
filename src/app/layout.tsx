import NavButSpaced from "./components/NavButSpaced";
import NavButAlignedLeft from "./components/NavButAlignLeft";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Testing Day one",
   description: "Getting up to speed with React and NextJS",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <NavButAlignedLeft />
            {children}
            <Footer />
         </body>
      </html>
   );
}
