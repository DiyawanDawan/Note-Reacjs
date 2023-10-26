import React from 'react';
import AppSearch from './AppSearch';

function AppHeader({ onSearch }) {
  return (
    <div className="noshen-app__header">
      <h1>Apps Notes</h1>
      <AppSearch onSearch={onSearch} />
    </div>
  );
}

export default AppHeader;
