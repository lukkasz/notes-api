import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'app/actions';

class NewNote extends Component {
  constructor() {
    super();
    this.handleNoteCreate = this.handleNoteCreate.bind(this);
  }
  
  handleNoteCreate(e){
    e.preventDefault();
    
    const title = this.refs.noteTitle.value;
    const content = this.refs.noteContent.value;

    if (title.length > 0 && content.length > 0) {
      
      this.refs.noteTitle.value = '';
      this.refs.noteContent.value = '';
      
      this.props.addNote(title, content).then((res) => {
        this.context.router.push('/');    
      });
      
      
    }
    
    
  }
  render() {
    return (
      <form onSubmit={this.handleNoteCreate}>
        <div className="form-group">
          <input className="form-control" type="text" ref="noteTitle" placeholder="Note title"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="5" ref="noteContent" placeholder="Note content"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>  
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNote: actions.startAddNote
  }, dispatch);
}

NewNote.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(NewNote);