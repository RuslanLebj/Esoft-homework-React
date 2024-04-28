import React from 'react';

const CardButton = ({ name, onClick }) => {
    return (
        <button onClick={onClick}>{name}</button> // Добавление обработчика onClick
    );
}

export default CardButton;