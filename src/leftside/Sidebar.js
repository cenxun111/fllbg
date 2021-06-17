import { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../context/Context'
import headpic from '../images/headpic.jpg'


const Sidebar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:4000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    };
    return (
        <div>
            <div >

                <div className="flex pl-4 pt-2" >

                    <div className="fixed ">

                        <div className="text-green-500">


                            <div className='flex pt-6 text-2xl justify-center'>
                                <Link to="/">HOME</Link>
                            </div>
                            <div>
                                <nav className='flex pt-6 text-2xl justify-center'><Link to="/write">WRITE</Link></nav>
                            </div>
                            <div>
                                <nav className='flex pt-6 text-2xl justify-center'><Link to="/">CONTACT</Link></nav>
                            </div>
                            <div>
                                <button className='flex pt-6 pl-2 text-2xl justify-center' onClick={handleLogout}>{user && "LOGOUT"}</button>
                            </div>
                            <div>
                                {user ? (<Link className="text-3xl" to="/settings"><a href="#" className='flex items-center pt-10 justify-center'  >
                                    <img src={PF + user.profilePic}
                                        alt=""
                                        className=' w-28 h-20 rounded-full' />
                                </a>
                                <a href="#" >
                                <div className="pt-4">
                                    <span className='flex text-green-800 text-3xl  py-2 justify-center bg-purple-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
         focus-within:text-blue-300      rounded-lg px-2'>
                                        添加
            </span>
                                </div>
                            </a>
                                </Link>)
                                    : (
                                        <Link className="text-3xl flex justify-center  bg-purple-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
                                        focus-within:text-blue-300      rounded-lg px-2" to="/login">LOGIN</Link>
                                    )}
                            </div>

                            {/* <a href="#" >
                                <div className="pt-4">
                                    <span className='flex text-green-800 text-3xl  py-2 justify-center bg-purple-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
         focus-within:text-blue-300      rounded-lg px-2"'>
                                        添加
            </span>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
