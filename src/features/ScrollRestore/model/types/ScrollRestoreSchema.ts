// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export interface ScrollRestoreSchema {
    scroll: ScrollSchema;
}
