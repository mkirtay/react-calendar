import React, { Component } from 'react';

export default class CalendarDate extends Component{

    state = { totalDays: [], month: new Date().getMonth(), year: new Date().getFullYear() };

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
        /*const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        this.setState(
            {month: currentMonth, year: currentYear}
        )*/

        this.showCalendar(this.state.month, this.state.year);
        console.log(this.state.month);
    }

    onClickPrev(){
        let month = this.state.month;
        let year = this.state.year;

        ( month === 0 ) ? this.setState({ year: year-1}) : this.setState({ year: year });
        ( month === 0 ) ? this.setState({ month: 11 }): this.setState({ month: month-1 });

        this.showCalendar(this.state.month, this.state.year);

    }
    onClickNext(){
        let month = this.state.month;
        let year = this.state.year;

        ( month === 11 ) ? this.setState({ year: year+1 }) : this.setState({ year: year });
        this.setState({ month: (month+1) % 12 });

        this.showCalendar(this.state.month, this.state.year);
    }

    render(){
        const dayName = this.props.days.map( (days, i) => {
            return(
                <span key={i} id={i}>{days.day}</span>
            )
        });

        const monthName = this.props.months.map( (months, i) => {
            return(
                <option key={i} value={i}>{months.month}</option>
            )
        });

        const year = this.props.years.map( (years, i) => {
            return(
                <option key={i} value={i}> {years.year} </option>
            )
        });

        return (
            <div>
                <h3 className="calendar__title "> { this.state.month }  { this.state.year }  </h3>
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
                <div className="buttons">
                    <button onClick={this.onClickPrev.bind(this)}>PREV</button>
                    <button onClick={this.onClickNext.bind(this)}>NEXT</button>
                </div>
                <div>
                    <select onChange={this.onChangeMonth} className="select-month">
                        {monthName}
                    </select>
                    <select onChange={this.onChangeYear} className="select-year">
                        {year}
                    </select>
                </div>
            </div>
        )
    }
}