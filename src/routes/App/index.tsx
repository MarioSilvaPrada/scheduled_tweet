import React, { FC, useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import './style.css';

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
      {
        <Modal isVisible={isModalVisible}>
          <h1>Teste</h1>
        </Modal>
      }
    </>
  );
};

export default App;
