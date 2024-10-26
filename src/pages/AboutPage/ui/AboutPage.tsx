import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {}

export const AboutPage: React.FC = (props: Props) => {
    const { t } = useTranslation('about');

    return (
        <div>{t('О сайте')}</div>
    );
};
