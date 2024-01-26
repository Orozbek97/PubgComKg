import React from 'react';
import Container from "react-bootstrap/Container";
import {Avatar} from "@mui/material";
import BottomNavigationBar from "../bottomNavigation";
import ("./playerPage.css");

const Players = () => {
    return (
        <>
            <h3> Игроки </h3>
            <Container>
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
                <BottomNavigationBar />
            </Container>

        </>
    );
};

export default Players;