import React from 'react'
import './Search.scss'

import {Button} from '@material-ui/core';
import SearchResult from '../../components/SearchResult/SearchResult';

import Result1 from '../../assets/images/results/result-1.jpg';
import Result2 from '../../assets/images/results/result-2.jpg';
import Result3 from '../../assets/images/results/result-3.jpg';
import Result4 from '../../assets/images/results/result-4.jpg';
import Result5 from '../../assets/images/results/result-5.jpg';

function Search() {
    return (
        <div className='search'>
            <div className='search-info'>
                <p>62 stays - 26 October to 30 October - 2 guests</p>
                <h1>Stays nearby</h1>
                <Button className='filter-btn' variant='outlined'>Cancellation Flexibility</Button>
                <Button className='filter-btn' variant='outlined'>Type of Place</Button>
                <Button className='filter-btn' variant='outlined'>Rooms and Beds</Button>
                <Button className='filter-btn' variant='outlined'>More Filters</Button>
            </div>
            <SearchResult 
                img={Result1}
                location="Private Room in the center of London"
                title="Stay at this spacious Edwardian House"
                description="1 Guest - 1 Bedroom - 2 Shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="£30/night"
                total="£117 total"
            />
            <SearchResult 
                img={Result2}
                location="Private Room in the center of London"
                title="Independent Studio Apartment"
                description="2 Guests - 2 Bedroom - 1 Shared bathrooms - Wifi - Kitchen"
                star={4.3}
                price="£40/night"
                total="£157 total"
            />
            <SearchResult 
                img={Result3}
                location="Private Room in the center of London"
                title="London Studio Apartment"
                description="4 Guests - 2 Bedroom - 2 Shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.8}
                price="£50/night"
                total="£210 total"
            />
            <SearchResult 
                img={Result4}
                location="Private Room in the center of London"
                title="5 Star Luxury Apartment"
                description="4 Guests - 2 Bedroom - 2 Shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={5}
                price="£90/night"
                total="£650 total"
            />
            <SearchResult 
                img={Result5}
                location="Private Room in the center of London"
                title="Safe Haven"
                description="2 Guests - 1 Bedroom - 1 Shared bathrooms - Wifi - Kitchen"
                star={5}
                price="£45/night"
                total="£180 total"
            />
        </div>
    )
}

export default Search;
