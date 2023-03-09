import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  console.log("revalidate");
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
};

export default function Isr({ time }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>ISRISRISR</h1>
      <h1>{time}</h1>
      <Link href="/">HOME</Link>
    </div>
  );
}
