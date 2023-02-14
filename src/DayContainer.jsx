import { Component } from 'react';
import { connect } from 'react-redux';
import EventItem from './EventItem';

class AllView extends Component {

    render() {

        if (this.props.divClass === 'week-header') {
            return (
                <div id={this.props.divId} 
                    className={`day-container ${this.props.divClass}`}
                >
                    <p class={this.props.divClass}>
                        {this.props.innerText}
                    </p>
                </div>
        )}

        const eventsList = [];
        if (this.props.eventsList !== undefined) {
            // console.log(this.props.eventsList);
            for (const event of this.props.eventsList) {
                eventsList.push(
                    <EventItem source={event} />
                )
            }
        }

        return (
            <div id={this.props.divId} 
                 className={`day-container ${this.props.divClass}`}
            >
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