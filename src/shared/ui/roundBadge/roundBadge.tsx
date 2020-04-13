import React from 'react';
import genericClasses from 'App.module.css';
import Typography from '@material-ui/core/Typography';

interface IProps {
	text?: string;
	class?: string;
}
const RoundBadge: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<div className={[genericClasses.RoundBadge, props.class].join(' ')}>
			<Typography variant="body2" className={genericClasses.RoundBadgeFont}>
				{props.text}
			</Typography>
		</div>
	);
};

RoundBadge.defaultProps = {
	class: ''
};
export default RoundBadge;
