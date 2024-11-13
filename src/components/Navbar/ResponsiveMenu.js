import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'

function ResponsiveMenu({open}) {
  return (
    <>
    <AnimatePresence mode="wait">
      {
        open && (
          <motion.div
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -100 }}
           transition={{ duration: 0.3 }}
          className="absolute top-10 left-0 w-full h-screen z-99">
            <div className="text-xl font-semibold uppercase bg-primary text-white py-5 m-6 rounded-3xl">
              <ul className="flex flex-col items-center gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
    </>
  )
}

export default ResponsiveMenu
