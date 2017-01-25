import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'app/actions';

import NotesList from 'app/components/NotesList';
import NoteDetails from 'app/components/NoteDetails';

class NotesContainer extends Component {
  constructor() {
    super();
    this.handleSelectNote = this.handleSelectNote.bind(this);
  }
  
  componentDidMount() {
    this.props.startFetchNotes();
  }
  
  handleSelectNote(note) {
    this.props.selectNote(note);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
        
          <NotesList 
            notes={this.props.notes} 
            onSelectNote={this.handleSelectNote} />
          
        </div>
        <div className="col-sm-8">
        
          <NoteDetails activeNote={this.props.activeNote}/>
          
        </div>
      </div>
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
    notes: state.notes,
    activeNote: state.activeNote
  };
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NotesContainer);