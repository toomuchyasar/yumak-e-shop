import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/CartSlice';

export const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)

    const decrement = () => {
        if(quantity > 0 )
        setQuantity(quantity-1)
    } 

    const increment = () => {
        if(quantity < productDetail.rating.count)
        setQuantity(quantity+1)
    }

    const addBasket = () => {
        dispatch(addToCart({id: productDetail.id, title : productDetail.title, image: productDetail.image, price : productDetail.price , quantity: quantity }))
    }


  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[700px] h-[500px] object-cover' src={productDetail.image} alt='' />
        <div>
            <div className='text-4xl font-bold'> {productDetail.title} </div>
            <div className='text-2xl my-2'>{productDetail.description}</div>
        
            <div className='text 5-xl font-bold'> {productDetail.price} <span className='text-sm'> TL </span></div>
            <div className='flex items-center gap-5 my-4 border rounded-md w-[150px]'>
                <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
                <input className='w-14 text-center text-4xl font-bold' type='text' value={quantity}/>
                <div onClick={increment} className='text-5xl cursor-pointer'>+</div>
            </div>
            <div onClick={addBasket} className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Add Cart</div>
        </div>
    </div>
  )
}
