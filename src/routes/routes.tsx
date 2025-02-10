import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import React, {ReactElement} from "react";
import {Prices} from "../components/pages/Prices";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {Navigate} from "react-router-dom";
import {Login} from "../components/pages/Login";
import {Error404} from "../components/pages/Error404";


export const PATH = {
    ADIDAS: 'ADIDAS',
    PUMA: 'PUMA',
    ABIBAS: 'ABIBAS',
    ERROR: '404',
    DEFAULT: '/',
    MODEL: 'MODEL',
    PRICES: 'PRICES',
    PROTECTED: 'PROTECTED',
    LOGIN: 'LOGIN',
    MODEL_MASK:  ':Brand/:idShoe',
    ALL:'*',
} as const;

export type PathType = typeof PATH;

export type RouteType = {
    path: PathType[keyof PathType];
    element: ReactElement;
};

const privateRoutes:RouteType[] = [
    {path:PATH.PROTECTED,element: <ProtectedPage />},
];

const privateAuthRoutes:RouteType[] = privateRoutes.map(par=>({...par,element:<ProtectedRoute>{par.element}</ProtectedRoute>}));




export const navLinksRoutes:RouteType[] = [
    {path: PATH.ADIDAS, element: <Adidas/>},
    {path: PATH.PUMA, element: <Puma/>},
    {path: PATH.ABIBAS, element: <Abibas/>},

    {path:PATH.PRICES,element:<Prices />},
    ...privateAuthRoutes,
];


const publickRoutes:RouteType[] = [
    ...navLinksRoutes,
    {path: PATH.DEFAULT, element: <Navigate to="/ADIDAS"/>},
    {path: PATH.LOGIN, element: <Login />},
    {path: PATH.ERROR, element: <Error404/>},
    {path: PATH.ALL, element: <Navigate to="/404"/>},
    {path: PATH.ALL, element: <Error404/>},
];

export const routes: RouteType[] = [

    ...publickRoutes,
    ...privateAuthRoutes,

];
