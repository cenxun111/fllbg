import React from 'react'
import Posts from './Posts'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router';
const Center = () => {
  // const [posts,setPosts] = useState([]);
  // const { search } = useLocation();
  
  // useEffect(() =>{
  //   const fetchPosts = async () =>{
  //     const res = await axios.get("/posts" + search )
  //     setPosts(res.data);
  //   }
  //   fetchPosts()
  // }, [search])
  return (
    <div>
      
      <div className="text-2xl rounded-lg bg-gray-800  p-2  flex justify-center" >
        <a href="£" >
          <h1  >HOME PAGE</h1>
        </a>
      </div>
      
      <Posts/>
    </div>


  )
}

export default Center
