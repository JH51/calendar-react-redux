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
            endTimeText = this.props.source.endTime,
            descriptionText = this.props.source.description;

        return (
            <div className='event-item'>
                <div className='vertical-tag'></div>
                <div className='contents'>
                    <p class='event-title'>{titleText}</p>
                    <p class='event-time'>{monthText} {dayText}, {yearText} {startTimeText} - {endTimeText}</p>
                    {/* <p class='description'>{descriptionText}</p> */}
                </div>
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