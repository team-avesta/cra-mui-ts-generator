import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './layout.module.css';
import Toaster from '../ui/toaster/toaster';
import MenuAppBar from '../ui/AppBar/AppBar';
import * as loginAction from 'features/login/store/actions';
import LoadingSpinner from '../ui/loader/loadingSpinner';
import SideDrawer from '../ui/sideDrawer/sideDrawer';
import * as actions from '../ui/toaster/toaster.actions';
class Layout extends Component {
	state = {
		menu: [
			{
				code: '1',
				icon: 'PersonOutlined',
				id: 1,
				level: 1,
				name: 'Partners',
				parent_id: null,
				sequence: 1,
				state: '/partner',
				permissions: ['007']
			},
			{
				code: '2',
				icon: 'PersonOutlined',
				id: 2,
				level: 1,
				name: 'Clients',
				parent_id: null,
				sequence: 2,
				state: '/client',
				permissions: ['008']
			},
			/* {
			code: "4",
			icon: "PersonOutlined",
			id: 4,
			level: 1,
			name: "Exam Centers",
			parent_id: null,
			sequence: 4,
			state: "/examCenter",
			permissions: ['001', '003']
		}, {
			code: "5",
			icon: "PersonOutlined",
			id: 5,
			level: 1,
			name: "Center Admins",
			parent_id: null,
			sequence: 5,
			state: "/centerAdmin",
			permissions: ['001', '003']
		}, */ {
				code: '5',
				icon: 'LocationCityOutlined',
				id: 5,
				level: 1,
				name: 'Exam Centers',
				parent_id: null,
				sequence: 5,
				state: '/examCenter',
				permissions: ['001', '003']
			},
			{
				code: '6',
				icon: 'ImportContactsOutlined',
				id: 6,
				level: 1,
				name: 'Content',
				parent_id: null,
				sequence: 6,
				state: '/course',
				permissions: ['001', '002', '004', '005']
			},
			{
				code: '7',
				icon: 'AssignmentOutlined',
				id: 7,
				level: 1,
				name: 'Exams',
				parent_id: null,
				sequence: 7,
				state: '/exam',
				permissions: ['001', '003']
				// }, {
			},
			{
				code: '10',
				icon: 'QuestionAnswerOutlined',
				id: 10,
				level: 1,
				name: 'Test Paper',
				parent_id: null,
				sequence: 10,
				state: '/test',
				permissions: ['001', '006']
			},
			{
				code: '3',
				icon: 'PersonOutlined',
				id: 3,
				level: 1,
				name: 'Users',
				parent_id: null,
				sequence: 3,
				state: '/user',
				permissions: ['001']
			},
			{
				code: '12',
				icon: 'ListAltOutlined',
				id: 12,
				level: 1,
				name: 'Candidate List',
				parent_id: null,
				sequence: 12,
				state: '/candidate',
				permissions: ['009']
			},
			{
				code: '13',
				icon: 'LockOutlined',
				id: 13,
				level: 1,
				name: 'Change Password',
				parent_id: null,
				sequence: 13,
				state: '/changePassword',
				permissions: ['009']
			},
			{
				code: '14',
				icon: 'AssignmentIndOutlined',
				id: 14,
				level: 1,
				name: 'Candidate Verification',
				parent_id: null,
				sequence: 14,
				state: '/candidateVerify',
				permissions: ['009']
			},
			{
				code: '11',
				icon: 'SettingsOutlined',
				id: 11,
				level: 1,
				name: 'Settings',
				parent_id: null,
				sequence: 11,
				state: '/setting',
				permissions: ['001']
			}
		]
	};

	/**
	 * onClickAccordianMenu - handles click event of accordian top level menu item
	 * This function handles click event of accordian menu type and shows/hides submenus
	 */
	onClickAccordianMenu = index => {
		var openMenu = this.state.menu[index];
		openMenu.isOpen = !openMenu.isOpen;

		let menuArr = [...this.state.menu];
		menuArr[index] = openMenu;

		this.setState(state => ({
			...this.state,
			menu: menuArr
		}));
	};
	render() {
		return (
			<React.Fragment>
				<div className={classes.AppBody}>
					{/*Top nav bar*/}
					<MenuAppBar logout={this.logout} userdata={this.props.userdata} />
					<SideDrawer
						userdata={this.props.userdata}
						menu={this.state.menu}
						open={this.state.open}
						show={this.state.show}
						accordianClick={this.onClickAccordianMenu}
					/>
					{/*body*/}
					<div className={classes.ModuleContainer}>
						{/* rest views */}
						{this.props.children}
						{/* app loader */}
						{this.props.isLoading ? <LoadingSpinner /> : null}
					</div>
				</div>
				<Toaster
					open={this.props.showToaster}
					type={this.props.toastType}
					message={this.props.toastMessage}
					handleToasterClose={this.props.hideToaster}
				/>
			</React.Fragment>
		);
	}

	logout = () => {
		this.props.onLogout();
	};
}

const mapStateToProps = state => {
	return {
		showToaster: state.toaster.showToaster,
		toastMessage: state.toaster.toastMessage,
		toastType: state.toaster.toastType
	};
};
const mapDispatchToProps = dispatch => {
	return {
		hideToaster: () => dispatch(actions.hideToaster()),
		onLogout: () => dispatch(loginAction.logout())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);
