

import React, { createContext, useState } from 'react';

const ContextUsage = createContext();

export const NewContext = ({ children }) => {
  const [state, setState] = useState({
    mobileNO: "+918247456430",
    name: "nithin",
  })

  return (
    <>
      <h1>Context Hook Example</h1>
      <ContextUsage.Provider value={state}>
        {children}
      </ContextUsage.Provider>
    </>
  );
};

export { ContextUsage };
