import React from 'react';
import { Alert } from '@mui/material';
import {usePopup} from './PopupContext'

const PopupAlert = () => {
  const { text, type } = usePopup();

  if (text && type) {
    return (
      <Alert
        severity={type}
        variant={'filled'}
        className='popup'
      >
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default PopupAlert;