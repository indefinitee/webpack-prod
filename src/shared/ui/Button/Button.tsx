import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    rounded?: boolean;
    size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        rounded,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square,
        [cls.rounded]: rounded,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
