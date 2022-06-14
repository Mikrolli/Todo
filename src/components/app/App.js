import React, { useState } from "react";
import Header from "../header/Header";
import Actions from "../actions/Actions";
import TodoRender from "../todorender/TodoRender";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";

const initialFormData = {
  isEdit: false, // Редактирование или создание
  todoName: "", // Название
  todoNote: "", // диcкрипшен
  isFinisid: false, // выполнено/не выполнено
  id: "", // uuid
  index: null,
};

const getFinishedTodosCount = (todos) => todos.reduce((accumulator, current) => {
  accumulator.total = todos.length;

  if (current.isFinished) {
    accumulator.isFinished = accumulator.isFinished + 1;
  }

  return accumulator;
}, { total: 0, finished: 0 })

const setFilterTab = (tab, todos) => {
  if(tab === 0) {
    return todos;
  } else if (tab === 1) {
    return todos.filter((todo) => !todo.isFinished);
  } else if (tab === 2) {
    return todos.filter((todo) => todo.isFinished);
  }
}

const App = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Открытие/закрытие модального окна
  const [isOpenDisplay, setIsOpenDisplsy] = useState(false); //Отктыие модал. для просмотра заметки
  const [todos, setTodos] = useState([]); // Todo
  const [formData, setFormData] = useState(initialFormData);
  console.log('todos:' , todos);

  const totalCount = getFinishedTodosCount(todos);

  const sortedTodos = setFilterTab(tab, todos);

  const resetAll = () => {
    setIsOpen(false);
    setIsOpenDisplsy(false);
    setFormData();
  }


  const handleOpenModal = () => setIsOpen((prevState) => !prevState);

  const handleSetFieldValue = (fieldName, value) =>
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }));

  const handleChangeTab = (tabValue) => setTab(tabValue);

  const handleSetTodoOnSubmit = (e) => {
    e.preventDevault();

    if(formData.isEdit) {
      const editedTodos = todos;
      editedTodos.splice(formData.index, 1, { ...formData, isEdit: false, index: null });
      setTodos(editedTodos);
    } else {
      setTodos((prevState) => [...prevState, {...formData, id: uuidv4() }]);
    }

    resetAll();
  };

  const handleMarkTodo = (isChecked, index) => {
    const updatedTodos = todos.slice();
    updatedTodos.splice(index, 1, { ...todos[index], isFinished: isChecked});
    setTodos(updatedTodos);
  }

  const handleOpenTodo = (todo) => {
    setIsOpenDisplsy(true);
    setFormData(todo);
  }

  const handleEditTodo = () => {
    setFormData((prevState) => ({ ...prevState, isEdit: true }));
    setIsOpenDisplsy(false);
    handleOpenModal();
  }

  const handleRemoveTodo = () => {
    setTodos(todos.filter((item) => item.id !== formData.id));
    resetAll();
  }

  return (
    <div className="todo-wrapper">
      <Header
        handleOpenModal={handleOpenModal}//
        isOpen={isOpen}//
        handleSetFieldValue={handleSetFieldValue}//
        formData={formData}//
        handleSetTodoOnSubmit={handleSetTodoOnSubmit}//
        handleEditTodo={handleEditTodo}//
        isOpenDisplay={isOpenDisplay}//
        handleRemoveTodo={handleRemoveTodo}//
        handleCloseButton={resetAll}//
        totalCount={totalCount}//
      />
      <Actions 
      handleChangeTab={handleChangeTab}
      tab={tab}
      />
      <TodoRender 
      todos={sortedTodos} 
      handleMarkTodo={handleMarkTodo}
      handleOpenTodo={handleOpenTodo}
      />
    </div>
  );
};

export default App;
