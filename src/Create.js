import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { db } from "./firebase";
import {collection, addDoc} from "firebase/firestore"

const Create = () => {
const [title, setTitle]= useState('')
const [body, setBody]= useState('')
const [author, setAuthor]= useState('')
const history = useHistory()
const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title,body,author}

 const blogRef = collection(db,"blogpost")
 addDoc(blogRef,blog)
.then(()=>{
    console.log('new blog added')
    history.push('/')
})
.catch((error) =>{
    console.error("error adding blog", error)
})
}




    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                 type="text"
                 required
                 value={title} 
                 onChange={(e) => setTitle(e.target.value)}
                 />

                <label>Body</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <lable>Author</lable>
                <input 
                type="text" 
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}></input>
                <button >Add blog</button>
                
                
            </form>
        </div>
     );
}
 
export default Create;