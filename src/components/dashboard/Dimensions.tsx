import { useContext } from 'react';

import { GridContext } from '@Util/GridContext'

export default function Dimensions() {
    const { gridWidth, gridHeight, remakeGrid } = useContext(GridContext);

    return (
    <div className='dimension'>
        <div>
            <label>Width: </label>
            <input onInput={ (e) => remakeGrid(gridHeight, Number(e.currentTarget.value)) } type="number" min="1" value={gridWidth}></input>
        </div>
        
        <div>
            <label>Height: </label><input onInput={ (e) => remakeGrid(Number(e.currentTarget.value), gridWidth) } type="number" min="1" value={gridHeight}></input>
        </div>
    </div>
    );
}