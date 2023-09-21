import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";
import{db} from "./firebase"
import{doc, getDoc, updateDoc} from "firebase/firestore"





const EditBlogs = () => {
    const { id } = useParams();
    const history = useHistory();
    const { blogs, ispend, iserr } = useFetch();
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedBody, setUpdatedBody] = useState("");
    const [updatedAuthor, setUpdatedAuthor] = useState("");

  // Function to handle the blog update
  const handleUpdate = async () => {
    const blogRef = doc(db, "blogpost", id);
    const updatedBlog = {
      title: updatedTitle,
      body: updatedBody,
      author: updatedAuthor,
    };

    try {
      await updateDoc(blogRef, updatedBlog);
      console.log("Blog updated successfully");
      history.push(`/details/${id}`);
    } catch (error) {
      console.error("Error updating the blog:", error);
    }
  };

  useEffect(() => {
    const blog = blogs?.find((item) => item.id === id);
    if (blog) {
      // Initialize the state variables with the current blog data
      setUpdatedTitle(blog.title);
      setUpdatedBody(blog.body);
      setUpdatedAuthor(blog.author);
    }
  }, [blogs, id]);







    return ( 

        <div className="create">
        <h2>Edit Blog</h2>
        <label>Title</label>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
  
        <label>Body</label>
        <textarea
          value={updatedBody}
          onChange={(e) => setUpdatedBody(e.target.value)}
        ></textarea>
  
        <label>Author</label>
        <input
          type="text"
          value={updatedAuthor}
          onChange={(e) => setUpdatedAuthor(e.target.value)}
        />
  
        <button onClick={handleUpdate}>Update</button>
      </div>

     );
}
 
export default EditBlogs;