import React, {useState} from 'react'
import { FaLeaf } from 'react-icons/fa'
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Product",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
]
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav>
      <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="container flex justify-between items-center py-4 md:pt-4">
        {/* Logo section */}
        <div className="flex items-center gap-2 text-2xl font-bold capitalize">
          <p className="text-primary">Friut</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* Menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            {
              NavbarMenu.map((menu) => (
                <li key={menu.id} className='text-xl font-semibold'>
                    <a className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold" href={menu.link}>{menu.title}</a>
                </li>
              ))
            }
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"><MdOutlineShoppingCart /></button>
          </ul>
        </div> 
        {/* Mobile Humburger Menu section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
      {/* Mobile Menu section */}
      <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar
