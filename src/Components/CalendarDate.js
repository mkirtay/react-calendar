import React, { Component } from 'react';

export default class CalendarDate extends Component{

    showCalendar(month, year){
        const firstDay =  new Date(year, month).getDay();
        let totalDays = [];

        for( let i = 1; i < firstDay; i++ ){
            totalDays.push( <span className="days-number" key={i}>-</span> )
        }
        for( let i = 1; i < this.props.daysInMonth(month, year) + 1; i++ ){
            totalDays.push( <span className="days-number" key={i}> {i} </span> )
        }
        return(
            <div className="calendar-date__body">
                {totalDays}
            </div>
        )
    }

    render(){
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        const dayName = this.props.days.map( (days, i) => {
            return(
                <span key={i} id={i}>{days.day}</span>
            )
        });

        return (
            <div className="calendar-date">
                <div className="calendar-date__head">
                    {dayName}
                </div>
                {this.showCalendar(currentMonth, currentYear)}
            </div>
        )
    }
}