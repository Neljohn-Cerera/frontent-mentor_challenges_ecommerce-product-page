import { ReactNode } from "react";
import Header from "./header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main role="main" className="container">{children}</main>
    </>
  );
}
