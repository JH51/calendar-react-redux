import { Component } from 'react';
import { monthsFull } from './class.js';

class EventItem extends Component {

    render() {
        
        const titleText = this.props.source.title,
            weekText = this.props.source.week,
            monthText = monthsFull[this.props.source.month],
            dayText = this.props.source.day,
            yearText = this.props.source.year,
            startTimeText = this.props.source.startTime,
            endTimeText = this.props.source.endTime;

        return (
            <div style={{border: '0.5px solid black',
                         
            }}>
                <h4>{this.props.source.title} {this.props.source.week}</h4>
                <p>{monthText} {dayText}, {yearText} {startTimeText} - {endTimeText}</p>
                <p></p>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        events: state.genericReducer.calendar.events
    }
}

export default (EventItem)