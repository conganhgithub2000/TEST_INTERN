import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

let renderTableBody = () => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        Bùi Công Anh
      </StyledTableCell>
      <StyledTableCell>conganh@gmail.com</StyledTableCell>
      <StyledTableCell>0321325554</StyledTableCell>
      <StyledTableCell>
        <Button
          variant="contained"
          style={{
            padding: "3px",
            backgroundColor: "green",
            width: "40px",
            margin: "4px",
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          style={{
            padding: "3px",
            backgroundColor: "red",
            width: "60px",
            margin: "4px",
          }}
        >
          Delete
        </Button>
      </StyledTableCell>
    </>
  );
};

export default function TableData() {
  return (
    <div style={{ margin: "0 24px" }}>
      <TableContainer sx={{ margin: "0 0px" }} component={Paper}>
        <Table sx={{ margin: "0 auto" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "30%" }}>Name</StyledTableCell>
              <StyledTableCell sx={{ width: "30%" }}>Email</StyledTableCell>
              <StyledTableCell sx={{ width: "25%" }}>Phone</StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>{renderTableBody()}</StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
