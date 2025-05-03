import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

type Props = {}

const AboutPage: React.FC = (props: Props) => {
    const { t } = useTranslation('about');

    return (
        <Page>{t('О сайте')}</Page>
    );
};

export default AboutPage;
