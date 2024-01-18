import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import SingUp from "./SignUp";
import Header from "../header/Header";
import LoginForm from "./SignIn";


const Authorization = () => {
    return (
        <>
            <Header />
            <Tabs
                defaultActiveKey="SignIn"
                id="authorization-form"
                className="my-3 justify-content-center"
            >
                <Tab eventKey="SignIn" title="Вход">
                    <LoginForm />
                </Tab>
                <Tab eventKey="SignUp" title="Регистрация">
                    <SingUp />
                </Tab>
            </Tabs>
        </>
    );
};

export default Authorization;