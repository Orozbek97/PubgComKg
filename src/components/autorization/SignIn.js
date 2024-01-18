import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import {Form} from "react-bootstrap";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Добавьте здесь логику обработки входа
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };
    const formStyle = {
        padding: '20px',
        borderRadius: '8px',
    };

    const labelStyle = {
        color: 'white',
        paddingTop: '15px',
    };

    const inputStyle = {
        width: '320px',
    };

    return (
       <>
           <h1 className={'text-white text-center'} >Вход </h1>
           <Container style={formStyle} className={'d-flex justify-content-center'}>
               <form>
                   <div className="mb-3 input-logn">
                       <label htmlFor="username"
                              style={labelStyle}
                              className={"mb-2"}>
                           Логин
                       </label>
                       <input
                           style={inputStyle}
                           type="text"
                           className="form-control"
                           id="username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                       />
                   </div>
                   <div className="mb-3">
                       <label htmlFor="password" className="form-label" style={labelStyle}>
                           Пароль
                       </label>
                       <div className="input-group input-password"
                            style={inputStyle}>
                           <input
                               type={showPassword ? 'text' : 'password'}
                               className="form-control"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                           />
                           <button
                               type="button"
                               className="btn bg-primary bg-opacity-75 text-white"
                               onClick={() => setShowPassword(!showPassword)}
                               style={{width: '100px'}}
                           >
                               {showPassword ? 'скрыть' : 'показать'}
                           </button>
                       </div>
                   </div>
                   <Form.Group controlId="formRememberMe">
                       <Form.Check
                           type="switch"
                           label="Запомнить"
                           onChange={() => setRememberMe(!rememberMe)}
                           style={labelStyle}
                           className={'mb-3'}
                       />
                   </Form.Group>
                   <button type="button" className="btn btn-primary" onClick={handleLogin}>
                       Войти
                   </button>
               </form>
           </Container>
       </>
    );
};

export default LoginForm;
