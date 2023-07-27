import { useState,useEffect } from "react"
import { db } from "./firebase"
import {getDocs, collection} from "firebase/firestore"

const useFetch = () => {
const [blogs, setBlogs]= useState(null)
const [ispend, setPend] = useState(true)
const [iserr, setErr] = useState(null)

useEffect (() => {
    
   const fetchBlogs = () => {
      const blogRef = collection(db, "blogpost");
      getDocs(blogRef)
        .then((snapshot) => {
          const data = [];
          snapshot.forEach((doc) => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setBlogs(data);
          setPend(false);
          setErr(null);
        })
        .catch((error) => {
          setPend(false);
          setErr("Sorry, could not fetch data.");
        });
    };

    fetchBlogs();
  }, []);


return {blogs,ispend,iserr}

}


export default useFetch;