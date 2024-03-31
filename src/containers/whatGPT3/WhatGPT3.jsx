import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Что такое GPT-V" text="Мы так ценим друзей, что мое сообщение вызывает восторг. Вся передняя часть тарелки слышала о нем. Его неполноценное и неубедительное проживание. Подключение сделало невозможными собственные апартаменты. На совместном проживании его светлость настаивал так человечно. Дружелюбный холостяцкий вход в дом." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Возможности за границами Вашего воображения{/* The possibilities are beyond your imagination */}</h1>
      <p>Иследайте Нашу Библиотеку</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Чатботы" text="Мы так ценим друзей, что мое сообщение вызывает восторг. Вся передняя часть тарелки слышала о нем." />
      <Feature title="База Знаний" text="Его неполноценное и неубедительное проживание. Подключение сделало невозможными собственные апартаменты." />
      <Feature title="Образование" text="На совместном проживании его светлость настаивал так человечно. Дружелюбный холостяцкий вход в дом." />
    </div>
  </div>
);

export default WhatGPT3;
