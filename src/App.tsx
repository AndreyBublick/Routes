import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import {PATH, routes} from "./routes/routes";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/_styles";
import {Model} from "./components/pages/Model";


function App() {

    const navLinks = routes.map((route) => <S.NavWrapper key={route.path}>
        <S.NavLinkStyle
        to={route.path}>{route.path==='PRICES' ? 'Цены для оптовиков' : route.path}
    </S.NavLinkStyle>
    </S.NavWrapper>);

    return (
       <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
            <S.Nav>

                {navLinks}


            </S.Nav>
            <S.Content>
                <Routes>
                    <Route path={PATH.DEFAULT} element={<Navigate to="/ADIDAS"/>}/>

                    {routes.map((route) => <Route key={route.path} path={route.path} element={route.element}/>)}
                    {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                   {/* <Route path={PATH.ALL} element={<Navigate to="/404"/>}/>*/}
                    <Route path={`:Brand/:idShoe`} element={<Model />}/>
                    <Route path={PATH.ALL} element={<Error404/>}/>

                </Routes>
            </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
       </div>



    );
}


export default App;


/*

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
`;*/
