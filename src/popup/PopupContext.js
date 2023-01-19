import React, { createContext, useContext, useState } from 'react';

const TIME = 2000;

export const PopupContext = createContext(null);

export const PopupProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');

  const setPopup = (text, type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText('');
      setType('');
    }, TIME);
  };

  return (
    <PopupContext.Provider
      value={{
        text,
        type,
        setPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);