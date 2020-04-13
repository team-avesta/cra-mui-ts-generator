import { Action } from 'shared/interface/interfaces';

export interface IToasterState {
	showToaster: boolean;
	toastMessage: string | null;
	toastType: string | null;
}

export interface IToasterAction extends Action, IToasterState {}
