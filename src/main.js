import React from 'react';
import Header from "./components/header/Header";
import ActualTournaments from "./components/tournament/ActualTornaments";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Players from "./components/players/Players";
import BottomNaviagtion from "./components/bottomNaviagtion";

const Main = () => {
    return (
        <div>
            <Header />
            <div className="line"
                 style={{backgroundColor: "silver",
                         width: "100%",
                         height: "1px",
                        marginBottom: '30px'
            }}></div>
            <ActualTournaments />
            <Container>
                <div className="row row-cols-lg-4 row-cols-md-3  row-cols-1 my-auto">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <Link to={'/alltournaments'}>
                            <Button variant={'success'}
                                    className={'text-uppercase'}
                                    size={'lg'}
                                    style={{width: '100%',
                                        borderRadius:'0 0 15px 15px',
                                        marginBottom: "30px"
                                    }}> все туниры </Button></Link>
                    </div>
                </div>
            </Container>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "1px",
                     marginBottom: '30px'
                 }}></div>
            <Players />
            <BottomNaviagtion />
        </div>
    );
};

export default Main;