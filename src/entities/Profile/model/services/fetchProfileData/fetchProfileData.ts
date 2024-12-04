import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import type { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'login/fetchProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) return rejectWithValue('error');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(('error'));
        }
    },
);
