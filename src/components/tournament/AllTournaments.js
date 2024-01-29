import React from 'react';
import Container from "react-bootstrap/Container";
import ActualTournaments from "./ActualTornaments";
import CompletedTournaments from "./CompletedTournaments";
import BottomNavigationBar from "../bottomNavigation/bottomNavigation";
import Header from "../header/Header";
import ("./tournaments.css")

const AllTournaments = () => {
    return (
        <Container>
            <Header />
            <h2> Все Турниры </h2>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "2px",
                     margin: ' 35px auto',
                 }}></div>
            <ActualTournaments/>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "2px",
                     margin: '35px 0'
                 }}></div>
            <CompletedTournaments />
            <BottomNavigationBar />
        </Container>
    );
};

export default AllTournaments;