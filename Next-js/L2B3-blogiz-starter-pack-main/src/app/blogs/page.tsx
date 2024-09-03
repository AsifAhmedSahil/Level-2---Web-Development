import BlogCard from "@/components/ui/BlogCard"
import { Blog } from "@/types"


const page =async () => {
    const res = await fetch("http://localhost:5000/blogs",{
        cache:"no-store"
      })
      const blogs = await res.json()
  return (
    <div>
        <h1 className="text-4xl font-bold text-center my-5">All Blogs From Blogiz</h1>
        <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-5">
            {
                blogs.map((blog:Blog) => <BlogCard blog={blog} key={blog.id}/>)
            }
        </div>
    </div>
  )
}

export default page