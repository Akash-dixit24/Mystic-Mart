import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/axios';



const Details = () => {

  const [product , setproduct] =useState(null)
   const {id}=useParams();
   console.log(id)
 

  const getsingleproduct = async ()=>{
    try{
      const {data} = await axios.get(`/products/${id}`);
      console.log(data)

    }
    catch (error){
      console.log(error)
    }
  } 
  
  useEffect(()=>{
    getsingleproduct()
  },[])



  return ( 
    <div className='w-[70%] h-full flex justify-between m-auto p-[10%] items-center'>
          

      <img className= 'object-contain h-[80%]  w-[40%]' src={`${product.image}`} />
      <div className='content w-[45%]'>
        <h1 className='text-4xl'>{product.title}</h1>
        <h2 className='text-zinc-400 my-5 '>{product.category}</h2>
        <h2 className='text-red-500 mb-3' >$ {product.price}</h2>
        <p className='mb-[10%]'>{product.description}</p>
        <Link className='mr-5 py-3 px-5 border rounded-md border-blue-200 text-blue-500' href='/create'>Edit</Link>
        <Link className='py-3 px-5 border rounded-md border-red-200 text-red-500' href='/create'>Delete</Link>
      </div>
            
       
       
       
       </div>
  )
}

export default Details