import React, { Component } from 'react';
import CalendarTitle from './CalendarTitle';
import CalendarDate from './CalendarDate';

export default class Calendar extends Component {

    render(){
        return(
            <div className="calendar">
                <CalendarTitle/>
                <CalendarDate days={this.props.days}/>
            </div>
        )
    }
}