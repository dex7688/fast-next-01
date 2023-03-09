import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
};

export default function Home({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>{time}</h1>
      <Link href="/csr">GO CSR</Link>
      <br />
      <Link href="/ssg">GO SSG</Link>
      <br />
      <Link href="/isr">GO ISR</Link>
    </>
  );
}
