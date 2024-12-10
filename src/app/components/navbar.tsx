import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <> 

<div className='pb-5 w-full h-[95px] border-b-2 border-[#EAEAEA] flex flex-col md:flex-row justify-between items-center px-4 md:px-[95px] px-[95px] w-full h-[95px] border-[#EAEAEA] border-b-2 flex justify-between'>

        <h1 className='mt-3 text-[38px] font-bold mt-3 text-2xl md:text-[38px] font-bold'>SHOP.CO</h1>

        <Image className='h-8 mt-[10px] sm:hidden' src={require('/public/menu-regular-24.png')} alt=''/>
        
        <ul className='text-[17px] mt-7 flex justify-between gap-[30px] mt-4'>
          
            <li className='font-satoshi flex gap-2 font-satoshi flex items-center gap-2'>Shop
            <Image className='h-2 mt-[10px]' src={require('/public/Vector (1).png')} alt=''/>
            </li>
            <li className='font-satoshi'>On Sale</li>
            <li className='font-satoshi'>New Arrivals</li>
            <li className='font-satoshi'>Brands</li>
        </ul>

        <div className=';mt-4 md:mt-6 w-full md:w-auto'>
            <button className='mt-1 px-2 w-[440px] h-[38px] border-[1px] bg-[#F0F0F0] border-black rounded-[23px] flex gap-3 w-full md:w-[440px] h-[38px] border border-black bg-[#F0F0F0] rounded-[23px] flex items-center gap-3 px-4'>
            <Image className='h-5 mt-[9px]' src={require('/public/Vector (2).png')} alt=''/>
            <input className='w-full mt-2 text-sm focus:outline-none bg-transparent' type="text" placeholder='Search For Products...'/>
            </button>
        </div>

        <div className=''>
        <Image className='h-6 mt-[30px]' src={require('/public/Frame 5.png')} alt=''/>
        </div>

    </div>

    {/* <div className='px-[95px] w-full h-[95px] border-[#EAEAEA] border-b-2 flex justify-between'>
        <h1 className='mt-3 text-[38px] font-bold'>SHOP.CO</h1>

        <ul className='text-[17px] mt-7 flex justify-between gap-[30px]'>
            <li className='font-satoshi flex gap-2'>Shop
            <Image className='h-2 mt-[10px]' src={require('/public/Vector (1).png')} alt=''/>
            </li>
            <li className='font-satoshi'>On Sale</li>
            <li className='font-satoshi'>New Arrivals</li>
            <li className='font-satoshi'>Brands</li>
        </ul>

        <div>
            <button className='mt-6 px-2 w-[440px] h-[38px] border-[1px] bg-[#F0F0F0] border-black rounded-[23px] flex gap-3'>
            <Image className='h-5 mt-[9px]' src={require('/public/Vector (2).png')} alt=''/>
            <input className='mt-2' type="text" placeholder='Search For Products...'/>
            </button>
        </div>

        <div className=''>
        <Image className='h-6 mt-[30px]' src={require('/public/Frame 5.png')} alt=''/>
        </div>

    </div> */}

    </>
  )
}

export default Navbar