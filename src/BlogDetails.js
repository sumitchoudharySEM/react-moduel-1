import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { error, loading, data: blog } = useFetch(` http://localhost:8000/blogs/` + id);

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <h3>{blog.author}</h3>
                    <p>{blog.body}</p>
                </article>}
        </div>
    );
}

export default BlogDetails;