import React from 'react';
import { useHistory } from 'react-router-dom';

const ArrowLeft = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/'); // Replace '/' with the desired path of your home page
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="25"
      height="25"
      style={{ cursor: 'pointer' }}
      onClick={goBack}
    >
      <path
        fill="#545454"
        d="M15 3l-12 9 12 9v-6h9v-6h-9z"
      />
    </svg>
  );
};

export default ArrowLeft;