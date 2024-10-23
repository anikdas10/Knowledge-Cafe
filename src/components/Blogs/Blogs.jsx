import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmarks ,handleMArkAsRead}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
},[])

    return (
        <div className=" md:w-3/5">
           {
            blogs.map(blog=><Blog handleAddToBookmarks={handleAddToBookmarks} handleMArkAsRead={handleMArkAsRead} key={blog.id} blog={blog}></Blog>)
           }
        </div>
    );
};
Blogs.propTypes={
  handleAddToBookmarks: PropTypes.func ,
  handleMArkAsRead: PropTypes.func
}

export default Blogs;