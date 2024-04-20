import { useState } from 'react'
import profilePicture from './assets/profilePic.jpg'
import './App.css'

import React from 'react';
import MainCard from './components/MainCard';
import './App.css';

const skills = {
  learnedSkills: [
    { id: 1, name: "Django REST framework" },
    { id: 2, name: "Flask" },
    { id: 3, name: "React" },
    { id: 4, name: "Tailwind" }
  ],
  unlearnedSkills: [
    { id: 5, name: "Docker" },
    { id: 6, name: "Golang" },
    { id: 7, name: "TypeScript" },
    { id: 8, name: "Redux" },
    { id: 9, name: "GraphQL" },
    { id: 10, name: "Kubernetes" },
    { id: 11, name: "RabbitMQ" },
    { id: 12, name: "Redis" },
    { id: 13, name: "Angular" }
  ]
};

function App() {
  return (
    <div className="app">
      <MainCard
        title="Мои компетенции в веб-разработке"
        name="Асадулин Руслан Рамилевич"
        image={profilePicture}
        skills={skills}
      />
    </div>
  );
}

export default App;