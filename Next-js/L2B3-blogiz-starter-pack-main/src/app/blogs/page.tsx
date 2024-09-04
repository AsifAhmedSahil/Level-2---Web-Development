/* eslint-disable @next/next/no-async-client-component */
"use client"
import BlogCard from "@/components/ui/BlogCard"
import { useGetBlogsQuery } from "@/redux/api/baseApi"
import { Blog } from "@/types"


const BlogPage =async () => {
    // const res = await fetch("http://localhost:5000/blogs",{
    //     cache:"no-store"
    //   })
    //   const blogs = await res.json()

      const {data:blogs} = useGetBlogsQuery("")

  return (
    <div>
        <h1 className="text-4xl font-bold text-center my-5">All Blogs From Blogiz</h1>
        <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-5">
            {
                blogs?.map((blog:Blog) => <BlogCard blog={blog} key={blog.id}/>)
            }
        </div>
    </div>
  )
}

export default BlogPage