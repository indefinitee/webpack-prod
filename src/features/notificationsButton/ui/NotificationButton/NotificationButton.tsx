import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notifications';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => (
    <Popover
        direction="bottom left"
        trigger={(
            <Button theme={ThemeButton.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        )}
    >
        <NotificationList className={cls.notifications} />
    </Popover>
));
