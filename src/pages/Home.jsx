import React, { useState } from 'react' 
import { SliderComp } from '../components/Home/SliderComp'
import { Sorting } from '../components/Home/Sorting'
import { Category } from '../components/Home/Category'
import { Products } from '../components/Home/Products'

export const Home = () => {

  const [sort, setSort ] = useState('');
  const [category , setCategory] = useState('');

  return (
    <div>
        <SliderComp/>
        <Sorting setSort = {setSort}/>
        <div className='flex'>
        <Category setCategory = {setCategory} />
        <Products category = {category} sort = {sort}/>
        </div>
    </div>
  )
}
