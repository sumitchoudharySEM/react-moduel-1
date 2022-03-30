import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const {id} = useParams();

    return (
        <div className="blog-details">
            <h2>
                see Blog details heair - {id}
            </h2>
        </div>
    );
}

export default BlogDetails;