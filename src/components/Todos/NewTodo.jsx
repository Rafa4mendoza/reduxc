import React from 'react';
import StorageApi from '../Utils/StorageApi';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo(event) {
    event.preventDefault();
    const name = this.refs.new_name.value;
    const description = this.refs.new_description.value;
    const date_created = this.refs.new_date_created.value;
    const date_expiration = this.refs.new_date_expiration.value;
    const priority = this.refs.new_priority.value;
    const status = 2;
    StorageApi.createTodo({
      name,
      description,
      date_created,
      date_expiration,
      priority,
      status
    });
    this.refs.new_name.value = '';
    this.refs.new_description.value = '';
    this.refs.new_date_created.value = '';
    this.refs.new_date_expiration.value = '';
    this.refs.new_priority.value = 1;
    this.context.getAllTodos();
  }

  render() {
    return (
      <div className="todo-new">
        New Todo

        <form className="form" onSubmit={this.saveTodo}>
          <label className="form-label" htmlFor="new_name">Name</label>
          <input className="form-input" type="text" id="new_name" ref="new_name" />

          <label className="form-label" htmlFor="new_description">Description</label>
          <textarea id="new_description" className="form-area" ref="new_description"></textarea>

          <label className="form-label" htmlFor="new_date_created">Date created</label>
          <input className="form-input" type="date" id="new_date_created" ref="new_date_created" />

          <label className="form-label" htmlFor="new_date_expiration">Date expiration</label>
          <input className="form-input" type="date" id="new_date_expiration" ref="new_date_expiration" />

          <label className="form-label" htmlFor="new_priority">Priority</label>
          <select id="new_priority" className="form-select" ref="new_priority">
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Extreme</option>
          </select>

          <input className="btn btn-ok"  type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

NewTodo.contextTypes = {
  getAllTodos: React.PropTypes.func
};

export default NewTodo;
