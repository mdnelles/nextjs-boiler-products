"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonContainer: React.FC = () => {
   const router = useRouter();
   const handleWho = () => {
      // Route user to /who
      router.push("/who");
   };

   const handleContact = () => {
      // Route user to /contact
      router.push("/contact");
   };

   return (
      <menu>
         <div className='flex space-x-3'>
            <button
               className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
               onClick={handleWho}
            >
               Who are we
            </button>
            <Link href='/clients'>
               <button
                  className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
                  style={{ width: "200px" }}
               >
                  clients
               </button>
            </Link>
            <button
               className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
               style={{ width: "200px" }}
               onClick={handleContact}
            >
               Contact
            </button>
            <Link href='/dog'>
               <button
                  className='font-bold py-2 px-4 rounded'
                  style={{ width: "200px" }}
               >
                  Dog
               </button>
            </Link>
            <Link href='/products'>
               <button
                  className='font-bold py-2 px-4 rounded'
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
