import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import classes from './sideDrawer.module.css';
import appCss from '../../../App.module.css';
import { materialIcon } from 'shared/utility';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const sideDrawer = props => {
	/**
	 * Added by Vinay to highlight currently active route in drawer menu.
	 * Below method of getting current route has to be changed and this will not
	 * work for nested routes
	 * TODO - change way of getting current route
	 */

	let isActive = route => {
		let tmp = window.location.pathname;
		return tmp === route ? true : false;
	};

	/* let checkPermission = (permissionData) => {
		return permissionData.some((p) => {
			return permissionData.findIndex(ap => ap === props.userdata.user_code) === -1 ? false : true;
		});
	} */

	let listItemClasses = { selected: classes.selected };

	let accordianMenu = (menu, index) => {
		return menu.permissions.findIndex(ap => ap === props.userdata.user_code) !== -1 ? (
			<div>
				<ListItem
					button
					selected={isActive(menu.state)}
					onClick={() => props.accordianClick(index)}
					classes={listItemClasses}
					className={classes.DrawerItem}
				>
					<ListItemIcon>{materialIcon(menu.icon)}</ListItemIcon>
					<ListItemText>
						<span className={classes.DrawerTitle}>{menu.name}</span>
					</ListItemText>
					{menu.isOpen ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={menu.isOpen} timeout="auto" unmountOnExit style={{ paddingLeft: 7 }}>
					{menu.sub_menu.map(sub_menu => {
						return (
							<NavLink
								to={sub_menu.state}
								className={appCss.TxtDecoNone}
								style={{ color: 'inherit' }}
								activeStyle={{ color: '#a0a0a0' }}
								key={sub_menu.id}
							>
								<ListItem
									button
									selected={isActive(sub_menu.state)}
									classes={listItemClasses}
									className={classes.DrawerItem}
								>
									<ListItemIcon>{materialIcon(sub_menu.icon)}</ListItemIcon>
									<span className={classes.DrawerTitle}>{sub_menu.name}</span>
								</ListItem>
							</NavLink>
						);
					})}
				</Collapse>
			</div>
		) : null;
	};

	let nonAccordianMenu = menu => {
		return menu.permissions.findIndex(ap => ap === props.userdata.user_code) !== -1 ? (
			<NavLink
				to={menu.state}
				className={appCss.TxtDecoNone}
				style={{ color: 'inherit' }}
				activeStyle={{ color: '#a0a0a0' }}
			>
				<ListItem
					button
					selected={isActive(menu.state)}
					classes={listItemClasses}
					className={classes.DrawerItem}
				>
					<ListItemIcon className={classes.DrawerIcon}>{materialIcon(menu.icon)}</ListItemIcon>
					<span className={classes.DrawerTitle}>{menu.name}</span>
				</ListItem>
			</NavLink>
		) : null;
	};

	return window.location.pathname !== '/home' ? (
		<div style={{ width: '65px' }}>
			<div className={classes.DrawerPaper}>
				<div className={classes.DrawerContainer}>
					<List component="nav">
						{props.menu
							? props.menu.map((menu, index) => {
									return (
										<div key={menu.id}>
											{menu.sub_menu ? accordianMenu(menu, index) : nonAccordianMenu(menu, index)}
										</div>
									);
							  })
							: null}
					</List>
				</div>
			</div>
			<div className={classes.DrawerBackDrop}></div>
		</div>
	) : null;
};

sideDrawer.propTypes = {
	menu: PropTypes.array
};

export default sideDrawer;
