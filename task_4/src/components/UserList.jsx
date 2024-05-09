import React, { useState, useEffect } from 'react';


// Константа для URL API
const API_URL = 'https://jsonplaceholder.typicode.com/users';


function UserList() {
    // Состояние для списка пользователей
    const [users, setUsers] = useState([]);
    // Состояние для индикации процесса загрузки
    const [isLoading, setIsLoading] = useState(true);
    // Состояние для хранения информации об ошибках
    const [error, setError] = useState(null);

    // Хук эффекта для загрузки данных при монтировании компонента
    useEffect(() => {
        fetch(API_URL)
            .then(response => {
                // Проверка ответа на корректность
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных пользователей');
                }
                return response.json(); // Преобразование ответа в JSON
            })
            .then(data => {
                // Сохранение загруженных пользователей в состояние и снятие флага загрузки
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                // Обработка возникших ошибок и снятие флага загрузки
                setError(error.message);
                setIsLoading(false);
            });
    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только при монтировании

    // Условие отображения индикатора загрузки
    if (isLoading) {
        return <p>Загрузка данных...</p>;
    }

    // Условие отображения сообщения об ошибке
    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    // Отображение списка пользователей, если нет ошибок и данные загружены
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    );
}

export default UserList;