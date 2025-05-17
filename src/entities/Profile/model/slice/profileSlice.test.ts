import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

const data = {
    firstname: 'John',
    lastname: 'Doe',
    age: 50,
    city: 'Moscow',
    username: 'johndoe',
};

describe(
    'profileSlice',
    () => {
        test(
            'test set readonly',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    readonly: false,
                };
                expect(profileReducer(
                    state as ProfileSchema,
                    profileActions.setReadOnly(true),
                )).toEqual({ readonly: true });
            },
        );

        test(
            'test cancelEdit',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    readonly: false,
                    validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
                    form: { ...data, username: 'baobab' },
                    data,
                };
                expect(profileReducer(
                    state as ProfileSchema,
                    profileActions.cancelEdit(),
                )).toEqual({
                    readonly: true, validateErrors: undefined, form: data, data,
                });
            },
        );

        test(
            'test updateProfile',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    form: { username: '123' },
                };
                expect(profileReducer(
                    state as ProfileSchema,
                    profileActions.updateProfile({ username: 'hello' }),
                )).toEqual({ form: { username: 'hello' } });
            },
        );

        test(
            'test update profile service pending',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    isLoading: false,
                    validateErrors: [ValidateProfileError.SERVER_ERROR],
                };
                expect(profileReducer(
                    state as ProfileSchema,
                    updateProfileData.pending,
                )).toEqual({ isLoading: true, validateErrors: undefined });
            },
        );

        test(
            'test update profile service fulfilled',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    isLoading: true,
                };
                expect(profileReducer(
                    state as ProfileSchema,
                    updateProfileData.fulfilled(data, ''),
                )).toEqual({
                    isLoading: false,
                    validateErrors: undefined,
                    readonly: true,
                    form: data,
                    data,
                });
            },
        );
    },
);
