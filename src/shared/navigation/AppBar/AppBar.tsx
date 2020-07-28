/**
 * Summary : AppBar Component
 *
 * Description.
 *
 * @file   AppBar.tsx
 * @author Ashish.
 * @since  24/9/2019
 */
import React from 'react';
import classes from './AppBar.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { logout } from 'features/login/store/login.action';
import genericClasses from 'App.module.css';
import { ILoggedInUser } from 'features/login/interface/login.interface';

interface IProps extends RouteComponentProps {
	logout: typeof logout;
	loggedInUser: ILoggedInUser; //logged in user
}

interface IState {
	auth: boolean; //check user authenication
	anchorEl: HTMLButtonElement | null; //anchorEl from menu
	open: boolean; //hide show menu
}

class MenuAppBar extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			auth: true,
			anchorEl: null,
			open: false,
			//userName: ''
		};
	}

	render() {
		return (
			<AppBar elevation={2} color="primary">
				<Toolbar>
					<Typography variant="h5" color="inherit" className={classes.AppTitle}>
						HSC Admin Portal
					</Typography>
					{this.state.auth && (
						<Grid container direction="row" justify="flex-end" alignItems="center">
							<Typography
								variant="body2"
								color="inherit"
								style={{ marginRight: 8 }}
								className={classes.WelcomeText}
							>
								Welcome,&nbsp;{this.props.loggedInUser.name}
							</Typography>

							<IconButton aria-haspopup="true" onClick={this.handleMenu} color="inherit">
								<AccountCircleIcon color="secondary" />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={this.state.anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={this.state.open}
								onClose={this.handleClose}
							>
								<MenuItem onClick={this.onLogout}>
									<ExitToAppIcon fontSize="small" className={genericClasses.Mr16} />
									<Typography variant="body2" color="inherit">
										Logout
									</Typography>
								</MenuItem>
							</Menu>
						</Grid>
					)}
				</Toolbar>
			</AppBar>
		);
	}

	/** Function  show menu list.
	 * @param {event} //mouse event
	 * @returns void
	 */
	handleMenu = (event: React.MouseEvent<{}>) => {
		this.setState({
			open: true, //show menu open
			anchorEl: event.currentTarget as HTMLButtonElement, //provide anchorEl to menu
		});
	};

	/** Function  hide menu list.
	 * @returns void
	 */
	handleClose = (): void => {
		this.setState({
			open: false,
			anchorEl: null,
		});
	};

	onLogout = async (): Promise<void> => {
		this.props.history.push('/login');
		//above line written upper than( this.props.logout())  because on clearing user detail from redux app.txs render again, that time unmount return ur old route.
		//that's why redux data not cleared.
		await this.props.logout();
	};
}

// props or methods which will be pass to action
// MapDispatchToProps types are basically an object of function which return promise.
const mapDispatchToProps = (dispatch: any) => {
	return {
		logout: () => dispatch(logout()),
	};
};

export default withRouter(connect(null, mapDispatchToProps)(MenuAppBar));
