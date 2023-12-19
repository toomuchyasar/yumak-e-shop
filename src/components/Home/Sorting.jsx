import React from 'react'

export const Sorting = ({setSort}) => {
  return (
    <div className='bg-orange-200 my-5 p-5 flex items-center justify-end'>
        <select onChange={e => setSort(e.target.value)} className='bg-orange-300 py-5 px-5' name="" id="">
            <option disabled value="">Sort by</option>
            <option value="inc"> Low to High </option>
            <option value="dec"> High to Low </option>
         </select>
    </div>
  )
}
