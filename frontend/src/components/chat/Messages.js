import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessages } from '../../actions/contactActions';
import { ChatInput } from './ChatInput';

class Messages extends Component {
  componentDidMount() {
    //const { name, email, errors } = this.state;
    //this.setState({email: this.props.location.state});
    this.props.getMessages();
  }

  render() {
    const { contacts } = this.props;

    console.log(this.props.location.state);
    return ( 
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">{this.props.location.state.contact.name}</span>
        </h1>
        <div>
        <form className="chat-input" >
        <input type="text"
          onChange={this.textChangeHandler}
          placeholder="Write a message..."
          required />
        </form>
        </div>
        <div>
        <button type="button" className="login-btn" onClick={this.onSubmit}>SEND</button>
        </div>
        
      </React.Fragment>
    );
  }
}

Messages.propTypes = {
  contacts: PropTypes.array.isRequired,
  getMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
