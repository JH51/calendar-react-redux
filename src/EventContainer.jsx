import { Component } from 'react';
import { monthsFull } from './class.js';

class EventItem extends Component {

    render() {

        return (
            <div 
                className='event-container'
                style={{border: '0.5px red solid',
                        height: '0.5vh'
                       }}
            >
                
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