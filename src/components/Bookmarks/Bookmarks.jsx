import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-2/5 my-8 bg-gray-200 p-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Bookmarked Blogs:{bookmarks.length}</h3>
          <div>
             {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
          </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmarks;