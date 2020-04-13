import React from 'react';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
//import classes from 'App.module.css';
import headerStyles from './gridHeader.module.css';

interface IProps {
	title: string;
	btnText?: string;
	disabledButton?: boolean;
	handleBtnClick: () => void;
	isUserAllowed?: boolean;
}
const GridHeader: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<React.Fragment>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
				className={genericClasses.GridHeader}
			>
				<Typography variant="subtitle1" className={headerStyles.GridHeader}>
					{props.title}
				</Typography>
				<div className={genericClasses.ButtonContainer}>
					{props.children}
					{!props.isUserAllowed && (
						<Button
							disabled={props.disabledButton}
							color="secondary"
							variant="contained"
							onClick={() => props.handleBtnClick()}
						>
							<AddIcon fontSize="small" className={genericClasses.Mr3} />
							{props.btnText}
						</Button>
					)}
				</div>
			</Grid>
			<Divider />
		</React.Fragment>
	);
};

GridHeader.defaultProps = {
	isUserAllowed: false
};

export default GridHeader;
