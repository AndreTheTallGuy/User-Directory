import React from "react";

function Rows(props) {
  console.log(props.tableData);

  return (
    <div>
      {props.tableData.map(person => (
        <tr>
          <td>
            <img src="{person.picture.thumbnail}" />
          </td>
          <td>{person.name.first}</td>
          <td>{person.name.last}</td>
          <td>{person.phone}</td>
          <td>{person.email}</td>
        </tr>
      ))}
    </div>
  );
}

export default Rows;
