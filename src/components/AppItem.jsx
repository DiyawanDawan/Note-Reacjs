import React from 'react';

import NoshenHeader from './NoshenHeader';
import NoshenBody from './NoshenBody';
import NoshenDeleteButton from './NoshenDeleteButton';
import NoshenArchiveButton from './NoshenArchiveButton';
import NoshenUnarchiveButton from './NoshenUnarchiveButton';

function NoshenItem({
  id, title, body, createdAt, archived, onDelete, onArchive, onUnarchive,
}) {
  return (
    <div className="noshen-item">
      <div className="noshen-item__content">
        <NoshenHeader title={title} createdAt={createdAt} />
        <NoshenBody body={body} />
      </div>
      <div className="noshen-item__action">
        <NoshenDeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <NoshenUnarchiveButton id={id} onUnarchive={onUnarchive} />
        ) : (
          <NoshenArchiveButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

export default NoshenItem;
