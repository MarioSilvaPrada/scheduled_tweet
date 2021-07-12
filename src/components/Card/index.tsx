import React, { FC } from 'react';
import { IData } from '../../utils/interfaces';
import M from 'moment';

import { BsTrash } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import './style.css';

interface IProps {
  data: IData;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const Button: FC<IProps> = ({ data, onEdit, onDelete }) => (
  <div className="tweet-card">
    <p>{data.tweet}</p>
    <div className="tweet-card--right">
      <div className="tweet-card--date">
        <p className="tweet-card--date-title">Scheduled for:</p>
        <p className="tweet-card--date-content">
          {M(`${data.date} ${data.time}`).format('MMMM Do YYYY, HH:mm')}
        </p>
      </div>
      <div className="tweet-card--date-icons">
        <FiEdit2 color="green" size={20} onClick={onEdit} />
        <BsTrash color="red" size={20} onClick={onDelete} />
      </div>
    </div>
  </div>
);

export default Button;
