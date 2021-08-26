import { ThunkDispatch } from 'redux-thunk';
import { IAction } from 'shared/interface/interfaces';
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

export const showSuccessToast: ActionCreator<IToasterAction> = (customMsg: string, resMeg: string) => {
  return {
    type: ToasterActionTypes.SHOW_TOASTER,
    toastMessage: resMeg ? resMeg : 'Successfully ' + customMsg,
    showToaster: true,
    toastType: 'success',
  };
};

export const hideToaster = () => {
  return (dispatch: ThunkDispatch<any, any, IAction>): Promise<unknown> => {
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
