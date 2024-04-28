import React from 'react';
import profilePicture from '../../assets/profilePic.jpg'
import CardTitle from '../../components/cardTitle/CardTitle';
import ProfileImage from '../../components/profileImage/ProfileImage'
import ProfileName from '../../components/profileName/ProfileName'
import CardMenu from '../../components/cardMenu/CardMenu';


const MainPage = () => {
    return (
        <div>
            <CardTitle title={"Мои компетенции в веб-разработке"} />
            <ProfileImage image={profilePicture} />
            <ProfileName name={"Асадулин Руслан Рамилевич"} />
            <CardMenu />
        </div>
    );
}

export default MainPage;