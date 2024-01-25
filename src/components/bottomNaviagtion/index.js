import React, { useState } from 'react';
import './style.css';
import {Container} from "react-bootstrap"; // Подключите ваш файл стилей здесь

const BottomNavigationBar = () => {
    const [activeIcon, setActiveIcon] = useState('home');

    const change = (iconName) => {
        setActiveIcon(iconName);
    };

    return (
           <>
               <div className={'spacing'}></div>
               <div className="bottom-bar">
                   <i
                       className={`icon ion-home ${activeIcon === 'home' ? 'active' : ''}`}
                       onClick={() => change('home')}
                   ></i>
                   <i
                       className={`icon ion-android-people ${activeIcon === 'people' ? 'active' : ''}`}
                       onClick={() => change('people')}
                   ></i>
                   <i
                       className={`icon ion-trophy ${activeIcon === 'trophy' ? 'active' : ''}`}
                       onClick={() => change('trophy')}
                   ></i>
                   <i
                       className={`icon ion-podium ${activeIcon === 'podium' ? 'active' : ''}`}
                       onClick={() => change('podium')}
                   ></i>
                   <i
                       className={`icon ion-android-menu ${activeIcon === 'menu' ? 'active' : ''}`}
                       onClick={() => change('menu')}
                   ></i>
               </div>
           </>
    );
};

export default BottomNavigationBar;
