import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>the page dose not exsist </p>
            <Link to="/">go back to the home page</Link>
        </div>
     );
}
 
export default NotFound;