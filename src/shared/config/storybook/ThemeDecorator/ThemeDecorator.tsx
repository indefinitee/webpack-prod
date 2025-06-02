import { StoryFn } from '@storybook/react';
import React from 'react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);

export default ThemeDecorator;
