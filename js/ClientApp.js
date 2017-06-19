import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="app">
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="Seach" />
        <a>or Browse All</a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
