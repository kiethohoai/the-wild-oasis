import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <div>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </div>
  );
}

export default Account;
