import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation('counter');
    const counterValue = useSelector(getCounterValue);

    const incr = () => {
        dispatch(counterActions.incr());
    };

    const decr = () => {
        dispatch(counterActions.decr());
    };

    return (
        <div data-testid="counter">
            <Button
                data-testid="increment-btn"
                onClick={incr}
            >
                {t('incr')}
            </Button>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="decrement-btn"
                onClick={decr}
            >
                {t('decr')}
            </Button>
        </div>
    );
};
