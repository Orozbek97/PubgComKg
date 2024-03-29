import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {Button, Offcanvas} from 'react-bootstrap';
import './index.css';

const BottomNavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <i className={`icon ion-android-people ${activeIcon === 'teams' ? 'activee' : ''}`} >
                        <p>Команды</p>
                    </i>
                </NavLink>
                <NavLink to="/allTournaments">
                    <i className={`icon ion-trophy ${activeIcon === 'allTournaments' ? 'activee' : ''}`}>
                        <p>Турниры</p>
                    </i>
                </NavLink>
                <NavLink to="/allPlayers">
                    <i className={`icon ion-podium  ${activeIcon === 'allPlayers' ? 'activee' : ''}`} >
                        <p>Игроки</p>
                    </i>
                </NavLink>
                <Button onClick={handleShow} style={{
                        background: 'none',
                        borderColor: 'silver',
                        padding: '1px 3px'
                }}>
                    <i className={'icon ion-android-menu'} >
                        <p>Меню</p>
                    </i>
                </Button>
            </div>
            <Offcanvas show={show} onHide={handleClose} style={{width: '60%'}}>
                <Offcanvas.Header closeButton style={{color: 'white'}}>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body  className={'canvas-body'}>
                    <p>Инструкция </p>
                    <p>О Нас </p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default BottomNavigationBar;
