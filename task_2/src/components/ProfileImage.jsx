import React from 'react';

const ProfileImage = ({ image }) => {
    return (
        <div>
            <img src={image} alt="profileImage" />
        </div>
    );
}

export default ProfileImage;