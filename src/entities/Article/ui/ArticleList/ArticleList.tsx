import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PAGE_ID } from '@/widgets/Page';
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
    virtualized?: boolean;
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
        virtualized = true,
    } = props;

    const isBig = view === ArticleView.FULL;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[index]}
                    view={view}
                    target={target}
                    key={`idx${i}`}
                    className={cls.card}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(`${PAGE_ID}`) as Element}
        >
            {({
                height,
                width,
                registerChild,
                scrollTop,
                onChildScroll,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {
                        virtualized
                            ? (
                                <List
                                    height={height ?? 700}
                                    rowCount={rowCount}
                                    rowHeight={isBig ? 700 : 300}
                                    rowRenderer={rowRenderer}
                                    width={width ? width - 80 : 700}
                                    onScroll={onChildScroll}
                                    scrollTop={scrollTop}
                                    autoHeight
                                />
                            )
                            : (
                                articles.map((item) => (
                                    <ArticleListItem
                                        article={item}
                                        view={view}
                                        target={target}
                                        key={item.id}
                                        className={cls.card}
                                    />
                                ))
                            )
                    }
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
