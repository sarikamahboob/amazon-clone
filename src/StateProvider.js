import React, { createContext, useContext, useReducer} from "react";

// Prepare the datalayer
export const StateContext = createContext();

// Wrap our app provide the data layer
export const StateProvider =({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull Information
export const useStateValue = () => useContext(StateContext);