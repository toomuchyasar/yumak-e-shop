import React from 'react'
import { useNavigate } from 'react-router-dom'
import yumak from '../../../../assets/yumakNavbar.jpeg'

export const NavbarLeft = () => {
  
  const navigate = useNavigate()


  return (

    <div onClick={() => navigate("/")} className="flex text-8xl bg-orange-200 cursor-pointer">
    <img className='w-[100px] h-[100px] ' src={yumak}></img>YumakShop
    </div>
  )
}
