import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Создадим Невероятное {/* Let&apos;s Build Something amazing with GPT-3 OpenAI */}</h1>
      {/* <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p> */}

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Адрес Почты" />
        <button type="button">Начнем</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 человек запросили разрешение на использование за последние 24 часа{/* 1,600 people requested access a visit in last 24 hours */}</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
