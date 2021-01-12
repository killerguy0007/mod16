import {combineReducers} from 'redux';
import authReducer from './authReducer';
//import titleReducer from './titleReducer';
import {reducer } from 'redux-form';

//it is necessary to use the key name form when using redux form;
export default combineReducers({
	auth: authReducer,
	form: reducer
	//titleReducer: titleReducer
});