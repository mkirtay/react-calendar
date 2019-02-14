import React, { Component } from 'react';
import CalendarTitle from './CalendarTitle';
import CalendarDate from './CalendarDate';

export default class Calendar extends Component {

    render(){
        return(
            <div className="calendar">
                <CalendarTitle months={ this.props.months }/>
                <CalendarDate daysInMonth={ this.props.daysInMonth } days={ this.props.days }/>
            </div>
        )
    }
}