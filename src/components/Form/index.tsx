import React, { FC, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { IData, IDataError } from '../../utils/interfaces';
import M from 'moment';
import './style.css';

interface IProps {
  setData: (obj: IData) => void;
  data: IData;
  onSuccess: () => void;
  error: IDataError;
  setError: (obj: IDataError) => void;
  editIndex: null | number;
  onEditSuccess: () => void;
}

const Form: FC<IProps> = ({
  data,
  setData,
  onSuccess,
  error,
  setError,
  editIndex,
  onEditSuccess,
}) => {
  const handleOnChange = ({ target }: { target: { name: keyof IData; value: string } }) => {
    const obj = { ...data };
    const key = target.name;
    obj[key] = target.value;
    setData(obj);
  };

  const validateData = () => {
    const now = M().format('YYYY-MM-DD');
    const MDate = M(data.date);
    const MTime = M(`${now} ${data.time}`);

    const isFuture = M.duration(M(`${data.date}, ${data.time}`).diff(M())).asHours() > 0;

    const errorObj = { ...error };

    // initialize error every time it runs
    errorObj.tweet = null;
    errorObj.date = null;
    errorObj.time = null;

    if (!data.tweet) {
      errorObj.tweet = 'You must enter a tweet message';
    }

    if (!data.date) {
      errorObj.date = 'You must enter a date';
    } else {
      if (!MDate.isValid()) {
        errorObj.date = 'Please enter a valid date';
      }
      if (!isFuture) {
        errorObj.date = 'Date & Time must not be in the past';
      }
    }

    if (!data.time) {
      errorObj.time = 'You must enter a time';
    } else {
      if (!MTime.isValid()) {
        errorObj.time = 'Please enter a valid time';
      }
    }

    setError(errorObj);

    const { tweet, date, time } = errorObj;

    if (!tweet && !date && !time) {
      onSuccess();
    }
  };
  return (
    <div className="main--form">
      <Input
        placeholder="Your tweet"
        name="tweet"
        value={data.tweet}
        error={error.tweet}
        onChange={handleOnChange}
      />
      <div className="main--form-date">
        <Input
          placeholder="Date (format: YYYY-MM-DD)"
          name="date"
          value={data.date}
          error={error.date}
          onChange={handleOnChange}
        />
      </div>
      <div className="main--form-time">
        <Input
          placeholder="Time (format: HH:MM)"
          name="time"
          value={data.time}
          error={error.time}
          onChange={handleOnChange}
        />
      </div>
      <Button onClick={editIndex !== null ? onEditSuccess : validateData}>Save</Button>
    </div>
  );
};

export default Form;
