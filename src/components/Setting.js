import {useContext,useState } from 'react'
import postpic2 from "../images/postpic2.gif"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { Context } from '../context/Context';
import axios from 'axios';

const Setting = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const {user,dispatch} = useContext(Context);
    const PF = 'http://localhost:4000/images/';

    const handleSubmit = async(e) =>{
        e.perventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload",data);
            } catch(err) {}
        }
        try {
            const res =  await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS", payload:res.data});
        } catch(err){
            dispatch({ type:"UPDATE_FAILURE"});
        }
    };
    return (
        <div className="flex-row">
            <div className="flex justify-between mt-10" >
                <span className="text-3xl text-green-600 pl-40 ">Upadte Your Account</span>
                <span className="text-lg text-blue-600 pr-40  ">Delete Account</span>
            </div>
            <form className="pt-6" onSubmit={handleSubmit}>
                {/* <label className="text-green-600 text-xl" >Profie Picture</label> */}
                <div className="flex  mt-6 pl-40">
                    <img  className="h-10 w-auto rounded-full pr-2 " src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt=""/>
                    <label htmlFor="fileInput" className="p-2 bg-gray-800 rounded-full" onChange={(e) =>setFile(e.target.files[0])}>
                        <AddIcon/>
                    </label>
                    <input className ="pl-6 "  type="file" id="fileInput"/>
                </div>
                <div className="flex flex-col  items-center">
                    <lable className="text-green-600 text-2xl">Username</lable>
                    <input className="w-80 bg-gray-800 rounded-md py-2 pl-2" type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
                    <lable className="text-green-600 text-2xl">Email</lable>
                    <input className="w-80 bg-gray-800 rounded-md py-2 pl-2" type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} name="email"/>
                    <lable className="text-green-600 text-2xl">Password</lable>
                    <input className="w-80  rounded-md py-2 pl-2 bg-gray-800" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="py-2 px-8 mt-8 bg-green-800 rounded-md text-2xl" type="submit">Update</button>
                    {success && <sapn>Profile has been updated</sapn>}
                </div>
            </form>
        </div>
    )
}

export default Setting
