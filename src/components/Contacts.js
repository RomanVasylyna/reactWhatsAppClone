import React from 'react'
import { Button } from 'react-bootstrap';

// Здесь нужно через контекст получить массив с контактами а затем в цикле прогнать
// каждый из них отрендерив при этом новый компонент с контактом
// Самый простой но самый дрочный способ передать это все пропсами из родителя App
// Но лучше использовать контекст (попробую обойтись без редакса reduxа)

const Contacts = () => {
    return (
        <div className="d-flex flex-column pe-2">
            <Button variant="success" className="mt-3 mb-1">Penny</Button>
            <Button variant="success">Jake</Button>
        </div>
    )
}

export default Contacts
