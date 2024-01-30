import React from 'react';
import {Container} from "react-bootstrap";
import FactImage from './assets/pubg_facts.png';
import './facts.css'

const FactsPubg = () => {
    return (
        <>
            <Container>
                <h4 className={'page-tittle'} >Несколько интересных фактов о PUBG Mobile...</h4>
                <div className="row row-cols-lg-2 row-cols-md-2  row-cols-1 mb-4
                ">
                    <div className="col">
                        <div className="facts">
                            <ul >
                                <li><span className={'nameFacts'}>Название:</span> PUBG известна как Неизвестные поля битвы игрока. Разработчик PUBG,
                                    <span className={'Brandan'}> Брендан Грин</span>
                                    , использовал именной тег
                                    <span className={'nameTag'}> PlayerUnknown </span>
                                    в игре DayZ: Battle Royale.</li>

                                <li><span className={'nameFacts'}>Реальные места:</span> Многие из локаций в PUBG Mobile основаны на реальных местах.</li>

                                <li><span className={'nameFacts'}>Боты:</span> Боты — это компьютеризированные игроки, основанные на ИИ (искусственном интеллекте).
                                    Они не будут убивать вас или искать продвинутые припасы на карте.</li>

                                <li><span className={'nameFacts'}>Крупные мировые турниры:</span> PUBG Mobile проводит крупные мировые турниры с высокими призовыми фондами.
                                    Это подтверждает популярность игры в мире.
                                    Такие турниры привлекают внимание миллионов зрителей и позволяют профессиональным игрокам
                                    зарабатывать значительные суммы денег.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="facts-img">
                            <img src={FactImage} alt="factImage" />
                        </div>
                    </div>
                </div>

            </Container>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "1px",
                     marginBottom: '30px'
                 }}></div>
        </>
    );
};

export default FactsPubg;