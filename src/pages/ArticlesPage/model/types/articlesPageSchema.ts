import { EntityState } from '@reduxjs/toolkit';
import type { Article, ArticleView } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;

    // pagination
    limit?: number;
    page: number;
    hasMore: boolean;

    // filters
    view?: ArticleView;
    order?: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
