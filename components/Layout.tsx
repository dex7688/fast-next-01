import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div style={{ backgroundColor: "green" }}>{children}</div>;
}
