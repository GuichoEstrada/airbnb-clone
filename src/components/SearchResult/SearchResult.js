import React from 'react';

import './SearchResult.scss'

import HeartIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star'

function SearchResult({ img, location, title, description, star, price, total }) {
    return (
        <div className='search-result'>
            <img src={img} alt="" />
            <HeartIcon className='heart-icon' />
            <div className='searchResult-info'>
                <div className='searchResult-info-top'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_______</p>
                    <p>{description}</p>
                </div>
                <div className='searchResult-info-bottom'>
                    <div className='searchResult-star'>
                        <StarIcon className='star-icon'/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResult-price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
