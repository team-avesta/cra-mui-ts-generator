import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
//import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Login from "features/login/containers/login";
import UserList from "features/users/containers/usersList";
import Layout from "./shared/layout/layout";
import { ILoginState } from "features/login/login.interface";
import { IAppState } from "store/store";

//it will override the values of theme
//const defTheme = createMuiTheme(themeOverrides);

interface IAppProps {
  loginDetails: ILoginState; // get logged in user details after login
}

class App extends React.Component<IAppProps> {
  render() {
    const redirect = null;
    return (
      <React.Fragment>
        {redirect}
        {this.getRoutes()}
      </React.Fragment>
    );
  }

  getRoutes = (): JSX.Element => {
    let routes = this.getDefaultRoute();

    const checkUser = this.checkUserExist();
    if (checkUser) {
      routes = this.getLayoutRoute();
    }
    return routes;
  };

  //check user exist or not
  checkUserExist = (): boolean => {
    return Boolean(this.props.loginDetails.loggedInUser !== null);
  };

  getDefaultRoute = (): JSX.Element => {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  };

  getLayoutRoute = (): JSX.Element => {
    return (
      <Layout
        routes={(menu) => {
          return (
            <Switch>
              <Route path="/user" exact component={UserList} />
              {menu.length > 0 ? <Redirect to={`${menu[0].state}`} /> : null}
            </Switch>
          );
        }}
      />
    );
  };
}
const mapStateToProps = (state: IAppState) => {
  return {
    loginDetails: state.login,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
