import React from 'react'
import Image from 'next/image'

const Brandbar = () => {
  return (
    <>
    <div className='pt-6 px-[95px] w-full lg:h-[95px] border-[#EAEAEA] bg-[#000000] lg:flex lg:justify-between sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>

    <Image className='mb-[100px] h-[32px] w-[150px] mt-[10px]' src={require('/public/Group(100).png')} alt=''/>

    <Image className='mb-[100px] h-[35px] w-[100px] mt-[10px]' src={require('/public/zara-logo-1 1.png')} alt=''/>

    <Image className='mb-[100px] h-[35px] w-[135px] mt-[10px]' src={require('/public/gucci-logo-1 1.png')} alt=''/>

    <Image className='mb-[100px] h-[30px] w-[165px] mt-[10px]' src={require('/public/prada-logo-1 1.png')} alt=''/>

    <Image className='mb-[100px] h-[33px] w-[180px] mt-[10px]' src={require('/public/Group (1).png')} alt=''/>

    </div>
    </>
    
  )
}

export default Brandbar