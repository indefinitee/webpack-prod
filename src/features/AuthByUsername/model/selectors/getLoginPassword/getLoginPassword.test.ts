import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe(
    'getLoginPassword.test',
    () => {
        test('should return qwerty123', () => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    password: 'qwerty123',
                },
            };

            expect(getLoginPassword(state as StateSchema)).toEqual('qwerty123');
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};

            expect(getLoginPassword(state as StateSchema)).toEqual('');
        });
    },
);
