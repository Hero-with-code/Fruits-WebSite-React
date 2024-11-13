import React from 'react'
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="bg-primary/10 text-white py-12 mt-14">
      <div className="container flex justify-between items-center">
        {/* Logo section */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        className="flex items-center gap-2 text-2xl font-bold capitalize">
          <p className="text-primary">Friut</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </motion.div>
         {/* Social Media section */}
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex text-3xl items-center mt-6 text-gray-700 gap-4">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaWhatsapp />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
