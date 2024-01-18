import React, { useState, useEffect } from 'react';
import {Container, Form, Button, Alert,} from 'react-bootstrap';


const SingUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        userId: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

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

    useEffect(() => {
        setPasswordsMatch(formData.password === formData.confirmPassword);
    }, [formData.password, formData.confirmPassword]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ваша логика отправки данных на сервер
        console.log('Отправленная форма:', formData);
    };

    return (
        <>
            <h1 className={'text-white text-center'}>Создать аккаунт </h1>
                    <Container style={formStyle}
                               className={"d-flex justify-content-center"}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label style={labelStyle}>Ваш никнейм в PUBG Mobile </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formUserPubgId">
                                <Form.Label style={labelStyle}>Ваш ID в PUBG Mobile </Form.Label>
                                <Form.Control
                                    type="number"
                                    name="userId"
                                    value={formData.userId}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label style={labelStyle}>Email адрес</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label style={labelStyle}>Пароль</Form.Label>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label style={labelStyle}>Повторите пароль</Form.Label>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    required
                                />
                                {!passwordsMatch && (
                                    <Alert variant="danger" style={{ marginTop: '5px' }}>
                                        Пароли не совпадают!
                                    </Alert>
                                )}
                            </Form.Group>

                            <Form.Group controlId="formShowPassword">
                                <Form.Check
                                    type="switch"
                                    label="Показать пароль"
                                    onChange={handleTogglePassword}
                                    style={labelStyle}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!passwordsMatch} style={{marginTop: '15px'}}>
                                Зарегистрироваться
                            </Button>
                        </Form>
                    </Container>
        </>
    );
};

export default SingUp ;
