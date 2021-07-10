import React, { FC } from 'react';
import Input from '../Input';

interface IProps {
  children: string;
  onClick: () => void;
}

const Form: FC<IProps> = ({ children, onClick }) => (
  <div>
    <Input placeholder="tweet" />
  </div>
);

export default Form;
