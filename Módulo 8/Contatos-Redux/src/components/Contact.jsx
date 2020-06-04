import React from 'react';

class Contact extends React.Component {
  render() {
	let date = this.props.data.admissionDate.split('T')[0].split('-');
	date = `${date[2]}/${date[1]}/${date[0]}`;
    return (
      <article className="contact" data-testid="contact">
			  <img src={this.props.data.avatar} alt={this.props.data.name} className="contact__avatar" />
			  <span className="contact__data" data-testid="contact-name">{this.props.data.name}</span>
			  <span className="contact__data" data-testid="contact-phone">{this.props.data.phone}</span>
			  <span className="contact__data" data-testid="contact-country">{this.props.data.country}</span>
			  <span className="contact__data" data-testid="contact-date">{date}</span>
			  <span className="contact__data" data-testid="contact-company">{this.props.data.company}</span>
			  <span className="contact__data" data-testid="contact-department">{this.props.data.department}</span>
		  </article>
    );
  }
}

export default Contact;
