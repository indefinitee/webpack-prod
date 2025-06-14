import {USER_LOCALSTORAGE_KEY} from "@/shared/const/localStorage";

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: "asdasd" },
        body: {
            id: "1",
            firstname: "Galaev",
            lastname: "Deni",
            age: 22,
            currency: "RUB",
            country: "Russia",
            city: "Moscow",
            username: "admin",
            avatar: "https://images.unsplash.com/photo-1658591637535-46dba8f4bdf9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    })
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
