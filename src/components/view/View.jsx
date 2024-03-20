import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function View() {
  return (
    <>
      <div id="about"   className='p-6 lg:p-10 h-[] dark:bg-black bg-green-200 bg-gradient-to- to-[#bf72f2] from-[#0c0339] '>
        <div className='  ' >
          <div useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className='grid lg:grid-cols-2 items-center justify-items-center '>
            <div className='order-2 pb-10 lg:pb-0 lg:order-1 flex text-white flex-col justify-center items-center'>
              <p className=" text-center p-2 lg:text-7xl text-green-600 text-5xl animate-pulse font-['poppins']">About Us</p>
              <p className='text-center mb-4 text-lg text-black dark:text-white  px-3 lg:w-[50vw] font-["Garamond"]'> GreenPack Innovations: where your logo meets our commitment to sustainability. Our ethos revolves around providing cutting-edge, eco- friendly packaging solutions. We specialize in biodegradable, compostable, and recyclable products, ensuring your brand aligns with environmental responsibility. Join us in the journey towards a greener future, where your logo not only represents your business but also reflects a commitment to a sustainable world.</p>

              <div className='flex justify-between width-screen'>
                <div className='px-8 '>
                  <Link to="#contact" smooth className={`bg-green-700 py-2 px-6  text-black rounded-2xl  text-lg`}>Contact</Link>
                </div>

              </div>

            </div>

            <div class="relative rounded-md p-4">
              <img src="logo.webp" class="lg:w-[30vw]  rounded-3xl h-auto" alt="Background Image" />
              <div class="absolute rounded-3xl inset-0 bg-gradient-to-t lg:bg-gradient-to-l dark:from-black from-green-200 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
