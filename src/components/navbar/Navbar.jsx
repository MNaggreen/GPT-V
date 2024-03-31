import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo" /* className="gpt3__navbar-sign" */>
          {/* <img src={logo} /> */}<h1 /* className="gpt3__footer-links_p"  */ style={{color: 'white'}}>GPT-V</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Главная</a></p>
          <p><a href="#wgpt3">Что такое GPT-V</a></p>
          <p><a href="#possibility">Открытый ИИ</a></p>
          <p><a href="#features">Сценарии Обучения{/* Case Studies */}</a></p>
          <p><a href="#blog">Библиотека</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Войти</p>
        <button type="button">Присоединиться</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Главная{/* Home */}</a></p>
            <p><a href="#wgpt3">Что такое GPT-V{/* What is GPT3? */}</a></p>
            <p><a href="#possibility">Открытый ИИ{/* Open AI */}</a></p>
            <p><a href="#features">Сценарии Обучения{/* Case Studies */}</a></p>
            <p><a href="#blog">Библиотека{/* Library */}</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Войти</p>
            <button type="button">Присоединиться</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
