import { Article, ArticleDetailsSchema } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { articleDetailsReducer, articleDetailsActions } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data: Article = {
    id: '1',
    title: 'JavaScript статья',
    subtitle: 'Здесь произошло что-то',
    img: 'some image',
    views: 100,
    user: {
        id: '1',
        username: 'User',
        avatar: 'some avatar',
    },
    createdAt: '22.02.2024',
    type: [ArticleType.IT],
    blocks: [{
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: ['Текст второго уровня'],
    }],
};

describe(
    'articleDetailsSlice',
    () => {
        test('test fetchArticleById service is pending', () => {
            const state: DeepPartial<ArticleDetailsSchema> = {
                isLoading: false,
                error: undefined,
            };

            expect(articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            )).toEqual({ isLoading: true, error: undefined });
        });

        test('test fetchArticleById service is fulfilled', () => {
            const state: DeepPartial<ArticleDetailsSchema> = {
                isLoading: false,
            };

            expect(articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', ''),
            )).toEqual({
                data,
                isLoading: false,
            });
        });
    },
);
