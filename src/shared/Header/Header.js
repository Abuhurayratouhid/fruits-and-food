import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logoutUser()
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'><li>Home</li></Link></li>
                        {/* <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                        <li><Link to='/blog'><li>Blog</li></Link></li>
                        <Link className='ml-3' to='/about'><li>About</li></Link>
                    </ul>
                </div>
                <Link> <p className="btn btn-ghost normal-case text-xl">daisyUI</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/'><li>Home</li></Link>
                    <Link className='ml-5' to='/signUp'><li>Sign up</li></Link>
                    <Link className='ml-5' to='/blog'><li>Blog</li></Link>
                    <Link className='ml-5' to='/about'><li>About</li></Link>


                </ul>
            </div>
            <div className="navbar-end">
                <Link className='md:mr-5  text-white rounded-full'>{user?.displayName}</Link>
                {
                    user?.uid ? 
                    <Link className='mr-5' onClick={handleLogOut}>log out</Link>
                    :
                    <Link className='mr-5' to='/login'>login</Link>
                }
                <img className='h-10 rounded-full' src={user?.photoURL} alt='' />
            </div>
        </div>
    );
};

export default Header;