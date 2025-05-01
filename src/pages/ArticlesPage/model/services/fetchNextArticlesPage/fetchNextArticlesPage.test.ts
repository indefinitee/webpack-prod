import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
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
    },
};

describe(
    'fetchNextArticlesPage.test',
    () => {
        test('success fetch', async () => {
            const thunk = new TestAsyncThunk(fetchNextArticlesPage, state);

            await thunk.callThunk();

            expect(thunk.dispatch).toBeCalledTimes(4);
            expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
        });

        test('fetchArticlesList not called', async () => {
            const { articlesPage } = state;
            const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
                articlesPage: {
                    ...articlesPage,
                    hasMore: false,
                },
            });

            await thunk.callThunk();

            expect(thunk.dispatch).toBeCalledTimes(2);
            expect(fetchArticlesList).not.toHaveBeenCalled();
        });

        test('fetchArticlesList not called', async () => {
            const { articlesPage } = state;
            const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
                articlesPage: {
                    ...articlesPage,
                    isLoading: true,
                },
            });

            await thunk.callThunk();

            expect(thunk.dispatch).toBeCalledTimes(2);
            expect(fetchArticlesList).not.toHaveBeenCalled();
        });
    },
);
