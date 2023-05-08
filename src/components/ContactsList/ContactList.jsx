import React from 'react';
import ContactItem from '../ContactItem/index';
import {List} from './styled'

const ContactList = ({ contacts, onDelete }) => {
 
    return (
        <List>
            {contacts.map(el => {
                return <ContactItem name={el.name} number={el.number} key={el.id} id={el.id} onDelete={onDelete} />;
            })}
        </List>);
};

export default ContactList;
