import React, { useEffect, useState } from "react";

import axios from "axios";

export const ApiContext = React.createContext();

const initialState = {
  data: [],
  isLoaded: false,
  cart: [],
  wishlist: []
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const _apiUrl =
      "https://api.musement.com/api/v3/venues/164/activities?limit=6";

    setState({
      ...state,
      isLoaded: false,
    });

    const fetchData = async () => {
      const data = await axios.get(_apiUrl);
      setState({
        ...state,
        data,
        isLoaded: true,
      });
    };
    fetchData();
  };

  return (
    <ApiContext.Provider value={{ state, setState }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ContextProvider;
