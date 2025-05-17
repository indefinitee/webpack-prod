import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe(
    'loginSlice.test',
    () => {
        test('test set username', () => {
            const state: DeepPartial<LoginSchema> = { username: 'admin' };

            expect(loginReducer(
                state as LoginSchema,
                loginActions.setUsername('admin'),
            )).toEqual({ username: 'admin' });
        });

        test('set password', () => {
            const state: DeepPartial<LoginSchema> = { password: '1234' };

            expect(loginReducer(
                state as LoginSchema,
                loginActions.setPassword('1234'),
            )).toEqual({ password: '1234' });
        });
    },
);
