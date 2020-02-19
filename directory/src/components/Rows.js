import React from "react";

function Rows(props) {
  return (
    <tr>
      <td>{props.image}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phoneNumber}</td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default Rows;
