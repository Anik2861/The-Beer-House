import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-text'>
            <FontAwesomeIcon className='not-found-icon' icon={faFaceFrown}></FontAwesomeIcon>
            <h1 >404</h1>
            <h3 >Page Not found</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Explicabo dolores alias optio? Rerum optio aut, minus quo voluptate repellat numquam.</p>
        </div>
    );
};

export default NotFound;