import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  console.log("SERVER");
  return {
    props: { time: new Date().toISOString() },
  };
};

export default function Ssg({ time }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Static Site Generation</h1>
      <h1>{time}</h1>
      <Link href="/">HOME</Link>
    </div>
  );
}
