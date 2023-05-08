import React from 'react';
import PropTypes from 'prop-types';
import {Input } from './styled';

const ContactFilter = ({ onChange }) => (
  <label>
    <Input type="text"  onChange={onChange} />
  </label>
);

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
}


export default ContactFilter;