import { useContext } from 'react';

import Dimensions from '@Components/dashboard/Dimensions';
import ColorList from '@Components/dashboard/Colors'
import ChangeColor from '@Components/dashboard/ChangeColor'
import { GridContext } from '@Util/GridContext';

import '@Styles/dashboard.css'



export default function Dashboard() {
    const { generateGrid } = useContext(GridContext);

    return (
        <div className='dashboard'>
            <div className='dashboardSection'>
                <Dimensions />
                <ColorList />
                <ChangeColor />
            </div>
            <div className='dashboardSection'>
                <div className='generateButton' onClick={() => generateGrid()}>Generate and Download CSV File</div>
            </div>
        </div>
    );
}
