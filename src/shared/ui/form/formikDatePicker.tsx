import React from 'react';
import genericClasses from 'App.module.css';
import { Field as FormikField, ErrorMessage } from 'formik';
import { LnDatePicker } from 'shared/inputTypes';
import LnInputError from 'shared/inputError';
import FieldContainer from './fieldContainer';

interface IProps {
	label: string;
	placeholder: string;
	name: string;
	className?: string;
	onChange?: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
}
const DatePicker: React.SFC<IProps> = (props: IProps): JSX.Element => {
	return (
		<FieldContainer label={props.label}>
			<FormikField
				className={genericClasses.FormControl}
				placeholder={props.placeholder}
				name={props.name}
				component={LnDatePicker}
				onChange={props.onChange}
				required
			/>
			<ErrorMessage name={props.name} component={LnInputError} />
		</FieldContainer>
	);
};

DatePicker.defaultProps = {
	className: genericClasses.FormControl
};

export default DatePicker;
