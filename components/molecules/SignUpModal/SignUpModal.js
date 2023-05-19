// SignUpModal.js
import React from 'react';
import SignUpForm from 'components/molecules/SignUpModal/SignUpForm';

export const SignUpModal = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto z-[300]"> {/* Increase z-index here */}
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity pointer-events-none"
          aria-hidden="true"
        >
          <div onClick={onClose} className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 border border-black"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <button
            onClick={onClose}
            className="float-right text-black hover:text-gray-800"
          >
            &times;
          </button>
          <SignUpForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
