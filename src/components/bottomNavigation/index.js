import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.css';

const BottomNavigationBar = () => {
    const currentLocation = useLocation();
    const [activeIcon, setActiveIcon] = useState('home');

    useEffect(() => {
        const iconFromPath = currentLocation.pathname.replace('/', '');
        setActiveIcon(iconFromPath);
    }, [currentLocation.pathname]);

    return (
        <>
            <div className={'spacing'}></div>
            <div className="bottom-bar">
                <NavLink to="/" >
                    <i className={`icon ion-home ${activeIcon === '' ? 'activee' : ''}`}>
                        <p>Главная</p>
                    </i>
                </NavLink>
                <NavLink to="/teams">
                    <ion className={`icon ion-android-people ${activeIcon === 'teams' ? 'activee' : ''}`} >
                        <p>Команды</p>
                    </ion>
                </NavLink>
                <NavLink to="/alltournaments">
                    <i className={`icon ion-trophy ${activeIcon === 'alltournaments' ? 'activee' : ''}`}>
                        <p>Турниры</p>
                    </i>
                </NavLink>
                <NavLink to="/players">
                    <i className={`icon ion-podium  ${activeIcon === 'players' ? 'activee' : ''}`} >
                        <p>Игроки</p>
                    </i>
                </NavLink>
                <NavLink to="/alltournaments" >
                    <i className={`icon ion-android-menu ${activeIcon === 'alltournaments' ? 'activee' : ''}`}>
                        <p>Меню</p>
                    </i>
                </NavLink>
            </div>
        </>
    );
};

export default BottomNavigationBar;
