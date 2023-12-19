import React from 'react'
import { NavbarLeft } from './navbar/navbarItems/NavbarLeft'
import { NavbarRight } from './navbar/navbarItems/NavbarRight'

export const Navbar = () => {
  return (
    <div className='flex item-center justify-between my-5 '>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}
