import React from 'react';
import genericClasses from 'App.module.css';
import { Field as FormikField, ErrorMessage } from 'formik';
import { LnTextField } from 'shared/inputTypes';
import LnInputError from 'shared/inputError';
import FieldContainer from './fieldContainer';

interface IProps {
	type?: string;
	label?: string;
	placeholder?: string;
	name: string;
	style?: object;
	fullWIdth?: boolean;
	disabled?: boolean;
	formContainerClassName?: any;
	mTop?: string;
	mBottom?: string;
}
const Field: React.SFC<IProps> = (props): JSX.Element => {
	return (
		<FieldContainer
			label={props.label}
			formContainerClassName={props.formContainerClassName}
			mTop={props.mTop}
			mBottom={props.mBottom}
		>
			<FormikField
				type={props.type}
				className={props.fullWIdth ? genericClasses.FullWidthFormControl : genericClasses.FormControl}
				placeholder={props.placeholder}
				name={props.name}
				component={LnTextField}
				disabled={props.disabled}
				style={props.style}
				required
			/>
			<ErrorMessage name={props.name} component={LnInputError} />
		</FieldContainer>
	);
};

Field.defaultProps = {
	type: 'text',
	fullWIdth: false,
	disabled: false
};

export default Field;
