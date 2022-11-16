import { Component } from 'react';
import { connect } from 'react-redux';
import EventItem from './EventItem';
import DayContainer from './DayContainer';
import EventContainer from './EventContainer';

const dayContainers = [], weekTemplate = [];
for (let i = 0; i < 60 * 24 / 5 * 8; i++) {
    // week
    dayContainers.push(
        <EventContainer 
            // start={i * 5 + ""}
            // end={(i + 1) * 5 + ""} 
        />
        )
}

class WeekContainer extends Component {

    render() {
       return ( 
           <div
            style={{display: 'grid',
                    gridTemplateColumns: '0.75fr repeat(7, 1fr)'
                   }}
           >
            {dayContainers};
           </div>
       )
    }
    
}

// const mapStateToProps = (state) => {
//     return {
//         events: state.genericReducer.events,
//         minWeek: state.genericReducer.minWeek,
//         maxWeek: state.genericReducer.maxWeek
//     }
// }

export default WeekContainer;