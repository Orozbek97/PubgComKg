import React from 'react';
import BottomNavigationBar from "../bottomNavigation";
import Header from "../header/Header";

const TeamsPage = () => {
    return (
        <div>
            <Header />
           <h1 style={{color: 'white',
                       textAlign:'center'
           }}> Упппсс</h1>

            <h3 style={{color: 'white',
                       textAlign: "center"
            }}> Эта функция еще на разработке </h3>
            <BottomNavigationBar />
        </div>
    );
};

export default TeamsPage;