import React, { Component } from 'react';
import classes from './AppBar.module.css';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import * as loginAction from 'features/login/store/actions';

class MenuAppBar extends Component {
	state = {
		auth: true,
		anchorEl: null,
		translations: 'en',
		module: '001',
		userName: 'Career Point Client Admin'
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleTranslation = (event, translation) => {
		this.props.changeLanguage(translation);
		this.setState({ translations: translation });
	};

	// handleChange = event => {
	// 	this.setState({ [event.target.name]: event.target.value });
	// 	this.props.setUser(event.target.value)
	// 		.then(res => {
	// 			switch (res) {
	// 				case '001': {
	// 					this.setState({
	// 						userName: 'Career Point Client Admin'
	// 					})
	// 					this.props.history.push('/user');
	// 					break;
	// 				}
	// 				case '002': {
	// 					this.setState({
	// 						userName: 'Career Point Course Admin'
	// 					})
	// 					this.props.history.push('/course');
	// 					break;
	// 				}
	// 				case '003': {
	// 					this.setState({
	// 						userName: 'Career Point Exam Admin'
	// 					})
	// 					this.props.history.push('/examCenter');
	// 					break;
	// 				}
	// 				case '004': {
	// 					this.setState({
	// 						userName: 'Career Point Content Author'
	// 					})
	// 					this.props.history.push('/course');
	// 					break;
	// 				}
	// 				case '005': {
	// 					this.setState({
	// 						userName: 'Career Point Content Verifier'
	// 					})
	// 					this.props.history.push('/course');
	// 					break;
	// 				}
	// 				case '006': {
	// 					this.setState({
	// 						userName: 'Career Point Test Designer'
	// 					})
	// 					this.props.history.push('/test');
	// 					break;
	// 				}
	// 				case '007': {
	// 					this.setState({
	// 						userName: 'CBT Admin'
	// 					})
	// 					this.props.history.push('/partner');
	// 					break;
	// 				}
	// 				case '008': {
	// 					this.setState({
	// 						userName: 'Shree Group Admin'
	// 					})
	// 					this.props.history.push('/client');
	// 					break;
	// 				}
	// 				case '009': {
	// 					this.setState({
	// 						userName: 'Career Point Exam Center Admin'
	// 					})
	// 					this.props.history.push('/candidate');
	// 					break;
	// 				}
	// 				default: {
	// 					this.props.history.push('/setting');
	// 					break;
	// 				}
	// 			}
	// 		});
	// };

	handleLogout = () => {
		this.props.logout();
	};
	// toggleDrawer = (side, open) => () => {
	// 	this.setState({
	// 		[side]: open,
	// 	});
	// };

	render() {
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<AppBar elevation={2} color="primary">
				<Toolbar>
					<Typography variant="title" color="inherit" className={classes.Grow}>
						{this.state.userName}
					</Typography>
					{auth && (
						<Grid container direction="row" justify="flex-end" alignItems="center">
							<Typography variant="caption" color="inherit">
								Welcome,&nbsp;&nbsp;
							</Typography>
							{/* <FormControl className={classes.formControl}>
								<Select
									value={this.state.module}
									onChange={this.handleChange}
									classes={{
										select: classes.moduleSelectField
									}}
									inputProps={{
										name: 'module',
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
							<IconButton
								// className={classes.UserAvatarContainer}
								aria-owns={open ? 'menu-appbar' : null}
								aria-haspopup="true"
								onClick={this.handleMenu}
								color="inherit"
							>
								<AccountCircleIcon />
								{/* <img src={userAvatar} className={classes.Avatar} alt="lineomatic" /> */}
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={this.handleClose}
							>
								<MenuItem onClick={this.handleClose}>
									<ListItemIcon className={classes.icon}>
										<PersonIcon fontSize="small" />
									</ListItemIcon>
									<ListItemText inset primary="Profile" />
								</MenuItem>
								<MenuItem onClick={this.handleLogout}>
									<ListItemIcon className={classes.icon}>
										<ExitToAppIcon fontSize="small" />
									</ListItemIcon>
									<ListItemText inset primary="Logout" />
								</MenuItem>
							</Menu>
						</Grid>
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		//setUser: (userData) => dispatch(loginAction.setUser(userData))
	};
};

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(MenuAppBar)
);
