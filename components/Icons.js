import React from 'react';
import { FaTrashAlt, FaRegEdit, FaCaretDown } from 'react-icons/fa';

export const deleteIcon = () => (
  <FaTrashAlt color='#FF0000' size={15} />
);

export const editIcon = () => (
  <FaRegEdit color='#3359DB' size={15} />
);

export const dropdownIcon = () => (
  <FaCaretDown color='#3359DB' size={15} />
);
