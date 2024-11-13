import React from 'react'
import Banner1 from "../../assets/fruit-plate2.png";
import { FadeUp } from "../../utility/animation";
import { motion } from 'framer-motion';

function Banner2() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-0 py-14">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[600px]">
            <motion.h1 
              variants={FadeUp(0.3)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold font-averia uppercase">Online Fruit Store</motion.h1>
            <motion.p 
            variants={FadeUp(0.5)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
            <motion.p 
            variants={FadeUp(0.7)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
            <motion.p 
            variants={FadeUp(0.9)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
            <motion.div
            variants={FadeUp(1.1)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            >
            <button className="primary-btn flex items-center gap-2">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* Brand Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          src={Banner1} alt='Hero' className="w-[300px] md:w-[400px] h-full object-cover drop-shadow" />
        </div>
      </div>
    </section>
  )
}

export default Banner2

