import { useState, useEffect } from "react";
import Link from "next/link";

export default function Csr() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    console.log("client");

    setTime(new Date().toISOString());
  }, []);
  return (
    <div>
      <h1>CSR</h1>
      <h1>{time}</h1>
      <Link href="/">HOME</Link>
    </div>
  );
}
