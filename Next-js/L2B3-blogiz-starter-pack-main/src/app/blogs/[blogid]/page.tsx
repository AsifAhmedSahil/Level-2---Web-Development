import BlogDetails from "@/components/ui/BlogDetails"
import { Blog } from "@/types";

interface BlogId {
    params:{
        blogid: string
    }
}

export const generateStaticParams = async () =>{
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json()
    return blogs.slice(0,3).map((blog: Blog) =>{
        blogid: blog.id
    })
} 

const BlogDetailsPage = async ({params }:BlogId) => {
    console.log(params)
    const res = await fetch(`http://localhost:5000/blogs/${params.blogid}`,{
        cache:"no-store"
    })
    const blog  = await res.json()
  return (
    <div>
        <BlogDetails blog={blog}/>
    </div>
  )
}

export default BlogDetailsPage