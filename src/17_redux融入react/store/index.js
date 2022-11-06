import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

import counterReducer from "./counter"
import bannerReducer from "./banners"

const reducer = combineReducers({
	counter: counterReducer,
	banner: bannerReducer
})

//默认情况下dispatch(object)，只能派发对象,使用react-thunk来增加，可以派发函数
// const store = createStore(reducer)

//redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
