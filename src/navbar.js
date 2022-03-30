import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>first react navbar</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create" style={{
                    color: "blue",
                    backgroundColor:  '#f1356d',
                    borderRadius: '10px'
                }}>new bloag</Link>
            </div>
        </nav>
    );
}
 
export default  Navbar ;