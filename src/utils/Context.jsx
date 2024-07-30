import { data } from 'autoprefixer';
import axios from './axios';
import React, { createContext, useEffect } from 'react'
import { useState } from 'react'


export const ProductContext = createContext();

const Context = (props) => {
      const[products , setproducts] = useState(null);
      const getproducts = async () =>{
       try{
              const {data} = await axios("/products")
              console.log(data)
              // setproducts(data)
              setproducts(data)

       }
       catch (error){
              console.log(error)

       }
      };

      useEffect(() =>{
       getproducts()

      },[])
  return (
    <ProductContext.Provider value={[products,setproducts]}>{props.children}</ProductContext.Provider>
  )
}

export default Context