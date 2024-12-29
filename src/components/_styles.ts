import styled from "styled-components";
import {NavLink} from "react-router-dom";

/*const NavLinkStyle = css`
    text-decoration: none;
    color: #282c34;
`;*/
/*const ActiveNavLink = `
    color: #7fb8f1;
    text-decoration: underline;

`;*/


const Header = styled.header`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`;

const Body = styled.div`
    display: flex;
`;

const Nav = styled.nav`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;

`;

const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    
    color: #282c34;
    &.active{///don't touch
        color: #7fb8f1;
        text-decoration: underline; 
    }
`;


const Content = styled.div`
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`;

const Footer = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`
const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
`;
const ImagesWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    img {
        width: 350px;
        height: 350px;
    }
`;


export const S = {
    Header, Body, Nav, NavLinkStyle, Content, Footer, NavWrapper,ImagesWrapper,
};