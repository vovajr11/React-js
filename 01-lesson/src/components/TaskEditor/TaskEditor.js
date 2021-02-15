import React from 'react';

export default function TaskEditor({ onAddTask }) {
  return (
    <div>
      <button type="button" onClick={onAddTask}>
        Добавити таск
      </button>
    </div>
  );
}
