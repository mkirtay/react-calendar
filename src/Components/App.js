import React, { Component } from 'react';
import Calendar from './Calendar';
import '../styles/CalendarDate.css';

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
        ],
        months: [
            {
                id: '1',
                month: 'January'
            },
            {
                id: '2',
                month: 'February'
            },
            {
                id: '3',
                month: 'March'
            },
            {
                id: '4',
                month: 'April'
            },
            {
                id: '5',
                month: 'May'
            },
            {
                id: '6',
                month: 'June'
            },
            {
                id: '7',
                month: 'July'
            },
            {
                id: '8',
                month: 'August'
            },
            {
                id: '9',
                month: 'September'
            },
            {
                id: '10',
                month: 'October'
            },
            {
                id: '11',
                month: 'November'
            },
            {
                id: '12',
                month: 'December'
            },
        ]
    };

    daysInMonth(month, year){
        return 32 -  new Date(year, month, 32).getDate()
    };

    render() {
        return (
            <div className="App">
                <Calendar daysInMonth={ this.daysInMonth } days={ this.state.days } months={ this.state.months }/>
            </div>
        );
    }
}

export default App;
