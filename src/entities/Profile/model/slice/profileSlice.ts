import { createSlice } from '@reduxjs/toolkit';
import { Country, Currency } from 'shared/const/common';
import { ProfileSchema } from '../types/types';

const initialState: ProfileSchema = {
    data: {
        firstname: '',
        lastname: '',
        age: 0,
        currency: Currency.RUB,
        country: Country.Russia,
        city: '',
        username: '',
        avatar: '',
    },
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
