import {PageOne} from "../components/pages/PageOne";
import {PageTwo} from "../components/pages/PageTwo";
import {PageThree} from "../components/pages/PageThree";
import {ReactElement} from "react";
import {Error404} from "../components/pages/Error404";


export type Paths = '/'|'/ADIDAS'|'/PUMA'|'/ABIBAS'|'*';

export type RouteType = {
    path: Paths;
    element: ReactElement;
};

export const routes:RouteType[] = [
    {path:'/',element:<PageOne />},
    {path:'/ADIDAS',element:<PageOne />},
    {path:'/PUMA',element:<PageTwo />},
    {path:'/ABIBAS',element:<PageThree />},
    {path:'*',element:<Error404 />},


];