import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import {useState} from "react";

type Props = {}

const MainPage = (props: Props) => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная')}
        </div>
    );
};

export default MainPage;
