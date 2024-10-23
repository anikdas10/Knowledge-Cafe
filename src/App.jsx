import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  const[bookmarks,setBookmarks]=useState([]);
  const handleAddToBookmarks = blog=>{
   setBookmarks([...bookmarks,blog])
  }
  return (
    <div>
      <Header></Header>
      <div className="container md:flex gap-5">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
};

export default App;