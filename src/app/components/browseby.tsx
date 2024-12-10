import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Browseby = () => {
  return (
    <div className='pt-[5px] m-auto w-[1130px] h-[820px] bg-[#F0F0F0]'>

        <div className='h=[40px] w-auto'>
        <Image className='ml-[315px] h-[32px] w-[550px] mt-[65px]' src={require('/public/BROWSE BY dress STYLE.png')} alt=''/>
        </div>

    <div className='lg:ml-6 lg:mt-[60px] lg:flex sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>
    <div>
        <div className='mt-4 ml-10 absolute hover:underline font-semibold text-[38px]'><Link href="/casual">Casual</Link></div>

        <Image className='h-[280px] w-[400px] mt-[10px]' src={require('/public/image 11.png')} alt=''/>
        </div>

        <div>
        <div className='mt-4 ml-10 absolute hover:underline  font-semibold text-[38px]'>Formal</div>
        <Image className='h-[280px] w-[680px] mt-[10px]' src={require('/public/image 13.png')} alt=''/>
        </div>
    </div>

    <div className='ml-6 mt-[15px] flex '>
    <div>
        <div className='mt-4 ml-10 absolute hover:underline  font-semibold text-[38px]'>Party</div>
        <Image className='h-[280px] w-[680px] mt-[10px]' src={require('/public/image 12.png')} alt=''/>
        </div>

        <div>
        <div className='mt-4 ml-10 absolute hover:underline  font-semibold text-[38px]'>Gym</div>
        <Image className='h-[280px] w-[400px] mt-[10px]' src={require('/public/image 14.png')} alt=''/>
        </div>
    </div>

        
    </div>
  )
}

export default Browseby