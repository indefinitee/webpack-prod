import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './AritlceList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BRIEF ? 9 : 3)
    .fill(0)
    .map((item, idx) => (
        <ArticleListItemSkeleton view={view} key={idx} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation('article');
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.BRIEF,
        target = '_blank',
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles?.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(view) }
        </div>
    );
});
