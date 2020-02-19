import React, { Component } from "react";
import Rows from "./Rows";
import "./Table.css";
import API from "../utils/API";

class Table extends Component {
  state = {
    tableData: {
      image: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dateOfBirth: ""
    }
  };

  renderPeople = () => {
    API.getPeople()
      .then(res => this.setState({ tableData: res.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <table>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
        </tr>

        <Rows image={this.state.image} firstName={this.state.firstName} />
      </table>
    );
  }
}

export default Table;
