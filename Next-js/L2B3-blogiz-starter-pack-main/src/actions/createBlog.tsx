"use server"

import { Blog } from "@/types"


const createBlog = async (data:Blog) => {
    const res = await fetch("http://localhost:5000/blogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        cache:"no-store"
    })
    const blogPost = await res.json()
    
  return blogPost
}

export default createBlog