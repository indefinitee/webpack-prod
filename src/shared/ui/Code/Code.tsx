import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ThemeButton } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={cls.copyBtn}>
                <CopyIcon className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
