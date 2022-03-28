const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>first react navbar</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create" style={{
                    color: "blue",
                    backgroundColor:  '#f1356d',
                    borderRadius: '10px'
                }}>new bloag</a>
            </div>
        </nav>
    );
}
 
export default  Navbar ;