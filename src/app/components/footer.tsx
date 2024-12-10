import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className='m-auto w-[84.5%]'>

    <div className='pt-8 m-auto w-full lg:h-[250px] lg:flex lg:justify-between sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>
        
    
    <div className=''>
      <div className=''>
        <h1 className='mb-4 mt-3 text-[38px] font-bold mt-3 text-2xl md:text-[38px] font-bold'>SHOP.CO</h1>
      </div>
      <div>
        <p className='mb-0.25 text-[#00000099]'>We have clothes that suit your style and</p>
        <p className='mb-0.25 text-[#00000099]'>which you are proud to wear. From</p>
        <p className='text-[#00000099]'>women to men</p>
      </div>
      <br />
      <div>
      <Image className='h-[25px] w-[130px]' src={require('/public/Social.png')} alt=''/>
      </div>
    </div>


    <div className=''>
      <h2 className='my-3 text-[#000000]'>COMPANY</h2>
      <h3 className='mb-2 text-[#00000099]'>About</h3>
      <h3 className='mb-2 text-[#00000099]'>Feature</h3>
      <h3 className='mb-2 text-[#00000099]'>Works</h3>
      <h3 className='mb-2 text-[#00000099]'>Career</h3>
    </div>


    <div className=''>
      <h2 className='my-3 text-[#000000]'>HELP</h2>
      <h3 className='mb-2 text-[#00000099]'>Customer Support</h3>
      <h3 className='mb-2 text-[#00000099]'>Deliver Details</h3>
      <h3 className='mb-2 text-[#00000099]'>Terms & Conditions</h3>
      <h3 className='mb-2 text-[#00000099]'>Privacy Policy</h3>
    </div>


    <div className=''>
      <h2 className='my-3 text-[#000000]'>FAQ</h2>
      <h3 className='mb-2 text-[#00000099]'>Account</h3>
      <h3 className='mb-2 text-[#00000099]'>Manage Deliveries</h3>
      <h3 className='mb-2 text-[#00000099]'>Orders</h3>
      <h3 className='mb-2 text-[#00000099]'>Payments</h3>
    </div>

    <div className=''>
      <h2 className='my-3 text-[#000000]'>RESOURCES</h2>
      <h3 className='mb-2 text-[#00000099]'>Free eBooks</h3>
      <h3 className='mb-2 text-[#00000099]'>Development Tutorial</h3>
      <h3 className='mb-2 text-[#00000099]'>How to - Blog</h3>
      <h3 className='mb-2 text-[#00000099]'>Youtube Playlist</h3>
    </div>
    </div>
    
    <div className='lg:py-3 lg:m-auto lg:flex lg:justify-between sm:grid sm:grid-cols-2 sm:m-auto sm:h-auto sm:w-auto'>
      <div><p>Shop.co © 2000-2023. All Rights Reserved</p></div>
      <Image className='h-[40px] w-[250px]' src={require('/public/Frame 53.png')} alt=''/>
    </div>


  </div>
    </>
  )
}

export default Footer