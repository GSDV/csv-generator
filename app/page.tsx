"use client"

import Title from '@Components/Title'
import Dashboard from '@Components/Dashboard';
import Grid from '@Components/Grid';

import ContextWrapper from '@Util/ContextWrapper';


export default function Home() {
    return (
        <ContextWrapper>
            <Title />
            <Dashboard />
            <Grid />
        </ContextWrapper>
    );
}
