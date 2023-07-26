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
   const handleGetDogs = async () => {
      setDog1(await getDog(1));
      setDog2(await getDog(2));
      setDog3(await getDog(3));
      return true;
   };

   const getDog = async (num: number) => {
      const res =
         num === 1
            ? await fetch("https://dog.ceo/api/breeds/image/random", {
                 cache: "force-cache",
              })
            : num === 2
            ? await fetch("https://dog.ceo/api/breeds/image/random", {
                 next: { revalidate: 10 },
              })
            : await fetch("https://dog.ceo/api/breeds/image/random", {
                 cache: "no-store",
              });
      const data: DogType = await res.json();
      return data;
   };

   const [dog1, setDog1] = useState<DogType>(defaultDog);
   const [dog2, setDog2] = useState<DogType>(defaultDog);
   const [dog3, setDog3] = useState<DogType>(defaultDog);

   return (
      <>
         <div className='p-10'>
            <button onClick={handleGetDogs}>Get Dog</button>
         </div>
         {dog1.status !== "init" ||
         dog2.status !== "init" ||
         dog3.status !== "init" ? (
            <>
               <Image
                  src={dog1.message}
                  alt='example'
                  width={300}
                  height={300}
               />
               <Image
                  src={dog2.message}
                  alt='example'
                  width={300}
                  height={300}
               />
               <Image
                  src={dog3.message}
                  alt='example'
                  width={300}
                  height={300}
               />
            </>
         ) : (
            <></>
         )}
      </>
   );
}
