import React, { FC, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import Card from '../../components/Card';
import { IData, IDataError } from '../../utils/interfaces';
import './style.css';

const App: FC = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myScheduledTweets, setMyScheduledTweets] = useState<Array<IData>>([]);
  const initialData = {
    tweet: '',
    date: '',
    time: '',
  };

  const initialError = {
    tweet: '',
    date: '',
    time: '',
  };

  const [data, setData] = useState<IData>(initialData);
  const [error, setError] = useState<IDataError>(initialError);

  const initializeState = () => {
    setData(initialData);
    setError(initialError);
  };

  const onSuccess = () => {
    setIsModalVisible(false);

    const myArr = [...myScheduledTweets];
    myArr.push(data);
    setMyScheduledTweets(myArr);
    initializeState();
  };

  const onDelete = (index: number) => {
    const arr = [...myScheduledTweets];
    arr.splice(index, 1);
    setMyScheduledTweets(arr);
  };

  const onEdit = (index: number) => {
    const editData = myScheduledTweets[index];
    setData(editData);
    setIsModalVisible(true);
    setEditIndex(index);
  };

  const onEditSuccess = () => {
    const arr = [...myScheduledTweets];
    arr[editIndex] = data;
    console.log(editIndex);
    setMyScheduledTweets(arr);
    setIsModalVisible(false);
    setEditIndex(null);
    initializeState();
  };

  return (
    <>
      <div className="main-container">
        <h1 className="main-container--title">Tweet Schedule</h1>
        <div className="main-container--wrapper">
          <Button onClick={() => setIsModalVisible(true)}>New tweet</Button>
          {myScheduledTweets
            .sort((a, b) => {
              return (
                new Date(`${a.date},${a.time}`).valueOf() -
                new Date(`${b.date},${b.time}`).valueOf()
              );
            })
            .map((myData, i) => (
              <Card
                key={myData.tweet}
                data={myData}
                onDelete={() => onDelete(i)}
                onEdit={() => onEdit(i)}
              />
            ))}
        </div>
      </div>
      <Modal isVisible={isModalVisible}>
        <div className="modal-content">
          <button type="button" className="close-btn" onClick={() => setIsModalVisible(false)}>
            <GrClose />
          </button>
          <Form
            setData={setData}
            data={data}
            error={error}
            setError={setError}
            onSuccess={onSuccess}
            editIndex={editIndex}
            onEditSuccess={onEditSuccess}
          />
        </div>
      </Modal>
    </>
  );
};

export default App;
