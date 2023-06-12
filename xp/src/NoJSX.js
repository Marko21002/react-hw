import React from 'react';

function NoJSX() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('h1', null, 'I do not use JSX')
    )
  );
}

export default NoJSX;
