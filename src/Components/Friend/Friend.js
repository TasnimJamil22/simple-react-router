import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Friend.css';

const Friend = (props) => { 
    const {name,id,website,email,address}= props.friend;

    const history = useHistory();
    const friendStyle={
        border:'3px solid black',
        padding:'10px',
        margin:'5px',
        borderRadius:'7px'
    }
    const url =  `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);

    }
    return (
        <div style={friendStyle}>
            <h3>hello {name} {id}</h3>
            <h6>ADDRESS:{address.city}</h6>
            <p>email:{email}</p>
            <p>my website:{website}</p>
            {/* *1) go to visit with link only */}
            <Link to={url}>Visit me</Link>
            {/*2) go to visit with button in link*/}
            <Link to={url}>
                <button>Visit me</button>
            </Link>
            {/* 3)go to visit with eventhandler */}
            <button onClick={handleFriendClick}>visit me 2</button>


        </div>
    );
};

export default Friend;