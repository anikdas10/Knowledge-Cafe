import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container flex items-center justify-between py-8 border-b'>
           <h2 className='text-4xl font-bold'>Knowledge Cafe</h2> 
           <img src={profile} alt="" />
        </div>
    );
};

export default Header;