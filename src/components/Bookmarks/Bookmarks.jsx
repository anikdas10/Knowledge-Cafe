import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-2/5 my-8 bg-gray-200 p-6 rounded-md">
             <h3 className="text-[#6047ec] text-xl md:text-2xl bg-[#6047EC1A] font-bold p-4 border border-[rgb(96,71,236)] text-center rounded-md mb-4">Spent time on read : {readingTime} min</h3>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Bookmarked Blogs:{bookmarks.length}</h3>
          <div>
             {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} readingTime={readingTime} bookmark={bookmark}></Bookmark>)
           }
          </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;