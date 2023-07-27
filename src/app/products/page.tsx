"use client";
import { prods } from "../../data/dummy";
import Image from "next/image";
import dynamic from "next/dynamic";

interface DynamicButtonProps {
   onClick: () => void;
   children: React.ReactNode;
}

const DynamicButton = (props: DynamicButtonProps) => {
   const { onClick, children } = props;

   return <button onClick={onClick}>{children}</button>;
};

export default function Products() {
   const handleView = (id: number) => {
      console.log(id);
   };
   return (
      <>
         {prods.map((p) => (
            <div className='container'>
               <div className='cell'>
                  {p.title}
                  <Image
                     src={p.thumbnail}
                     width={10}
                     height={10}
                     alt={p.title}
                  />
               </div>
               <div className='cell'>
                  Price ${p.price}
                  Discount % {p.discountPercentage}
                  Rating: {p.rating}
                  In Stock: {p.stock}
                  Brand: {p.brand}
                  Category: {p.category}
               </div>
               <div className='cell'>
                  <DynamicButton onClick={() => handleView(p.id)}>
                     View Details
                  </DynamicButton>
               </div>
            </div>
         ))}
      </>
   );
}
