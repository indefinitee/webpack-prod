import { EntityState } from '@reduxjs/toolkit';
import type { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view?: ArticleView;
}
