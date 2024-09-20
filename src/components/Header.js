import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #282c34;
    padding: 20px;
    color: white;
    text-align: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const NavLink = styled(Link)`
    color: #61dafb;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
