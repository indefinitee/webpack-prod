import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './getLoginUsername';

describe(
    'getLoginUsername.test',
    () => {
        test('should return user1234', () => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    username: 'user1234',
                },
            };

            expect(getLoginUsername(state as StateSchema)).toEqual('user1234');
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};

            expect(getLoginUsername(state as StateSchema)).toEqual('');
        });
    },
);
