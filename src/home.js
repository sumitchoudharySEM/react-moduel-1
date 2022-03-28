import { useState } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my new web', body: 'lorem ipsum ...', author: "mario", id: 1 },
        { title: 'my new web 2222', body: 'lorem 22222 ipsum ...', author: "mario2222", id: 2 },
        { title: 'my new web33333', body: 'lorem 333333 ipsum ...', author: "mario", id: 3 }
    ]);

    return (
        <div className="home">
            <Bloglist blogs = {blogs} title ="all bloags"/>
            <Bloglist blogs = {blogs.filter((blog) => blog.author === "mario")} title ="marios blog"/>
        </div>
    );
}

export default Home;