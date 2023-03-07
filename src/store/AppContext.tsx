import React, { createContext, useReducer } from 'react';

export interface AppState {
  search?: string;
}

export enum StateActionType {
  UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE'
}

export interface StateAction {
  type: StateActionType
  value: unknown;
}

export const AppContext = createContext<any>(undefined);

const initialState: AppState = {
  search: ''
}

const reducer = (state: AppState, action: StateAction): AppState => {
  switch(action.type) {
    case StateActionType.UPDATE_SEARCH_VALUE: 
      return {...state};
  }

  return state;
}

export const AppContextProvider: React.FC<AppState> = (props: any) => {
  const [state, dispatch] = useReducer(reducer, {...initialState})
  const value = {state, dispatch}

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}