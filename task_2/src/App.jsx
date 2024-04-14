import { useState } from 'react'
import profilePicture from './assets/profilePic.jpg'
import './App.css'

import React from 'react';
import MainCard from './components/MainCard';
import './App.css';

function App() {
  const skills = {
    learnedSkills: ["Django REST framework", "Flask", "React", "Tailwind"],
    unlearnedSkills: ["Docker", "Golang", "TypeScript", "Redux", "GraphQL", "Kubernetes", "RabbitMQ", "Redis", "Angular"]
  };

  return (
    <div className="app">
      <MainCard
        title ="Мои компетенции в веб-разработке"
        name="Асадулин Руслан Рамилевич"
        image={profilePicture}
        skills={skills}
      />
    </div>
  );
}

export default App;