
import { combineReducers } from 'redux';
import reducer from './accountReducer';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer
});

export default reducers;