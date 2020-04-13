/**
 * Summary : Login Otp Component
 *
 * Description.
 *
 * @file   loginOtp.tsx
 * @author Yash.
 * @since  24/9/2019
 */

import React from "react";
import Button from "@material-ui/core/Button";
import genericClasses from "App.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Form, { IInjectedProps } from "shared/ui/form/form";
import Field from "shared/ui/form/inputField";

const validations: any = {
  otp: "otp",
};

// props which are used in Login Otp
export interface ILoginOtpProps {}

const initialValues: any = {
  otp: "",
};

const LoginOtp = (props: ILoginOtpProps): JSX.Element => {
  const verifyOtp = (otpVal: any) => {
    console.log(otpVal);
  };

  return (
    <Form
      initValues={initialValues}
      onSave={(otpVal: object) => verifyOtp(otpVal)}
      validationSchema={validations}
      saveButDisable={false}
    >
      {(injectedProps: IInjectedProps) => (
        <>
          <Typography variant="subtitle2">
            One Time Password (OTP) has been sent to your registered mobile
            number, please enter the same here to verify it.
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="stretch"
            className={genericClasses.MVer16}
          >
            <Grid item xs={12}>
              <Field
                fullWIdth={true}
                label=""
                type="number"
                placeholder="Enter OTP"
                name="otp"
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            className={[genericClasses.Mb50, genericClasses.Mt16].join(" ")}
          >
            <Button variant="text" className={genericClasses.GreyButton}>
              ReSend OTP
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              classes={{ disabled: genericClasses.ContainedDisabled }}
            >
              Verify OTP
            </Button>
          </Grid>
          <Typography variant="body1">
            If you didn&apos;t receive your OTP within 2 minutes, click the{" "}
            <strong>RESEND OTP</strong> button to resend OTP.
          </Typography>
        </>
      )}
    </Form>
  );
};

export default LoginOtp;
