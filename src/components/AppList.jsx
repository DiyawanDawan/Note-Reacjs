import React from 'react';

import AppItem from './AppItem';

function AppList({
  notes, onDelete, onArchive, onUnarchive, keyword,
}) {
  return (
    <div className="noshen-list">
      {notes
        .filter((note) => note.title
          .toLowerCase()
          .includes(keyword.toLowerCase()))
        .map((note) => (
          <AppItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            {...note}
          />
        ))}
    </div>
  );
}

export default AppList;
