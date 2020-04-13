import React from 'react';

interface IErrorState {
	error: any;
}

interface IErrorProps {
	children?: any;
}

class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
	constructor(props: IErrorProps) {
		super(props);

		this.state = {
			error: null
		};
	}

	static getDerivedStateFromError(error: Error) {
		return { error };
	}

	componentDidCatch(error: Error | null, info: object) {
		this.logError(error, info);
	}

	render() {
		if (this.state.error) {
			return 'such error'; // as before
		}
		return this.props.children;
	}

	logError(error: Error | null, info: object) {
		console.log(error);
		console.log(info);
	}
}

export default ErrorBoundary;
