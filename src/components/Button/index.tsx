import React, { FC } from 'react';
import './style.css';

interface IProps {
  children: string;
  onClick: () => void;
}

const Button: FC<IProps> = ({ children, onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
