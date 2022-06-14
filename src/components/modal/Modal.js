import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./style.css";

const Modal = ({
  handleOpenModal,
  isOpen,
  handleSetFieldValue,
  formData,
  handleSetTodoOnSubmit
}) => {
  return (
    <Dialog open={isOpen} onClose={handleOpenModal}>
      <DialogTitle>
        {formData.isEdit ? "Edit Todo" : "Add new Todo"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSetTodoOnSubmit}>
          <TextField
            label="Todo"
            variant="outlined"
            onChange={(e) => handleSetFieldValue("todoName", e.target.value)}
            value={formData.todoName}
          />
          <TextField
            label="Note"
            variant="outlined"
            onChange={(e) => handleSetFieldValue("todoNote", e.target.value)}
            value={formData.todoNote}
            multiline
            minRows={4}
          />

          <DialogActions>
            <Button color="primary" onClick={handleOpenModal}>
              Close
            </Button>
            <Button disabled={!formData.todoName} type="submit" color="primary">
              {formData.isEdit ? "Edit" : "Add"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
