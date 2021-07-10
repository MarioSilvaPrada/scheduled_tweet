import React, { FC, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import './style.css';
import { GrClose } from 'react-icons/gr';

const App: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className="main-container">
        <h1>Title</h1>
        <div className="main-container--wrapper">
          <Button onClick={() => setIsModalVisible(true)}>New tweet</Button>
        </div>
      </div>
      <Modal isVisible={isModalVisible}>
        <div className="modal-content">
          <button type="button" onClick={() => setIsModalVisible(false)}>
            <GrClose />
          </button>
          <Form />
        </div>
      </Modal>
    </>
  );
};

export default App;
