

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Nurdin Blogie</h1>
            <div className="links">
                <a href="/" style = {{
                    color: "white",
                    background:"#f1356d",
                    borderRadius:"8px"
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = 'black';
                    e.target.style.background = '#fff';
                    e.target.style.border = '1px solid #f1356d';
                    // Additional styles for hover state
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.background = '#f1356d';
                    e.target.style.border = 'none';
                    // Additional styles for normal state
                  }}
                >Home </a>


                <a href="/create" style = {{
                    color: "white",
                    background:"#f1356d",
                    borderRadius:"8px"
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = 'black';
                    e.target.style.background = '#fff';
                    e.target.style.border = '1px solid #f1356d';
                    // Additional styles for hover state
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.background = '#f1356d';
                    e.target.style.border = 'none';
                    // Additional styles for normal state
                  }}
                >New Blog</a>

                {/* <a href="/create" >Create</a> */}

                
            </div>

        </nav>
     );
}
 
export default Navbar;