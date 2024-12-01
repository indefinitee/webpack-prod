import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryList = [
    { value: Country.Russia, content: 'Russia' },
    { value: Country.Belarus, content: 'Belarus' },
    { value: Country.Ukraine, content: 'Ukraine' },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly = false,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            className={classNames(cls.CountrySelect, {}, [className])}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            options={countryList}
        />
    );
});
