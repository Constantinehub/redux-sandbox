import { NewsData } from './constants'

export type GetNewsDataType = {
    type: NewsData.GET_NEWS_DATA;
    payload: string;
}

export type SetNewsDataType = {
    type: NewsData.SET_NEWS_DATA;
    payload: Array<any>;
}

export const getNewsData = (payload: string): GetNewsDataType => ({
    type: NewsData.GET_NEWS_DATA,
    payload,
})

export const setNewsData = (payload: any): SetNewsDataType => ({
    type: NewsData.SET_NEWS_DATA,
    payload
})
