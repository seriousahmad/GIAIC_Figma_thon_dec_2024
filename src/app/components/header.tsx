import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full h-[35px] bg-[#000000] text-[#FAFAFA] flex pt=3 pl-[240px] gap-[250px]'> 

    <div className='w-[750px] h-[24px] w-full sm:w-[750px] h-[24px]'>
      <p className='font-satoshi pt-2 pl-32 text-center font-poppins text-sm w-[694px] h-[18px] font-normal text-center font-satoshi pt-2 text-center font-poppins text-sm sm:text-base w-full sm:w-[694px] h-[18px] font-normal'>Sign up and get 20% off to your first.
      <span className=' pl-[10px] w-[68px] h-[24px] font-poppins underline font-semibold text-sm pl-2 sm:pl-[10px] font-poppins font-semibold text-sm sm:text-base'>Sign Up Now</span>
      </p> 
    </div>

    <div className='mt-3'>
        <Image src={require('/public/Vector.png')} alt=''/>
    </div>



    {/* <select name="select" id="select" className='bg-[#000000] text-[#FFFFFF]'>
        <option value="English">ENGLISH</option>
    </select> */}
    </div>
  )
}

export default Header

