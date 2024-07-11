import React, { createContext, useState } from 'react';

export const CustomMarkerContext = createContext();

export const CustomMarkerContextProvider = ({ children }) => {
  const [customMarker, setCustomMarker] = useState(null);
  return (
    <CustomMarkerContext.Provider value={{ customMarker, setCustomMarker }}>
      {children}
    </CustomMarkerContext.Provider>
  );
};