import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'recharts';
import BeerReviews from '../BeersReviews/BeerReviews';
import useBeer from '../Hook/useBeer';
import './Home.css'
const Home = () => {
    const [beer, setBeers] = useBeer()
    const beers = beer.slice(0,3)
    console.log(beers)
    return (
        <div>

            <div className='banner'>
                <div className='banner-info'>
                    <h1>Explore Your Favourite Beers</h1>
                    <p>Welcome to Beer House, Britain’s biggest online beer shop. Choose from 1,700 of the world’s most delicious beers and 1,000 superb malt whiskeys, spirits and liquors. Get it all delivered straight to your door with zero fuss, at prices you won’t find anywhere else.</p>
                    <button class="btn btn-outline-primary border-2">Live Demo</button>
                </div>
                <div >
                    <img className='banner-img' src="https://jtdtcwvg.tinifycdn.com/media/catalog/product/cache/506ba563492446b3c43d162e05052aa5/2/4/2411-german-case-comp.png" alt="" />
                </div>
            </div>


            <div className='review-container'>

                {
                    beers.map(beer => <BeerReviews
                        key={beer.id}
                        beer={beer}
                    ></BeerReviews>
                    )
                }

                <Link className='see-all-btn' to='/review'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;