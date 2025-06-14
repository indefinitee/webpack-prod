export function selectByTestId(id: string) {
    return cy.get(`[data-testid="${id}"]`);
}
