import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { type Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack data-testid="CommentCard.isLoading" gap="8" max className={classNames(cls.CommentCard, { [cls.loading]: isLoading }, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton className={cls.username} width={100} height={16} />
                </div>
                <Skeleton className={cls.text} width="100%" height={60} />
            </VStack>
        );
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCard, { }, [className])}
        >
            <AppLink to={getRouteProfile(comment!.user!.id)} className={cls.header}>
                {comment?.user?.avatar && <Avatar src={comment?.user?.avatar} size={30} />}
                <Text className={cls.username} title={comment?.user?.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
