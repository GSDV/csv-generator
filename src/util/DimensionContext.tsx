"use client"

import { createContext, useState } from 'react';


interface DimensionContextProps {
    gridWidth: number;
    setWidth: React.Dispatch<React.SetStateAction<number>>;
    gridHeight: number;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
  }
  

export const DimensionContext = createContext<DimensionContextProps>({
    gridWidth: 0,
    setWidth: () => {},
    gridHeight: 0,
    setHeight: () => {},  
});

export const DimensionsProvider = ({ children }: { children: React.ReactNode }) => {
    const [gridWidth, setWidth] = useState(50);
    const [gridHeight, setHeight] = useState(20);
  
    return (
        <DimensionContext.Provider value={{ gridWidth, setWidth, gridHeight, setHeight }}>
            {children}
        </DimensionContext.Provider>
    );
};
