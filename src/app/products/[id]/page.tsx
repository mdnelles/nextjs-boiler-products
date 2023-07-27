import { prods } from "@/data/dummy";
import { Product } from "@/types";
import Image from "next/image";

interface Props {
   id: number;
}

const ProductDisplay: React.FC<Props> = ({ id }) => {
   const prod = prods.find((p: Product) => p.id === id);
   console.log("....prod...");
   console.log(prod);
   return (
      <>
         <div className='container'>
            <div className='cell'>
               {prod?.title}
               <Image
                  src={prod?.thumbnail || "/noimage.png"}
                  width={100}
                  height={100}
                  alt={prod?.title || "no title"}
               />
            </div>
            <div className='cell'>
               <ul>
                  <li>Price ${prod?.price}</li>
                  <li>Discount % {prod?.discountPercentage}</li>
                  <li>Rating: {prod?.rating}</li>
                  <li>In Stock: {prod?.stock}</li>
                  <li>Brand: {prod?.brand}</li>
                  <li>Category: {prod?.category}</li>
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
