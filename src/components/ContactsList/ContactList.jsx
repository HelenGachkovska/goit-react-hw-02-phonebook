import React from 'react';
import ContactItem from '../ContactItem/index';

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(el => {
                return <ContactItem name={el.name} number={el.number} key={el.id} />;
            })}
        </ul>);
};

export default ContactList;
