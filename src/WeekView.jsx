import { Component } from 'react';
import { connect } from 'react-redux';

class WeekView extends Component {

    render() {
        return (
            <div>
                <p> Week View</p>
                <p>{JSON.stringify(this.props)}</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        calendar: state.calendar
    }
}

export default connect(mapStateToProps, null)(WeekView);