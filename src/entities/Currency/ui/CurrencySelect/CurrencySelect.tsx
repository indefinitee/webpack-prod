import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: 'RUB' },
    { value: Currency.USD, content: 'USD' },
    { value: Currency.EUR, content: 'EUR' },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly = false,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <Select
            className={classNames('CurrencySelect', {}, [className])}
            label={t('Укажите валюту')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />
    );
});
