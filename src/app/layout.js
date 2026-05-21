import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins= Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400',"500","600","700"]
})

export const metadata = {
  title: "FocusRoom",
  description: "Find Your Perfect Focus Zone",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className=" min-h-full bg-[#110c08] text-gray-50 flex flex-col">
        <Navbar></Navbar>
        <main className="px-5">
        {children}
        </main>
        <Footer></Footer>
        <Toaster position="top-right" />
        </body>
    </html>
  );
}
