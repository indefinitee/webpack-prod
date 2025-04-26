import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, onClick = () => {}, ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Card, {}, [className])} onClick={onClick} {...otherProps}>
            {children}
        </div>
    );
});
