import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  const[bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookmarks = blog=>{
   setBookmarks([...bookmarks,blog])
  };

  const handleMArkAsRead= time =>{
    const intTime= parseInt(time);
    setReadingTime(readingTime+intTime);
  }

  return (
    <div>
      <Header></Header>
      <div className="container md:flex gap-5">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMArkAsRead={handleMArkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
};

export default App;