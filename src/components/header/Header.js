import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from './assets/pubg.com.png'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import ('./Header.css')


function CollapsibleExample() {

    return (
            <Container>
                <div className="header">
                    <div className="logo-img">
                        <a href='/'>
                            <img src={LogoImg} alt="Logo-site" width={'100%'} className={'logo'}/>
                        </a>
                    </div>
                    <Link to={'/authorization'}  style={{textDecoration: 'none'}}>
                        <Button variant={"primary"} className={'sign-button'}>
                            <i className={`icon ion-android-person`} ></i>
                            Войти
                        </Button>
                    </Link>
                </div>
                <div className="nav-links">
                    <Nav.Link href="/alltournaments">Турниры</Nav.Link>
                    |
                    <Nav.Link href="/allplayers">Игроки</Nav.Link>
                    |
                    <Nav.Link href="#instruction">Инструкция</Nav.Link>
                </div>
            </Container>
    );
}

export default CollapsibleExample;