import React from "react";
export default function Advice({advices}){
  
  return (
    <div>
      {advices && (
        <p className='text-[20px] md:text-[24px] lg:text-[28px] font-extrabold py-7' key={advices.id}>“{advices.advice}”</p>
      )}
    </div>
  );
};