/**
 * Summary : User Container for user module
 *
 * Description.
 *
 * @file   user.tsx
 * @author Aakash.
 * @since  25/9/2019
 */

import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IAppState } from "store/store";

// Props type for User Container
interface IProps extends RouteComponentProps {}

//Class representing a User Container
class User extends React.Component<IProps, {}> {
  render() {
    return <p>User</p>;
  }
}

const mapStateToProps = (state: IAppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
