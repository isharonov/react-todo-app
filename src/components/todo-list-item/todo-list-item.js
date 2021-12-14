import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';


import './todo-list-item.css'

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted,
          onToggleImportant,
          onToggleDone,
          done, important} = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={ onToggleDone }>
        { label }
      </span>

        <span className="todo-list-item-btns">
        <button type="button"
                className="btn btn-outline-success btn-sm"
                onClick={ onToggleImportant }>
          <FontAwesomeIcon icon={solid('exclamation')} />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={onDeleted}>
          <FontAwesomeIcon icon={regular('trash-alt')} />
        </button>
      </span>
      </div>
    );
  }
}