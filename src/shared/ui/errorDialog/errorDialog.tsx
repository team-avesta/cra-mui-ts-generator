/**
 * Summary : Error Dialog Component
 *
 * Description.
 *
 * @file   errorDialog.tsx
 * @author Yash
 * @since  28/04/2020
 */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export interface IProps {
	//type: string | null; //success / error types //to add classes according to type
	open: boolean; // flag to hide and show toaster
	message?: string | null; // msg in toaster
	handleErrorDialogClose: () => void; // handle close event
}

/** function to
 * @param {object} props
 * @returns {JSX.Element}
 */
const ErrorDialog = (props: IProps): JSX.Element => {
	return (
		<Dialog open={props.open}>
			<DialogTitle id="alert-dialog-title" style={{ color: '#ff1744' }}>
				Error
			</DialogTitle>
			<DialogContent>
				<DialogContentText style={{ color: '#ff1744' }}>
					<Typography component="span" variant="subtitle1">{props.message}</Typography>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleErrorDialogClose} color="secondary" variant="text" autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default ErrorDialog;
