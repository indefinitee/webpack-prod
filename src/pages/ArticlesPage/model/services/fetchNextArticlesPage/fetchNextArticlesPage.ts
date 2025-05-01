import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { articlesPageActions } from '../../slices/articlePageSlice';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelector';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;
        const state = getState();
        const hasMore = getArticlesPageHasMore(state);
        const page = getArticlesPageNum(state);
        const isLoading = getArticlesPageIsLoading(state);

        if (!hasMore || isLoading) {
            return;
        }

        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({
            page: page + 1,
        }));
    },
);
