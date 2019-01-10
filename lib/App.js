import React from 'react';
import Gel from './Gel';
import Slider from './Slider';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Gel />
        <Slider />
      </div>
    );
  }
}

export default App;
