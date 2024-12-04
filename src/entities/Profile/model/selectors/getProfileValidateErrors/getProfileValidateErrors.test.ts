import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe(
    'getProfileValidateErrors',
    () => {
        test('should return array', () => {
            const data = {
                firstname: 'иван',
                lastname: 'андреевич',
                age: 23,
                currency: Currency.RUB,
                country: Country.Russia,
            };
            const validateErrors = ['Неизвестная ошибка'];

            const state = {
                profile: {
                    data,
                    readonly: true,
                    validateErrors,
                },
            };
            expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
        });

        test('should work with empty state', () => {
            const state = {};
            expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
        });
    },
);
