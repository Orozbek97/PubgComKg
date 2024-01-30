import React from 'react';
import './footer.css'
import {Container} from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LogoImg from '.././header/assets/pubg.com.png'
import {Link} from "react-router-dom";


const FooterPage = () => {
    return (
        <>
            <Container>
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-2 mb-4">
                    <div className="col">
                        <div className="info-side">
                            <div className="soc-links">
                                <a href="#"> <InstagramIcon fontSize={'large'}/></a>
                                <a href="#"> <TelegramIcon sx={{ fontSize: 40 }} /></a>
                            </div>
                            <div className="logo-rules">
                                <div className="logo">
                                    <img src={LogoImg} alt="logo"/>
                                </div>
                                <div className="rules">
                                   <p>2024© PUBG.COM.KG</p>
                                    <a href="#">   Политики конфиденциальности  </a>
                                    <a href="#">   Пользовательское соглашение</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-links">
                            <Link to='/allTournaments'> Турниры </Link>
                            <Link to='/allPlayers'> Игороки </Link>
                            <Link to='/teams'> Команды </Link>
                            <Link to='#'> Инструкция </Link>
                            <Link to='#'> О Нас </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default FooterPage;