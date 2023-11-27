import { createContext, useState } from 'react';


interface GridContextProps {
    grid: number[][];
    updateGrid: React.Dispatch<React.SetStateAction<number[][]>>;
    gridWidth: number;
    setWidth: React.Dispatch<React.SetStateAction<number>>;
    gridHeight: number;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
    remakeGrid: (height: number, width: number) => void;
    generateGrid: () => void;
  }
  

export const GridContext = createContext<GridContextProps>({
    grid: [],
    updateGrid: () => {},
    gridWidth: 0,
    setWidth: () => {},
    gridHeight: 0,
    setHeight: () => {},  
    remakeGrid: (height: number, width: number) => {},
    generateGrid: () => {}
});

export const GridProvider = ({ children }: { children: React.ReactNode }) => {
    const [gridWidth, setWidth] = useState(20);
    const [gridHeight, setHeight] = useState(15);

    let initGrid: number[][] = [];
    for (let r=0; r<gridHeight; r++) {
        initGrid.push([]);
        for (let c=0; c<gridWidth; c++) initGrid[r].push(0);
    }
    const [grid, updateGrid] = useState<number[][]>(initGrid);


    const remakeGrid = (height: number, width: number) => {
        let newGrid: number[][] = [];
        for (let r=0; r<height; r++) {
            newGrid.push([]);
            for (let c=0; c<width; c++) {
                if (r>=gridHeight || c>=gridWidth) newGrid[r].push(0);
                else newGrid[r].push( grid[r][c] );
            }
        }
        updateGrid(newGrid);
        setHeight(height);
        setWidth(width);
    }


    const generateGrid = () => {
        let csvText = ``;
        for (let r=0; r<gridHeight; r++) {
            for (let c=0; c<gridWidth; c++) {
                csvText += `${grid[r][c]},`;
            }
            csvText = csvText.substring(0, csvText.length-1);
            csvText += `\n`;
        }
        csvText = csvText.substring(0, csvText.length-1);

        const blob = new Blob([csvText], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        const csvEle = document.createElement('a');
        csvEle.setAttribute('href', url);
        csvEle.setAttribute('download', 'download.csv');
        csvEle.click();
    }


    return (
        <GridContext.Provider value={{ grid, updateGrid, gridWidth, setWidth, gridHeight, setHeight, remakeGrid, generateGrid }}>
            {children}
        </GridContext.Provider>
    );
};
