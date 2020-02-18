import React from "react";
import Rows from "./Rows";
import Style from "./Table.css";

function Table() {
  return (
    <table>
      <tr>
        <th>Photo</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
        <th>Date of Birth</th>
      </tr>
      <tr>
        <Rows />
      </tr>
    </table>
  );
}

export default Table;
