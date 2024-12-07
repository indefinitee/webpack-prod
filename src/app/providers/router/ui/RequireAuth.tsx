import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { ReactElement } from 'react';

interface RequireAuthProps {
    children: ReactElement,
    redirectTo?: string
}

export function RequireAuth(props: RequireAuthProps): ReactElement {
    const {
        children,
        redirectTo = RoutePath.main,
    } = props;

    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate
                to={redirectTo}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
