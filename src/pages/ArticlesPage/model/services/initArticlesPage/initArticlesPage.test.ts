import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

const state: Partial<StateSchema> = {
    articlesPage: {
        page: 2,
        hasMore: true,
        isLoading: false,
        ids: [],
        entities: {},
        limit: 5,
        _inited: false,
    },
};

describe(
    'initArticlesPage.test',
    () => {
        test('should be called when inited false', async () => {
            const thunk = new TestAsyncThunk(initArticlesPage, state);

            await thunk.callThunk();

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

            await thunk.callThunk();

            expect(thunk.dispatch).toBeCalledTimes(2);
            expect(fetchArticlesList).not.toHaveBeenCalled();
        });
    },
);
