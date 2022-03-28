import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'my new web', body: 'lorem ipsum ...', author: "mario", id: 1 },
        { title: 'my new web 2222', body: 'lorem 22222 ipsum ...', author: "mario2222", id: 2 },
        { title: 'my new web33333', body: 'lorem 333333 ipsum ...', author: "mario", id: 3 }
    ]);

    const [name , setName] = useState("mario");

    const HandelDelete = (id) =>{
        const NewBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(NewBlog);
    }

    useEffect(() => {
        console.log("useEffect run now onley when dipendency [] ke andar ka useState re-render hoga   in this case only when name changes and not when blogs changes   allso it allwes work when we start the web  ");
        console.log(name);
    } ,[name] );

    return (
        <div className="home">
            <Bloglist blogs = {blogs} title ="all bloags" HandelDelete= {HandelDelete} />
            <button onClick={() => setName("sumit")} >change name </button>
        </div>
    );
}

export default Home;