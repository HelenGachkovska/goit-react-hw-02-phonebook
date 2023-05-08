import React from 'react';
import {Input } from './styled';

const ContactFilter = ({ onChange }) => (
  <label>
    <Input type="text"  onChange={onChange} />
  </label>
);

export default ContactFilter;