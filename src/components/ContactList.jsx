import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => {
        return (
          <ContactItem
            key={contact.id}
            {...contact}
            id={contact.id}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
