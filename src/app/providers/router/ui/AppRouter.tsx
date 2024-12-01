import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => routeConfig.filter((route) => {
        if (!isAuth && route.authOnly) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    routes.map(({ path, element }) => (
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
};

export default memo(AppRouter);
