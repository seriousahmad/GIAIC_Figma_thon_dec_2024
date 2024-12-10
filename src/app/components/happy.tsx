import React from 'react'
import Image from 'next/image'

const Happy = () => {
  return (
    <>
<div className='h-[390px] w-full'>

    <div className='pt-[70px] h-[100px] w-[84.5%] lg:flex lg:justify-between'>
        <div className=''>
        <Image className='ml-[105px] lg:h-[32px] lg:w-[550px] sm:h-[25px]sm:w-[450]' src={require('/public/OUR HAPPY CUSTOMERS.png')} alt=''/>
        </div>

        <div className='sm:hidden lg:block lg:mt-3 lg:mr-[100px] lg:flex lg:gap-3'>
        <Image className='h-[24px] w-[24px]' src={require('/public/arrow-down-bold 2.png')} alt=''/>
        
        <Image className='h-[24px] w-[24px]' src={require('/public/arrow-down-bold 1.png')} alt=''/>
        </div>
        

    </div>

    <div className='mt-10 h-[250px] w-full flex justify-evenly '>

    <Image className='sm:hidden lg:block h-[230px] w-[75px]' src={require('/public/Frame 63.png')} alt=''/>

    <Image className='lg:block h-[210px] w-[350px]' src={require('/public/Frame 22.png')} alt=''/>

    <Image className='sm:hidden lg:block h-[210px] w-[350px]' src={require('/public/Frame 61.png')} alt=''/>

    <Image className='sm:hidden lg:block h-[210px] w-[350px]' src={require('/public/Frame 62.png')} alt=''/>

    <Image className='sm:hidden lg:block h-[230px] w-[75px]' src={require('/public/Frame 64.png')} alt=''/>
    </div>

</div>

    </>
  )
}

export default Happy