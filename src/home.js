import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if (!res.ok){
                        throw Error("could not featch the data for theat reasorce")

                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                    setError(null);
                })
                .catch(err =>{
                    setError(err.message)
                    setLoading(false);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div> loading...... </div>}
            {blogs && <Bloglist blogs={blogs} title="all bloags" />}
            
        </div>
    );
}

export default Home;