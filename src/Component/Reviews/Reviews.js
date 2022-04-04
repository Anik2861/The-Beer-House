import React from 'react';
import BeerReviews from '../BeersReviews/BeerReviews';
import useBeer from '../Hook/useBeer';

const Reviews = () => {
    const [beers, setBeers] = useBeer()
    return (
        <div>
            <div className='review-container'>

                {
                    beers.map(beer => <BeerReviews
                        key={beer.id}
                        beer={beer}
                    ></BeerReviews>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;