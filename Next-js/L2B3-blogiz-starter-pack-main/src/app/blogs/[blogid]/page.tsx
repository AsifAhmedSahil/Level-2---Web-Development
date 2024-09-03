import BlogDetails from "@/components/ui/BlogDetails"

interface BlogId {
    params:{
        blogid: string
    }
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