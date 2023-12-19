import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/CartSlice'
import { CartComp } from '../components/Cart/CartComp'

export const Cart = () => {

    const dispatch = useDispatch()
    const {carts , totalAmount, itemCount} = useSelector(state => state.carts) 
    const navigate = useNavigate()
    
  

    useEffect(() => {
        dispatch(getCartTotal())
      },[dispatch])
  



  return (
    <div>

    {
        carts?.length > 0 ? 
        <div> 
            {
            carts.map((cart,i) => (
                <CartComp key={i} cart={cart}/>
            ))
            }
            <div className='flex items-center justify-end text-3xl'>Total Cost : <span className='font-bold ml-4'> {totalAmount} TL</span></div>
            </div> : 
            <div>
            boş
            </div>
    }
    </div>
    
  )
}
