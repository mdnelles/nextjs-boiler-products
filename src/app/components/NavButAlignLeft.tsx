"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonContainer: React.FC = () => {
   const router = useRouter();
   const handleWho = () => router.push("/who");

   return (
      <menu>
         <div className='flex space-x-3'>
            <Link href='/'>
               <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                  style={{ width: "200px" }}
               >
                  Home
               </button>
            </Link>

            <button
               className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
               style={{ width: "200px" }}
               onClick={handleWho}
            >
               Who are we
            </button>

            <Link href='/products'>
               <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                  style={{ width: "200px" }}
               >
                  Products
               </button>
            </Link>
         </div>
      </menu>
   );
};

export default ButtonContainer;
