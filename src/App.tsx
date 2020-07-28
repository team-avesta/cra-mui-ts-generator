import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from 'features/login/containers/login';
import UserList from 'features/users/containers/usersList';
import Layout from './shared/layout/layout';
import { ILoginState } from 'features/login/login.interface';
import { IAppState } from 'store/store';
import ErrorDialog from 'shared/ui/errorDialog/errorDialog';
import Toaster from 'shared/ui/toaster/toaster';
import { IMenu } from 'shared/layout/layout.interface';
import { hideToaster } from './shared/ui/toaster/toaster.actions';
import { hideErrorDialog } from 'shared/ui/errorDialog/errorDialog.actions';
import { IToasterState } from 'shared/ui/toaster/toaster.interface';
import { IErrorDialogState } from 'shared/ui/errorDialog/errorDialog.interface';

interface IAppProps {
	loginDetails: ILoginState;
	toaster: IToasterState;
	hideToaster: typeof hideToaster;
	hideErrorDialog: typeof hideErrorDialog;
	errorDialog: IErrorDialogState;
}

class App extends React.Component<IAppProps> {
	render() {
		const redirect = null;
		return (
			<>
				{redirect}
				{this.getRoutes()}
				<Toaster
					open={this.props.toaster.showToaster}
					type={this.props.toaster.toastType}
					message={this.props.toaster.toastMessage}
					handleToasterClose={this.props.hideToaster}
				/>
				<ErrorDialog
					open={this.props.errorDialog.showDialog}
					message={this.props.errorDialog.message}
					handleErrorDialogClose={this.props.hideErrorDialog}
				/>
			</>
		);
	}

	getRoutes = (): JSX.Element => {
		let routes = this.getDefaultRoute();

		const checkUser = this.checkUserExist();
		if (checkUser) {
			routes = this.getLayoutRoute();
		}
		return routes;
	};

	//check user exist or not
	checkUserExist = (): boolean => {
		return Boolean(this.props.loginDetails.loggedInUser !== null);
	};

	getDefaultRoute = (): JSX.Element => {
		return (
			<Switch>
				<Route path="/login" exact component={Login} />
				<Redirect to="/login" />
			</Switch>
		);
	};

	getLayoutRoute = (): JSX.Element => {
		return (
			<Layout
				routes={(menu: IMenu[]) => {
					return (
						<Switch>
							<Route path="/user" exact component={UserList} />
							{menu.length > 0 ? <Redirect to={`${menu[0].state}`} /> : null}
						</Switch>
					);
				}}
			/>
		);
	};
}
const mapStateToProps = (state: IAppState) => {
	return {
		toaster: state.toaster,
		loginDetails: state.login,
		errorDialog: state.errorDialog,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		hideToaster: () => dispatch(hideToaster()), // call hide toaster function
		hideErrorDialog: () => dispatch(hideErrorDialog()), // call hide error dialog function
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
