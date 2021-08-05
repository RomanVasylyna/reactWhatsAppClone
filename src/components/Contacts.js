import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider';

// Здесь нужно через контекст получить массив с контактами а затем в цикле прогнать
// каждый из них отрендерив при этом новый компонент с контактом
// Самый простой но самый дрочный способ передать это все пропсами из родителя App
// Но лучше использовать контекст (попробую обойтись без редакса reduxа)


const Contacts = () => {

    const contacts = JSON.parse(localStorage.getItem('whatsapp-clone-contacts'));

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);


    return (
        <div className="d-flex flex-column pe-2 pt-3">
            { contacts ? contacts.map(contact => <Button key={contact.id} variant="success" className="mb-1">{contact.name}</Button>) : <p>You have no contacts</p> }
        </div>
    )
}

export default Contacts
