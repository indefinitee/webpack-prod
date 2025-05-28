import { Provider } from 'react-redux';
import { createReduxStore, type StateSchema } from 'app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { type ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
