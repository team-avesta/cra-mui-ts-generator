import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import LoginReducer from "features/login/store/login.reducer";
// Reducers

// Interfaces
import { ILoginState } from "features/login/login.interface";

interface IWindow {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare let window: IWindow;

export interface IAppState {
  login: ILoginState;
}

const reducers = {
  login: LoginReducer,
};

const rootReducer = combineReducers<IAppState>(reducers);
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
