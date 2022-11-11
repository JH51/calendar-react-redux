import { Component } from 'react';
import { connect } from 'react-redux';
import EventItem from './EventItem';

class AllView extends Component {

    render() {

        const eventsList = [];
        if (this.props.eventsList !== undefined) {
            console.log(this.props.eventsList);
            for (const event of this.props.eventsList) {
                eventsList.push(
                    <EventItem source={event} />
                )
            }
        }

        return (
            <div id={this.props.divId} 
                 className={`container-day ${this.props.divClass}`}
                 style={{border: '0.5px solid red'
                 }}>
                {this.props.innerText}
                {eventsList}
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