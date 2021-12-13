import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';


import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
        onClick={ this.onLabelClick }>
        { label }
      </span>

        <span className="todo-list-item-btns">
        <button type="button"
                className="btn btn-outline-success btn-sm"
                onClick={this.onMarkImportant}>
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