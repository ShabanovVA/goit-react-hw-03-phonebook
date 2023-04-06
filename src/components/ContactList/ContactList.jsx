import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { ListContact } from "./ContactList.styled";

export const ContactList = ({contacts, onDeleteContact}) => {
      return (
    <ListContact>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}>
            </ContactItem>
        );
      })}
    </ListContact>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}