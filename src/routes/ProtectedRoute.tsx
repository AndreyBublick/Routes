import {type FC, type ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {PATH} from "./routes";

type Props = {
    children: ReactNode;
};
export const ProtectedRoute:FC<Props> = ({children}) => {

    const isOpen = true;

    return <>
        {isOpen ? children  : <Navigate to={`/${PATH.LOGIN}`} /> }
        </>

};