import { useTranslation } from 'react-i18next';

type Props = {}

export const MainPage = (props: Props) => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная')}
        </div>
    );
};
