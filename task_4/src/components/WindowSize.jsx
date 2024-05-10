import React, { useState, useEffect } from 'react';

function WindowSize() {
    // Инициализация состояния для хранения размеров окна
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // Функция для обновления размеров окна
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    // Эффект для добавления и удаления обработчика события resize
    useEffect(() => {
        // console.log('Component mounted. Setting up resize event listener...');
        window.addEventListener('resize', handleResize);

        // Функция очистки для удаления обработчика события
        return () => {
            // console.log('Component will unmount. Removing resize event listener...');
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Отображение текущих размеров окна
    return (
        <div>
            <p>Width: {windowSize.width}px</p>
            <p>Height: {windowSize.height}px</p>
        </div>
    );
}

export default WindowSize;