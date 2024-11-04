import { counterReducer, counterActions, CounterSchema } from 'entities/Counter';

describe(
    'counterSlice',
    () => {
        test('increment value', () => {
            const state: CounterSchema = { value: 10 };

            expect(counterReducer(state, counterActions.incr()))
                .toEqual({ value: 11 });
        });

        test('decrement value', () => {
            const state: CounterSchema = { value: 10 };

            expect(counterReducer(state, counterActions.decr()))
                .toEqual({ value: 9 });
        });

        test('should work with empty state: decrement', () => {
            expect(counterReducer(undefined, counterActions.decr()))
                .toEqual({ value: -1 });
        });

        test('should work with empty state: increment', () => {
            expect(counterReducer(undefined, counterActions.incr()))
                .toEqual({ value: 1 });
        });
    },
);
