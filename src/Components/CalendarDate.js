import React, { Component } from 'react';

export default class CalendarDate extends Component{

    componentWillMount(){
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const currentDay = today.getDay();

        this.showCalendar(currentMonth, currentYear);

    }

    showCalendar(month, year){
        const firstDay = new Date(year, month).getDate();
    }

    render(){
        const days = this.props.days.map( (days, i) => {
            return(
                <span key={i} id={i}>{days.day}</span>
            )
        });

        return (
            <div className="calendar-date">
                <div className="calendar-date__head">
                    {days}
                </div>
                <div className="calendar-date__body"></div>
            </div>
        )
    }
}