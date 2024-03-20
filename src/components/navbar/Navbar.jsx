import React from 'react'
import Logo from "../../assets/food-logo.png"
import {FaCartShopping} from "react-icons/fa6"
import DarkMode from './DarkMode'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div className='shadow-md bg-gradient-to-r w-[100vw] z-50 fixed inline-block  from-[#74D680]  to-[#378B29]  dark:from-[#000000] dark:to-[#378B29] dark:text-white duration-200'>
        <div className='container py-3 sm:py-0'>
            <div className=' flex justify-between items-center justify-center '>
                <div>
                    <Link to="#home" smooth href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                        <img src="https://greenpackinnovations.com/media/IMG-20240305-WA0003-removebg-preview.png" alt="" className='w-10' />
                        GreenPack
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <DarkMode/>
                    </div>
                    <ul className='flex gap-4  hidden sm:flex'>
                        <li>
                            <Link to="#home" smooth className='inline-block p-4 hover:text-primary'>HOME</Link>
                        </li>
                        
                        <li>
                            <Link to="#about" smooth className='inline-block p-4 hover:text-primary'>ABOUT US</Link>
                        </li>
                        <li>
                            <Link smooth to="#products" className='inline-block p-4 hover:text-primary'>PRODUCTS</Link>
                        </li>
                        <li>
                            <Link smooth to="#testimonials" className='inline-block p-4 hover:text-primary'>TESTIMONIALS</Link>
                        </li>
                        <li>
                            <Link smooth to="#contact" className='inline-block p-4 hover:text-primary'>CONTACT</Link>
                        </li>
                    </ul>
                    <Link to="#contact" smooth className='flex items-center gap-2 text-white bg-gradient-to-r  from-primary to-secondary py-1 px-4 rounded-full sm:hidden  hover:scale-105'>CONTACT
                    <img width="40" height="40" src="https://img.icons8.com/plasticine/100/phone.png" alt="phone"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
