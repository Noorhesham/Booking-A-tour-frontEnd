import { getTour } from "@/actions/getTour";
import React from "react";
import { Metadata } from "next";
import Tour from "@/components/Tour";
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: params.slug,
  };
}
const page = async ({ params }: { params: { slug: string } }) => {
  const tour = await getTour(params.slug);
  return <Tour tour={tour} />;
};

export default page;
