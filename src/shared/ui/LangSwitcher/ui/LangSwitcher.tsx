import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../../Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export const LangSwitcher = memo(({ className, short = false }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
