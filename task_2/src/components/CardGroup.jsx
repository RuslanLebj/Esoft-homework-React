import React from 'react';
import SkillCard from './SkillCard.jsx';

const CardGroup = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="card-group">
        {/* Используем уникальное свойство каждого элемента как ключ, предполагая, что каждый item имеет уникальный 'id' */}
        {items.map(item => <SkillCard key={item.id} skill={item.name} />)}
      </div>
    </div>
  );
}

export default CardGroup;