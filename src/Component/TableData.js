import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { DELETE_CONTACT } from "./redux/constant/contact";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TableData() {
  let userListArr = useSelector((state) => state.userArr);
  let arrSearch = useSelector((state) => state.arrSearch);
  let dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {},
  });

  let handleChangeDelete = (index) => {
    dispatch({ type: DELETE_CONTACT, payload: index });
  };

  let renderTableBody = () => {
    if (arrSearch.length > 0) {
      return arrSearch.map((item, index) => {
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
      return userListArr.map((item, index) => {
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
                  onClick={() => {
                    handleOpen(index);
                  }}
                >
                  Edit
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{ textAlign: "center" }}
                    >
                      CONTACT
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <form onSubmit={formik.handleSubmit}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "20px 0",
                            alignItems: "center",
                          }}
                        >
                          <label htmlFor="name">Name</label>
                          <input
                            style={{ width: "320px", padding: "8px 6px" }}
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "20px 0",
                            alignItems: "center",
                          }}
                        >
                          <label htmlFor="email">Email</label>
                          <input
                            style={{ width: "320px", padding: "8px 6px" }}
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "20px 0",
                            alignItems: "center",
                          }}
                        >
                          <label htmlFor="lastName">Phone</label>
                          <input
                            style={{ width: "320px", padding: "8px 6px" }}
                            id="phone"
                            name="phone"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                          />
                        </div>
                        <div
                          style={{
                            marginTop: "8px",
                            textAlign: "right",
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{
                              marginRight: "20px",
                              padding: "10px 15px",
                              backgroundColor: "red",
                            }}
                            onClick={handleClose}
                          >
                            Hủy
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              padding: "10px 15px",
                              backgroundColor: "green",
                            }}
                            type="submit"
                          >
                            Update
                          </Button>
                        </div>
                      </form>
                    </Typography>
                  </Box>
                </Modal>
                <Button
                  variant="contained"
                  style={{
                    padding: "3px",
                    backgroundColor: "red",
                    width: "60px",
                    margin: "4px",
                  }}
                  onClick={() => {
                    handleChangeDelete(index);
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
