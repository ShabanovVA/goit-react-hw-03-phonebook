import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddContactBtn, ContactFormInput, ContactFormLabel, FormContact } from './Form.styled';

export class Form extends Component{
    state = {
      name: '',
      number: ''
    }
  
      handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]:value, id:nanoid() })
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      
      if (this.props.contacts.find(contact => contact.name.toLowerCase() === this.state.name.toLowerCase())) {
        return alert(`${this.state.name} is already in contacts.`)
      }

      this.props.onClickSubmit(this.state);
      this.reset();
  };
  
  reset = () => {
    this.setState({ name: '', number:''})

  }
    render() {
        return (
          <FormContact onSubmit={this.handleSubmit}>
              <ContactFormLabel>
                Name
                <ContactFormInput
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
          />
        </ContactFormLabel>
        <ContactFormLabel>
          Number
          <ContactFormInput
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactFormLabel>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </FormContact>);
    }
}

Form.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
}