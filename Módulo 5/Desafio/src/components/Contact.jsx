import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contact">
			  <img src={this.props.contactAvatar} alt={this.props.contactName} className="contact__avatar" />
			  <span className="contact__data">{this.props.contactName}</span>
			  <span className="contact__data">{this.props.contactPhone}</span>
			  <span className="contact__data">{this.props.contactCountry}</span>
			  <span className="contact__data">{this.props.contactAdmission}</span>
			  <span className="contact__data">{this.props.contactCompany}</span>
			  <span className="contact__data">{this.props.contactDepartament}</span>
		  </article>
    );
  }
}

export default Contact;
