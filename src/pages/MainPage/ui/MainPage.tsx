import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

type Props = {}

const MainPage = (props: Props) => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная')}
            <Counter />
        </div>
    );
};

export default MainPage;
