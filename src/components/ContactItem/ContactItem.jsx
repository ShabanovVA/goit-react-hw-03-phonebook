import { Component } from "react";
import PropTypes from 'prop-types';
import { Contact, ContactValue, DeleteContactBtn } from "./ContactItem.styled";

export class ContactItem extends Component{
    render() {
        const { id, name, number, onDeleteContact } = this.props;
        return (
            < Contact key={id}>
                <ContactValue>{name}:</ContactValue>
                <ContactValue>{number}</ContactValue>
                <DeleteContactBtn type="button" onClick={()=>onDeleteContact(id)}>Delete</DeleteContactBtn>
            </Contact >);
        
}
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};