import React from 'react'
import img from "../../assets/biryani5.png"
// import {GrSecure} from "react-icon/gr"
// import {IoFastFood} from "react-icon/io5"
// import {GiFoodTruck} from "react-icon/gi"

export default function Banner() {
  return (<>
        <div className='dark:bg-gray-900 dark:text-white '>
            <div className='grid grid-cols-1 sm:grid-cols-2   justify-center'>
                <div className='w-3/4 lg:w-[90vh]  mx-auto  ' >
                    <img src={img} alt="" className='w-[90vh]'/>
                </div>
                <div className='p-16'>
                    <h1 className='text-4xl  '>Lorem, ipsum dolor.</h1>
                    <p className='my-4 text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam dolores soluta atque optio labore?</p>
                    <p className=' text-gray-400 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus culpa quas facilis! In, laboriosam eligendi voluptates neque dicta voluptatum commodi.</p>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
  </>   
  )
}
