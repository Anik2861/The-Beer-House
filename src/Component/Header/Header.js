import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <nav className='navigation'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/review'>Review</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </nav>
    );
};

export default Header;