"use context"

import { useContext, useState } from 'react';

import { ColorsContext } from '@Util/ColorsContext'
import { GridContext } from '@Util/GridContext';

import '@Styles/grid.css'



export default function Grid() {
    const { grid } = useContext(GridContext);
    const [isMouseDown, setMouseDown] = useState<boolean>(false);


    return (
        <div className='gridWrapper'>
        <div className='grid'
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseLeave={() => setMouseDown(false)}
        >
            { grid.map((row, r) => (
                <div key={r} className='gridRow'>
                    { row.map((num, c) => (
                        <GridItem 
                        key={`${r}-${c}--${grid[r][c]}`} 
                        isMouseDown={isMouseDown} 
                        num={num} 
                        r={r} 
                        c={c} 
                        />
                    ))}
                </div>
            ))}
        </div>
        </div>
    );
}




interface GridItemProps {
    num: number,
    r: number,
    c: number,
    isMouseDown: boolean
}

function GridItem({ num, isMouseDown, r, c }: GridItemProps) {
    const { colors, userSelection } = useContext(ColorsContext);
    const [colorIdx, setColorIdx] = useState<number>(num);

    const { grid, updateGrid } = useContext(GridContext);

    const handleUpdating = () => {
        let updatedGrid = grid.map(row => [...row]);
        updatedGrid[r][c] = userSelection;
        updateGrid(updatedGrid);
    }

    const handleClick = () => {
        setColorIdx(userSelection);
        handleUpdating();
    }

    return (
        <div 
        onMouseDown={handleClick} 
        onMouseEnter={() => { if (isMouseDown) handleClick(); }} 
        className='gridItem' style={{ backgroundColor: colors[colorIdx].code }}
        >
            {colorIdx}
        </div>
    );
}