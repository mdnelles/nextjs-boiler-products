"use client";

import { useState } from "react";
import Image from "next/image";

type DogType = {
   message: string;
   status: string;
};

const defaultDog: DogType = {
   message: "",
   status: "init",
};

export default function Dogs() {
   const handleGetDog = async () => {
      setDog(await getDog());
      return true;
   };

   const getDog = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data: DogType = await res.json();
      return data;
   };

   const [dog, setDog] = useState<DogType>(defaultDog);

   return (
      <>
         <div className='p-10'>
            <button onClick={handleGetDog}>Get Dog</button>
         </div>
         {dog.status !== "init" ? (
            <Image src={dog.message} alt='example' width={300} height={300} />
         ) : (
            <></>
         )}
      </>
   );
}
