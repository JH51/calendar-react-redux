import { Component } from 'react';
import { connect } from 'react-redux';
import DayContainer from './DayContainer';
import './AllView.scss'

class AllView extends Component {

    render() {

        const eventsByWeekAndDay = {};
        if (this.props.events !== undefined) {
            // console.log(this.props.events);
            for (const event of this.props.events) {
                    if (eventsByWeekAndDay[event.week] === undefined)
                        eventsByWeekAndDay[event.week] = {};
                    if (eventsByWeekAndDay[event.week][event.weekday] === undefined)
                        eventsByWeekAndDay[event.week][event.weekday] = [];
                    eventsByWeekAndDay[event.week][event.weekday].push(event);
            }
        }

        const emptyDayContainers = [];
        if (this.props.minWeek !== undefined && this.props.maxWeek !== undefined) {
            for (let i = this.props.minWeek; i <= this.props.maxWeek; i++) {
                emptyDayContainers.push(
                    <DayContainer 
                        divId={`week-${i}-header}`} 
                        divClass={`week-header`}
                        innerText={i} 
                    />)
                for (let j = 0; j < 7; j++) {
                    emptyDayContainers.push(
                        <DayContainer 
                            divId={`week-${i}-day-${j}`} 
                            divClass={`week-${i} day-${j}`} 
                            eventsList={eventsByWeekAndDay[i][j]} 
                         />)
                }
            }
        }

        return (
            <div>
                <p> All View</p>
                <div id="grid">
                    <div className='day-header'>
                        <h2>Week</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Sunday</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Monday</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Tuesday</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Wednesday</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Thursday</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Friday</h2>
                    </div>
                    <div className='day-header'>
                        <h2>Saturday</h2>
                    </div>
                    {emptyDayContainers}
                {/* {eventsArr}; */}
                </div>
                {/* <p> {JSON.stringify(this.props.events)}</p> */}
                {/* <p> {JSON.stringify(this.props)}</p> */}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        events: state.genericReducer.events,
        minWeek: state.genericReducer.minWeek,
        maxWeek: state.genericReducer.maxWeek
    }
}

export default connect(mapStateToProps, null)(AllView);