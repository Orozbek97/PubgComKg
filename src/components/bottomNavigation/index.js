import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.css';

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
                    <i className={`icon ion-home ${activeIcon === '' ? 'active' : ''}`}>
                        <p>Главная</p>
                    </i>
                </NavLink>
                <NavLink to="/alltournaments">
                    <ion className={`icon ion-android-people ${activeIcon === 'alltournaments' ? 'active' : ''}`} >
                        <p>Главная</p>
                    </ion>
                </NavLink>
                <NavLink to="/alltournaments">
                    <i className={`icon ion-trophy ${activeIcon === 'alltournaments' ? 'active' : ''}`}>
                        <p>Турниры</p>
                    </i>
                </NavLink>
                <NavLink to="/players">
                    <i className={`icon ion-podium  ${activeIcon === 'players' ? 'active' : ''}`} >
                        <p>Игроки</p>
                    </i>
                </NavLink>
                <NavLink to="/alltournaments" >
                    <i className={`icon ion-android-menu ${activeIcon === 'alltournaments' ? 'active' : ''}`}>
                        <p>Меню</p>
                    </i>
                </NavLink>
            </div>
        </>
    );
};

export default BottomNavigationBar;
