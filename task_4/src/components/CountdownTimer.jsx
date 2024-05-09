import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const INTERVAL_TIME = 1000; // Время интервала в миллисекундах


function CountdownTimer({ initialTime }) {
    const [timer, setTimer] = useState(initialTime); // Инициализация состояния таймера начальным значением

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 0) {
                    clearInterval(interval); // Очищаем интервал, когда таймер достиг 0
                    return 0; // Возвращаем 0, чтобы таймер не ушел в отрицательные значения
                }
                return prevTimer - 1;
            });
        }, INTERVAL_TIME);

        return () => clearInterval(interval); // Очистка на размонтирование
    }, []);

    return (
        <div>
            <h1>{timer}</h1> {/* Отображение текущего значения таймера */}
        </div>
    );
}

// 'PropTypes':
// Валидация типа: Указывает, что пропс initialTime должен быть числом (number). 
// Обязательный пропс: Ключевое слово isRequired указывает, что пропс initialTime не только должен быть числом, но и обязательно должен быть предоставлен компоненту. 
CountdownTimer.propTypes = {
    initialTime: PropTypes.number.isRequired
};

export default CountdownTimer;