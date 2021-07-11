import React, { FC, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import './style.css';

interface IProps {}

const Form: FC<IProps> = () => {
  const [data, setData] = useState({
    tweet: '',
    date: '',
    time: '',
  });

  const handleOnChange = ({
    target,
  }: {
    target: { name: string; value: string };
  }) => {
    const obj = { ...data };
    obj[target.name] = target.value;
    setData(obj);
  };
  return (
    <div className="main--form">
      <Input
        placeholder="tweet"
        name="tweet"
        value={data.tweet}
        onChange={handleOnChange}
      />
      <Button onClick={() => console.log(data)}>Save</Button>
    </div>
  );
};

export default Form;
