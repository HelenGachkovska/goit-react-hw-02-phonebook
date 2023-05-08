import React from 'react';
import ContactItem from '../ContactItem/index';

const ContactList = ({ contacts, onDelete }) => {
 
    return (
        <ul>
            {contacts.map(el => {
                return <ContactItem name={el.name} number={el.number} key={el.id} id={el.id} onDelete={onDelete} />;
            })}
        </ul>);
};

export default ContactList;
