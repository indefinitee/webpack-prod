import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const userAuthMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {userAuthMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
