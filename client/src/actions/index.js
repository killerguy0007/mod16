import streams from '../apis/streams.js';
export const signIn = () => {
	return {
		type: 'SIGN_IN'
	};
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const createStream = (formValues) => {
	return async (dispatch) =>{
		streams.post('/streams',formValues).catch((err)=>{console.log(err)});
	}; 
};


// export const setTitle = (term) => {
// 	return {
// 		type: 'SET_TITLE',
// 		payload: term
// 	};
// };