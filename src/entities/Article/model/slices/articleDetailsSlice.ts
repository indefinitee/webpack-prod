import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import type { Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsSchema = {
    data: {
        id: '',
        title: '',
        subtitle: '',
        img: '',
        views: 0,
        user: {
            id: '',
            username: '',
            avatar: '',
        },
        createdAt: '',
        type: [],
        blocks: [],
    },
    isLoading: false,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
