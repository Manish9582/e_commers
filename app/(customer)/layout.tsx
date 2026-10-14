import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ReactNode } from "react";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
