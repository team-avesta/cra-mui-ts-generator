import React from 'react';
import CustomButton from './button';

interface IProps {
	disabled?: boolean;
	onClick?: () => void;//if not form. this function called
}
const GredientButton: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<CustomButton
			color="secondary"
			variant="contained"
			size="large"
			title="Save"
			type="submit"
			disabled={props.disabled}
			onClick={props.onClick}
		/>
	);
};

GredientButton.defaultProps = {
	disabled: false,
	onClick: () => { }
};
export default GredientButton;
