import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import './Header.scss';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header-icon' src={Logo} alt='airbnb-logo' />
            </Link>
            <div className='header-center'>
                <input type='text'/>
                <SearchIcon className='search-icon'/>
            </div>
            <div className='header-right'>
                <p>Become a Host</p>
                <LanguageIcon className='language-icon'/>
                <ExpandMoreIcon className='expand-icon'/>
                <Avatar className='avatar-icon'/>
            </div>
        </div>
    )
}

export default Header;
