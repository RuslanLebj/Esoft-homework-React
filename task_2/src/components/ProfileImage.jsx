import React from 'react';

const CardTitle = ({ image }) => {
    return (
        <div>
            <img src={image} alt="profileImage" />
        </div>
    );
}

export default CardTitle;