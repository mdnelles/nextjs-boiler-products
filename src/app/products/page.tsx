"use client";
import { prods } from "@/data/dummy";
import { DynamicButtonProps, Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import the hook instead of the module

const Button = (props: DynamicButtonProps) => {
   const { onClick, children } = props;

   return (
      <button onClick={onClick} className='button1'>
         {children}
      </button>
   );
};

function Products() {
   const router = useRouter();
   const handleView = (id: number) => {
      // push user to the /prdoucts/[id] page
      router.push(`/products/${id}`);
      console.log(id);
   };

   return (
      <>
         {prods.map((p: Product) => (
            <div className='container' key={"i" + p.id}>
               <div className='cell'>
                  {p.title}
                  <Image
                     src={p.thumbnail}
                     width={100}
                     height={100}
                     alt={p.title}
                  />
               </div>
               <div className='cell'>
                  <ul>
                     <li>Price ${p.price}</li>
                     <li>Discount % {p.discountPercentage}</li>
                     <li>Rating: {p.rating}</li>
                     <li>In Stock: {p.stock}</li>
                     <li>Brand: {p.brand}</li>
                     <li>Category: {p.category}</li>
                  </ul>
               </div>
               <div className='cell'>
                  <Button onClick={() => handleView(p.id)}>View Details</Button>
               </div>
            </div>
         ))}
      </>
   );
}

export default Products;
