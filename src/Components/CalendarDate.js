import React, {Component} from 'react';
import Select from 'react-select';
import '../styles/Select.css';
import 'react-select/dist/react-select.css';

export default class CalendarDate extends Component {

    state = {
        totalDays: [],
        selectMonths: [],
        selectYears: [],
        month: new Date().getMonth(),
        year: new Date().getFullYear()};

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
        this.showCalendar(this.state.month, this.state.year);
        let months2 = [ ];
        let year2 = [ ];

        this.props.months.map( (months, i) => {
            months2.push({label: months.month, value:i})
        });

        this.props.years.map( (years) => {
            year2.push({label: years.year, value:years.year})
        });

        this.setState({
                selectMonths: months2,
                selectYears: year2
            }
        )
    }

    onChangeMonth(selectedOption) {
        const selectValueMonth = selectedOption.value;

        this.setState({
            month: selectValueMonth
        });

        this.showCalendar(selectValueMonth, this.state.year);
    }

    onChangeYear(selectedOption) {
        const selectValueYear = selectedOption.value;

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
                <div className="select-container">
                    <div>
                        <span>Month</span>
                        <Select onChange={this.onChangeMonth.bind(this)} placeholder={this.props.months[this.state.month].month} className="select-month" options={this.state.selectMonths}/>
                    </div>
                    <div>
                        <span>Year</span>
                        <Select onChange={this.onChangeYear.bind(this)} placeholder={this.state.year} className="select-month" options={this.state.selectYears}/>
                    </div>
                </div>
            </div>
        )
    }
}