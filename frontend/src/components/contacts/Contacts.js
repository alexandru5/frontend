import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    //const { name, email, errors } = this.state;
    this.setState({email: this.props.location.state});
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    const emailFrom  = this.props.location.state;
    
    console.log("Baaaa " + emailFrom);
    return ( 
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} email={emailFrom} props={this.props}/>
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
