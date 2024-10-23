import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    
        const {blog}=bookmark;
        const {title}=blog;
        
    return (
        <div className="bg-white p-5 rounded-lg mt-3">
           
            <div >
           <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>{title}</h2> 
        </div>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;