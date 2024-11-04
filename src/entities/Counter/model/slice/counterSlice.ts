import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        incr: (state) => {
            state.value += 1;
        },
        decr: (state) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
