"use server";
import type { Metadata } from "next";

interface HomeProps {
  params: {
    locale: string;
  };
}
export const generateMetadata = async (): Promise<Metadata> => {
  return {};
};

export default async function Home({ params }: HomeProps) {
  return (
    <>
    </>
  );
}
