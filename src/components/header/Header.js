import React from "react";
import moment from "moment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "../modal/Modal";
import Display from "../display/Display";
import "./style.css";

export const style = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  finished: {
    fontSize: "46px",
    color: "#fff",
  },
  total: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  },
  weekDay: {
    color: "#fff",
    fontSize: "28px",
  },
  date: {
    color: "#fff",
    fontSize: "28px",
    marginLeft: 10,
  },
};

const Header = ({ 
  handleOpenModal, 
  isOpen, 
  handleSetFieldValue, 
  formData,
  handleSetTodoOnSubmit,
  isOpenDisplay,
  handleCloseButton,
  handleEditTodo,
  handleRemoveTodo,
  totalCount
}) => {
  const weekDay = moment().format("dddd");
  const date = moment().date();

  return (
    <div className="todo-header">
      <div style={style.wrapper}>
        <div className="todos-count">
          <span style={style.finished}>{totalCount.finished}</span>
          <div style={style.total}>
            <span>Tasks</span>
            <span>{`/ ${totalCount.total}`}</span>
          </div>
        </div>
        <div>
          <span style={style.weekDay}>{weekDay}</span>
          <span style={style.date}>{date}</span>
        </div>
      </div>
      <div className="add-todo" onClick={handleOpenModal}>
        <AddCircleIcon color="primary" />
        <span className="icon-background" />
      </div>
      <Modal
        isOpen={isOpen}
        handleOpenModal={handleOpenModal}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
        handleSetTodoOnSubmit={ handleSetTodoOnSubmit}
      />

      <Display
        formData={formData}
        isOpen={isOpenDisplay}
        handleCloseButton={handleCloseButton}
        handleEditTodo={handleEditTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default Header;
