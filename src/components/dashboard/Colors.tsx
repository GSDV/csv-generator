import React from 'react';
import { useContext } from 'react';

import { ColorsContext } from '@Util/ColorsContext'
import { GridContext } from '@Util/GridContext'


export default function Colors() {
    const { colors, makeColor, removeColor } = useContext(ColorsContext);
    const { grid, gridWidth, gridHeight, updateGrid } = useContext(GridContext);

    const removeColorHandler = () => {
        removeColor();
        
        let newGrid: number[][] = [];
        for (let r=0; r<gridHeight; r++) {
            newGrid.push([]);
            for (let c=0; c<gridWidth; c++) {
                if (grid[r][c]==colors.length-1) newGrid[r].push( 0 );
                else newGrid[r].push( grid[r][c] );
            }
        }
        updateGrid(newGrid);
    }


    return (
        <div className='colorWrapper'>
            <div className='manageColors'>
                <div className='manageColorsButton' onClick={() => makeColor()}>Add Color</div>
                { colors.length<=2 ?
                    <div className='manageColorsButton disabledButton'>Remove Color</div>
                :
                    <div className='manageColorsButton' onClick={() => removeColorHandler()}>Remove Color</div>
                }
            </div>
            <ColorList />
        </div>
    );
}


function ColorList() {
    const { colors, userSelection, setSelection } = useContext(ColorsContext);

    return (
        <div className='colorList'>
            { colors.map((ele, i) => {
                return (
                    <React.Fragment key={i}> { (userSelection==i) ?
                        <div key={i} onClick={() => setSelection(i)} className='colorItem selectedColor'>
                            <div>{ i }</div>
                            <div style={{ backgroundColor: ele.code }}></div>
                        </div>
                        :
                        <div key={i} onClick={() => setSelection(i)} className='colorItem'>
                            <div>{ i }</div>
                            <div style={{ backgroundColor: ele.code }}></div>
                        </div>
                    } </React.Fragment>
                );
            }) }
        </div>
    );
}