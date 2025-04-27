import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TileIcon from 'shared/assets/icons/fe_tiled.svg';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.FULL,
        icon: ListIcon,
    },
    {
        view: ArticleView.BRIEF,
        icon: TileIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view = ArticleView.BRIEF,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames('', { [cls.selected]: viewType.view === view })}
                >
                    <Icon Svg={viewType.icon} />
                </Button>
            )) }
        </div>
    );
});
