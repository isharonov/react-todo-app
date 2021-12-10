import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';


import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <div className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        { label }
      </span>

      <span className="todo-list-item-btns">
        <button type="button"
                className="btn btn-outline-success btn-sm">
          <FontAwesomeIcon icon={solid('exclamation')} />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm">
          <FontAwesomeIcon icon={regular('trash-alt')} />
        </button>
      </span>
    </div>
  );
};

export default TodoListItem;