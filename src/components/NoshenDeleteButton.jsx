import React from 'react';

function NoshenDeleteButton({ id, onDelete }) {
  return (
    <button
      type="button"
      className="noshen-item__delete-button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  );
}

export default NoshenDeleteButton;
