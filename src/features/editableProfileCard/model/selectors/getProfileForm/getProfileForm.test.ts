import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe(
    'getProfileForm',
    () => {
        test('should return form', () => {
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
                },
            };
            expect(getProfileForm(state as StateSchema)).toEqual(form);
        });
    },
);
