import React from 'react';
import genericClasses from 'App.module.css';
import Typography from '@material-ui/core/Typography';

interface IProps {
	text: string;
	class?: string;
	outerClass?: string;
}
const DoubleRoundBadge: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<div className={[genericClasses.RoundBadgeOuter, props.outerClass].join(' ')}>
			<div className={[genericClasses.RoundBadgeInner, props.class].join(' ')}>
				<Typography variant="body2" className={genericClasses.RoundBadgeFont}>
					{props.text}
				</Typography>
			</div>
		</div>
	);
};

DoubleRoundBadge.defaultProps = {
	class: '',
	outerClass: ''
};
export default DoubleRoundBadge;
