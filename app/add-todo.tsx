import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row } from 'react-bootstrap';

const TodoForm = (props) => {
  return (
    <div className="m-4 d-flex justify-content-center">
      <Row><label className="pe-4 flex-sm-row text-nowrap">My List</label></Row>
    <div className="TodoForm-container">
      <form className="TodoForm" onSubmit={props.onSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Add a task..."
          value={props.value}
          onChange={props.onChange}
          ref={props.reference}
          required />
        <div className="btn-container">
          <Button variant="success" type="submit" size="sm">
            {!props.isEditing ? "Add a task" : "Edit Task"}
          </Button>
          <Button className="ms-2" variant="danger" type="button" size="sm" onFocus={props.onClick}>
            {!props.isEditing ? "Clear tasks" : "Cancel"}
          </Button>
        </div>
      </form>
    </div></div>
  );
};

export default TodoForm;
