import React from 'react';
import './BeersReviews.css'
const BeerReviews = ({ beer }) => {
    return (

        <div className='beer-info'>
            <img src={beer.personImg} alt="" />
            <div>
                <h3>{beer.PersonName}</h3>
                <h4>Ratings: {beer.Ratings}</h4>
                <p><small className='review'>{beer.review}</small></p>
            </div>
        </div>
    );
};

export default BeerReviews;