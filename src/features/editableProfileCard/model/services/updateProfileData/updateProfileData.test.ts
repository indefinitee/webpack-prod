import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { updateProfileData } from './updateProfileData';

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
    'updateProfileData.test',
    () => {
        test('should return empty error', async () => {
            const thunk = new TestAsyncThunk(updateProfileData, {
                profile: {
                    form: data,
                },
            });

            thunk.api.put.mockReturnValue(Promise.resolve({ data }));

            const result = await thunk.callThunk();

            expect(thunk.api.put).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('fulfilled');
            expect(result.payload).toEqual(data);
        });

        test('error', async () => {
            const thunk = new TestAsyncThunk(updateProfileData, {
                profile: {
                    form: data,
                },
            });
            thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

            const result = await thunk.callThunk();

            expect(result.meta.requestStatus).toBe('rejected');
            expect(result.payload).toEqual([
                ValidateProfileError.SERVER_ERROR,
            ]);
        });

        test('validate error', async () => {
            const thunk = new TestAsyncThunk(updateProfileData, {
                profile: {
                    form: { ...data, lastname: '' },
                },
            });
            const result = await thunk.callThunk();

            expect(result.meta.requestStatus).toBe('rejected');
            expect(result.payload).toEqual([
                ValidateProfileError.INCORRECT_USER_DATA,
            ]);
        });
    },
);
