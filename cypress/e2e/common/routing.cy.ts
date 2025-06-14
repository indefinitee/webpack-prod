import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            selectByTestId('MainPage').should('exist');
        });

        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            selectByTestId('MainPage').should('exist');
        });

        it('Переход открывает несуществующий маршрут', () => {
            cy.visit('/unknownpage123321');
            selectByTestId('NotFoundPage').should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            selectByTestId('ProfilePage').should('exist');
        });

        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles');
            selectByTestId('ArticlesPage').should('exist');
        });
    });
});
