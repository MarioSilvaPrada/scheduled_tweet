import React, { FC } from 'react';

interface IProps {
  children: string;
  onClick: () => void;
}

const Form: FC<IProps> = ({ children, onClick }) => (
  <div>
    <h1>Form</h1>
  </div>
);

export default Form;
