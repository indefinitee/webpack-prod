import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {
                routeConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">{element}</div>
                        )}
                    />
                ))
            }
        </Routes>
    </Suspense>
);
