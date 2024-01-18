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
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >
                    <a href='/'>
                     <img src={LogoImg} alt="Logo-site" width={'100%'} className={'logo'}/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={'my-1 icon-link-hover float-end'}>
                    <Nav className="mx-auto">
                        <Nav.Link href="/alltournaments">Турниры</Nav.Link>
                        <Nav.Link href="#players">Игроки</Nav.Link>
                        <Nav.Link href="#instruction">Инструкция</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to={'/authorization'} > <Button variant={"danger"}> Вход / Регистрация </Button>  </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CollapsibleExample;