import React from 'react';

function NoshenUnarchiveButton({ id, onUnarchive }) {
  return (
    <button
      type="button"
      className="noshen-item__archive-button"
      onClick={() => onUnarchive(id)}
    >
      Unarchive
    </button>
  );
}

export default NoshenUnarchiveButton;
