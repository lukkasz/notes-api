import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'app/actions';

import NotesList from 'app/components/NotesList';

class NotesContainer extends Component {
  constructor() {
    super();
    this.handleSelectNote = this.handleSelectNote.bind(this);
  }
  
  componentDidMount() {
    this.props.startFetchNotes();
  }
  
  handleSelectNote(note) {
    console.log("note selected!!!", note);
    this.props.selectNote(note);
  }
  
  render() {
    console.log("Props", this.props);
    return (
      <NotesList 
        notes={this.props.notes} 
        onSelectNote={this.handleSelectNote}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startFetchNotes: actions.startFetchNotes,
    selectNote: actions.selectNote
  }, dispatch);
}


function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NotesContainer);