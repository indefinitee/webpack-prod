import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe(
    'getProfileData',
    () => {
        test('should return object with profile data', () => {
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
                },
            };
            expect(getProfileData(state as StateSchema)).toEqual(data);
        });
    },
);
