import React from 'react';

const TaskListItem = ({ text, onRemove }) => (
  <li className="TaskList-item">
    <p className="TaskList-text">{text}</p>

    <section className="TaskList-actions">
      <button className="TaskList-button" type="button" onClick={onRemove}>
        Видалити
      </button>
    </section>
  </li>
);

export default TaskListItem;
