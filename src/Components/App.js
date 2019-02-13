import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {

  state = {
    days: [
        {
          day: 'Monday'
        },
        {
          day: 'Tuesday'
        },
        {
          day: 'Wednesday'
        },
        {
          day: 'Thursday'
        },
        {
          day: 'Friday'
        },
        {
          day: 'Saturday'
        },
        {
          day: 'Sunday'
        },
    ]
  };


  render() {
    return (
      <div className="App">
        <Calendar days={ this.state.days }/>
      </div>
    );
  }
}

export default App;
