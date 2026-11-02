import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
}
