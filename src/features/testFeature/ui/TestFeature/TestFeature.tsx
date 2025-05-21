import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './TestFeature.module.scss';
import { memo } from 'react';

interface TestFeatureProps {
    className?: string;
}

export const TestFeature = memo((props: TestFeatureProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.TestFeature, {}, [className])}>
           
        </div>
    );
});