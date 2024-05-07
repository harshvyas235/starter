import React from 'react'
import Spinner from '../components/Spinner'
import { useState,useEffect } from 'react';
// import Product from '../components/Product';
import Product from '../components/Product';
import { Circles } from 'react-loader-spinner'
export const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  
    async function fetchProductData() {
      setLoading(true);
  
      try{
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data)
  
        setPosts(data);
      }
      catch(error) {
        console.log("Error aagya ji");
        setPosts([]);
      }
      setLoading(false);
    }
  
    useEffect( () => {
      fetchProductData();
    },[])
  
    return (
        <div className=' '>
        {
          loading?<div className='flex  items-center  justify-center h-screen'><Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /></div>:
          posts.length>0 ?
          (<div className=' grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mt-[50px]'>
            {
                posts.map((post)=>(
                    <Product post={post} key={post.id}/>
                ))
            }
          </div>):(<div> no data found</div>)
        }
      </div>
    );

     
    
}
