import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";

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

export default function DataForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log("🚀 ~ file: DataForm.js:32 ~ DataForm ~ values:", values);
      
    },
  });

  return (
    <div style={{ textAlign: "right" }}>
      <Button
        style={{
          margin: "30px",
          padding: "20px 15px",
          backgroundColor: "green",
        }}
        onClick={handleOpen}
        variant="contained"
      >
        Add Contact Button
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
                  Submit
                </Button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
