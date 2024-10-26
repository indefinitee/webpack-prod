import { StoryFn } from '@storybook/react';
import React from 'react';
import { Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);

export default ThemeDecorator;
