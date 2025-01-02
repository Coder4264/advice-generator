import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import Advice from './Advice'

export default function Card() {

  const [advices, setAdvices] = useState([]);

  const getAdvice = async () => {
    let res =  await fetch('https://api.adviceslip.com/advice')
    let data = await res.json();
    if(data) {
        console.log("data: ", data?.slip);
        setAdvices(data?.slip);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  const nextAdvice = () => {
    getAdvice();
  }

  return (
    <div className='relative w-full md:w-5/12 h-[260px] md:h-[350px] border border-gray-800 bg-gray-800 shadow-2xl rounded-xl text-center'>
        {
          advices && (
            <div className='px-2 py-2 md:px-8 md:py-8 '>
              <Counter counter={advices?.id} className="" />
              <Advice advices={advices} /> 
              <img className='w-full' src="/pattern-divider-desktop.svg" alt="Pattern divider" />
                
            </div>
          )
        }
        <div onClick={nextAdvice} className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-emerald-400 rounded-full flex items-center justify-center hover:shadow-[0px_0px_20px] hover:shadow-emerald-400 hover:bg-emerald-400 duration-500'>
                <img src="/icon-dice.svg" className='' alt="Dice Icon" />
              </div>
    </div>
  )
}
