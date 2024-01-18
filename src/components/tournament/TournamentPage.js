import React from 'react';
import Header from "../header/Header";
import {Button, Container} from "react-bootstrap";
import {Avatar} from "@mui/material";
import  ('./tournaments.css')

const TournamentPage = () => {
    return (
        <Container>
            <Header />
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "1px",
                     marginBottom: '30px'
                 }}></div>
            <h1>PUBG Mobile / Solo #1 </h1>
            <div className="row rows-cols-md-2 row-cols-sm-2 row-cols-1">
                <div className="col">
                    <div className="cover-img">
                        <img src="https://pubg.com.kg/images/tournament-covers/image-tournaments1.jpeg"
                             alt="cover-tournament"
                             width={'100%'}/>
                        <div className="tournament-info">
                            Статус:
                            <h4 className={'py-2 px-3 bg-success rounded-3'}> Идет набор </h4>  <Button variant={'danger'}> Участвовать </Button>
                        </div>
                        <div className="tournament-info">
                            регистрация до:
                            <h4> 13.12.2023  /  19:45 </h4>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="info-box">
                        <div className="tournament-info left-page">
                            дата :
                            <h4> 13.12.2023    20:00  </h4>
                        </div>
                        <div className="tournament-info left-page">
                            карта
                            <h4> miramar  </h4>
                        </div>
                        <div className="tournament-info left-page">
                            Формат :
                            <h4>  SOLO </h4>
                        </div>
                        <div className="tournament-info left-page">
                            Взнос :
                            <h4> 100 сом  </h4>
                        </div>
                        <div className="tournament-info left-page">
                            макс.число участников :
                            <h4> 100  </h4>
                        </div>
                        <div className="tournament-info left-page">
                            мин.число участников :
                            <h4> 10  </h4>
                        </div>

                    </div>
                </div>
            </div>
            <div className="prize-found">
                    Призовой фонд :
                     <span> 4800 сом </span>
                <p className={'ps-prize-money'}>
                    * Призовой фонд зависит от количество участников </p>
            </div>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "1px",
                     marginBottom: '15px'
                 }}></div>
            <h1> Призы </h1>
            <div className="row align-items-end">
                <div className="col-4 align-content-lg-end">
                    <h3> 2 место </h3>
                    <div className="second-place">
                         800 сом
                    </div>
                </div>
                <div className="col-4">
                    <h3> 1 место </h3>
                    <div className="first-place">
                            1600 сом
                    </div>
                </div>
                <div className="col-4">
                    <h3> 3 место </h3>
                    <div className="third-place">
                            400 сом
                    </div>
                </div>
            </div>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "1px",
                     marginBottom: '15px',
                     marginTop: '15px'
                 }}></div>
            <h1> Участники </h1>
            <div className="count-player"> #7 </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
                <div className="col my-1">
                    <div className="player-card">
                        <div className="player-avatar">
                            <Avatar alt={'player-avatar'}
                                    src={'https://pubg.com.kg/images/avatars/avatar1.jpeg'}
                                    sx={{ width: 56, height: 56 }}
                            ></Avatar>
                        </div>
                        <div className="player-name-money">
                            <h5 className={'player-name '}> AYTishNick</h5>
                            <div className={"player-win-money"}> Призовые:<p> 1500 сом</p> </div>
                        </div>
                    </div>
                </div>
                <div className="col my-1">
                    <div className="player-card">
                        <div className="player-avatar">
                            <Avatar alt={'player-avatar'}
                                    src={'https://pubg.com.kg/images/avatars/avatar2.jpeg'}
                                    sx={{ width: 56, height: 56 }}
                            ></Avatar>
                        </div>
                        <div className="player-name-money">
                            <h5 className={'player-name '}> AYTishNick</h5>
                            <div className={"player-win-money"}> Призовые:<p> 1500 сом</p> </div>
                        </div>
                    </div>
                </div>
                <div className="col my-1">
                    <div className="player-card">
                        <div className="player-avatar">
                            <Avatar alt={'player-avatar'}
                                    src={'https://pubg.com.kg/images/avatars/avatar3.jpeg'}
                                    sx={{ width: 56, height: 56 }}
                            ></Avatar>
                        </div>
                        <div className="player-name-money">
                            <h5 className={'player-name '}> AYTishNick</h5>
                            <div className={"player-win-money"}> Призовые:<p> 1500 сом</p> </div>
                        </div>
                    </div>
                </div>
                <div className="col my-1">
                    <div className="player-card">
                        <div className="player-avatar">
                            <Avatar alt={'player-avatar'}
                                    src={'https://pubg.com.kg/images/avatars/avatar4.jpeg'}
                                    sx={{ width: 56, height: 56 }}
                            ></Avatar>
                        </div>
                        <div className="player-name-money">
                            <h5 className={'player-name '}> AYTishNick</h5>
                            <div className={"player-win-money"}> Призовые:<p> 1500 сом</p> </div>
                        </div>
                    </div>
                </div>
                <div className="col my-1">
                    <div className="player-card">
                        <div className="player-avatar">
                            <Avatar alt={'player-avatar'}
                                    src={'https://pubg.com.kg/images/avatars/avatar5.jpeg'}
                                    sx={{ width: 56, height: 56 }}
                            ></Avatar>
                        </div>
                        <div className="player-name-money">
                            <h5 className={'player-name '}> AYTishNick</h5>
                            <div className={"player-win-money"}> Призовые:<p> 1500 сом</p> </div>
                        </div>
                    </div>
                </div>
                <div className="col my-1">
                    <div className="player-card">
                        <div className="player-avatar">
                            <Avatar alt={'player-avatar'}
                                    src={'https://pubg.com.kg/images/avatars/avatar6.jpeg'}
                                    sx={{ width: 56, height: 56 }}
                            ></Avatar>
                        </div>
                        <div className="player-name-money">
                            <h5 className={'player-name '}> AYTishNick</h5>
                            <div className={"player-win-money"}> Призовые:<p> 1500 сом</p> </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TournamentPage;