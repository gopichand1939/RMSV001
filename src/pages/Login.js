import React, { useState } from 'react';
import axios from '../api/api';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

const Form = styled.form`
    background-color: #f7f7f7;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #61dafb;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #21a1f1;
    }
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post(
                '/users/login',
                { email, password },
                config
            );

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={loginHandler}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </Form>
        </FormContainer>
    );
};

export default Login;
