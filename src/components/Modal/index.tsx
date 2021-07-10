import React, { FC } from 'react';
import './style.css';

interface IProps {
  isVisible: boolean;
  children: JSX.Element;
}

const Modal: FC<IProps> = ({ children, isVisible }) =>
  isVisible && (
    <div className="modal--background">
      <div className="modal--container">{children}</div>
    </div>
  );

export default Modal;
