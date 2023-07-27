import { useState, useEffect} from "react"
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const {blogs,ispend,iserr} = useFetch("blogpost")

    
    return (  
        <div className="home">
           {ispend && <p>loading ...</p>} 
           {iserr && <p>{iserr}</p>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title=" Mario's Blogs"/> */}
           
        </div>
    );
}
 
export default Home;