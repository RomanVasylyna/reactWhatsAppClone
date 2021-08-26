import React, { useState } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationProvider';

const Conversations = () => {

    const { conversations, selectConversationIndex, selectedConversationIndex } = useConversation();
    // 1. передаем индекс текущего разговора в функцию по клику
    // 2. Функция сопоставляет индексы (находит нужный разговор)
    // 3. добавляем свойство selected в объект с разговором совпадающим с индексом
    // 4. Если conversation.selected = true то элемент active (синий)

    // active={conversation.selected}
    // onClick={() => selectConversationIndex(index)

    // Если индекс ListGroup.Item совпадает с индексом родительского массиваыыы

    const findMatch = () => {

    }
     
    // console.log(conversations.filter((conversation, index) => conversation.selected));
    console.log(selectedConversationIndex);

    return (

        <ListGroup variant="flush">
            {conversations.length ?
                conversations.map(conversation => conversation.newConversation.map(conversation => conversation.contactName).join(',')).map((name, index) =>
                    <ListGroup.Item
                    key={index}
                    action
                    onClick={() => selectConversationIndex(index)}
                    active={index === selectedConversationIndex}>
                        {name}
                    </ListGroup.Item>
                ) : <p>You have no conversations yet...</p>}
        </ListGroup>

    )
}

export default Conversations
