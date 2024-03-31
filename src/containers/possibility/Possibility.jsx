import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Запросить Ранний Доступ чтобы Начать {/* Request Early Access to Get Started */}</h4>
      <h1 className="gradient__text">Возможности{/* The possibilities are */} <br /> за границами Вашего воображения{/* beyond your imagination */}</h1>
      <p>И все же работать с кем-либо за помощь в путешествии - поблажка неприятная. Не все мысли проявляют благословение. Потакание своим желаниям, радость и неистовая привязанность. Вечеринку, о которой мы годами на заказ просили.</p>
      <h4>Запросить Ранний Доступ чтобы Начать {/* Request Early Access to Get Started */}</h4>
    </div>
  </div>
);

export default Possibility;
