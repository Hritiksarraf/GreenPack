import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import whatsapp from "../../assets/whatsapp.png"

AOS.init();


export default function Contact_us() {
  return (
    <>
    <div  id="contact" className="flex flex-col items-center lg:h-96 justify-center pt-10  bg-green-100 dark:bg-black text-black dark:text-white">
        <div className="text-green-600 pb-12">
          <p useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="text-4xl lg:text-7xl whitespace-nowrap">
            Get in touch with us!
          </p>
        </div>
        <div useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="flex flex-col lg:flex-row  items-center justify-center  text-white">
          <div className="flex flex-col items-center border-green-600 lg:border-r h-48 p-5">
            {/* <i class="fa-solid mb-2 mb-4 text-green-600 fa-2xl fa-phone-volume"></i> */}
            <img width="50" height="50" src={whatsapp} alt="phone"/>
            <p className="text-green-600 ">Phone no:-</p>
            <div className='flex items-center'>
            <ion-icon name="logo-whatsapp" className=""></ion-icon>
            <p className='text-black dark:text-white mx-2'>+971-505616557</p>
            </div>
            
          </div>
          <div  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="flex border-green-600  flex-col items-center whitespace-nowrap lg:border-r h-48 w-80 p-5">
            {/* <i class="fa-solid text-green-600 mb-4 fa-2xl fa-location-dot"></i> */}
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/new-post.png" alt="new-post"/>
            <p className="text-green-600 text-xl">Email</p>
            <p className='text-xl text-black dark:text-white'>info@greenpackinnovations.com</p>
            
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="flex flex-col items-center  h-48 p-5">
            {/* <i class="fa-regular mb-4 text-green-600 fa-2xl fa-clock"></i> */}
            <img width="48" height="48" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/>
            <p className="text-green-600 ">Location</p>
            <p className=' mt-3 text-black dark:text-white'>Deira, Dubai UAE</p>
           
          </div>
        </div>
      </div>
      <div className="dark:bg-black bg-green-100" style={{ height: "80vh" }}>
        <form
          action="https://formspree.io/f/moqgnqqp"
          method="post"
          className="flex flex-col items-center justify-center "
        >
          <h1 
            useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false"
            className=" lg:text-5xl text-green-900 text-4xl lg:mt-8 dark:text-green-600"
            style={{ fontFamily: "Roboto Condensed" }}
          >
            If you have any question{" "}
          </h1>
          <h1
            useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false"
            className="text-green-900  lg:text-4xl text-2xl text-center dark:text-green-600  my-4"
            style={{ fontFamily: "Roboto Condensed" }}
          >
            Please do not hesitate to send us a message
          </h1>

          <input
            useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false"
            className="w-4/5 lg:w-1/3 bg-white dark:bg-zinc-700 border-green-600 border-2 rounded-md dark:text-white text-black   h-12 p-2 my-2 "
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
          <input
          useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false"
            className="w-4/5 lg:w-1/3 bg-white dark:bg-zinc-700 border-green-600 border-2 rounded-md dark:text-white text-black   h-12 p-2 my-2 "
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
          useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false"
            className="w-4/5 lg:w-1/3 bg-white dark:bg-zinc-700 border-green-600 border-2 rounded-md dark:text-white text-black   h-12 p-2 my-2 "
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone No"
            required
          />
          <textarea
          useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false"
            className="w-4/5 lg:w-1/3 bg-white border-green-600 border-2 rounded-md  dark:bg-zinc-700 dark:text-white text-black   h-48 p-2 my-2 "
            name="message"
            id="message"
            placeholder="How can we help you"
          ></textarea>
          <button useClassNames="false" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className="w-40 h-12 my-2   bg-yellow-600" type="submit">
            MESSAGE
          </button>
        </form>
      </div>
    </>
  )
}
