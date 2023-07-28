"use client";

import { prods } from "@/data/dummy";
import { Product } from "@/types";
import Image from "next/image";

interface Props {
   params: { id: string | number };
   searchParams?: string | string[] | undefined;
}

const ProductDisplay: React.FC<Props> = ({ params }) => {
   const id = params && params.id ? params.id : 1;
   const numericId = typeof id === "string" ? +id : 1;
   const prod = prods.filter((p: Product) => p.id === numericId);

   return (
      <>
         <div className='container'>
            <div className='cell'>
               {prod[0] ? prod[0].title : "title"}
               <Image
                  src={prod[0] ? prod[0].thumbnail : "/noimage.png"}
                  width={100}
                  height={100}
                  alt={prod[0] ? prod[0].title : "no title"}
               />
            </div>
            <div className='cell'>
               <ul>
                  <li>Price ${prod[0] ? prod[0].price : 0}</li>
                  <li>Discount % {prod[0] ? prod[0].discountPercentage : 0}</li>
                  <li>Rating: {prod[0] ? prod[0].rating : 0}</li>
                  <li>In Stock: {prod[0] ? prod[0].stock : 0}</li>
                  <li>Brand: {prod[0] ? prod[0].brand : 0}</li>
                  <li>Category: {prod[0] ? prod[0].category : 0}</li>
               </ul>
            </div>
            <div className='cell'>
               <button>Add to cart</button>
            </div>
         </div>
      </>
   );
};

export default ProductDisplay;
