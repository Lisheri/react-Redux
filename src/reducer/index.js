import { store } from "../store"

/* const initState = {value: '默认值'}
export const rootReducer = (state = initState, action) => {
     * dispatch 分发的哪一个action, 这边接收的就是什么样的action
    console.info(action)
    if (action.type === 'test') {
        return Object.assign({}, state, action)
    } else if(action.type === 'rinima') {
        return Object.assign({}, state, action)
    } else {
        return state
    }
} */

// * 学习使用react-redux
// * reducer 需要对逻辑进行处理
const initState = {
    count: 0
}
export const rootReducer = (state = initState, action) => {
    // return state
    if (action.type === 'action-add') {
        return {
            count: state.count + 1
        }
    } else {
        return state
    }
}