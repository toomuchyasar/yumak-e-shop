import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Product = ({product}) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`products/${product.id}`)} className='w-[450px] p-2 ml-2 mb-2 border rounded-md relative cursor-pointer'>
      <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-orange-200 p-3 m-1'>{product.price} <span className='text-sm'> ₺ </span></div>
        <img className='w-[200px] h-[200px] m-auto object-cover ml-12' src={product.image} alt=""/>
        <div className='text-l text-center mt-4 font-bold'>{product.title}</div>

    </div>
  )
}
