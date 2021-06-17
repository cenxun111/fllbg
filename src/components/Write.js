import axios from 'axios';
import React, { useState,useContext  } from 'react'
import { Context } from '../context/Context';
import picpost8 from "../images/postpic3.jpg"
const Write = () => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file", file);
            newPost.photo = filename;
            // leastest data 
            try{
                await axios.post("/upload",data);
            }catch(err){}    
            }
            try{
                const res = await axios.post("/posts",newPost); 
                window.location.replace("/post/"+res.data._id)
        }catch(err){}
    };

    return (
        <div className="flex flex-col pl-60 ">
            <div className="flex items-center justify-center">
                {file && (<img src={URL.createObjectURL(file)} className="w-1/2 h-auto  "/>)}
            </div>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-1">
            
            <div>
            
            <input className="bg-gray-800 w-40 my-2 p-2" type = "text" placeholder="title" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            <input className ="p-2 m-2" type="file" id= "fileInput" onChange={(e)=> setFile(e.target.files[0])}></input>
            <button className="bg-gray-800 p-2 m-2 rounded-md" type="submit">Publish</button> 
            </div>
            <textarea className="bg-gray-800 my-2 py-2 px-2 h-28" placeholder="you story.." type="text" onChange={e=>setDesc(e.target.value)}> </textarea>       
              
            </div>
            </form> 
        </div>
    )
}

export default Write
