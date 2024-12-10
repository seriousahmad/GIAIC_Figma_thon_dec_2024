import React from 'react'
import Image from 'next/image'

const Newarrivals = () => {
  return (
    <>
    <div className='w-full h-[623px]'>

        <div className='h=[70px] w-auto'>
        <Image className='lg:ml-[490px] h-[36px] w-[370px] lg:mt-[65px]' src={require('/public/NEW ARRIVALS.png')} alt=''/>
        </div>

        <div className='lg:mt-[70px] lg:h-[400px] w-full lg:flex lg:gap-[35px] lg:justify-center sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>






            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 32.png')} alt=''/>

            <div>
                <h3 className='mt-1 font-bold'>T-shirt with Tape Details</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>
            <div><h1 className='mt-1 font-semibold text-[23px]'>$120</h1></div>
            </div>

        
            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 33.png')} alt=''/>

            <div>
            <h3 className='mt-1 font-bold'>Skinny Fit Jeans</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 39.png')} alt=''/></div>
            <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$240</h1>
              <h1 className='mt-1 font-semibold text-[23px]'><del>$260</del></h1>
              <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-20%</div>
            </div>
            
            </div>


            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 34.png')} alt=''/>
            <div>
            <h3 className='mt-1 font-bold'>Checkered Shirt</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>
            <div><h1 className='mt-1 font-semibold text-[23px]'>$180</h1></div>
            
            </div>


            <div className='h-[350px] w-[260px]'>
            <Image className='h-[259px] w-[259px]' src={require('/public/Frame 38.png')} alt=''/>
            <div>  
            <h3 className='mt-1 font-bold'>Sleeve Striped T-shirt</h3>
            </div>
            <div><Image className='mt-1 h-[14px] w-[105px]' src={require('/public/Frame 35.png')} alt=''/></div>
          
            <div className='flex gap-3'>
              <h1 className='mt-1 font-semibold text-[23px]'>$130</h1>
              <h1 className='mt-1 font-semibold text-[23px]'><del>$160</del></h1>
              <div className='mt-3 h-5 w-10 bg-pink-100 text-xs text-pink-600 text-center rounded-[20px]'>-30%</div>
            </div>
            
            </div>
            

      </div>

            <button className='lg:mt-[-20px] w-[180px] h-[40px] lg:ml-[582px] border-2 border-gray-200 rounded-[20px] '>View All</button>


    </div>
    </>
  )
}

export default Newarrivals