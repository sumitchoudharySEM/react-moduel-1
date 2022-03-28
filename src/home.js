import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                })
        }, 2000);
    }, []);

    return (
        <div className="home">
            {loading && <div> loading...... </div>}
            {blogs && <Bloglist blogs={blogs} title="all bloags" />}
        </div>
    );
}

export default Home;