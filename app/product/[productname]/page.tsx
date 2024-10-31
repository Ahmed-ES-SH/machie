import Footer from "@/app/_components/_Dashbord/Footer";
import CurrentProduct from "@/app/_components/_prodcutpage/CurrentProduct";
import RelatedProducts from "@/app/_components/_prodcutpage/RelatedProducts";
import Signuppanner from "@/app/_components/_prodcutpage/Signuppanner";
import MinyNav from "@/app/_components/MinyNav";
import Navbar from "@/app/_components/Navbar";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { productname: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`http://127.0.0.1:8000/api/product/${id}`).then(
//     (res) => res.json()
//   );

//   return {
//     title: product.title,
//   };
// }

const Page = ({ params }: Props) => {
  return (
    <>
      <Navbar />
      <MinyNav />
      <CurrentProduct title={params.productname} />
      <RelatedProducts />
      <Signuppanner />
      <Footer />
    </>
  );
};

export default Page;
