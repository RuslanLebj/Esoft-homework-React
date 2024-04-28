import React from 'react';
import styles from './CardLevel.module.css';

const CardLevel = ({ level }) => {
    return (
        <p className={styles['card-level']}>
            Уровень освоения: {level}
        </p>
    );
}

export default CardLevel;