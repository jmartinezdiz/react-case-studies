///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import CompleteCountryTable from './CompleteCountryTable';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class SimpleCountryTable extends CompleteCountryTable {

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderHeadRow() {
    return (
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Alpha2Code</TableCell>
      </TableRow>
    );
  }

  renderBodyRows() {
    return this.getCountries().map(function(country, index){
      return (
        <TableRow key={index}>
          <TableCell>{country.name}</TableCell>
          <TableCell>{country.alpha2Code}</TableCell>
        </TableRow>
      );
    });
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default SimpleCountryTable;
