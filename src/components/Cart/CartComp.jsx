import React from 'react'
import { removeFromCart } from '../../redux/CartSlice'
import { useDispatch } from 'react-redux'

export const CartComp = ({cart}) => {

    const dispatch = useDispatch()

  return (

    <div >
        <div className='flex justify-between'>
            <div className=' text-xl flex my-10 font-bold'>
            <img className=' w-[100px] h-[100px] mr-10' src={cart.image}/>
             <div>
                <div >Title : {cart.title}</div>
                <div>Price : {cart.price} TL </div>
                <div>Quantity : {cart.quantity}</div>
             </div>
            </div>
             <div onClick={() => dispatch(removeFromCart(cart.id))} className='text-lg my-10 bg-red-500 text-white w-[130px] text-2xl cursor-pointer rounded-md h-16 flex items-center justfiyf-center'>
               Remove to Cart
             </div>
        </div>  
    </div>
  )
}
