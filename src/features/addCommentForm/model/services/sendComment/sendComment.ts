import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<
    Comment,
    string | undefined,
    ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (authData, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
            getState,
        } = thunkAPI;
        const state = getState();

        const userData = getUserAuthData(state);
        const text = getAddCommentFormText(state);
        const article = getArticleDetailsData(state);

        if (!userData || !text || !article) {
            return rejectWithValue(('no Data'));
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText(''));

            return response.data;
        } catch (e) {
            return rejectWithValue(('error'));
        }
    },
);
