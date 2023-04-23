import { NewsData } from '../actions/constants'

const initialState = {
    popularNews: []
}

const News = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case NewsData.SET_NEWS_DATA:
            return {
                ...state,
                popularNews: payload,
            }
        default:
            return state
    }
}

export default News

