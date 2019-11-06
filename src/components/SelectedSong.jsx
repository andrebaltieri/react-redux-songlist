import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedSong extends Component {
    render() {
        return (
            this.props.selected ?
                <div>{this.props.selected.title}</div>
                :
                <div>Select a song</div>
        );
    };
}

const mapStateToProps = (state) => {
    return { selected: state.selected };
}

export default connect(mapStateToProps)(SelectedSong);