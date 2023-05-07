import React from 'react';

const ContactFilter = ({ onChange }) => (
  <label>
    <input type="text"  onChange={onChange} />
  </label>
);

export default ContactFilter;