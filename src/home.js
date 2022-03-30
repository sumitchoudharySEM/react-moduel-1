import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {

    const {data :blogs ,loading, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div> loading...... </div>}
            {blogs && <Bloglist blogs={blogs} title="all bloags" />}
            
        </div>
    );
}

export default Home;