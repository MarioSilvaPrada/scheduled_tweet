import React, { FC } from 'react';
import './style.css';

interface IProps {
  placeholder: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
  error: string | null;
}

const Input: FC<IProps> = ({ placeholder, value, name, error, onChange }) => (
  <div className="input-wrapper">
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input--container"
    />
    {!!error && <p className="input-wrapper--error">{error}</p>}
  </div>
);

export default Input;
