import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appConfig from './appConfig';
import loading from './loading';
import params from './params';

let combinedObj = {
    appConfig,
    loading,
    params,
    routing: routerReducer
};

const rootReducer = combineReducers(combinedObj);

export default rootReducer;