import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tweetsReducer } from './ducks/tweets';

const store = createStore(
    combineReducers({
        tweets: tweetsReducer
    }),
    applyMiddleware(thunk)
);

export default store;