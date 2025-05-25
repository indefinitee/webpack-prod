import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,

        },
        user: {
            authData: { id: '1' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard', () => {
    test('readonly should be toggled', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click((screen.getByTestId('EditableProfileCardHeader.EditBtn')));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });

    test('on press cancel btn values should not be changed', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click((screen.getByTestId('EditableProfileCardHeader.EditBtn')));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'testing user value');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'testing user value2');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('testing user value');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('testing user value2');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('should be error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('without errors should do put request', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'test user value');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
