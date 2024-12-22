import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames('', {}, [className])}>
            {t('ArticlesPage')}
        </div>
    );
};

export default ArticlesPage;
