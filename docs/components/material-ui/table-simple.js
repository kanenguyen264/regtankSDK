import React from "react";
import Table from "@material-ui/core/Table";
import { TableHead, TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

const createData = (firstName, lastName, age) => ({ firstName, lastName, age }),
  data = [
    createData("Truong Hung", "Phong", 27),
    createData("Nguyen Hoang Khanh", "Trang", 27),
    createData("Le Thi Huyen", "Tram", 22),
    createData("Truong Hieu Thao", "Hien", 21)
  ];

const SortableTableHeaderCell = ({ children, ...props }) => (
  <TableCell padding={"default"}>
    <TableSortLabel active={true} direction={"asc"}>
      {children}
    </TableSortLabel>
  </TableCell>
);

const SimpleTable = () => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <SortableTableHeaderCell>First Name</SortableTableHeaderCell>
            <SortableTableHeaderCell>Last Name</SortableTableHeaderCell>
            <SortableTableHeaderCell>Age</SortableTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SimpleTable;
