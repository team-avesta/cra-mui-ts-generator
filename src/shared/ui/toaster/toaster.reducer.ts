/**
 * Summary : Toaster Reducers
 *
 * Description.
 *
 * @file   toaster.reducer.ts
 * @author Ashish.
 * @since  30/9/2019
 */
import { updateObject } from 'shared/utility';
import * as actionType from 'shared/actionTypes';
import { IToasterState, IToasterAction } from './toaster.interface';

const initialState: IToasterState = {
	showToaster: false,
	toastMessage: null,
	toastType: null
};

/** Function represents toaster reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */

const reducer = (state: IToasterState = initialState, action: IToasterAction): IToasterState => {
	switch (action.type) {
		case actionType.SHOW_TOASTER:
			return handleToaster(state, action);
		case actionType.HIDE_TOASTER:
			return handleToaster(state, action);
		default:
			return state;
	}
};

/** Function update toaster state in store's
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
const handleToaster = (state: IToasterState, action: IToasterAction): IToasterState => {
	return updateObject<IToasterState, IToasterState>(state, {
		showToaster: action.showToaster,
		toastMessage: action.toastMessage,
		toastType: action.toastType
	});
};

export default reducer;
