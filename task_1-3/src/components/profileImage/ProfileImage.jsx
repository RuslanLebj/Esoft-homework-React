import React from 'react';
import styles from './ProfileImage.module.css';

const ProfileImage = ({ image }) => {
    return (
        <div className={styles['profile-image']}>
            <img src={image} alt="profileImage" /> 
        </div>
    );
}

export default ProfileImage;