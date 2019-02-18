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
                month: 'January'
            },
            {
                month: 'February'
            },
            {
                month: 'March'
            },
            {
                month: 'April'
            },
            {
                month: 'May'
            },
            {
                month: 'June'
            },
            {
                month: 'July'
            },
            {
                month: 'August'
            },
            {
                month: 'September'
            },
            {
                month: 'October'
            },
            {
                month: 'November'
            },
            {
                month: 'December'
            },
        ],
        years: [
            {
                year: '2019'
            },
            {
                year: '2018'
            },
            {
                year: '2017'
            },
            {
                year: '2016'
            },
            {
                year: '2015'
            },
            {
                year: '2014'
            },
            {
                year: '2013'
            },
            {
                year: '2012'
            },
            {
                year: '2011'
            },
            {
                year: '2010'
            },
            {
                year: '2009'
            },
            {
                year: '2008'
            },
        ],
    };

    daysInMonth(month, year){
        return 32 -  new Date(year, month, 32).getDate()
    };

    render() {
        return (
            <div className="App">
                <Calendar daysInMonth={ this.daysInMonth } days={ this.state.days } months={ this.state.months } years={this.state.years}/>
            </div>
        );
    }
}

export default App;
