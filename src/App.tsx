import React from 'react';

import {Route, Routes} from "react-router-dom";
import {navLinksRoutes, PATH, routes} from "./routes/routes";
import {S} from "./components/_styles";
import {Model} from "./components/pages/Model";


function App() {

    const navLinks = navLinksRoutes.map((route) => <S.NavWrapper key={route.path}>
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


                    {routes.map((route) => <Route key={route.path} path={route.path} element={route.element}/>)}

                    <Route path={PATH.MODEL_MASK} element={<Model />}/>

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
