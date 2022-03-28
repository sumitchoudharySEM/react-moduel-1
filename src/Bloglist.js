const Bloglist = ({blogs, title, HandelDelete}) => {

    
    return ( 
        <div className="blod_list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => HandelDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;