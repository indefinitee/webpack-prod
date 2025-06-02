import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select/Select';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

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
        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите страну')}
            className={classNames('CountrySelect', {}, [className])}
            label={t(t('Укажите страну'))}
            readonly={readonly}
            items={countryList}
            direction="top right"
        />
    );
});
