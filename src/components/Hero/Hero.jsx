import React from 'react'
import { useState, useEffect } from "react";
import bgImg from "../../assets/vector4.png"
import cup from "../../assets/cup.png"
import cup1 from "../../assets/cup1.png"
import cup2 from "../../assets/cup2.png"
import bag from "../../assets/bag.png"
import fries from "../../assets/fries.png"
import box from "../../assets/box.png"
import Food1 from "../../assets/biryani2.png"
import Food2 from "../../assets/biryani3.png"
import Food3 from "../../assets/biryani5.png"
import { FaCartShopping } from "react-icons/fa6"
import cup4 from "../../assets/cup4.png"
import cup5 from "../../assets/cup5.png"
import cup6 from "../../assets/cup6.png"
import pizza from "../../assets/pizzaBox.png"
import cakeBox from "../../assets/cakeBox.png"
import { HashLink as Link } from 'react-router-hash-link'
import Pizza2 from "../../assets/pizza2.png"
import PapperCup from "../../assets/papperCup.png"
import burger from "../../assets/burgerBox.png"

const imageList = [
  {
    id: 1,
    img: cakeBox
  },
  {
    id: 2,
    img: PapperCup
  },
  {
    id: 3,
    img: burger
  },
  {
    id: 4,
    img: fries
  }
];

export default function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Pizza Box", "Container", "Paper Cups", "Burger Box","Fries Packing box","Paper Bag","PET Cups","Perfume Box","Packing Material",];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }




  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
  }


  const [imageId, setImageId] = React.useState(PapperCup);


  return (
    <>
      <div style={bgImage} id="home"
        className=' min-h-[100vh] w-[100vw]
    sm:min-h-[100vh] bg-green-100 dark:bg-gray-950
    dark:text-white duration-200 flex justify-center items-center '
      >
        <div className='container mt-8 pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div className='flex flex-col justify-center gap-5 pt-12 mt-16 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
              <h1 className='text-5xl sm:text-6xl lg:text7xl font-bold'><span className='text-green-700'>GreenPack</span> Innovations</h1>
              <h1 className='text-5xl hidden sm:mt-0 mt-20 md:block stikey'>{`Excel in packing and baranding with us`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "papper cups", "", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
              <p className='text-sm'>Transforming your visions into vibrant realities, GREENPACK
INNOVATIONS - where sustainable solutions meet cutting edge
creativity, redefining packaging excellence.</p>
              <Link to="#contact" smooth className='flex mt-10 sm:mt-0 w-40 py-2 items-center gap-2 text-white bg-gradient-to-r  from-[#74D680] to-[#378B29] py-1 px-4 rounded-full  hover:scale-105 duration-200 text-2xl '>Contact
              <img width="40" height="40" src="https://img.icons8.com/plasticine/100/phone.png" alt="phone"/>
              </Link>
            </div>
            <div className='order-1  sm:order-2 relative min-h-[50px] sm:min-h-[400px] flex items-center justify-center '>
              <div>
                <img src={imageId} alt="" className='w-[70vw] h-[30vh] sm:h-[40vh] p-4 sm:w-[350px] mx-auto spin ' />
              </div>
              <div className='flex lg:flex-col  lg:top-1/2 lg:-translate-y-1/2 translate-y-[10vh] lg:py-2 justify-center gap-4 md:h-[20rem] absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                {imageList.map((item) => (
                  <img alt="" key={item.id} src={item.img} className='w-[80px]  h-[70px] object-contain inline-block  hover:scale-105 duration-200'
                    onClick={() => {
                      setImageId(item.img);
                    }}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}
