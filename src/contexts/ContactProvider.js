import React, { useState, useContext } from 'react';

// Creating a new context
const ContactContext = React.createContext();

// Exporting the ability to add contacts
export const addContact = () => {
    return useContext(ContactContext);
};

// Exporting the newly created custom hook
export const ContactProvider = ({ children }) => {
    // Add Contact Logic
    const [contacts, setContacts] = useState([]);

    const createContact = (id, name) => {
        setContacts([...contacts, { id, name }]);
    }

    return (
        <ContactContext value={contacts}>
            {children}
        </ContactContext>
    )
}

export default ContactContext
