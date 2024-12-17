import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {routes.map((route) => <NavLink to={route.path}>{route.path}</NavLink>)}
                </div>
                <div className={styles.content}>
                    <Routes>
                        {routes.map((route) => <Route path={route.path} element={route.element} />)}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
