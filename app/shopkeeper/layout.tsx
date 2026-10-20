import Header from "@/components/shopkeeper/Header";
import Sidebar from "@/components/shopkeeper/Sidebar";
import React, { ReactNode } from "react";

export default function ShopkeeperLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-end-3">
        <Sidebar />
      </div>
      <main className="col-start-3 col-end-13">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
}
