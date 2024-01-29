import React from 'react';
import Header from "../header/Header";
import Players from "./Players";
import BottomNavigationBar from "../bottomNavigation/bottomNavigation";


const AllPlayers = () => {
    return (
        <>
            <Header/>
            <div className="line"
                 style={{backgroundColor: "silver",
                     width: "100%",
                     height: "1px",
                     marginBottom: '30px'
                 }}></div>
            <Players/>
            <BottomNavigationBar />
        </>
    );
};


export default AllPlayers;