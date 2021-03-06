/**
 * Summary : Toaster Action
 *
 * Description.
 *
 * @file   toaster.action.ts
 * @author Ashish.
 * @since  30/9/2019
 */

import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'shared/interface/interfaces';
import { IToasterAction, ToasterActionTypes } from './toaster.interface';
import { ActionCreator } from 'redux';

export const showFailureToast: ActionCreator<IToasterAction> = (res: any) => {
	return {
		type: ToasterActionTypes.SHOW_TOASTER,
		toastMessage: res.message ? res.message : res,
		showToaster: true,
		toastType: 'error',
	};
};

// show toaster when response success is true , customMsg (custom message) is given by developer, resMeg (respose message) is given by api response
export const showSuccessToast: ActionCreator<IToasterAction> = (customMsg: string, resMeg: string) => {
	return {
		type: ToasterActionTypes.SHOW_TOASTER,
		toastMessage: resMeg ? resMeg : 'Successfully ' + customMsg,
		showToaster: true,
		toastType: 'success',
	};
};

export const hideToaster = () => {
	return (dispatch: ThunkDispatch<{}, {}, Action>): Promise<unknown> => {
		return new Promise(function (resolve) {
			dispatch<IToasterAction>({
				type: ToasterActionTypes.HIDE_TOASTER,
				toastMessage: null,
				showToaster: false,
				toastType: null,
			});
			resolve(true);
		});
	};
};
