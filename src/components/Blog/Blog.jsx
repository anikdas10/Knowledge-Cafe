import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmarks,handleMArkAsRead}) => {
    const {author,title,cover,author_img,posted_Date,reading_time,hasTag,id}=blog;
    return (
        <div className='space-y-4 my-8'>
           <img className='w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`}  /> 
           <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2'>
                <div className='w-12 md:w-16'>
                    <img src={author_img} alt="" />
                </div>
                <div>
                    <h3 className='font-bold text-sm md:text-lg'>{author}</h3>
                    <p className='text-xs md:text-sm'>{posted_Date}</p>
                </div>
            </div>
            <div className='flex items-center gap-1 text-lg'>
                <p >{reading_time} min read </p>
                <button onClick={()=>handleAddToBookmarks({blog})}><CiBookmark /></button>
            </div>
           </div>
           <h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>{title}</h2>
           <div className='flex gap-3'>
            <p><a href="">#{hasTag[0]}</a></p>
            <p><a href="">#{hasTag[1]}</a></p>
           </div>
           <button onClick={()=>handleMArkAsRead(id,reading_time)} className='text-lg text-[#6047EC] font-semibold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
Blog.propTypes ={
    handleAddToBookmarks: PropTypes.object,
    handleMArkAsRead:PropTypes.func
}
export default Blog;