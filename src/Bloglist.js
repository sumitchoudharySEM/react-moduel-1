const Bloglist = (props) => {
    
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blod_list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;