import { useContext } from "react";

import { ColorsContext } from '@Util/ColorsContext'


export default function ChangeColor() {
    const { colors, userSelection, updateColor } = useContext(ColorsContext);

    return (
        <div className='changeColor'>
            <label>Change Selected Color:</label>
            <input type="color" onChange={(e) => updateColor(e.target.value)} value={colors[userSelection].code} />
        </div>
    );
}