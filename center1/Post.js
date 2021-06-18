// import React from 'react'
// import postpic3 from '../images/postpic3.jpg'
// import "./post.css"
// import{Link} from "react-router-dom"
// const Post = ({ post }) => {
//     const PF = 'http://localhost:4000/images/';
//     return (
//         <div className="flex   mt-10 mr-4">
//             <div className="flex  flex-col items-center" >
//                 {post.photo && (
//                     <img src={PF + post.photo} className="w-11/12 h-auto rounded-md" />
//                 )}
//                 {/* <div className="flex ">
//                    {post.categories.map((c) => (
//                        <span>{c.name}</span>
//                    ))}
//                 </div> */}
//                 <Link to ={`/post/${post._id}`}>
//                 <h1 className="text-3xl font-serif">{post.title}</h1>
//                 </Link>
//                 <h1 className="text-xl">{new Date(post.createdAt).toDateString()} </h1>
//                 <p className="txzhou">
//                     {post.desc}
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Post
