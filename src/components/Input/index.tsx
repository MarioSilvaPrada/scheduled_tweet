import React, { FC } from 'react';

interface IProps {
  children: string;
  onClick: () => void;
}

const Input: FC<IProps> = ({ children, onClick }) => (
  <div>
    <h1>Input</h1>
  </div>
);

export default Input;
