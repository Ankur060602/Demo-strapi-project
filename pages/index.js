import Layout from "@/components/Layout";
import Links from "@/components/Links";
import { Fetcher } from "@/lib/api";
import React from "react";

const Landing = ({ link }) => {
  return (
    <>
      <Layout>
        <h6 className=" text-center text-sm text-pink-700">WHY CHOOSE US</h6>
        <h2 className="text-center text-2xl text-purple-900 font-bold my-3">
          We Different From Others
        </h2>
        <p className=" text-xs text-center w-[500px] m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          debitis quae magnam voluptatem doloribus maxime tenetur placeat ab
          laboriosam similique.
        </p>
      </Layout>
      {/* <Discrp links={link} /> */}
      <Links links={link} />
    </>
  );
};

export default Landing;

export async function getStaticProps() {
  const demoresponse = await Fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/links`);
  console.log(demoresponse);
  return {
    props: {
      link: demoresponse
    }
  }
}