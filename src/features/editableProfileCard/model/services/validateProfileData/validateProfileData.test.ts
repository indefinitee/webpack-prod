import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
    firstname: 'иван',
    lastname: 'андреевич',
    age: 23,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Москва',
    username: 'иванов',
};

describe(
    'validateProfileData.test',
    () => {
        test('should return empty error', async () => {
            const result = validateProfileData(data);
            expect(result).toEqual([]);
        });

        test('without first and last name', async () => {
            const result = validateProfileData({ ...data, firstname: '', lastname: '' });
            expect(result).toEqual([
                ValidateProfileError.INCORRECT_USER_DATA,
            ]);
        });

        test('incorrect age', async () => {
            const result = validateProfileData({ ...data, age: undefined });

            expect(result).toEqual([
                ValidateProfileError.INCORRECT_USER_AGE,
            ]);
        });

        test('incorrect country', async () => {
            const result = validateProfileData({ ...data, country: undefined });

            expect(result).toEqual([
                ValidateProfileError.INCORRECT_USER_COUNTRY,
            ]);
        });

        test('incorrect all', async () => {
            const result = validateProfileData({});

            expect(result).toEqual([
                ValidateProfileError.INCORRECT_USER_DATA,
                ValidateProfileError.INCORRECT_USER_AGE,
                ValidateProfileError.INCORRECT_USER_COUNTRY,
            ]);
        });
    },
);
