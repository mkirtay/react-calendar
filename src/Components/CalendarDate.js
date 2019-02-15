import React, { Component } from 'react';

export default class CalendarDate extends Component{

    state = { totalDays: [] };

    showCalendar(month, year){
        const firstDay =  new Date(year, month).getDay();
        let totalDays = [];

        for( let i = 1; i < firstDay; i++ ){
            totalDays.push( '' )
        }
        for( let i = 1; i < this.props.daysInMonth(month, year) + 1; i++ ){
            totalDays.push( i )
        }

        this.setState(
            { totalDays: totalDays }
        )
    }

    componentDidMount(){
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        this.showCalendar(currentMonth, currentYear)

    }

    render(){
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
                <div className="calendar-date__body">
                    {this.state.totalDays.map( (day, i) => {
                        return(
                            <span className="sss" key={i}> {day} </span>
                        )
                    } )}
                </div>
            </div>
        )
    }
}