import React from 'react';
import { Button, Item, Text } from './styled';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </Item>
  );
};

export default ContactItem;
