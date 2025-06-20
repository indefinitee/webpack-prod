import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    if (!comments) {
        return null;
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            isLoading={isLoading}
                            key={comment.id}
                            comment={comment}
                        />
                    ))
                    : <Text text={t('Комментариев нет')} />
            }
        </VStack>
    );
});
