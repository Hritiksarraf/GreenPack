import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Product(props) {
  return (
    <>
    <div  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className='my-12 justify-between dark:hover:bg-primary max-w-[300px] group  flex-row hover:bg-gradient-to-r shadow-green-950 from-[#74D680] to-[#378B29] dark:text-white bg-green-300 dark:bg-gray-800 hover:text-white rounded-2xl shadow-xl ' >
                                <div  className='h-[40] w-[40] block' >
                                    <img src={props.img} alt="" className={`max-w-[200px]   max-h-[200px] transform group-hover:scale-105 group-hover:rotate-6 duration-300 -translate-y-${props.trans} mx-auto `} />
                                </div>
                                <div className='text-center p-4 block'>
                                    <h1 className='text-2xl font-bold animate__animated animate__slow animate__pulse shadow-green-900 shadow-2xl animate__infinite'>{props.name}</h1>
                                    <p className='text-gray-500 text-sm group-hover:text-white '>{props.discription}</p>
                                </div>
                            </div>
    </>
  )
}
