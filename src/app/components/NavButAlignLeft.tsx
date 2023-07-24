import React from "react";

const ButtonContainer: React.FC = () => {
   return (
      <div className='flex'>
         <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            style={{ width: "100px" }}
         >
            Button 1
         </button>
         <button
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
            style={{ width: "100px" }}
         >
            Button 2
         </button>
         <button
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
            style={{ width: "100px" }}
         >
            Button 3
         </button>
      </div>
   );
};

export default ButtonContainer;
