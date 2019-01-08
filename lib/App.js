import React from 'react';
import Gel from './Gel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Gel />
      </div>
    );
  }
}

export default App;
