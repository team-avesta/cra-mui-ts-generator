/**
 * Summary : Login Form Component
 *
 * Description.
 *
 * @file   loginForm.tsx
 * @author Yash.
 * @since  24/9/2019
 */

import React from "react";
import genericClasses from "App.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classes from "../Login.module.css";
import Typography from "@material-ui/core/Typography";
import Form, { IInjectedProps } from "shared/ui/form/form";
import Field from "shared/ui/form/inputField";

//for prod
const initialValues: any = {
  authfield: "",
  password: "",
};

// for dev
/* const initialValues: any = {
	authfield: '8866895046',
	password: '@12345@'
}; */

const validations: any = {
  authfield: "mobile",
  password: "password",
};

// props which are used in Login Form
export interface IProps {}

/** Function represents login form component where user can perform login event
 * @param {object} props
 * @returns {JSX.Element}
 */
const LoginForm = (props: IProps): JSX.Element => {
  //initial login form value
  return (
    <>
      <Typography
        variant="h4"
        className={[genericClasses.Mb16, genericClasses.TextCenter].join(" ")}
      >
        CBT Admin
      </Typography>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Form
            initValues={initialValues}
            onSave={(loginVal: object) => {
              console.log(loginVal);
            }}
            validationSchema={validations}
            saveButDisable={false}
          >
            {(injectedProps: IInjectedProps) => (
              <>
                <Grid container direction="column">
                  <Grid item xs={12} className={genericClasses.Mb8}>
                    <Field
                      fullWIdth={true}
                      label=""
                      type="number"
                      placeholder="Enter Mobile No."
                      name="authfield"
                    />
                  </Grid>
                  <Grid item xs={12} className={genericClasses.Mb8}>
                    <Field
                      fullWIdth={true}
                      label=""
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={classes.Submit}
                >
                  <Button
                    color="default"
                    variant="text"
                    className={genericClasses.GreyButton}
                  >
                    Forgot Password
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    classes={{ disabled: genericClasses.ContainedDisabled }}
                  >
                    Login
                  </Button>
                </Grid>
              </>
            )}
          </Form>
        </Grid>
      </Grid>
    </>
  );
};
export default LoginForm;
