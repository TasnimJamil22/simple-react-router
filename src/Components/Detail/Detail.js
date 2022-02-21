import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';

const Detail = () => {
    const {friendId} = useParams();
    // console.log(friendId);
    const [friend,setFriend]= useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data));

    },[])
     const history = useHistory();
     const handleClick = () =>{
         history.push('/friends');
     }
    return (
        <div>
            <h3>helloo hello details are over here!!!:{friendId}
            </h3>
            <h1>name:{friend.name}</h1>
             
            <h6>ADDRESS:{friend.address?.city}</h6>
            <p>email:{friend.email}</p>
            <p>my website:{friend.website}</p>
            <h4>Works at:  {friend.company?.name}  <br /> bs: {friend.company?.bs}</h4>
            <button onClick={handleClick}>SEE ALL FRIENDS</button>
        </div>
    );
};

export default Detail;