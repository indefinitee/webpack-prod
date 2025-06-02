import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    theme?: CardTheme
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        onClick,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </div>
    );
});
