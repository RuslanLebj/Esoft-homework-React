import React, { useState } from 'react';
import styles from './AddSkillForm.module.css';

const AddSkillForm = ({ addSkill }) => {

  // Добавление состояний в компонент для хранения временных данных формы.
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillDescription, setNewSkillDescription] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('');

  // Эта функция будет вызываться при отправке формы. Она создаст новый объект навыка и добавит его в массив навыков.
  const handleAddSkill = (e) => {
    e.preventDefault();
    addSkill(newSkillName, newSkillDescription, parseInt(newSkillLevel, 10));
    setNewSkillName('');
    setNewSkillDescription('');
    setNewSkillLevel('');
  };

  return (
    <form onSubmit={handleAddSkill} className={styles.form}>
      <input
        type="text"
        placeholder="Название навыка"
        value={newSkillName}
        onChange={(e) => setNewSkillName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Описание навыка"
        value={newSkillDescription}
        onChange={(e) => setNewSkillDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Уровень (0-100%)"
        value={newSkillLevel}
        onChange={(e) => setNewSkillLevel(e.target.value)}
        required
      />
      <button type="submit">Добавить навык</button>
    </form>
  );
};

export default AddSkillForm;