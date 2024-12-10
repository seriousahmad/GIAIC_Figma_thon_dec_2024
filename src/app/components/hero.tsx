import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-auto h-[623px]  flex w-auto h-auto flex flex-col md:flex-row relative'>

        <div className='absolute  mt-[90px] ml-[90px] w-auto h-auto  md:ml-[90px] w-auto h-auto text-center md:text-left'>
        <Image className='h-[165px] w-[530px] mt-[10px] h-[165px] w-[530px] mt-[10px] mx-auto md:mx-0' src={require('/public/FIND CLOTHES THAT MATCHES YOUR STYLE.png')} alt='Style Banner'/>

        <div className='mt-5 text-[#707070] text-[14px] md:text-[15px] px-5 md:px-0'>
        <p>Browse through our diverse range of meticulously crafted garments, designed</p>
        <p>to bring your individuality and cater to your sense of style</p>
        </div>
        
        <button className='mt-5 bg-[#000000] text-[#FFFFFF] text-[14px] w-[175px] h-[38px] rounded-[35px] mx-auto md:mx-0'>Shop Now</button>
        </div>

        <div className='absolute lg:mt-[50px] lg:ml-[1250px]'>
        <Image className='lg:mb-[100px] lg:h-[100px] lg:w-[100px] lg:mt-[10px]' src={require('/public/Vector (3).png')} alt=''/>
        </div>

        <div className='absolute mt-[280px] ml-[680px]'>
        <Image className='mb-[100px] h-[59px] w-[59px] mt-[10px]' src={require('/public/Vector (3).png')} alt=''/>
        </div>

        <div>
        <Image className='mb-[100px] h-[610px] w-[2000px] mt-[10px]' src={require('/public/Rectangle 2.png')} alt=''/>
        </div>
    </div>
  )
}

export default Hero