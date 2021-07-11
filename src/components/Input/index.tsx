import React, { FC } from 'react';
import './style.css';

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
}

const Input: FC<IProps> = ({ placeholder, value, name, onChange }) => (
  <input
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input--container"
  />
);

export default Input;
