export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserMounted,
} from './model/selectors/getUserMounted/getUserMounted';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export type {
    UserSchema,
    User,
} from './model/types/user';
