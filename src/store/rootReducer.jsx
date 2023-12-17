import { combineReducers } from "redux"
import auth from './auth/authSlice'





const rootReducer = (asyncReducers) => (state, action) => {
    const combineReducer = combineReducers({
        auth,
        ...asyncReducers
    })

    return combineReducer(state, action)
}

export default rootReducer