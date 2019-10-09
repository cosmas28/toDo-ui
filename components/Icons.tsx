import React from 'react';
import { MdLockOutline } from 'react-icons/md';
import { FaTrashAlt, FaRegEdit, FaCaretDown, FaRegUser, FaRegEnvelope } from 'react-icons/fa';

export const deleteIcon = (): JSX.Element => <FaTrashAlt color="#FF0000" size={15} />;

export const editIcon = (): JSX.Element => <FaRegEdit color="#3359DB" size={15} />;

export const dropdownIcon = (): JSX.Element => <FaCaretDown color="#3359DB" size={15} />;

export const userIcon = (): JSX.Element => <FaRegUser size={20} color="0e141e" />;

export const emailIcon = (): JSX.Element => <FaRegEnvelope size={20} color="0e141e" />;

export const passwordIcon = (): JSX.Element => <MdLockOutline size={20} color="0e141e" />;
