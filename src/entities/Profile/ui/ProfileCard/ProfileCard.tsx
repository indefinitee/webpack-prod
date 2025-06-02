import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/country';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void,
    onChangeCountry?: (value: Country) => void,

    'data-testid'?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error = '',
        readonly = false,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        isLoading = false,
        'data-testid': dataTestId = '',
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

    const mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {
                data?.avatar
                    && (
                        <HStack justify="center" max className={cls.avatarWrapper}>
                            <Avatar
                                src={data?.avatar}
                                alt="Аватар"
                            />
                        </HStack>
                    )
            }
            <label className={cls.inputWrapper}>
                <Text
                    text={t('Имя')}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Имя')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    data-testid="ProfileCard.firstname"
                />
            </label>
            <label className={cls.inputWrapper}>
                <Text
                    text={t('Фамилия')}
                />
                <Input
                    value={data?.firstname}
                    placeholder={t('Фамилия')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    data-testid="ProfileCard.lastname"
                />
            </label>
            <label className={cls.inputWrapper}>
                <Text
                    text={t('Возраст')}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    data-testid="ProfileCard.age"
                />
            </label>
            <label className={cls.inputWrapper}>
                <Text
                    text={t('Город')}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                    data-testid="ProfileCard.city"
                />
            </label>
            <label className={cls.inputWrapper}>
                <Text
                    text={t('Имя пользователя')}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    data-testid="ProfileCard.username"
                />
            </label>
            <label className={cls.inputWrapper}>
                <Text
                    text={t('Ссылка на аватар')}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    data-testid="ProfileCard.avatar"
                />
            </label>
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
