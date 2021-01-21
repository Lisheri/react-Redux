import {createStore} from 'redux';

import {rootReducer} from '../reducer/index'

// * 构建 store
export const store = createStore(rootReducer)