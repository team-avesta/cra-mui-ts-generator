/**
 * Summary : Login Container
 *
 * Description.
 *
 * @file   login.tsx
 * @author Yash.
 * @since  10/10/2019
 */

import React from "react";
import { RouteComponentProps } from "react-router-dom";
import LoginForm from "../components/loginForm";
import LoginOtp from "../components/loginOtp";
import { connect } from "react-redux";
import { ILoggedInUser } from "../login.interface";
import Grid from "@material-ui/core/Grid";
import genericClasses from "App.module.css";
import { IAppState } from "store/store";
import Paper from "@material-ui/core/Paper";
import LoginSupport from "../components/loginSupport";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// ActiveScreenName is used to manage the active login screen based on auth data
enum ActiveScreenName {
  Login, // LoginForm
  Otp, // LoginOtp
}

interface IProps extends RouteComponentProps {
  loggedInUser: ILoggedInUser; // logged in user details which gets on login success
}

interface IState {
  activeScreen: ActiveScreenName; // It is use to manage current login screen based on auth data
  enableButton: boolean; // disable button on click,
  authfieldVal: number; // set the mobile number entered while login
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    //initializing state object
    this.state = {
      activeScreen: ActiveScreenName.Login, // by default there will be login screen
      enableButton: true, // by default button will be set true
      authfieldVal: 0, // inital value is 0 due to type number
    };
  }

  render() {
    return (
      <main className={genericClasses.DefaultRouteContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={genericClasses.HInherit}
        >
          <Grid item xs={6}>
            {this.getActiveScreen()}
          </Grid>
        </Grid>
      </main>
    );
  }

  getActiveScreen(): JSX.Element {
    // if user verified go to otp screen
    if (this.state.activeScreen === 1) {
      return (
        <Paper elevation={1} className={genericClasses.P20}>
          <LoginOtp />
        </Paper>
      );
    }
    // login screen
    return (
      <>
        <Paper elevation={1} className={genericClasses.P20}>
          <Grid item container direction="row" xs={12}>
            <Grid item xs>
              <LoginForm />
            </Grid>
            <Grid item xs={1}>
              <div
                className={[
                  genericClasses.VerDivider,
                  genericClasses.H100P,
                ].join(" ")}
              />
            </Grid>
            <Grid
              item
              xs
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography
                variant="body2"
                color="inherit"
                classes={{ root: genericClasses.Mb16 }}
              >
                First time user, Register here
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                classes={{ disabled: genericClasses.ContainedDisabled }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
        {/* Support Card */}
        <LoginSupport />
      </>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    loggedInUser: state.login.loggedInUser as ILoggedInUser,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
