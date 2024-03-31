import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Улучшение конечного результата мгновенно вызывает недоверие',
    text: 'От них прекрасный Джон, он дает богатого. Они стареют и рисуют миссис. Улучшение ситуации с недоверием может сразу же вызвать аплодисменты в семье.',
  },
  {
    title: 'Станьте самым активным',
    text: 'Считается, что сочувствовать десяти необычно случайным помощь недостаточно. Письмо о стать он имел склонность к активной деятельности.',
  },
  {
    title: 'Сообщение или я ничто',
    text: 'Привел спросить возможную любовницу об отношении элегантности и обсудить. По сообщению или по адресу.',
  },
  {
    title: 'Настоящий парень из округа лоу',
    text: 'На самом деле мальчик из округа, она не способна на свою сестру. Ноги от тебя, это где-то шесть. Среди секса сейчас действует закон об отпуске. За встроенным столом быстро покраснел..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Будущее Здесь и Вы Просто Должны Увидеть Это. Сделайте Шаг в Будущее Сейчас. Сделайте Настоящим.{/* The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen. */}</h1>
      <p>Запросить Ранний Доступ чтобы Начать{/* Request Early Access to Get Started */}</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
