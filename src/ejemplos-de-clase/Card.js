import React from 'react';
import UserInfo from './UserInfo';

function Card({message,user}) {
    return (
        <div style={{border: '1px solid black', width: '200px',height:'180px'}}>
            {message}
            <UserInfo {...user}/>
        </div>
    )
}

export default Card