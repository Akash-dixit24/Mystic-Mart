import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[70%] h-full flex justify-between m-auto p-[10%] items-center'>
          

      <img className= 'object-contain h-[80%]  w-[40%]' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
      <div className='content w-[45%]'>
        <h1 className='text-4xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h2 className='text-zinc-400 my-5 '>men's clothing</h2>
        <h2 className='text-red-500 mb-3' >$ 109.95</h2>
        <p className='mb-[10%]'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <Link className='mr-5 py-3 px-5 border rounded-md border-blue-200 text-blue-500' href='/create'>Edit</Link>
        <Link className='py-3 px-5 border rounded-md border-red-200 text-red-500' href='/create'>Delete</Link>
      </div>
            
       
       
       
       </div>
  )
}

export default Details