import React from 'react'
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { motion } from 'framer-motion';
import {FadeLeft} from "../../utility/animation";

const MenusData = [
  {
    id: 1,
    img: Fruit1,
    title: "Fresh Red Apple",
    link: "/",
    price: "$5.00",
    delay: 0.3,
  },
  {
    id: 2,
    img: Fruit2,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    delay: 0.6,
  },
  {
    id: 3,
    img: Fruit3,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    delay: 0.9,
  },
  {
    id: 4,
    img: Fruit4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.00",
    delay: 1.2,
  },
  {
    id: 5,
    img: Fruit1,
    title: "Fresh Red Apple",
    link: "/",
    price: "$5.00",
    delay: 0.3,
  },
  {
    id: 6,
    img: Fruit2,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    delay: 0.6,
  },
  {
    id: 7,
    img: Fruit3,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    delay: 0.9,
  },
  {
    id: 8,
    img: Fruit4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.00",
    delay: 1.2,
  },
  {
    id: 9,
    img: Fruit1,
    title: "Fresh Red Apple",
    link: "/",
    price: "$5.00",
    delay: 0.3,
  },
  {
    id: 10,
    img: Fruit2,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    delay: 0.6,
  },
  {
    id: 11,
    img: Fruit3,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    delay: 0.9,
  },
  {
    id: 12,
    img: Fruit4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.00",
    delay: 1.2,
  },
  {
    id: 13,
    img: Fruit1,
    title: "Fresh Red Apple",
    link: "/",
    price: "$5.00",
    delay: 0.3,
  },
  {
    id: 14,
    img: Fruit2,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    delay: 0.6,
  },
  {
    id: 15,
    img: Fruit3,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    delay: 0.9,
  },
  {
    id: 16,
    img: Fruit4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.00",
    delay: 1.2,
  },
  {
    id: 17,
    img: Fruit1,
    title: "Fresh Red Apple",
    link: "/",
    price: "$5.00",
    delay: 0.3,
  },
  {
    id: 18,
    img: Fruit2,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.00",
    delay: 0.6,
  },
  {
    id: 19,
    img: Fruit3,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    delay: 0.9,
  },
  {
    id: 20,
    img: Fruit4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.00",
    delay: 1.2,
  },
];
function Menus() {
  return (
    <>
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
           initial={{ opacity: 0, x: -200 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl font-bold text-center pb-10 uppercase text-secondary">
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {
            MenusData.map((menu) => (
              <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1}}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3">
                  <img src={menu.img} alt='our_image' className="w-[50px] mb-4 scale-110 transform-translate-y-6" />
                  <div className="">
                    <h1 className="text-lg font-semibold">{menu.title}</h1>
                    <p className="text-lg font-semibold text-secondary">{menu.price}</p>
                  </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Menus