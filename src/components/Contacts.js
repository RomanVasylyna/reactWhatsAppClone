import React from 'react';
import { Image } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactProvider';

// Здесь нужно через контекст получить массив с контактами а затем в цикле прогнать
// каждый из них отрендерив при этом новый компонент с контактом
// Самый простой но самый дрочный способ передать это все пропсами из родителя App
// Но лучше использовать контекст (попробую обойтись без редакса reduxа)


const Contacts = () => {


    // Get contacts from context
    const { contacts } = useContacts();

    return (
        <div className="d-flex flex-column pe-2 pt-3">
            {contacts.length ?
                contacts.map(contact => <div key={contact.id} className="mb-1 border-bottom" style={{ cursor: 'pointer'}}>
                    <Image src="https://img.icons8.com/ios-glyphs/50/000000/user-male--v1.png" style={{ width: '3vw', marginRight: '5px'}} rounded/>
                    <span>{contact.name}</span>
                </div>)
                : <p>You have no contacts yet...</p>
            }
        </div>
    )
}

export default Contacts
