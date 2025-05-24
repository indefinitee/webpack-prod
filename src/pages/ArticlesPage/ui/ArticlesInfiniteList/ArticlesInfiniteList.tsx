import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticlesInfiniteListProps {
    className?: string;
}

export const ArticlesInfiniteList = memo(({ className }: ArticlesInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                text={t('Произошла ошибка')}
            />
        );
    }

    return (
        <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
        />
    );
});
