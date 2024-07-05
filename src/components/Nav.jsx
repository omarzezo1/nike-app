import React from 'react'
import {navLinks} from '../constants/index'
import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'
        >
          {
            navLinks.map((link, index)=>(
              <a key={index}
              href={link.href}
              className='font-montserrat leading-normal text-lg text-slate-gray
            hover:text-coral-red transition-all ease-in-out duration-300'
              >
                {link.label}
              </a>
            ))
          }
        </ul>
        <div className='cursor-pointer hidden max-lg:block'>
          <img src={hamburger} alt='menu' width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav