import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

const state: Partial<StateSchema> = {
    articlesPage: {
        page: 2,
        hasMore: true,
        isLoading: false,
        ids: [],
        sort: ArticleSortField.CREATED,
        search: '',
        entities: {},
        limit: 5,
        type: ArticleType.ALL,
        _inited: false,
    },
};

describe(
    'initArticlesPage.test',
    () => {
        test('should be called when inited false', async () => {
            const thunk = new TestAsyncThunk(initArticlesPage, state);

            await thunk.callThunk(new URLSearchParams());

            expect(thunk.dispatch).toBeCalledTimes(4);
            expect(fetchArticlesList).toHaveBeenCalled();
        });

        test('should not be called when inited true', async () => {
            const { articlesPage } = state;
            const thunk = new TestAsyncThunk(initArticlesPage, {
                ...state,
                articlesPage: {
                    ...articlesPage,
                    _inited: true,
                },
            });

            await thunk.callThunk(new URLSearchParams());

            expect(thunk.dispatch).toBeCalledTimes(2);
            expect(fetchArticlesList).not.toHaveBeenCalled();
        });
    },
);
