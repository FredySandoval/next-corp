"use server";
import type { Metadata } from "next";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  return {};
}

export default async function Home({ params }: HomeProps) {
  return <></>;
}
