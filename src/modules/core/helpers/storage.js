import { compose, setDefaults } from 'react-komposer';
import { createStore, combineReducers } from 'redux';

const userReducer = function(state = {}, action) {
	let newState = Object.assign({}, state, {currentTokenUser: action.currentTokenUser});
	return newState;
}

const reducers = combineReducers({
	userState: userReducer
});

const store = createStore(reducers);

const composeWithStore = setDefaults({
	env: store
});

export {
	store,
	composeWithStore
};
