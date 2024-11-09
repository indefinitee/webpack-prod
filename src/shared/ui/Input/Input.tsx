import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        autofocus,
        type = 'text',
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={inputRef}
            className={classNames(cls.Input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            autoFocus={autofocus}
            {...otherProps}
        />
    );
});
