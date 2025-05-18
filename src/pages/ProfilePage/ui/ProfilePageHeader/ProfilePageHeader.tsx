import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getUserAuthData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            theme={ThemeButton.OUTLINE}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                        : (
                            <HStack gap="8">
                                <Button
                                    onClick={onSave}
                                    theme={ThemeButton.OUTLINE}
                                >
                                    {t('Сохранить')}
                                </Button>
                                <Button
                                    onClick={onCancelEdit}
                                    theme={ThemeButton.OUTLINE_RED}
                                >
                                    {t('Отменить')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
};
