const CHANGE_DATES = 'CHANGE_DATE';
const ADD_DATA = 'ADD_DATA';

const defaultState = {
	startDate: '2019-10-01',
	endDate: '2019-10-07',
	userData: [],
};

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_DATA:
			return { ...state, userData: action.payload };

		case CHANGE_DATES:
			const { startDate, endDate } = action.payload;

			return {
				...state,
				startDate,
				endDate,
			};

		default:
			return state;
	}
};

export const addUserDataAction = payload => ({
	type: ADD_DATA,
	payload: payload,
});

export const changeDatesAction = payload => ({
	type: CHANGE_DATES,
	payload: payload,
});