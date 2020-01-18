import React, { createContext, useContext, useState } from "react";

const JwtTokenProvider = children => {;
  const [jwtToken, setJwtToken] = useState(null);

  const updateToken = jwtToken => setJwtToken(jwtToken);

  const jwtTokenValue = { jwtToken, updateToken };

  return (
    <jwtTokenContext.Provider value={jwtTokenValue}>
      {children}
    </jwtTokenContext.Provider>
  );
};

export const jwtTokenContext = createContext(JwtTokenProvider);

export const useJwtTokenContext = () => useContext(jwtTokenContext);

export default JwtTokenProvider;
