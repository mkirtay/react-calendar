import React, { Component } from 'react';
import CalendarDate from './CalendarDate';


export default class Calendar extends Component {

    render(){
        return(
            <div className="calendar">
                <CalendarDate showCalendar={this.props.showCalendar} daysInMonth={ this.props.daysInMonth } days={ this.props.days } years={this.props.years} months={this.props.months}/>
            </div>
        )
    }
}