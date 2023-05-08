import React from 'react';

const ContactItem = ({ id, name, number, onDelete }) => {

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
