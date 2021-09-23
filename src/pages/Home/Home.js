import React from 'react';

import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';

import Card1 from '../../assets/images/card-1.jpg'
import Card2 from '../../assets/images/card-2.jpg'
import Card3 from '../../assets/images/card-3.jpg'
import Card4 from '../../assets/images/card-4.jpg'
import Card5 from '../../assets/images/card-5.jpg'
import Card6 from '../../assets/images/card-6.jpg'

import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className="home-section">
                <Cards 
                    src={Card1}
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Cards 
                    src={Card2}
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Cards 
                    src={Card3}
                    title="Entire homes"
                    description="Comfortable places, with rooms for friends and family."
                />
            </div>
            <hr />
            <div className="home-section">
                <Cards 
                    src={Card4}
                    title="3 Bedroom Flat"
                    description="Superhost with a stunning view of the beachside in SUnny Bournemouth."
                    price="£130/night"
                />
                <Cards 
                    src={Card5}
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse."
                    price="£350/night"
                />
                <Cards 
                    src={Card6}
                    title="1 Bedroom Apartment"
                    description="Superhost with great amenities and a faboulous shopping complex nearby."
                    price="£70/night"
                />
            </div>
        </div>
    )
}

export default Home;
