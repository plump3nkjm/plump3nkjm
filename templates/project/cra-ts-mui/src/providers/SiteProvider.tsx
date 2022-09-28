import React, {createContext, useReducer} from 'react';

type StateProps = {
    isError: boolean,
    isLoading: boolean,
    validationError: {
        errors:  {[key: string]: Array<string> }
    }
}

type ActionProps = {
    type: string,
    payload: any,
}

type ContextType = {
    state: StateProps;
    dispatch: React.Dispatch<ActionProps>;
};

export const SiteContext = createContext({} as ContextType);

const initialState = {
    isError: false,
    isLoading: false,
    validationError: {
        errors: []
    }
}

const _reducer = (state: StateProps, action: ActionProps) => {
    switch (action.type) {
        case 'CHANGE_IS_ERROR':
            return {
                ...state,
                isError: action.payload
            }
        case 'CHANGE_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'CHANGE_VALIDATION_ERROR':
            return {
                ...state,
                validationError: action.payload
            }
        default :
            return state
    }
}

export const SiteProvider =  ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(_reducer, initialState)
    return (
      <SiteContext.Provider value={{state, dispatch}}>
              {children}
      </SiteContext.Provider>
    )
}
