import {combineReducers} from 'redux';

// session
import { rootReducer } from 'redux-react-session';

const rootReducer = combineReducers({
    session: sessionReducer
});

export default rootReducer;
