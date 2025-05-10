import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'testValue',
        });

        expect(params).toBe('?test=testValue');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'testValue',
            second: '2',
            third: '3',
        });

        expect(params).toBe('?test=testValue&second=2&third=3');
    });

    test('test with undefined value should be removed', () => {
        const params = getQueryParams({
            test: 'testValue',
            second: undefined,
        });

        expect(params).toBe('?test=testValue');
    });
});
