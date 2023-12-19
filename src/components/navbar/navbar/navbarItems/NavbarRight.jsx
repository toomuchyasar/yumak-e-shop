import React, { useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';



export const NavbarRight = () => {

  const dispatch = useDispatch()
  const {carts} = useSelector(state => state.carts)
  console.log(carts, "carrttt")
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCartTotal())
  },[dispatch])


  return (
    <div className='flex items-center gap-8'>
        <div className='flex items-center border p-3 rounded-full bg-gray-200'>
            <input className='bg-gray-200 outline-none' type="text" placeholder='Search'/>
            <FiSearch size={25}/>
        </div>
        <IoMdHeart  size={25} />
        <div onClick={ () => navigate("cart")} className='relative cursor-pointer'>
            <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 flex item-center justify-center 
            h-5'>{carts?.length}</div>
            <SlBasket size={25}/>
        </div>
        
    </div>
  )
}
