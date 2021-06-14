import React from 'react';

const styles = {
    
}

function UserInfo({name,course}) {
    return (
        <div>
            <div>
                <span>{name}</span>
                <span>{course}</span>
            </div>
        </div>
    )
}

export default UserInfo;