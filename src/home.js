import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my new web', body: 'lorem ipsum ...', author: "mario", id: 1 },
        { title: 'my new web 2222', body: 'lorem 22222 ipsum ...', author: "mario2222", id: 2 },
        { title: 'my new web33333', body: 'lorem 333333 ipsum ...', author: "mario", id: 3 }
    ]);

    const HandelDelete = (id) =>{
        const NewBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(NewBlog);
    }

    useEffect(() => {
        console.log("useEffect run everytime data is changed or by any mean web re-renders /re-read");
        console.log(blogs);
    })

    return (
        <div className="home">
            <Bloglist blogs = {blogs} title ="all bloags" HandelDelete= {HandelDelete} />
            
        </div>
    );
}

export default Home;