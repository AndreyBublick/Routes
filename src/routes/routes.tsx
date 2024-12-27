import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {ReactElement} from "react";


export const PATH = {
    ADIDAS: '/ADIDAS',
    PUMA: '/PUMA',
    ABIBAS: '/ABIBAS',
    ERROR: '/404',
    DEFAULT: '/',
    MODEL: '/MODEL',
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

];