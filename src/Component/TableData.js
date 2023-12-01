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
import { useSelector } from "react-redux";

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

export default function TableData() {
  let userListArr = useSelector((state) => state.userArr);
  let arrSearch = useSelector((state) => state.arrSearch);
  
  let renderTableBody = () => {
    if (arrSearch.length > 0) {
      return arrSearch.map((item) => {
        return (
          <>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.phone}</StyledTableCell>
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
            </StyledTableRow>
          </>
        );
      });
    } else {
      return userListArr.map((item) => {
        return (
          <>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.phone}</StyledTableCell>
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
            </StyledTableRow>
          </>
        );
      });
    }
  };
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
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
