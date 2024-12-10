import React from 'react'
import Image from 'next/image'

const Stayuptodate = () => {
  return (
    <>
    <div className='p-[38px] rounded-[25px] m-auto bg-[#000000] lg:h-[150px] lg:w-[84.5%] lg:flex lg:justify-between sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>
   
    <div>
    <Image className='h-80px] w-[550px]' src={require('/public/STAY UPTO DATE ABOUT OUR LATEST OFFERS.png')} alt=''/>
    </div>
    
    <div className=''>

      <button className='mb-1 bg-[#FFFFFF] flex text-[#FAFAFA] h-[40px] w-[299px] border-[1.5px] rounded-[25px]'>
        <Image className='ml-2.5 mt-3 h-4 w-6' src={require('/public/Vector (4).png')} alt=''/>
        <input className='m-auto' type="email" placeholder='Enter your email address'/>
      </button>

      <button className='mt-2 bg-[#FFFFFF] flex text-[#FAFAFA] h-[40px] w-[299px] border-[1.5px] rounded-[25px]'>
      <Image className='m-auto h-[13px] w-[150px]' src={require('/public/Subscribe to Newsletter.png')} alt=''/>
      </button>

    </div>

    </div>
    </>
  )
}

export default Stayuptodate