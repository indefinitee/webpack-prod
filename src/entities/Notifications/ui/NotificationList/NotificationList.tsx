import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames('cls.NotificationList', {}, [className])}
            >
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames('cls.NotificationList', {}, [className])}
        >
            {
                data?.map((item) => (
                    <NotificationItem key={item.id} item={item} />
                ))
            }
        </VStack>
    );
});
