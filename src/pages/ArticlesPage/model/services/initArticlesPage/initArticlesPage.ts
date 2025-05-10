import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelector';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

const paramToAction = {
    order: (v: string) => articlesPageActions.setOrder(v as SortOrder),
    search: (v: string) => articlesPageActions.setSearch(v),
    sort: (v: string) => articlesPageActions.setSort(v as ArticleSortField),
    type: (v: string) => articlesPageActions.setType(v as ArticleType),
} as const;

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;
        const state = getState();
        const inited = getArticlesPageInited(state);

        if (!inited) {
            Object.entries(paramToAction).forEach(([key, action]) => {
                const value = searchParams.get(key);

                if (value) {
                    dispatch(action(value));
                }
            });

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({ replace: true }));
        }
    },
);
