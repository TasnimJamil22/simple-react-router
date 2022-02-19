import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => { 
    const {name,id,website,email,address}= props.friend;
    const friendStyle={
        border:'3px solid black',
        padding:'10px',
        margin:'5px',
        borderRadius:'7px'
    }
    const url =  `/friend/${id}`;
    return (
        <div style={friendStyle}>
            <h3>hello {name} {id}</h3>
            <h6>ADDRESS:{address.city}</h6>
            <p>email:{email}</p>
            <p>my website:{website}</p>
            <Link to={url}>Visit me</Link>

        </div>
    );
};

export default Friend;