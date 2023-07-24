import Link from "next/link";
import router from "next/router";
import React from "react";

const ButtonContainer: React.FC = () => {
   const handleWho = () => {
      // Route user to /who
      router.push("/who");
   };

   const handleContact = () => {
      // Route user to /contact
      router.push("/contact");
   };

   return (
      <div className='flex'>
         <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            style={{ width: "100px" }}
            onClick={handleWho}
         >
            Who are we
         </button>
         <Link href='/contact'>
            <button
               className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
               style={{ width: "100px" }}
            >
               clients
            </button>
         </Link>
         <button
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
            style={{ width: "100px" }}
            onClick={handleContact}
         >
            Contact
         </button>
      </div>
   );
};

export default ButtonContainer;
