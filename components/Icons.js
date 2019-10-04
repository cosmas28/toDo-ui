import React from 'react';
import { MdLockOutline } from 'react-icons/md';
import {
  FaTrashAlt,
  FaRegEdit,
  FaCaretDown,
  FaRegUser,
  FaRegEnvelope
} from 'react-icons/fa';

export const deleteIcon = () => (
  <FaTrashAlt color='#FF0000' size={15} />
);

export const editIcon = () => (
  <FaRegEdit color='#3359DB' size={15} />
);

export const dropdownIcon = () => (
  <FaCaretDown color='#3359DB' size={15} />
);

export const userIcon = () => (
  <FaRegUser size={20} color='0e141e'/>
);

export const emailIcon = () => (
  <FaRegEnvelope size={20} color='0e141e'/>
);

export const passwordIcon = () => (
  <MdLockOutline size={20} color='0e141e'/>
);
