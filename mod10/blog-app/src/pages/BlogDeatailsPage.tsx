import { useParams, Link } from "react-router-dom"

interface BlogDetailsPageProps{
    blogs: []
}


function BlogDetailsPage({blogs}: BlogDetailsPageProps){
    const {slug} = useParams()

    const blog = blogs.find((blog) => blog.slug === slug)
    console.log(blog);
    
    if(!blog) return <h1>Blog not found: {slug}<Link to="/blog">Back to Blogs</Link></h1>


    return(
        <main>
            <Link to="/blog">Back</Link>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        </main>
    )
}

export default BlogDetailsPage