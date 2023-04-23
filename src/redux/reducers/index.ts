import { combineReducers } from 'redux'
import NewsReducer from './newsReducer'

const rootReducer = combineReducers({
    news: NewsReducer,
})

export default rootReducer
