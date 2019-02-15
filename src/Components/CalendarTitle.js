import React, { Component } from 'react';

export default class CalendarTitle extends Component{

    monthText(month, year){
        return(
            <div>

                <span> {year} </span>
            </div>
        )
    }

    render(){
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        console.log( this.props.months );

        return(
            <h3 className="calendar__title "> {this.monthText(currentMonth, currentYear)} </h3>
        )
    }
}