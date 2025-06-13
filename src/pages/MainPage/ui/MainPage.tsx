import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

type Props = {}

const MainPage = (props: Props) => (
    <Page data-testid="MainPage">
        <RatingCard
            title="Как вам статья?"
            feedbackTitle="Оставьте отзыв о статье"
            hasFeedback
        />
    </Page>
);

export default MainPage;
