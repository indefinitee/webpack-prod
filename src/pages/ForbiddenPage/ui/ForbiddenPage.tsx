import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ForbiddenPage"
        >
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
});
