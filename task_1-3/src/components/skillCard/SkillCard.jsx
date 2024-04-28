import React from 'react';
import CardTitle from '../cardTitle/CardTitle';
import CardText from '../cardText/CardText';
import CardLevel from '../cardLevel/CardLevel';


const SkillCard = ({ skill, onDelete, onToggleLearned }) => {
  return (
    <div>
      <CardTitle title={skill.name} />
      <CardText text={skill.description} />
      <CardLevel level={skill.level} />
      <button onClick={() => onToggleLearned(skill.id)}>Изучено</button>
      <button onClick={() => onDelete(skill.id)}>Удалить</button>
    </div>
  );
}


export default SkillCard;