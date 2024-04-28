import React, { useState, useEffect } from 'react';
import SkillCard from '../skillCard/SkillCard';
import CardButton from '../cardButton/CardButton';
import skillsData from '../../assets/skillsExample.json'; // данные для демонстрации примера
import AddSkillForm from '../addSkillForm/AddSkillForm';

const CardMenu = () => {

  const [skills, setSkills] = useState([]);
  const [showSkills, setShowSkills] = useState(false);
  const [filter, setFilter] = useState(null);

  // Получаем данные для демонстрации примера
  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const toggleLearned = (id) => {
    setSkills(skills.map(skill =>
      skill.id === id ? { ...skill, learned: !skill.learned } : skill
    ));
  };

  const filteredSkills = skills.filter(skill => {
    if (filter === 'above50') return skill.level > 50;
    if (filter === 'below50') return skill.level < 50;
    if (filter === 'learned') return skill.learned == true;
    return true;
  });

  const addSkill = (name, description, level) => {
    const newSkill = {
      id: Math.random(), // простой способ для генерации ID ради примера, не использовать в продакшн!!!
      name,
      description,
      level,
      learned: false
    };
    setSkills([...skills, newSkill]);
  };

  return (
    <div>
      <CardButton
        name={showSkills ? 'Убрать компетенции' : 'Показать компетенции'}
        onClick={() => setShowSkills(!showSkills)}
      />
      {showSkills && (
        <>
          <AddSkillForm addSkill={addSkill} />
          <CardButton name={"Уровень более 50%"} onClick={() => setFilter('above50')} />
          <CardButton name={"Уровень менее 50%"} onClick={() => setFilter('below50')} />
          <CardButton name={"Изученные"} onClick={() => setFilter('learned')} />
          {filteredSkills.map(skill => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onDelete={deleteSkill}
              onToggleLearned={toggleLearned}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CardMenu;