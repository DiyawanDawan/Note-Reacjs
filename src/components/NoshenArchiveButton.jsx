import React from 'react';

function NoshenArchiveButton({ id, onArchive }) {
  return (
    <button
      type="button"
      className="noshen-item__archive-button"
      onClick={() => onArchive(id)}
    >
      Archive
    </button>
  );
}

export default NoshenArchiveButton;
