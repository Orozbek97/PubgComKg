import React from 'react';
import BottomNavigationBar from "../bottomNavigation";
import Header from "../header/Header";

const TeamsPage = () => {
    return (
        <div>
            <Header />
           <h1 style={{color: 'white',
                       justifyContent:'center',
                       position: "absolute",               /* 2 */
                       top: "50%",
                       right: "50%"
           }}> Упппсс</h1>

            <h3 style={{color: 'white',
                        justifyContent:'center',
                        position: "absolute",               /* 2 */
                        top: "60%",
                        right: "40%"
            }}> Эта функция еще на разработке </h3>
            <BottomNavigationBar />
        </div>
    );
};

export default TeamsPage;