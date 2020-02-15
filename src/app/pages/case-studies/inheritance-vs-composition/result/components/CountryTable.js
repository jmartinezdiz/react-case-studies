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
class CountryTable extends React.Component {

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

  toUpperCase(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderHeadRow() {
    return (
      <TableRow>
        {
          this.props.columns.map((column, index) => {
            return <TableCell key={index}>{this.toUpperCase(column)}</TableCell>
          })
        }
      </TableRow>
    );
  }

  renderBodyRows() {
    return this.getCountries().map((country, index) => {
      return (
        <TableRow key={index}>
          {
            this.props.columns.map((column, index) => {
              return <TableCell key={index}>{country[column]}</TableCell>
            })
          }
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
export default CountryTable;
