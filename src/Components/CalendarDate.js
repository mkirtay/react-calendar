import React, {Component} from 'react';

export default class CalendarDate extends Component {

    state = {totalDays: [], month: new Date().getMonth(), year: new Date().getFullYear()};

    showCalendar(month, year) {
        const firstDay = new Date(year, month).getDay();
        let totalDays = [];

        for (let i = 1; i < firstDay; i++) {
            totalDays.push('')
        }
        for (let i = 1; i < this.props.daysInMonth(month, year) + 1; i++) {
            totalDays.push(i)
        }

        this.setState(
            {totalDays: totalDays}
        )
    }

    componentDidMount() {
        /*const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        this.setState(
            {month: currentMonth, year: currentYear}
        )*/

        console.log(this.props.years)
        this.showCalendar(this.state.month, this.state.year);
    }

    onChangeMonth(e) {
        const selectValueMonth = e.target.value;

        this.setState({
            month: selectValueMonth
        });

        this.showCalendar(selectValueMonth, this.state.year);
    }

    onChangeYear(e) {
        const selectValueYear = e.target.value;

        this.setState({
            year: selectValueYear
        });

        this.showCalendar(this.state.month, selectValueYear);
    }


    onClickPrev() {
        let month = this.state.month;
        let year = this.state.year;

        year = ( month === 0 ) ? year - 1: year;
        month = ( month === 0 ) ? 11 : (month-1);

        this.showCalendar(month, year);
        this.setState({ month: month, year: year })
    }


    onClickNext() {
        let month = this.state.month;
        let year = this.state.year;

        year = ( month === 11 ) ? year + 1 : year;
        month = (month + 1) % 12;

        this.showCalendar(month, year);
        this.setState({month:month,year:year});
    }

    render() {
        const dayName = this.props.days.map((days, i) => {
            return (
                <span key={i} id={i}>{days.day}</span>
            )
        });

        const monthName = this.props.months.map((months, i) => {
            return (
                <option key={i} name={months.month} value={i}>{months.month}</option>
            )
        });

        const year = this.props.years.map((years, i) => {
            return (
                <option key={i} value={years.year}> {years.year} </option>
            )
        });

        return (
            <div>
                <h3 className="calendar__title "> {this.props.months[this.state.month].month} {this.state.year}  </h3>
                <div className="calendar-date">
                    <div className="calendar-date__head">
                        {dayName}
                    </div>
                    <div className="calendar-date__body">
                        {this.state.totalDays.map((day, i) => {
                            return (
                                <span className="sss" key={i}> {day} </span>
                            )
                        })}
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={this.onClickPrev.bind(this)}>PREV</button>
                    <button onClick={this.onClickNext.bind(this)}>NEXT</button>
                </div>
                <div>
                    <select onChange={this.onChangeMonth.bind(this)} className="select-month">
                        {monthName}
                    </select>
                    <select onChange={this.onChangeYear.bind(this)} className="select-year">
                        {year}
                    </select>
                </div>
            </div>
        )
    }
}