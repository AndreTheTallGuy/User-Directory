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

  handleSort = e => {
    e.preventDefault();
    var newTable = this.state.tableData.sort((a, b) => {
      return +(a.name.first > b.name.first) || -(a.name.first < b.name.first);
    });
    this.setState({ tableData: newTable });
  };
  render() {
    return (
      <table>
        <tr>
          <th>Photo</th>
          <th onClick={this.handleSort} style={{ cursor: "pointer" }}>
            First Name
          </th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
        {this.state.tableData.map(person => (
          <tr>
            <td>
              <img src={person.picture.thumbnail} />
            </td>
            <td>{person.name.first}</td>
            <td>{person.name.last}</td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Table;
