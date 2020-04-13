
/**
 * * Author: Yash Vekaria
 *
 * * Important Information
 *
 * * Inorder to use this component, it should have its parent container position relative css condition
 * * Place this component inside it
 */


import React from 'react';
import PropTypes from 'prop-types';
//import Paper from '@material-ui/core/Paper';
import classes from './emptyScreen.module.css';
import emptyscreenicon from 'assets/images/emptyScreen.png';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from "react-intl";

const EmptyScreen = (props) => {

	let imageCircleClass = null;

	imageCircleClass = [classes.EmptyScreenCircle, classes[props.screensize]].join(' ');

	const textOnlyScreen = () => {
		return (<div className={classes.EmptyScreenContainer}>
			<Typography variant="h6" color="textSecondary" >
				{props.subtitle}
			</Typography>
		</div>)
	}

	const emptyScreen = () => {
		return (<div className={classes.EmptyScreenContainer} style={{ top: props.top }}>
			<div className={imageCircleClass}>
				<div className={classes.EmptyImgContainer}>
					<img src={emptyscreenicon} alt="emptyscreenicon" />
				</div>
				<Typography variant="h6" color="textSecondary" className={classes.titleText}>
					{/*{props.title}*/}
					{<FormattedMessage id="common.emptyScreen.title" />}
				</Typography>
				<Typography variant="body1" color="textSecondary" className={classes.bodyText}>
					{props.subtitle}
				</Typography>
			</div>
		</div>)
	}

	// textEmptyScreen added for simple text empty screen. screen without icon.
	return (!props.textOnly ?
		emptyScreen()
		: textOnlyScreen()
	)
}

EmptyScreen.propTypes = {
	textOnly: PropTypes.bool,
	subtitle: PropTypes.object,
	top: PropTypes.string
}


export default EmptyScreen

