import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
