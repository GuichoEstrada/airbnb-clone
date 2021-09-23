import React, { useState } from 'react'
import { Button } from '@material-ui/core';

import DatePicker from '../DatePicker/DatePicker';

import './Banner.scss'
import { useHistory } from 'react-router';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className='banner-search'>
                <Button variant='outlined' className='banner-searchBtn' onClick={()=>setShowSearch(!showSearch)}>
                {
                    showSearch ? 
                    "Hide"
                    :
                    "Search Dates"
                }
                </Button>
                {showSearch && <DatePicker />}
            </div>
            <div className='banner-info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
