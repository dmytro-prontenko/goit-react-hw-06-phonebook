import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers } from 'redux';
import { phoneBookReducer } from './phoneBookReducer';
// import { rootReducer } from "./reducer";


const enhancer = devToolsEnhancer();

export const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

export const store = createStore(rootReducer, enhancer);
