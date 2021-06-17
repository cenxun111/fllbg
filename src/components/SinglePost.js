import React from 'react'
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useLocation } from 'react-router'
import picpost8 from '../images/picpost8.jpg'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = 'http://localhost:4000/images/';
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path,);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost()
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
            window.location.replace("/");
        } catch (err) { }
    };
    const handleUpdate = async () =>{
        try {
            await axios.put(`/posts/${post._id}`,
            { username:user.username,title,desc,
        });
        // window.location.replace("/");
        setUpdateMode(false)
    }catch(err) {}
        
    };

    return (
        <div className="flex  flex-col mt-10 mr-4">
            <div className="flex  flex-col items-center" >
                {post.photo && (
                    <img src={PF + post.photo} className="w-1/2 h-auto rounded-md" />
                )}{
                    updateMode ? <input className="bg-gray-800 w-40 my-2 p-2" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/> : (
                        <h1 className="text-3xl font-serif">{title}</h1>
                    )
                }


                <div>
                    <Link to={`/?user=${post.username}`}>
                        <h1 className="text-xl mt-2">{post.username} </h1>
                    </Link>
                    <h1 className="text-xl mt-2">{new Date(post.createdAt).toDateString()} </h1>
                {updateMode ? <textarea className="bg-gray-800 my-2 py-2 px-2 h-28" type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}/>:(<p className="txzhou text-blue-300 ">
                        {desc}
                    </p>)}
                    
                </div>
                <div className="flex i justify-center">
                    <button className="p-2 bg-gray-800 text-2xl felx m-10" onClick={handleDelete}>delete</button>
                    <button className="p-2 bg-gray-800 text-2xl felx m-10" onClick={()=>setUpdateMode(true)}>update</button>
                    {updateMode &&(
                        <button className="p-2 bg-gray-800 text-2xl felx m-10" onClick={handleUpdate}>submit</button>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default SinglePost
