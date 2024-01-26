import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Main from "./main";
import Authorization from "./components/autorization/Autorization";
import AllTournaments from "./components/tournament/AllTournaments";
import TournamentPage from "./components/tournament/TournamentPage";
import BottomNaviagtion from "./components/bottomNavigation";
import Players from "./components/players/Players";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/authorization" element={<Authorization/> } > </Route>
                <Route path="/alltournaments" element={<AllTournaments />}></Route>
                <Route path="/TournamentPage" element={ <TournamentPage />}></Route>
                <Route path="/bottom" element={ <BottomNaviagtion />}></Route>
                <Route path="/players" element={ <Players />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
