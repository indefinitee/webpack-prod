import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <label className={cls.label}>
                {t('Логин')}
                <Input
                    autofocus
                />
            </label>
            <label className={cls.label}>
                {t('Пароль')}
                <Input />
            </label>
            <Button
                rounded
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.inputBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
