import React, { FC } from 'react';
import './style.css';

interface IProps {}

const Input: FC<IProps> = ({ ...props }) => (
  <input {...props} className="input--container" />
);

export default Input;
