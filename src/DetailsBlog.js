
import { useParams } from "react-router-dom"
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { db } from "./firebase";
import {deleteDoc, doc} from "firebase/firestore"


const DetailsBlog = () => {
    const { id } = useParams()
    const {blogs,ispend,iserr} = useFetch("blogpost")
    const history=useHistory()
    
    const blog = blogs?.find((item) => item.id === id); 

    const handleClick= ()=>{
       const blogRef= doc(db,"blogpost",id)
       deleteDoc(blogRef)
       .then(() => {
        console.log("deleted succesfull")
        history.push('/')
       })
       .catch ((error)=>{
        console.error("error deleting the blog", error)
       })

    }


    return ( 
        <div className="details">
           {ispend && <div>Loading......</div>}
           {iserr && <div>{iserr}</div>}
            {blog && (
           <article key= {blog.id}>
            <h2>{blog.title}</h2>
            <div>{blog.body}</div>
            <p>written by {blog.author}</p>
            <button onClick={handleClick}>Delete</button>
           </article>
            )}
        </div>
     );
}
 
export default DetailsBlog;