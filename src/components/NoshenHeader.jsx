import React from 'react';

import { showFormattedDate } from '../utils/index';

function NoshenHeader({ title, createdAt }) {
  return (
    <>
      <h3 className="noshen-item__title">{title}</h3>
      <p className="noshen-item__date">{showFormattedDate(createdAt)}</p>
    </>
  );
}

export default NoshenHeader;
