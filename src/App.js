import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Main from "./main";
import Authorization from "./components/autorization/Autorization";
import AllTournaments from "./components/tournament/AllTournaments";
import TournamentPage from "./components/tournament/TournamentPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Main/>} />
                <Route path="/authorization" element={<Authorization/>} />
                <Route path="/alltournaments" element={<AllTournaments />}></Route>
                <Route path="/TournamentPage" element={ <TournamentPage />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
