import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h3>helloo hello details are over here!!!</h3>
        </div>
    );
};

export default Detail;