import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default function Footer() {
  return (
    <footer className="bg-black/95">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="mb-10 md:mb-0">
            <Link href="/ " to="#home" smooth className="flex items-center mb-10">
              <img
                src="logo.webp"
                className="h-[60px] w-[60px] mr-3"
                alt="Atlas Gym Logo"
                loading="lazy"
              /><span className="text-green-500 mt-8 text-2xl">GREENPACK </span><span className="text-green-800 mt-10 ml-3"> INNOVATIONS</span>
            </Link>
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="text-sm flex mt-4 justify-end sm:mt-0 text-gray-200 flex-col ">
              <p className="text-lg text-blue-400 font-medium h  lg:mt- w[screen] lg:pr-16 lg:w-[35vw]"><span className="text-green-600">GreenPack Innovations</span> offers cutting-edge, eco-friendly packaging solutions. Specializing in biodegradable, compostable, and recyclable products, we help brands align with environmental responsibility for a sustainable future.</p>
              
            </div>
          </div>
          <div  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibol uppercase text-white">
                Quick Links
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#home" smooth  className="hover:underline hover:text-blue-800">
                    HOME
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#products" smooth href="#" className="hover:underline hover:text-blue-800">
                    PRODUCT
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#testimonials" smooth href="#" className="hover:underline pt-4 hover:text-blue-800">
                    TESTIMONIALS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#about" smooth href="#" className="hover:underline hover:text-blue-800">
                    ABOUT US
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4 flex items-center">
                
                  <a href="https://www.instagram.com/greenpack.innovations?igsh=MWQycHpob3hwMzZv" target="_blank" className="hover:underline text-2xl  flex items-center -mx-2 hover:text-red-600 ">
                    <div className="inline mr-2 pb-2">
                  <ion-icon name="logo-instagram" size="large" className="text-xl mx-2"></ion-icon>
                  </div>
                  <span className="mb-2 ">
                    Instagram
                    </span>
                  </a>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Contact us
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <p  className="hover:underline text-green-400">
                  info@greenpackinnovations.com
                  </p>
                </li>
                <li className="flex items-center  ">
                <ion-icon name="logo-whatsapp" className=""></ion-icon>
                  <p  className="hover:underline mx-2">
                  
                  +971-505616557
                  </p>
                </li>
                <li>
                  <p  className="hover:underline pt-2">
                  Deira, Dubai UAE
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div  className="my-6 h-[2px] bg-gradient-to-r from-red-500 to-orange-600 sm:mx-auto lg:my-8" />
        {/* <div  className="sm:flex sm:items-center sm:justify-between">
          <span  className="text-sm text-gray-200 sm:text-center text-center m-auto ">
            Made with ❤️ by Hritik Sarraf
            
            
          </span>
        </div> */}
      </div>
    </footer>
  );
}
