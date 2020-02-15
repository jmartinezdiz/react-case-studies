///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class CompleteCountryTable extends React.Component {

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  getCountries() {
    return [
      { id: 1, name: "Spain", alpha2Code: "ES" },
      { id: 2, name: "Germany", alpha2Code: "DE" },
      { id: 3, name: "France", alpha2Code: "FR" },
    ];
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderHeadRow() {
    return (
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Alpha2Code</TableCell>
      </TableRow>
    );
  }

  renderBodyRows() {
    return this.getCountries().map(function(country, index) {
      return (
        <TableRow key={index}>
          <TableCell>{country.id}</TableCell>
          <TableCell>{country.name}</TableCell>
          <TableCell>{country.alpha2Code}</TableCell>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <Table size="small">
        <TableHead>{this.renderHeadRow()}</TableHead>
        <TableBody>{this.renderBodyRows()}</TableBody>
      </Table>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default CompleteCountryTable;
