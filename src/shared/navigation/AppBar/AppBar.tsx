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
//import PersonIcon from '@material-ui/icons/PersonOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { logout } from 'features/login/store/login.action';
import genericClasses from 'App.module.css';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import { MapDispatchToProps } from './AppBar.interface';
// import { ThunkDispatch } from 'redux-thunk';
// import { Action } from 'shared/interface/interfaces';
//import * as LoginAction from 'features/login/store/login.action';
import { ILoggedInUser } from 'features/login/login.interface';

interface IProps extends RouteComponentProps {
	logout: typeof logout;
	loggedInUser: ILoggedInUser; //logged in user
}

interface IState {
	auth: boolean; //check user authenication
	anchorEl: HTMLButtonElement | null; //anchorEl from menu
	open: boolean; //hide show menu
	//userName: string; //show user name
}

class MenuAppBar extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			auth: true,
			anchorEl: null,
			open: false
			//userName: ''
		};
	}

	//update user and route according to user selected
	//tmp code()
	// updateUser = (name: string, location: string): void => {
	// 	this.setState({
	// 		userName: name
	// 	});
	// 	this.props.history.push(location);
	// };

	//select change event
	//temporary code
	// handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode): void => {
	// 	let selectedModule = event.target.value as string;
	// 	this.setState({ module: selectedModule });
	// 	this.props.setUser(selectedModule).then(res => {
	// 		switch (res) {
	// 			case '001': {
	// 				this.updateUser('Career Point Client Admin', '/user');
	// 				break;
	// 			}
	// 			case '002': {
	// 				this.updateUser('Career Point Course Admin', '/course');
	// 				break;
	// 			}
	// 			case '003': {
	// 				this.updateUser('Career Point Exam Admin', '/center');
	// 				break;
	// 			}
	// 			case '004': {
	// 				this.updateUser('Career Point Content Author', '/course');
	// 				break;
	// 			}
	// 			case '005': {
	// 				this.updateUser('Career Point Content Verifier', '/course');
	// 				break;
	// 			}
	// 			case '006': {
	// 				this.updateUser('Career Point Test Designer', '/test');
	// 				break;
	// 			}
	// 			case '007': {
	// 				this.updateUser('CBT Admin', '/partner');
	// 				break;
	// 			}
	// 			case '008': {
	// 				this.updateUser('Shree Group Admin', '/client');
	// 				break;
	// 			}
	// 			case '009': {
	// 				this.updateUser('Career Point Exam Center Admin', '/candidate');
	// 				break;
	// 			}
	// 			default: {
	// 				this.updateUser('Career Point Client Admin', '/setting');
	// 				break;
	// 			}
	// 		}
	// 	});
	// };

	render() {
		return (
			<AppBar elevation={2} color="primary">
				<Toolbar>
					<Typography variant="h5" color="inherit" className={classes.AppTitle}>
						{this.props.loggedInUser.title}
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
							{/* <FormControl className={classes.formControl}>
								<Select
									value={this.state.module}
									onChange={this.handleChange}
									classes={{
										select: classes.moduleSelectField
									}}
								>
									<MenuItem value={'007'}>Super Admin</MenuItem>
									<MenuItem value={'008'}>Partner Admin</MenuItem>
									<MenuItem value={'001'}>Client Admin</MenuItem>
									<MenuItem value={'002'}>Course Admin</MenuItem>
									<MenuItem value={'003'}>Exam Admin</MenuItem>
									<MenuItem value={'004'}>Content Author</MenuItem>
									<MenuItem value={'005'}>Content Verifier</MenuItem>
									<MenuItem value={'006'}>Test Designer</MenuItem>

									<MenuItem value={'009'}>Exam Center Admin</MenuItem>
								</Select>
							</FormControl> */}
							<IconButton aria-haspopup="true" onClick={this.handleMenu} color="inherit">
								<AccountCircleIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={this.state.anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
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
			anchorEl: event.currentTarget as HTMLButtonElement //provide anchorEl to menu
		});
	};

	/** Function  hide menu list.
	 * @returns void
	 */
	handleClose = (): void => {
		this.setState({
			open: false,
			anchorEl: null
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
		logout: () => dispatch(logout())
	};
};

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(MenuAppBar)
);
