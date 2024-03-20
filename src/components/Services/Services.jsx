import React from 'react'
import Biryani from "../../assets/biryani2.png"
import cup4 from "../../assets/cup4.png"
import cup5 from "../../assets/cup5.png"
import burger from "../../assets/burgerBox.png"
import pizza from "../../assets/pizzaBox.png"
import bottel from "../../assets/glassBottel.png"
import plasticBag from "../../assets/plasticBag.png"
import bag from "../../assets/bag.png"
import Product from './Product'
import petCup from "../../assets/petCup.png"
import container from "../../assets/conatiner.png"
import material from "../../assets/PackingMaterial.png"
import PapperCup from "../../assets/papperCup.png"
import Pizza2 from "../../assets/pizza2.png"
import bottelp from "../../assets/plasticBottel.png"
import fries from "../../assets/fries.png"
import papperBag2 from "../../assets/bag2.png"
import perfume from "../../assets/perfume.png"
import glass from "../../assets/glassbottel2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const servicesDate = [
    {
        id: 1,
        img: Pizza2,
        name: "Pizza Box",
        discription: "Introducing our Pizza Boxes, crafted to make every slice an experience. Elevate your brand's image with our durable and eye-catching packaging, perfect for showcasing your mouthwatering pies. Our boxes are designed to keep your pizzas fresh and hot, ensuring that each bite is as delicious as the first."
    },
    {
        id: 2,
        img: container,
        name: "Container",
        discription: "Our Containers are the perfect blend of style and functionality. Made from high-quality materials, they are ideal for storing and transporting a variety of food items. Whether you're packaging salads, pasta, or desserts, our containers will enhance the presentation of your dishes and keep them fresh."
    },
    {
        id: 3,
        img: PapperCup,
        name: "Paper Cups",
        discription: "Add a touch of elegance to your beverages with our Paper Cups. Made from premium materials, our cups are designed to enhance the drinking experience. Whether you're serving hot coffee or cold soda, our cups are the perfect choice for any occasion."
    },
    {
        id: 4,
        img: burger,
        name: "Burger Box",
        discription: "Transform mealtime into a feast for the senses with our irresistible Burger Boxes. Elevate your brand's presentation with our stylish and sturdy packaging, designed to showcase your delicious creations. Unleash a taste revolution as your burgers take center stage in these visually captivating and convenient boxes."
    },
    {
        id: 5,
        img: fries,
        name: "Fries Packing box",
        discription: "Elevate your fries with our Fries Packing Box, designed to keep them crispy and delicious. Made from high-quality materials, our boxes are perfect for showcasing your fries and ensuring they stay hot and fresh. Whether you're serving traditional fries, sweet potato fries, or onion rings, our Fries Packing Box will enhance the presentation of your dishes and delight your customers."
    },
    {
        id: 6,
        img: papperBag2,
        name: "Paper Bag",
        discription: "Our Paper Bags are perfect for packaging a variety of items. Made from durable materials, our bags are designed to keep your products safe and secure. Whether you're packaging groceries, snacks, or gifts, our bags are the perfect choice for all your packaging needs."
    },
    {
        id: 7,
        img: petCup,
        name: "PET Cups",
        discription: "Introducing our PET Cups, designed to elevate your beverage service with style and sustainability. Crafted from high-quality PET plastic, these cups are perfect for serving cold drinks like smoothies, juices, and sodas. With their crystal-clear clarity and durable construction, our PET cups showcase your drinks beautifully while being environmentally friendly."
    },
    {
        id: 8,
        img: perfume,
        name: "Perfume Box",
        discription: "Indulge your senses with our Perfume Boxes, designed to captivate and enchant. Crafted with care and precision, our boxes are the perfect accompaniment to your exquisite fragrances. Whether you're packaging a signature scent or a new fragrance line, our Perfume Boxes will elevate your brand's presentation and leave a lasting impression."
    },
    {
        id: 9,
        img: material,
        name: "Packing Material",
        discription: "Introducing our Packing Material, designed to protect your products during shipping. Made from high-quality materials, our packing material is ideal for cushioning fragile items and ensuring they arrive at their destination safely. Whether you're shipping electronics, glassware, or other delicate items, our packing material is the perfect choice for all your packaging needs."
    }
    
]

export default function Services(props) {
    return (
        <>
            <div id="products" className='py-16 bg-green-100   dark:bg-gray-900 '>
                <div className='container'>

                    <div useClassNames="false" data-aos="fade-in" className='  grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-5  md:grid-cols-3   place-items-center'>
                        {servicesDate.map((service, index) => (
                            <Product key={index} img={service.img} discription={service.discription} name={service.name} trans="12" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
