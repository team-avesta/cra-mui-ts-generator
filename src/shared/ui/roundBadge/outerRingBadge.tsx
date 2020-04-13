import React from 'react';
import genericClasses from 'App.module.css';

interface IProps {
	outerClass?: string;
}
const OuterBadge: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<div className={[genericClasses.LegendRoundBadgeOuter, props.outerClass].join(' ')}>
			<div className={genericClasses.LegendRoundBadgeInner}>
				{/* <Typography variant="body2" className={genericClasses.RoundBadgeFont}>
					{props.text}
				</Typography> */}
			</div>
		</div>
	);
};

OuterBadge.defaultProps = {
	outerClass: ''
};
export default OuterBadge;
