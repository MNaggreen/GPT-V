import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Хотите ли вы сделать шаг в будущее одним из первых{/* Do you want to step in to the future before others */}</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Запросить Ранний Доступ {/* Request Early Access */}</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h1 /* className="gpt3__footer-links_p"  */ style={{color: 'white'}}>GPT-V</h1>
        <p>Россия Моск. Обл. г. Вавиловск ул. Средняя 182 стр. 17 <br /> Все права сохранены{/* All Rights Reserved */}</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Ссылки</h4>
        <p>Обязательства</p>
        <p>Социальные сети</p>
        <p>Счетчики</p>
        <p>Контакты</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Компания</h4>
        <p>Правила и Условия пользования </p>
        <p>Политика конфиденциальности</p>
        <p>Контакты</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Будьте на связи</h4>
        <p>Россия Моск. Обл. г. Вавиловск ул. Средняя 182 стр. 17</p>
        <p>0-851-325-67-33</p>
        <p>info@mail.ru</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-V. Все права сохранены.</p>
    </div>
  </div>
);

export default Footer;
