import { takeLatest, all, call, put } from 'redux-saga/effects'
import { NewsData } from '../actions/constants'
import { GetNewsDataType } from '../actions/actionCreator'
import * as API from '../../api'
// import { get } from '../../api'

function* getPopularNews(action: GetNewsDataType): any {
    const { payload } = action

    try {
        const response = yield call(API.get, 'everything', {
            params: {
                q: payload
            }
        })

        if (response.status === 'ok') {
            yield put({ type: NewsData.SET_NEWS_DATA, payload: response.articles })
        }
    } catch (error: any) {
        const { message } = error

        if (message) {
            console.error(message)
        }
    }
    yield
}

function* watchFetchingPopularNews() {
    yield takeLatest(NewsData.GET_NEWS_DATA, getPopularNews)
}

function* NewsSaga() {
    yield all([
        watchFetchingPopularNews()
    ])
}

export default NewsSaga
