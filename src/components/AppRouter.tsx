import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router/routes';

const AppRouter = () => {
    const isAuth = true
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>}/>
                )}
                <Route path="*" element={<Navigate to='/posts'/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>}/>
                )}
                <Route path="*" element={<Navigate to='/login'/>}/>
            </Routes>
    );
};

export default AppRouter;