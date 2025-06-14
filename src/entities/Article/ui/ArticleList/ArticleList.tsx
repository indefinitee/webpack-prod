import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './AritlceList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BRIEF ? 9 : 3)
    .fill(0)
    .map((_, idx) => (
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

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div
            data-testid="ArticleList"
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {
                articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={cls.card}
                    />
                ))

            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
