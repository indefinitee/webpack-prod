import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('articleDetails selector', () => {
    test('should return article data', () => {
        const data = {
            id: '1',
            title: 'test',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
});
