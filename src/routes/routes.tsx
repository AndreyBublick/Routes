import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {ReactElement} from "react";
import {Prices} from "../components/pages/Prices";


export const PATH = {
    ADIDAS: 'ADIDAS',
    PUMA: 'PUMA',
    ABIBAS: 'ABIBAS',
    ERROR: '404',
    DEFAULT: '/',
    MODEL: 'MODEL',
    PRICES: 'PRICES',
    ALL:'*',
} as const;

export type PathType = typeof PATH;

export type RouteType = {
    path: PathType[keyof PathType];
    element: ReactElement;
};

export const routes: RouteType[] = [

    {path: PATH.ADIDAS, element: <Adidas/>},
    {path: PATH.PUMA, element: <Puma/>},
    {path: PATH.ABIBAS, element: <Abibas/>},
    {path:PATH.PRICES,element:<Prices />}

];