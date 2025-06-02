import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe(
    'getProfileIsLoading',
    () => {
        test('should return isLoading = true', () => {
            const form = {
                firstname: 'иван',
                lastname: 'андреевич',
                age: 23,
                currency: Currency.RUB,
                country: Country.Russia,
            };

            const state = {
                profile: {
                    form,
                    isLoading: true,
                },
            };
            expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
        });
    },
);
