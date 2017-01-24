import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'app/actions';

class NotesDetailsContainer extends Component {
 
  render() {
    console.log(this.props);
    if (!this.props.activeNote) {
      return (
        <div>
          Notes Details Container
        </div>  
      );
    }
    return (
      <div>
        <h1>{this.props.activeNote.title}</h1>
        <div>{this.props.activeNote.content}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectNote: actions.selectNote
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    activeNote: state.activeNote
  };
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NotesDetailsContainer);