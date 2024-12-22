import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import {
    Article, ArticleBlockType, ArticleType,
} from '../../types/article';

const data: Article = {
    id: '1',
    title: 'JavaScript статья',
    subtitle: 'Здесь произошло что-то',
    img: 'some image',
    views: 100,
    createdAt: '22.02.2024',
    type: [ArticleType.IT],
    blocks: [{
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: ['Текст второго уровня'],
    }],
};

describe('fetchArticleById', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
