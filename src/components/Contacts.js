import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider';

// Здесь нужно через контекст получить массив с контактами а затем в цикле прогнать
// каждый из них отрендерив при этом новый компонент с контактом
// Самый простой но самый дрочный способ передать это все пропсами из родителя App
// Но лучше использовать контекст (попробую обойтись без редакса reduxа)


const Contacts = () => {

    // Get contacts from context
    const { contacts } = useContacts();

    return (
        <ListGroup variant="flush">
            {contacts.length ? contacts.map(contact =>
                <ListGroup.Item key={contact.id} style={{ cursor:"pointer" }}>
                    <Image src="https://img.icons8.com/ios-glyphs/50/000000/user-male--v1.png" style={{ width: '2vw', marginRight: '5px' }} rounded />
                    <span>{contact.name}</span>
                </ListGroup.Item>
            ) : <p>You have no contacts yet...</p>}
        </ListGroup>

    )
}

export default Contacts
