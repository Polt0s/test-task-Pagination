import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import apiRepositoryReducer from './apiRepositoryReducer.js';

const rootReducer = combineReducers({
  repository: apiRepositoryReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
