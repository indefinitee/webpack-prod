import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe(
    'getProfileError',
    () => {
        test('should return error', () => {
            const data = {
                firstname: 'иван',
                lastname: 'андреевич',
                age: 23,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Москва',
                username: 'иванов',
            };

            const state = {
                profile: {
                    data,
                    error: 'error',
                },
            };
            expect(getProfileError(state as StateSchema)).toEqual('error');
        });
    },
);
