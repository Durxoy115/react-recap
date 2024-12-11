import { useEffect, useState } from "react";
import Post from "./Post";
import './Posts.css'

export default function Posts()
{
    const[posts, setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return(
        <div className="post">
            <h4>Posts: {posts.length} </h4>
            {
                posts.map(post => <Post
                post={post}></Post>)
            }
        </div>
    )
}