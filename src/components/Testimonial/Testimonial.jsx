import React from 'react'
import img from "../../assets/dog.jpg"
import Slider from "react-slick"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const TestimonialData = [
    {
        id: 1,
        name: "Adil",
        text: "GreenPack's biodegradable packaging is a game-changer, aligning with my eco-conscious values.",
        img: "https://www.shutterstock.com/image-photo/young-handsome-business-man-dressed-260nw-1487434763.jpg"
    },
    {
        id: 1,
        name: "abdullah jawed khan",
        text: "GreenPack's commitment to sustainability shines through in their recyclable products, a win-win for my business and the environment.",
        img: "https://www.shutterstock.com/image-photo/have-great-idea-handsome-businessman-260nw-1282628038.jpg"
    },
    {
        id: 1,
        name: "Shoeba",
        text: "GreenPack's compostable solutions are top-notch, helping me reduce my carbon footprint without compromising quality.",
        img: "https://media.gettyimages.com/id/1310980400/photo/portrait-of-burnout-businesswoman-in-an-office.jpg?s=612x612&w=gi&k=20&c=fLkvB7hcl7zWJIOUBamNe0lbKIkc4kWFQ1vpQrVwTXQ="
    },
    {
        id: 1,
        name: "Zoya khan",
        text: " love how GreenPack's packaging options are both environmentally friendly and stylish, perfect for my brand.",
        img: "https://media.gettyimages.com/id/641199822/photo/businesswomen-at-workstation-in-start-up-office.jpg?s=612x612&w=gi&k=20&c=uk6k1ILVRf7yKT26DtfgemzQtOyISm72Egn5xr_XT_4="
    },
    {
        id: 1,
        name: "Jawed",
        text: "GreenPack's compostable solutions are top-notch, helping me reduce my carbon footprint without compromising quality.",
        img: "https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg"
    },
    
]



export default function Testimonial() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    }
    return (
        <>
            <div  id="testimonials" className="dark:bg-gray-900 bg-green-200 py-16">
                <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" mirror="false" className='container text-center   text-4xl' >
                    <p className='text-blue-800'>"Our Satisfied Coustomer"</p>
                    
                    <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 '>
                        <Slider {...settings}>
                            {TestimonialData.map(({ id, img, name, text }) => {
                                return (
                                    <>
                                        <div key={id} className='relative dark:bg-gray-950 dark:text-white my-6  shadow-lg flex flex-col bg-primary/10 px-10 '>
                                            <div className='block w-24 h-24 mx-auto rounded-full pt-4'>
                                                <img src={img} alt="" className='rounded-full h-24 w-24' />
                                            </div>
                                            <div className='flex flex-col items-center text-center mt-10'>
                                                <p className='text-sm text-gray-500'>{text}</p>
                                                <div>
                                                <ion-icon size="small" name="star" className="text-green-600"  ></ion-icon>
                                                <ion-icon size="small" name="star" className="text-green-600"  ></ion-icon>
                                                <ion-icon size="small" name="star" className="text-green-600"  ></ion-icon>
                                                <ion-icon size="small" name="star" className="text-green-600"  ></ion-icon>
                                                <ion-icon size="small" name="star" className="text-green-600"  ></ion-icon>
                                                </div>
                                                <p className='text-xl font-bold my-4'>{name}</p>
                                                <p className='absolute top-0 right-0 dark:text-gray-400  text-9xl font-serif text-black/20'>,,</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </Slider >

                    </div>
                </div>
            </div>
        </>
    )
}
