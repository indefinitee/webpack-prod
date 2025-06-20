import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

type AboutPageProps = {}

const AboutPage: React.FC = (props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">{t('О сайте')}</Page>
    );
};

export default AboutPage;
