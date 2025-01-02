import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import Advice from './Advice'
import Fetch from './Fetch'

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
    <div className='w-4/12 h-[300px] border border-gray-800 bg-gray-800 shadow-2xl rounded-xl px-4 py-2 text-center '>
        {
          advices && (
            <>
              <Counter counter={advices?.id} />
              <Fetch advices={advices} />            
              <button type='button' onClick={nextAdvice}>Next Advice</button>
            </>
          )
        }
    </div>
  )
}
