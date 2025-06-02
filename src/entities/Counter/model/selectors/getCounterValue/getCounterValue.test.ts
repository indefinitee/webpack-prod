import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from '../../selectors/getCounterValue/getCounterValue';

describe(
    'getCounterValue',
    () => {
        test('should return counter value ', () => {
            const state: DeepPartial<StateSchema> = {
                counter: { value: 10 },
            };
            expect(getCounterValue(state as StateSchema)).toEqual(10);
        });
    },
);
