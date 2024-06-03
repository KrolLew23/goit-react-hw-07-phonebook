import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactList}>
      {filteredContacts.length > 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
              <span className={css.name}>{contact.name}: </span>
              <span>{contact.phone}</span>
              <button
                className={css.contactItemBtn}
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts</p>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;