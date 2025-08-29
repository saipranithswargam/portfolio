import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { MobileSidebar } from "../components/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#131313]`} suppressHydrationWarning={true}>
        <MobileSidebar />
        
        <aside className="fixed top-0 left-0 h-full w-64 bg-[#1C1C1C] p-6 hidden md:block">
          <Sidebar />
        </aside>

        <main className="md:ml-64 p-12 flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
