import React from 'react'

const Nav = () => {
  return (
       <nav className='w-[15%]  h-full bg-zinc-50 flex flex-col items-center pt-5'>
    
       <a className='py-3 px-5 border rounded-md border-blue-200 text-blue-500' href='/create'>Add New Product</a>

       <hr className='w-[80%] my-3'/>

       <h1 className='text-2xl w-[80%] mb-3 '>Category-filter</h1>
       <ul className='w-[80%]'>
           <li className='mb-3 flex items-center'>
           <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span>Cat-1</li>

           <li className='mb-3 flex items-center'>
           <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-100'></span>Cat-1</li>

           <li className='mb-3 flex items-center'>
           <span className='rounded-full mr-2 w-[15px] h-[15px] bg-green-100'></span>Cat-1</li>
       </ul>


   </nav>
  )
}

export default Nav