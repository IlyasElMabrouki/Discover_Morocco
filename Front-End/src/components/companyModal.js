'use client'
import { useState } from 'react';
import Form from './companyForm';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-16 bg-blue-500">
        <h1 className="mr-3">
          Your account as a company owner is disabled to enabled fill the form
        </h1>
        <button
          onClick={toggleModal}
          className="bg-white border border-black p-2"
        >
          Open Modal
        </button>
      </div>
      {showModal && (
        <div className="absolute left-1/2 transform -translate-x-1/2 my-24 bg-gray-200 p-4 rounded-lg">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
