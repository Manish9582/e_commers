import React, { ReactNode } from "react";

export default function ShopkeeperLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
