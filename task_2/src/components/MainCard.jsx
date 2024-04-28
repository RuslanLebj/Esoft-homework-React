import React from 'react';
import CardGroup from './CardGroup.jsx';
import CardTitle from './CardTitle.jsx';
import ProfileName from './ProfileName.jsx';
import ProfileImage from './ProfileImage.jsx';

const MainCard = ({ title, name, image, skills }) => {
    return (
        <div className="main-card">
            <CardTitle title={title} />
            <ProfileImage image={image} />
            <ProfileName name={name} />
            <CardGroup title="Изучил" items={skills.learnedSkills} />
            <CardGroup title="Предстоит изучить" items={skills.unlearnedSkills} />
        </div>
    );
}

export default MainCard;