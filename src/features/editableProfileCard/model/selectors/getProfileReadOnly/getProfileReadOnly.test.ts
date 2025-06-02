import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe(
    'getProfileReadOnly',
    () => {
        test('should return true', () => {
            const data = {
                firstname: 'иван',
                lastname: 'андреевич',
                age: 23,
                currency: Currency.RUB,
                country: Country.Russia,
            };

            const state = {
                profile: {
                    data,
                    readonly: true,
                },
            };
            expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
        });
    },
);
