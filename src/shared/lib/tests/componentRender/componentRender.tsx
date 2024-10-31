import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface componentRenderOptions {
    route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <I18nextProvider i18n={i18nForTests}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </I18nextProvider>,
    );
}
