import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "shared/services/errorBoundary";
import App from "./App";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    {/* BrowserRouter uses the HTML5 history API  to keep your UI in sync with the URL. */}
    <BrowserRouter>
      {/* It catches all error that occured inside our app */}
      <ErrorBoundary>
        {/* main application */}
        <CssBaseline />
        <App />
        {/* </Latex> */}
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
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
