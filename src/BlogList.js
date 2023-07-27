import { Link } from "react-router-dom"

const BlogList = ({blogs, title }) => {   
    return ( 
        <div className="list">
            <h2>{title}</h2>
            {blogs.map((blogies) => (
            <div className="preview" key={blogies.id}>
                <Link to={`/details/${blogies.id}`}>
                <h2> {blogies.title}</h2>
                <p>written by {blogies.author}</p>
                {/* <p>{blogies.body}</p> */}
                </Link>

            </div>
           ))}
        </div>
     );
}
 
export default BlogList;
