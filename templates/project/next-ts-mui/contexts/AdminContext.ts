import React from "react";

type Context = {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const contextDefault = {
    isLoading: false,
    setIsLoading: () => {}
}

export const AdminContext = React.createContext<Context>(contextDefault as Context)
