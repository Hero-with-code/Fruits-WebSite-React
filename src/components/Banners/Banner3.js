import React from 'react'
import Bannerbackg from "../../assets/banner-bg.jpg";
import { FadeLeft } from "../../utility/animation";
import { motion } from 'framer-motion';

const bgStyle = {
  backgroundImage: `url(${Bannerbackg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Banner3() {
  return (
    <section className="container mb-12">
      <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 md:space-y-0 space-y-6 py-14 rounded-3xl">
        {/* Blank Div */}
        <div className="">
          </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 md:max-w-[400px] lg:max-w-[600px]">
            <motion.h1 
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold font-averia uppercase">Get Fresh Fruits Today</motion.h1>
            <motion.p 
            variants={FadeLeft(0.8)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
            <motion.div
            variants={FadeLeft(1.1)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            >
            <button className="primary-btn flex items-center gap-2">Learn More!</button>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Banner3

