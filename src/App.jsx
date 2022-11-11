import { Component } from "react";
import { Event } from './class.js';
import AllView from './AllView.jsx';
import WeekView from './WeekView.jsx';
import { connect } from 'react-redux'
import loadCalendarActionCreator from './actions.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.loadCalendar();
    }

    render() {
        return (
            <div id='calendar'>
                <AllView />
                {/* <WeekView /> */}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCalendar: () => dispatch(loadCalendarActionCreator())
    }
}

export default connect(null, mapDispatchToProps)(App);