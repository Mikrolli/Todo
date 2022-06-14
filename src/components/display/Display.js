import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import "./style.css";

const Display = ({
  isOpen,
  formData,
  handleCloseButton,
  handleEditTodo,
  handleRemoveTodo,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleCloseButton}>
      <DialogTitle>
        <div className="display-todo-title">Your Todo</div>
      </DialogTitle>
      <DialogContent>
        <div>
          <h2>{formData.todoName}</h2>
          <div>{formData.todoNote}</div>
        </div>
      </DialogContent>

      <DialogActions>
        <div className="display-buttons-wrapper">
          <Button
            color="secondary"
            variant="outlined"
            onClick={handleRemoveTodo}
          >
            Remove
          </Button>

          <div>
            <Button color="primary" onClick={handleCloseButton}>
              Close
            </Button>
            <Button color="primary" onClick={handleEditTodo}>
              Edit
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default Display;
