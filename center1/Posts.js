import React from "react";
// import Post from "./Post"
import "./post.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+ search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  
  const PF = "http://localhost:4000/images/";
  return (
    
    <div>
      {/* {posts.map((p) =>(
                <Post post={p} />
                ))} */}
      <div className="flex-col  mt-10 mr-4">
        {posts.map((post) => (
          <div className="flex flex-col items-center"> 
            
      
            {post.photo && (
            // <img src ={PF + post.photo}
            //       className="w-11/12 h-auto rounded-md"
            // />,
            
              <object
              data ={PF + post.photo}
              className=" w-11/12  rounded-md"
                // frameBorder="0"
                height="460"
               
              />
              
            )}
            
            <div className="flex ">
                   {post.categories.map((c) => (
                       <span>{c.name}</span>
                   ))}
                </div>
            <Link to={`/post/${post._id}`}>
              <h1 className="text-3xl font-serif">{post.title}</h1>
            </Link>
            <h1 className="text-xl">
              {new Date(post.createdAt).toDateString()}{" "}
            </h1>
            <p className="txzhou">{post.desc}</p>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Posts;
