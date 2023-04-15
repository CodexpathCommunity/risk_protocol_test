import Image from 'next/image'
import React from 'react'

const TokenHeader = () => {
  return (
    <div className='flex items-center justify-between mb-10'>
      <div className="">
        <p className="text-2xl font-semibold">Etherium <span className="text-gray-600">{"(ETH)"}</span></p>
        {/* <p className="text-4xl font-bold">$2,081.79</p> */}
      </div>
      
      <div className="flex items-center space-x-2">
         <div className="border border-gray-200 rounded-full py-1 px-2 bg-white max-w-max">
                        <Image src={"/eth.svg"} height={10} width={10} alt='ethlogo' />
                        </div>
                    <p className=" font-semibold text-base">Etherium</p>  

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</svg>
      </div>
    </div>
  )
}

export default TokenHeader