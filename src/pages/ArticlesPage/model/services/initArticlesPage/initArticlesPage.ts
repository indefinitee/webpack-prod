import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelector';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;
        const state = getState();
        const inited = getArticlesPageInited(state);

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
