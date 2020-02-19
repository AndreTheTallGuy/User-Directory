import React, { Component } from "react";
import Rows from "./Rows";
import "./Table.css";
import API from "../utils/API";

class Table extends Component {
  state = {
    tableData: []
  };

  componentDidMount() {
    API.getPeople()
      .then(res => this.setState({ tableData: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <table>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
        {console.log(this.state.tableData)}
        <Rows tableData={this.state.tableData} />
      </table>
    );
  }
}

export default Table;
