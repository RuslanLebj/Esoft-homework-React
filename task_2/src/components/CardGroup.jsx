import React from 'react';
import SkillCard from './SkillCard.jsx';

const CardGroup = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="card-group">
        {/* Добавление индекса к ключу для гарантии уникальности в случае повторяющихся элементов */}
        {items.map((item, index) => <SkillCard key={`${item}-${index}`} skill={item} />)}
      </div>
    </div>
  );
}

export default CardGroup;