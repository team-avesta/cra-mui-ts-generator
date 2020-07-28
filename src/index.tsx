import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'shared/services/errorBoundary';
import App from './App';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import theme from 'theme/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<ErrorBoundary>
					<CssBaseline />
					<App />
				</ErrorBoundary>
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
// if (module.hot) {
// 	module.hot.accept("./App", () => {
// 		const NextApp = require("./App").default;
// 		render(NextApp);
// 	});
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
