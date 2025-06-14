import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage";
import {User} from "@/entities/User";

export const login = (username: string = 'admin', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({body}) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
}

export const getByTestId = (id: string) => {
    return cy.get(`[data-testid="${id}"]`);
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>
            getByTestId(id: string): Chainable<JQuery<HTMLElement>>
        }
    }
}