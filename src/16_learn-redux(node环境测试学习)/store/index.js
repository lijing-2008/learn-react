const {createStore} = require("redux")
const reducer = require("./reducer")
//createStore
const store = createStore(reducer)

// export default store
module.exports = store


/**
 * redux代码优化的点：
 * 1.将派发的action生成过程放到一个actionCreators函数中
 * 2.将定义的所有actionCreators函数放到一个独立的文件中：actionCreators.js
 * 3.actionCreators和reducer函数中使用的字符串常量是一致的，将他们抽取到独立的constants.js文件中
 * 4.将reducer和默认值initialState放到一个独立的reducer.js文件中，而不是在index.js中
 */
