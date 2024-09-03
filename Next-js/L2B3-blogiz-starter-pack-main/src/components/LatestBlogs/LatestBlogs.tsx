import { Blog } from "@/types"
import LatestBlogCard from "../ui/LatestBlogCard"
import BlogCard from "../ui/BlogCard"


const LatestBlogs = ({blogs}:{blogs:Blog[]}) => {
  return (
    <div>
        <h1 className="text-4xl text-center mt-5 mb-5 pt-5">
            Latest Blogs
        </h1>

       <div className="w-[90%] mx-auto">
       <div className="grid grid-cols-2 gap-4 my-5 ">
            {
                blogs.slice(0,2).map((blog)=><LatestBlogCard  key={blog.id} blog={blog}/>)
            }
        </div>
        <div className="grid grid-cols-3 gap-4 my-5">
            {
                blogs.slice(2,5).map((blog)=><BlogCard  key={blog.id} blog={blog}/>)
            }
        </div>
       </div>
    </div>
  )
}

export default LatestBlogs