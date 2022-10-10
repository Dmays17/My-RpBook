import {configureStore, applyMiddleware, compse} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import {sessionService} from 'redux-react-session';

const initialState = {};
const middlewares = [thunk];

const store = configureStore(rootReducer, initialState, compse (applyMiddleware(...middlewares)));

sessionService.initSessionService(store);

export default store;
