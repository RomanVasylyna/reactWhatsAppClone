import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Initializing context
const ContactsContext = React.createContext();

// Exporting 
export const useContacts = () =>{
    return useContext(ContactsContext);
}

// Exporting the newly created custom hook
export const ContactProvider = ({ children }) => {
    // Add Contact Logic
    const [contacts, setContacts] = useLocalStorage('contacts', []);
   
    const createContacts = (id, name) => {
        return setContacts([...contacts, { id, name }]);
    }

    return (
        // This is a wrapper that is going to allow all it's children to use context
        // We can pass various datatypes as value so that it can be used by children
        <ContactsContext.Provider value={{ contacts, createContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}
